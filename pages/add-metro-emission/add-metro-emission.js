// https://opendocs.alipay.com/mini/component/map?pathHash=c9886630
// https://opendocs.alipay.com/mini/api?pathHash=5b4d0c83
// https://opendocs.alipay.com/mini/006lf1?pathHash=e22753f6

Page({
  data: {},
  
  onShow() {
    const authGuideLocation = async () => {
      const myGetSystemInfo = () => {
        return new Promise((resolve, reject) => {
          my.getSystemInfo({
            success: resolve,
            fail: reject
          });
        });
      };

      const myGetSetting = () => {
        return new Promise((resolve, reject) => {
          my.getSetting({
            success: resolve,
            fail: reject
          });
        });
      };

      const myOpenSetting = () => {
        return new Promise((resolve, reject) => {
          my.openSetting({
            success: resolve,
            fail: reject
          });
        });
      };

      const myAlert = (content) => {
        return new Promise((resolve, reject) => {
          my.alert({
            content,
            success: resolve,
            fail: reject
          });
        });
      };

      const isLocationEnabled = async () => {
        const systemInfo = await myGetSystemInfo();
        return !!(systemInfo.locationEnabled && systemInfo.locationAuthorized);
      };

      const showAuthGuideIfNeeded = async () => {
        if (!(await isLocationEnabled())) {
          my.showAuthGuide({
            authType: "LBS"
          });
          return false;
        }
        return true;
      };

      const isLocationMPAuthorized = async () => {
        const settingInfo = await myGetSetting();
        return settingInfo.authSetting.location === undefined || settingInfo.authSetting.location;
      };

      const requestLocationPermission = async () => {
        await myAlert("The app needs to access your location");
        const openSettingInfo = await myOpenSetting();
        return openSettingInfo.authSetting.location;
      };

      try {
        if (!(await showAuthGuideIfNeeded())) {
          return false;
        }
        if (await isLocationMPAuthorized()) {
          return true;
        }
        if (await requestLocationPermission()) {
          return true;
        }
        return false;
      } catch (error) {
        console.error(error);
        return false;
      }
    };

    authGuideLocation().then(res => {
      if (res === true) {
        my.getLocation({
          type: 1,
          success: (res) => {
            this.setData({
              ...this.data,
              // latitude: Number(res.latitude),
              // longitude: Number(res.longitude)
            })
          },
          fail: (error) => {
            console.error('Failed to get location: ', JSON.stringify(error));
          },
        });
      }
    });
  },
  
  onReady(e) {
    const mapCtx = my.createMapContext('map');
    mapCtx.showsCompass({ isShowsCompass: 1})
  },

  onTapCalculate() {
    my.navigateTo({ url: "/pages/congrat/congrat" });
  },

  onTapFrom() {
    const success = (from) => this.setData({ ...this.data, from });

    my.chooseLocation({
      success,
      fail: (err) => {
        console.log(err);
      }
    });
  },

  onTapTo() {    
    const success = (to) => this.setData({ ...this.data, to });

    my.chooseLocation({
      success,
      fail: (err) => {
        console.log(err);
      }
    }); 
  }
})
