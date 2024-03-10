const mainGraph = document.querySelector(".mainGraph");

function generateRandomData() {
  return Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));
}

// Create the chart
var ctx = mainGraph.getContext("2d");
var myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    datasets: [
      {
        label: "Humidity",
        data: generateRandomData(),
        borderColor: "#DB4646",
        borderWidth: 2,
        backgroundColor: "#DB4646",
      },
      {
        label: "Temperature",
        data: generateRandomData(),
        borderColor: "#3AB0FF",
        borderWidth: 2,
        backgroundColor: "#3AB0FF",
      },
    ],
  },
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  },
});
