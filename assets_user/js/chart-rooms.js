google.load('visualization', '1', { packages: ['corechart', 'bar'] });
google.setOnLoadCallback(drawStacked);

function drawStacked() {
    var data = google.visualization.arrayToDataTable([
        ['Day', 'Occupied Rooms'],
        ['Sun', 100],
        ['Mon', 35],
        ['Tue', 64],
        ['Wed', 86],
        ['Thu', 43],
        ['Fri', 78],
        ['Sat', 41]
    ]);

    var options = {
        // title: 'Monthly Rooms Occupancy',
        // titleTextStyle: {
        //     color: "#5c5c5c",
        //     fontName: "Roboto",
        //     fontSize: 30,
        //     bold: true
        // },
        legend: { position: 'none' },
        chartArea: { width: '100%' },
        isStacked: true,
        hAxis: {
            title: 'Days',

            minValue: 0,
            textStyle: {
                fontSize: 13,
                fontName: "Roboto"
            },
            titleTextStyle: {
                color: "#3c3c3c",
                fontName: "Roboto",
                fontSize: 20,
                bold: true
            },


        },

        vAxis: {
            title: 'Rooms',
            viewWindow: {
                max: 100
            },
            textStyle: {
                fontSize: 13,
                fontName: "Roboto"
            },
            titleTextStyle: {
                color: "#3c3c3c",
                fontName: "Roboto",
                fontSize: 20,
                bold: true
            },
        },
        series: {
            0: {
                color: 'c19b76'
            },
            1: {
                color: 'blue'
            }
        }
    };
    var chart = new google.charts.Bar(document.getElementById('chart-rooms'));
    chart.draw(data, google.charts.Bar.convertOptions(options));
}