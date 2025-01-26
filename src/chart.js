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
        label: "users",
        borderColor: "blue",
        backgroundColor: "blue",
        yAxisID: "y1"
      },
      {
        data: cumulativeCost,
        label: "cost",
        borderColor: "red",
        backgroundColor: "red",
        yAxisID: "y2"
      }
    ]
  }

  const options = {
    responsive: true,
    scales: {
      y1: {
        type: "linear",
        position: "right",
      },
      y2: {
        type: "linear",
        position: "left",
      }
    }
  };

  return <Line data={data} options={options} />

}

export default ResponsiveChart
