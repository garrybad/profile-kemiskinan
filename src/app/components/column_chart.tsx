"use client"
import { useLayoutEffect } from 'react';
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

function ColumnChart() {
    useLayoutEffect(() => {
        let root = am5.Root.new("column-chart");

        // Set themes
        // https://www.amcharts.com/docs/v5/concepts/themes/
        root.setThemes([
            am5themes_Animated.new(root)
        ]);

        // Create chart
        // https://www.amcharts.com/docs/v5/charts/xy-chart/
        let chart = root.container.children.push(am5xy.XYChart.new(root, {
            panX: false,
            panY: false,
            paddingLeft: 0,
            wheelX: "panX",
            wheelY: "zoomX",
            layout: root.verticalLayout
        }));

        // Add legend
        // https://www.amcharts.com/docs/v5/charts/xy-chart/legend-xy-series/
        let legend = chart.children.push(
            am5.Legend.new(root, {
                centerX: am5.p50,
                x: am5.p50
            })
        );

        let data = [
            {
                "date": "Sep 2012",
                "total": 28.71,
                "persentase": 11.66
            }, 
            {
                "date": "Mar 2013",
                "total": 28.17,
                "persentase": 11.36
            }, 
            {
                "date": "Sep 2013",
                "total": 28.6,
                "persentase": 11.46
            },
            {
                "date": "Mar 2014",
                "total": 28.28,
                "persentase": 11.25
            },
            {
                "date": "Sep 2014",
                "total": 27.73,
                "persentase": 10.96
            },
            {
                "date": "Mar 2015",
                "total": 28.59,
                "persentase": 11.22
            },
            {
                "date": "Sep 2015",
                "total": 28.51,
                "persentase": 11.13
            },
            {
                "date": "Mar 2016",
                "total": 28.01,
                "persentase": 10.86
            },
            {
                "date": "Sep 2016",
                "total": 27.76,
                "persentase": 10.7
            },
            {
                "date": "Mar 2017",
                "total": 27.77,
                "persentase": 10.64
            },
            {
                "date": "Sep 2017",
                "total": 26.58,
                "persentase": 10.12
            },
            {
                "date": "Mar 2018",
                "total": 25.95,
                "persentase": 9.82
            },
            {
                "date": "Sep 2018",
                "total": 25.67,
                "persentase": 9.66
            },
            {
                "date": "Mar 2019",
                "total": 25.14,
                "persentase": 9.41
            },
            {
                "date": "Sep 2019",
                "total": 24.78,
                "persentase": 9.22
            },
            {
                "date": "Mar 2020",
                "total": 26.42,
                "persentase": 9.78
            },
            {
                "date": "Sep 2020",
                "total": 27.55,
                "persentase": 10.19
            },
            {
                "date": "Mar 2021",
                "total": 27.54,
                "persentase": 10.14
            },
            {
                "date": "Sep 2021",
                "total": 26.5,
                "persentase": 9.71
            },
            {
                "date": "Mar 2022",
                "total": 26.16,
                "persentase": 9.54
            },
            {
                "date": "Sep 2022",
                "total": 26.36,
                "persentase": 9.57
            },
            {
                "date": "Mar 2023",
                "total": 25.90,
                "persentase": 9.36
            },
        ]

        // Create axes
        // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
        let xRenderer = am5xy.AxisRendererX.new(root, {
            // cellStartLocation: 0.1,
            // cellEndLocation: 0.9,
            // minorGridEnabled: true
            minorGridEnabled: true,
            minGridDistance: 60
        })

        let xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
            categoryField: "date",
            renderer: xRenderer,
            tooltip: am5.Tooltip.new(root, {})
        }));

        xRenderer.grid.template.setAll({
            location: 1
        })

        xAxis.data.setAll(data);

        let yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
            min: 0,
            extraMax: 0.1,
            renderer: am5xy.AxisRendererY.new(root, {
                strokeOpacity: 0.1
            })
        }));

        let series1 = chart.series.push(am5xy.ColumnSeries.new(root, {
            name: "Jumlah Penduduk Miskin",
            xAxis: xAxis,
            yAxis: yAxis,
            valueYField: "total",
            categoryXField: "date",
            tooltip: am5.Tooltip.new(root, {
                pointerOrientation: "horizontal",
                labelText: "{name} pada {categoryX} : {valueY} Juta"
            })
        }));

        series1.columns.template.setAll({
            // tooltipText: "{name}, {categoryX}:{valueY}",
            // width: am5.percent(90),
            tooltipY: am5.percent(10),
            templateField: "columnSettings"
            // strokeOpacity: 0
        });

        series1.data.setAll(data);

        // Make stuff animate on load
        // https://www.amcharts.com/docs/v5/concepts/animations/

        let series2 = chart.series.push(
            am5xy.LineSeries.new(root, {
              name: "Persentase Penduduk Miskin",
              xAxis: xAxis,
              yAxis: yAxis,
              valueYField: "persentase",
              categoryXField: "date",
            //   fill: am5.color('#000000'),
            //   stroke: am5.color('#000000'),
              tooltip: am5.Tooltip.new(root, {
                pointerOrientation: "horizontal",
                labelText: "{name} pada {categoryX} : {valueY}%"
              })
            })
        );
          
        series2.strokes.template.setAll({
            strokeWidth: 3,
            // stroke: am5.color('#000')
            templateField: "strokeSettings"
        });
          
        series2.data.setAll(data);
        
        series2.bullets.push(function () {
            return am5.Bullet.new(root, {
                sprite: am5.Circle.new(root, {
                    strokeWidth: 3,
                    stroke: series2.get("stroke"),
                    radius: 5,
                    fill: root.interfaceColors.get("background")
                    // fill: am5.color('#000000'),
                    // stroke: am5.color('#000000'),
                })
            });
        });

        chart.set("cursor", am5xy.XYCursor.new(root, {}));

        legend.data.push(series1);

        // Make stuff animate on load
        // https://www.amcharts.com/docs/v5/concepts/animations/
        chart.appear(1000, 100);
        series1.appear();

        return () => {
            root.dispose();
        };
    }, []);

  return (
    <div id="column-chart" style={{ width: "100%", height: "500px" }}></div>
  )
}

export default ColumnChart