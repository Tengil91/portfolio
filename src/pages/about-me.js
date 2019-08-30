import React from "react"
import { Doughnut, Bar, Radar } from 'react-chartjs-2';
import BlogPage from '../components/blogpage';
export default () => (
  <BlogPage headerImgUrl="tengil.png" pageTitle="Me" headerDescription="In numbers">
    <div style={{width: "100%"}}>
      <Doughnut
      options={{maintainAspectRatio: false, responsive: true}}
      data={{
        title: "test",
        labels: ["Laying", "Sitting", "Walking", "Running", "Cycling"],
        datasets: [
          {
            label: "Amount of time in diffrent stances",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: [11,10,1.5,0.5,1]
          }
        ]
      }} />
      </div>
      <div style={{width: "100%"}}>
        <Bar 
        options={{maintainAspectRatio: false, responsive: true}}
        data={{
          labels: ["Toes", "Fingers", "Tonsils", "Appendicitis", "Feets"],
          datasets: [
            {
              label: "Some of my parts",
              backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
              data: [10,10,0,0,2]
            }
          ]}}
        />
        </div>
      <div style={{width: "100%"}}>
      <Radar
        options={{maintainAspectRatio: false, responsive: true, 
          scale: {
              ticks: {
                  max: 10,
                  beginAtZero: true
              }
          }}}
        data={{
          labels: ["HTML", "CSS", "JS", "Graphics", "Node"],
          datasets: [{
              data: [8, 7, 8, 3, 3],
              backgroundColor: '#0000ff77',
              label: 'mina skilz'
          }]
        }}
      />
      </div>
  </BlogPage>
)