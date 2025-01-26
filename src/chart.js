import React from "react"
import { Line } from "react-chartjs-2"
import { Chart, CategoryScale, LinearScale, PointElement, LineElement } from "chart.js"

Chart.register(CategoryScale, LinearScale, PointElement, LineElement)

const ResponsiveChart = ({ users }) => {

  const monthlyUsers = Array(12).fill(0);
  users.forEach(user => monthlyUsers[user.birthday - 1]++);

  const cumulativeCost = []
  let runningTotal = 0
  for (let i = 0; i < monthlyUsers.length; i++) {
    runningTotal = runningTotal + (monthlyUsers[i] * 5)
    cumulativeCost.push(runningTotal)
  }

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        data: monthlyUsers,
        label: "Users per Month",
        borderColor: "blue",
        backgroundColor: "blue",
        pointRadius: 3,
        yAxisID: "y1"
      },
      {
        data: cumulativeCost,
        label: "Cumulative Cost",
        borderColor: "red",
        backgroundColor: "red",
        pointRadius: 3,
        yAxisID: "y2"
      }
    ]
  }

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: {
        display: true,
        text: "User Count & Cumulative Cost Over Time",
      },
      tooltip: {
        mode: "index",
        intersect: false,
      }
    },
    scales: {
      y1: {
        type: "linear",
        position: "right",
        title: {
          display: true,
          text: "Users Count"
        },
      },
      y2: {
        type: "linear",
        position: "left",
        title: {
          display: true,
          text: "Cumulative Cost"
        },
      },
      x: {
        title: {
          display: true,
          text: "Month"
        },
      },
    }
  };

  return <Line data={data} options={options} />

}

export default ResponsiveChart
