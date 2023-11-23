Page({
  onTapWalk_Run() {
    my.navigateTo({ url: "/pages/add-walk-emission/add-walk-emission" });
  },
  onTapBike() {
    my.navigateTo({ url: "/pages/bicycle/bicycle" });
  },
  onTapMotocycle() {
    my.navigateTo({ url: "/pages/calculate-motorbike-emission/calculate-motorbike-emission" });
  },
  onTapCar() {
    my.navigateTo({ url: "/pages/select-fuel-type/select-fuel-type" });
  },
  onTapMetro() {
    my.navigateTo({ url: "/pages/add-metro-emission/add-metro-emission" });
  },
  onTapFlight() {
    my.navigateTo({ url: "/pages/type-of-transportation/type-of-transportation" });
  },
})