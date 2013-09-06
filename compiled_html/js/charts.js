var colorset = ['#2f7ed8', '#0d233a', '#8bbc21', '#910000', '#1aadce', '#492970',
        '#f28f43', '#77a1e5', '#c42525', '#a6c96a'];
var colorindex = 0;

$(document).ready(function () {	
    $(window).on('debouncedresize', function () {
        for (var chart in Highcharts.charts) {
            if (Highcharts.charts[chart] != null) {
                Highcharts.charts[chart].redraw();
            }
        }
    });
});

function createChart(type, filename, divsel) {
    createMultiChart(type, null, null, [filename], divsel);
}

function createNumericChart(type, filename, divsel)
{
    createFullChart(type, null, null, [filename], '', divsel);
}

function createChartColor(type, color, filename, divsel) {
    createMultiChart(type, null, [color], [filename], divsel);
}

function createMultiChart(type, titles, colors, filenames, divsel) {
    createFullChart(type, titles, colors, filenames, '%', divsel)
}

function createFullChart(type, titles, colors, filenames, unit, divsel) {
    var options = {
        chart: {
            defaultSeriesType: type,
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            style: {position: "inherit"},
            spacingTop: 0,
            spacingLeft: 0,
            spacingRight: 0,
            spacingBottom: 0
        },
        credits: {
            enabled: false
        },
        exporting: {
            buttons: {
                contextButton: {
                    enabled: false
                }
            }
        },
        legend: {
            enabled: filenames.length > 1
        },
        series: [],
        tooltip: {
            valueSuffix: unit
        },
        title: {
            text: ''
        },
    };

    for (var i = 0; i < filenames.length; i++) {
        options.series.push({
            data: [],
        });
    }

    var pieOptions = {
        plotOptions: {
            pie: {
                size: '60%',
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    color: '#000000',
                    connectorColor: '#000000',
                    formatter: function() {
                        return '<b>'+ this.point.name +'</b>: '+ Math.round(10 * this.percentage) / 10 + unit;
                    }
                }
            }
        },
        tooltip: {
            pointFormat: '<b>{point.percentage:.1f}' + unit + '</b>'
        },
    };

    var columnOptions = {
        xAxis: {
            categories: [],
        },
        yAxis: {
            title: {
                text: unit == '%' ? 'Percentage' : ''
            }
        },
        tooltip: {
            pointFormat: '<b>{point.y:.1f}' + unit + '</b><br/>'
        }
    }

    var barOptions = {
        xAxis: {
            categories: [],
        },
        yAxis: {
            title: {
                text: unit == '%' ? 'Percentage' : ''
            }
        },
        tooltip: {
            pointFormat: '<b>{point.y:.1f}' + unit + '</b><br/>'
        }
    }

    if (type == 'pie') {
        options = $.extend(options, pieOptions);
    }
    else if (type == 'column') {
        options = $.extend(options, columnOptions);
    }
    else if (type == 'bar') {
        options = $.extend(options, barOptions);
    }

    $.each(filenames, function(datanum, filename){
        $.get(filename, function(data) {
            // Split the lines
            data = data.replace(/\r(?!\n)/g, "\n");
            var lines = data.split('\n');

            if (titles != null) {
                options.series[datanum]['name'] = titles[datanum];
            }
            if (colors != null) {
                options.series[datanum]['color'] = colors[datanum];
            }
            else {
                options.series[datanum]['color'] = colorset[colorindex++];
            }

            // Iterate over the lines and add categories or series
            $.each(lines, function(lineNo, line) {

                if (line != '' && line != null) {
                    var items = line.split(',');

                    if (type == 'pie') {
                        options.series[datanum].data.push([items[0], parseFloat(items[1])]);
                    }
                    else if (type == 'column') {
                        if (datanum == 0) {
                            options.xAxis.categories.push(items[0]); // set first column from CSV as category
                        }
                        options.series[datanum].data.push(parseFloat(items[1]));
                    }
                    else if (type == 'bar') {
                        if (datanum == 0) {
                            options.xAxis.categories.push(items[0]); // set first column from CSV as category
                        }
                        options.series[datanum].data.push(parseFloat(items[1]));
                    }
                }
            });

            $(divsel).highcharts(options);

        });
    });
}