Page({
  onLoad() {
    const ctx = my.createCanvasContext('co2PieChart');

    // Data for CO2 emissions and labels
    const data = [
      { label: 'Motor', value: 20, color: '#4CAF50' }, // Green
      { label: 'Car', value: 15, color: '#2196F3' },   // Blue
      { label: 'Walk', value: 25, color: '#F44336' },  // Red
      { label: 'Metro', value: 30, color: '#FFC107' }, // Yellow
      { label: 'Flight', value: 10, color: '#9C27B0' }, // Purple
    ];

    const total = data.reduce((acc, item) => acc + item.value, 0);
    let startAngle = 0;

    // Draw the pie chart
    data.forEach((item) => {
      const endAngle = (Math.PI * 2 * item.value) / total + startAngle;

      // Draw the pie chart segment
      ctx.beginPath();
      ctx.moveTo(150, 150);
      ctx.arc(150, 150, 150, startAngle, endAngle);
      ctx.setFillStyle(item.color);
      ctx.fill();
      ctx.closePath();

      // Calculate and draw the percentage inside the pie chart segment
      const percentage = ((item.value / total) * 100).toFixed(1) + '%';
      const labelX = 150 + 90 * Math.cos((startAngle + endAngle) / 2);
      const labelY = 150 + 90 * Math.sin((startAngle + endAngle) / 2);
      ctx.setFillStyle('white');
      ctx.setFontSize(18);
      ctx.font = 'bold 18px sans-serif'; // Make the text bold
      ctx.fillText(percentage, labelX - 20, labelY);
      ctx.setFontSize(18);
      ctx.font = 'bold 18px sans-serif'; // Make the text bold
      ctx.fillText(item.label, labelX - 20, labelY + 20);

      startAngle = endAngle;
    });

    ctx.draw();
  },



  goToReport() {
    my.navigateTo({
      url: '/pages/report/report', // The URL of the "report" page
    });
  },

  goToChooseTransport() {
    my.navigateTo({
      url: '/pages/transport/transport', // The URL of the "choose transport" page
    });
  },
});



