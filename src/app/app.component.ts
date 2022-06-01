import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'treemapChart';

  constructor() {

  }

  ngOnInit(): void {

    // var myChart = new Chart(ctx, {
    //   type: 'treemap',
    //   data: {
    //     datasets: [{
    //       label: 'Basic treemap',
    //       tree: [6, 6, 5, 4, 3, 2, 2, 1],
    //       fontColor: '#000',
    //       fontFamily: 'serif',
    //       fontSize: 12,
    //       fontStyle: 'normal',
    //       backgroundColor: function (ctx) {
    //         var value = ctx.dataset.data[ctx.dataIndex];
    //         var alpha = (value + 3) / 10;
    //         return Color('blue').alpha(alpha).rgbString();
    //       }
    //     }]
    //   },
    // });

    var myChart = new Chart('ctx', {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }
}
