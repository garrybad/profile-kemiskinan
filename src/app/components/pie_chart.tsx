"use client"
import { useLayoutEffect } from 'react';
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import * as am5percent from "@amcharts/amcharts5/percent";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

function PieChart() {

    useLayoutEffect(() => {
        let root = am5.Root.new("pie-chart");

        // Set themes
        // https://www.amcharts.com/docs/v5/concepts/themes/
        root.setThemes([
            am5themes_Animated.new(root)
        ]);

        // Create chart
        // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/
        let chart = root.container.children.push(am5percent.PieChart.new(root, {
            layout: root.verticalLayout
        }));

        // Create series
        // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Series
        let series = chart.series.push(
            am5percent.PieSeries.new(root, {
                valueField: "value",
                categoryField: "category",
                endAngle: 270
            })
        );

        series.states.create("hidden", {
            endAngle: -90
        });

        // Set data
        // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Setting_data
        let data = [
            {
                category: "Sumatra",
                value: 5.67
            }, 
            {
                category: "Jawa",
                value: 13.62
            }, 
            {
                category: "Kalimantan",
                value: 0.97
            }, 
            {
                category: "Sulawesi",
                value: 2.04
            }, 
            {
                category: "Bali - Nusa Tenggara",
                value: 2.09
            }, 
            {
                category: "Maluku - Papua",
                value: 1.41
            }
        ]
        
        series.data.setAll(data);

        let legend = chart.children.push(am5.Legend.new(root, {
            centerX: am5.percent(50),
            x: am5.percent(50),
            marginTop: 15,
            marginBottom: 15
        }));
          
        legend.data.setAll(series.dataItems);

        series.appear(1000, 100);

        return () => {
            root.dispose();
        };
    }, [])

    return (
        <div id="pie-chart" style={{ width: "100%", height: "500px" }}></div>
    )
}

export default PieChart