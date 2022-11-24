<template>
    <LineChartGenerator :chart-options="chartOptions" :chart-data="chartData" :chart-id="chartId"
        :dataset-id-key="datasetIdKey" :plugins="plugins" :css-classes="cssClasses" :styles="styles" :width="1024"
        :height="639" />
</template>
  
<script>
import { Line as LineChartGenerator } from 'vue-chartjs/legacy'

import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    LineElement,
    LinearScale,
    CategoryScale,
    PointElement
} from 'chart.js'

ChartJS.register(
    Title,
    Tooltip,
    Legend,
    LineElement,
    LinearScale,
    CategoryScale,
    PointElement
)

export default {
    name: 'LineChart',
    components: {
        LineChartGenerator
    },
    props: {
        chartId: {
            type: String,
            default: 'line-chart'
        },
        datasetIdKey: {
            type: String,
            default: 'label'
        },
        width: {
            type: Number,
            default: 1024
        },
        height: {
            type: Number,
            default: 639
        },
        cssClasses: {
            default: '',
            type: String
        },
        styles: {
            type: Object,
            default: () => { }
        },
        plugins: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            chartData: {
                labels: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                datasets: [
                    {
                        label: 'this month',
                        backgroundColor: '#3683FC',
                        data: [10, 15, 20, 30, 35, 20, 8, 20, 35, 50, 40, 30, 25, 20, 25],
                        borderColor: '#3683FC',
                        borderWidth: 6,
                        tension: 0.5,
                        pointRadius: 0,
                        fill: false,
                        // borderDash: [10, 5]
                    },
                    {
                        label: 'last month',
                        borderColor: '#3683FC4D',
                        data: [20, 10, 15, 20, 30, 33, 40, 20, 0, 10, 25, 20, 15, 10, 0],
                        borderDash: [20, 10],
                        borderWidth: 4,
                        tension: 0.5,
                        fill: false,
                        pointRadius: 0
                    }
                ]
            },
            chartOptions: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: {
                        grid: {
                            display: false,
                        },
                        ticks: {
                            display: false
                        }
                    },
                    y: {
                        grid: {
                            display: false
                        },
                        ticks: {
                            display: false
                        }
                    },
                }
            }
        }
    }
}
</script>
  