google.load('visualization', '1', { packages: ['corechart', 'bar'] });
google.setOnLoadCallback(drawStacked);

function drawStacked() {
    var data = google.visualization.arrayToDataTable([
        ['Month', 'Earnings(€)'],
        ['Jan', 7000],
        ['Feb', 6543],
        ['Mar', 2345],
        ['Apr', 8676],
        ['May', 4321],
        ['Jun', 9767]
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
            title: 'Months',
            minValue: 0,
            textStyle: {
                fontSize: 15,
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
            title: 'Earnings',
            viewWindow: {
                max: 10500
            },
            textStyle: {
                fontSize: 15,
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
    var chart = new google.charts.Bar(document.getElementById('chart-earnings'));
    chart.draw(data, google.charts.Bar.convertOptions(options));
}