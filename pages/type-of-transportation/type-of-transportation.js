Page({
  data: {
    flightTypes: ["Round Trip", "One-way"],
    currentType: 0
  },

  radioChange(e) {
    this.setData({ currentType: Number(e.detail.value) });
  },

  onTapCalculate() {
    my.navigateTo({ url: "/pages/congrat/congrat" });
  }
});

