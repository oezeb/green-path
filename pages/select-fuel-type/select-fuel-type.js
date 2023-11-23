Page({
  data: {
    items: [
      { value: 'Roundtrip', checked: true },
      { value: 'One-way', checked: false },
    ],
    fuelTypes: ["Biodiesel", "Biogas", "Diesel", "E10(Ethanol)", "E85(Ethanol)", "Electric"],
    currentFuelType: 0,
  },
  
  toggleRadio(e) {
    const { value } = e.target.dataset;
    const items = this.data.items.map(item => ({
      ...item,
      checked: item.value === value,
    }));

    this.setData({
      items,
    });
  },

  onFuelTypeChange(e) { 
    this.setData({
      currentFuelType: Number(e.detail.value),
    });
  },

  onTapCalculate() {
    my.navigateTo({ url: "/pages/congrat/congrat" })
  }
});
