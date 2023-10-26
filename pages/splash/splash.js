Page({
  data: {
    items: [
      {
        title: "What is carbon footprint?",
        image: "../../assets/foot-co2.png",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam molestie pharetra magna eget egestas.",
      },
      {
        title: "What do we do?",
        image: "../../assets/foot-co2.png",
        description:
          "Second Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam molestie pharetra magna eget egestas.",
      },
    ],
  },

  onLoad() {
    this.onItemChanged(0);
  },

  onItemChanged(index) {
    const item = this.data.items[index];
    this.setData({ ...this.data, item });
  },

  onSwiperChange(e) {
    this.onItemChanged(e.detail.current);
  },

  onTapNext() {},
});
