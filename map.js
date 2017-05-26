$(function () {
    // Prepare random data
    var data = [
        {
            "name": "浙江",
            "value": 728
        },
        {
            "name": "福建",
            "value": 710
        },
        {
            "name": "广东",
            "value": 963
        },
        {
            "name": "湖北",
            "value": 541
        },{
            name: "湖南",
            value: 122
        }
    ];
    $.getJSON('area-distribution.json', function (geojson) {
        // Initiate the chart
        $('#area-distribution-container').highcharts('Map', {
            title : {
                text : '地区分布'
            },
            mapNavigation: {
                enabled: true,
                buttonOptions: {
                    verticalAlign: 'left'
                }
            },
            colorAxis: {
            },
            series : [{
                data : data,
                mapData: geojson,
                joinBy: ['name', 'name'],
                name: '独立IP',
                states: {
                    hover: {
                        color: '#BADA55'
                    }
                },
                dataLabels: {
                    enabled: true,
                    format: '{point.name}'
                }
            }],
            legend: {
                align: 'left',
                reversed: false,
                layout: 'vertical',
                verticalAlign: 'middle'
            },
            credits: {enabled: false}
        });
    });
});