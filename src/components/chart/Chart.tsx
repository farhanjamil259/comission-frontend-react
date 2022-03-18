import React, { useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const days = Array.from({ length: 10 }, (_, i) => i + 1);

const Chart = (): React.ReactElement => {
  const initialOptions: Highcharts.Options = {
    chart: {
      backgroundColor: "#28293D",
      borderRadius: 16,
      width: 900,
      // styledMode: true,
    },
    legend: {
      enabled: true,
      layout: "vertical",
      align: "right",
      verticalAlign: "top",
      itemMarginTop: 36,
      itemStyle: {
        color: "#fff",
      },
    },
    title: {
      text: "Monthly Performance",
      align: "left",
      style: {
        color: "#fff",
      },
    },
    xAxis: {
      categories: days.map((d) => d.toString()),
      gridLineWidth: 1,
      gridLineColor: "#555770",
      gridLineDashStyle: "Dash",
    },
    yAxis: {
      min: 0,
      gridLineColor: "#555770",
      gridLineDashStyle: "Dash",
    },

    plotOptions: {
      series: {
        events: {
          mouseOver: function () {
            console.log(this.chart.xAxis[0]);
          },
        },
        pointPlacement: "on",
      },
      areaspline: {
        color: "#FDDD48",
        fillColor: {
          linearGradient: {
            x1: 1,
            y1: 0,
            x2: 1,
            y2: 1,
          },
          stops: [
            [0, "#fddc4833"],
            [1, "#00b7c433"],
          ],
        },
      },
    },
    series: [
      {
        type: "areaspline",
        data: [1, 2, 3, 2],
      },
    ],
  };

  const [chartOptions, _setChartOptions] =
    useState<Highcharts.Options>(initialOptions);

  return (
    <div className="igs-chart-container">
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    </div>
  );
};

export default Chart;
