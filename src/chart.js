import React from "react"
import { Line } from "react-chartjs-2"
import { Chart, CategoryScale, LinearScale, PointElement, LineElement } from "chart.js"

Chart.register(CategoryScale, LinearScale, PointElement, LineElement)

// Aim: The graph should plot the count of users that remain after the filters, bucketed by their month of birth (the "monthly" line). A second line (labelled "cumulative" in the diagram above) should show the accumulated cost over the course of the year if every one of those users was given (and redeemed) a $5 discount. So if the "monthly" line was plotted at 10 and 12 for January and February, for example, the "cumulative" line would be plotted at $50 and $110 (22 × $5).

// So users line shows how many users are left in that month (after filtering)
// Cumulative spend line shows the cumulative cost of the discounts

// X axis is just the months

// Potentially have 2 y axis (left + right) for clearer reading as cumilative values should be much higher
const ResponsiveChart = ({ users }) => {

  const monthlyUsers = Array(12).fill(0);
  users.forEach(user => monthlyUsers[user.birthday - 1]++);

  const cumulativeCost = []
  let runningTotal = 0
  for (let i = 0; i < monthlyUsers.length; i++) {
    runningTotal = runningTotal + (monthlyUsers[i] * 5)
    cumulativeCost.push(runningTotal)
  }

  // Define the charts data
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        data: monthlyUsers,
        label: "users",
        borderColor: "blue",
        backgroundColor: "blue",
        yAxisID: "y2"
      },
      {
        data: cumulativeCost,
        label: "cost",
        borderColor: "red",
        backgroundColor: "red",
        yAxisID: "y1"
      }
    ]
  }

  // Define chart options (title, legends..)

  // Return chart with the LINE component
  return <Line data={data} />

}

export default ResponsiveChart
