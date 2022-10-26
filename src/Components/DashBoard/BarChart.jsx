import React from 'react'
import {Bar} from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto'

function BarChart() {
  return (


    <div style={{height:"90vh", width:"40vw",position:"relative" , padding:"3%"}}>
  <Bar 

    data={{
        labels: ['Jun', 'Jul', 'Aug'],
        datasets: [
          {
            id: 1,
            label: '',
            data: [5, 6, 7],
            backgroundColor: 'rgba(255, 99, 132, 0.5)'
          },
          {
            id: 2,
            label: '',
            data: [3, 2, 1],
            backgroundColor: 'rgba(53, 162, 235, 0.5)'
          },
        ],
      }}    
         /> 


</div>

  )
}

export default BarChart