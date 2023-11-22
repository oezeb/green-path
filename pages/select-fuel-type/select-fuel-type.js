Page({
  data: {
    items: [
      { value: 'Roundtrip', checked: true },
      { value: 'One-way', checked: false },
    ],
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
});
