Page({
  data: {
    tabs: ["TOTAL", "WALK", "BIKE", "CAR", "MOTOR", "METRO", "FLIGHT"],
    currentTab: 0,
    currentDate: new Date(),
    chartStacked: false,
    co2value: 1000,
  },

  onLoad() {
    this.setData({
      ...this.data,
      dateRange: {
        start: this.firstDayOfWeek(this.data.currentDate),
        end: this.lastDayOfWeek(this.data.currentDate),
      },
    });
    this.onTabTap({ currentTarget: { id: 0 } });
  },

  onTabTap(e) {
    const currentTab = Number(e.currentTarget.id);
    const chartStacked = currentTab == 0;
    const chartData = chartStacked
      ? [
          { value: 50, day: "MON", color: "#14A42B", type: "WALK" },
          { value: 35, day: "TUE", color: "#14A42B", type: "WALK" },
          { value: 40, day: "WED", color: "#14A42B", type: "WALK" },
          { value: 38, day: "THU", color: "#14A42B", type: "WALK" },
          { value: 40, day: "FRI", color: "#14A42B", type: "WALK" },
          { value: 45, day: "SAT", color: "#14A42B", type: "WALK" },
          { value: 30, day: "SUN", color: "#14A42B", type: "WALK" },

          { value: 50, day: "MON", color: "#444E4D", type: "BIKE" },
          { value: 35, day: "TUE", color: "#444E4D", type: "BIKE" },
          { value: 40, day: "WED", color: "#444E4D", type: "BIKE" },
          { value: 38, day: "THU", color: "#444E4D", type: "BIKE" },
          { value: 40, day: "FRI", color: "#444E4D", type: "BIKE" },
          { value: 45, day: "SAT", color: "#444E4D", type: "BIKE" },
          { value: 30, day: "SUN", color: "#444E4D", type: "BIKE" },

          { value: 50, day: "MON", color: "#EB5757", type: "CAR" },
          { value: 35, day: "TUE", color: "#EB5757", type: "CAR" },
          { value: 40, day: "WED", color: "#EB5757", type: "CAR" },
          { value: 38, day: "THU", color: "#EB5757", type: "CAR" },
          { value: 40, day: "FRI", color: "#EB5757", type: "CAR" },
          { value: 45, day: "SAT", color: "#EB5757", type: "CAR" },
          { value: 30, day: "SUN", color: "#EB5757", type: "CAR" },

          { value: 50, day: "MON", color: "#046914", type: "MOTOR" },
          { value: 35, day: "TUE", color: "#046914", type: "MOTOR" },
          { value: 40, day: "WED", color: "#046914", type: "MOTOR" },
          { value: 38, day: "THU", color: "#046914", type: "MOTOR" },
          { value: 40, day: "FRI", color: "#046914", type: "MOTOR" },
          { value: 45, day: "SAT", color: "#046914", type: "MOTOR" },
          { value: 30, day: "SUN", color: "#046914", type: "MOTOR" },

          { value: 50, day: "MON", color: "#EF9E00", type: "METRO" },
          { value: 35, day: "TUE", color: "#EF9E00", type: "METRO" },
          { value: 40, day: "WED", color: "#EF9E00", type: "METRO" },
          { value: 38, day: "THU", color: "#EF9E00", type: "METRO" },
          { value: 40, day: "FRI", color: "#EF9E00", type: "METRO" },
          { value: 45, day: "SAT", color: "#EF9E00", type: "METRO" },
          { value: 30, day: "SUN", color: "#EF9E00", type: "METRO" },

          { value: 50, day: "MON", color: "#7A4388", type: "FLIGHT" },
          { value: 35, day: "TUE", color: "#7A4388", type: "FLIGHT" },
          { value: 40, day: "WED", color: "#7A4388", type: "FLIGHT" },
          { value: 38, day: "THU", color: "#7A4388", type: "FLIGHT" },
          { value: 40, day: "FRI", color: "#7A4388", type: "FLIGHT" },
          { value: 45, day: "SAT", color: "#7A4388", type: "FLIGHT" },
          { value: 30, day: "SUN", color: "#7A4388", type: "FLIGHT" },
        ]
      : [
          { value: 280, day: "MON", color: "#14A42B" },
          { value: 0, day: "TUE", color: "#8C8C8C" },
          { value: 100, day: "WED", color: "#444E4D" },
          { value: 310, day: "THU", color: "#EB5757" },
          { value: 380, day: "FRI", color: "#046914" },
          { value: 405, day: "SAT", color: "#EF9E00" },
          { value: 30, day: "SUN", color: "#7A4388" },
        ];

    this.setData({
      ...this.data,
      chartStacked,
      chartData,
      currentTab,
      test: `test ${currentTab}`,
    });
  },

  firstDayOfWeek(date) {
    const _date = new Date(date.getTime());
    const day = _date.getDay() || 7;
    _date.setDate(_date.getDate() + 1 - day);
    return `${_date.getFullYear()}/${_date.getMonth() + 1}/${_date.getDate()}`;
  },

  lastDayOfWeek(date) {
    const _date = new Date(date.getTime());
    const day = _date.getDay() || 7;
    _date.setDate(_date.getDate() + 7 - day);
    return `${_date.getFullYear()}/${_date.getMonth() + 1}/${_date.getDate()}`;
  },

  nextWeek() {
    const currentDate = this.data.currentDate;
    currentDate.setDate(currentDate.getDate() + 7);
    this.setData({
      ...this.data,
      currentDate,
      dateRange: {
        start: this.firstDayOfWeek(currentDate),
        end: this.lastDayOfWeek(currentDate),
      },
    });
  },

  prevWeek() {
    const currentDate = this.data.currentDate;
    currentDate.setDate(currentDate.getDate() - 7);
    this.setData({
      ...this.data,
      currentDate,
      dateRange: {
        start: this.firstDayOfWeek(currentDate),
        end: this.lastDayOfWeek(currentDate),
      },
    });
  },

  onInitChart(F2, config) {
    const chart = new F2.Chart(config);
    const data = this.data.chartData;
    chart.source(data);
    if (this.data.chartStacked)
      chart.interval().position("day*value").adjust("stack");
    else chart.interval().position("day*value");
    chart.render();
    return chart;
  },
});
