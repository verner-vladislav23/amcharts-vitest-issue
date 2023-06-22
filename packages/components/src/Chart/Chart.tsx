import React, { useRef, useLayoutEffect } from "react";

import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';

export const Chart = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!chartRef.current) {
      return;
    }

    const chart = am4core.create(chartRef.current, am4charts.XYChart);

    chart.data = [
      {
        date: new Date(2018, 0, 1),
        value: 450,
        value2: 362,
        value3: 699,
      },
      {
        date: new Date(2018, 0, 2),
        value: 269,
        value2: 450,
        value3: 841,
      },
    ];

    var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.grid.template.location = 0;
    dateAxis.renderer.minGridDistance = 30;

    function createSeries(field: string, name: string) {
      var series = chart.series.push(new am4charts.LineSeries());
      series.dataFields.valueY = field;
      series.dataFields.dateX = "date";
      series.name = name;
      series.tooltipText = "{dateX}: [b]{valueY}[/]";
      series.strokeWidth = 2;

      var bullet = series.bullets.push(new am4charts.CircleBullet());
      bullet.circle.stroke = am4core.color("#fff");
      bullet.circle.strokeWidth = 2;

      return series;
    }

    createSeries("value", "Series #1");
  }, []);

  return (
    <div ref={chartRef} style={{ width: 200, height: 200 }} />
  );
};
