Page({
  data: {
    user: { name: "Mandy", carbonValue: 1000 },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam molestie pharetra magna eget egestas. ",
  },

  onTapCurrentEmission() {
    my.navigateTo({ url: "/pages/piechart/piechart" })
  },
  onTapAddEmission() {
    my.navigateTo({ url: "/pages/transport/transport" })
  },
});
