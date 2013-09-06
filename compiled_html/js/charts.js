var colorset = ['#2f7ed8', '#0d233a', '#8bbc21', '#910000', '#1aadce', '#492970',
        '#f28f43', '#77a1e5', '#c42525', '#a6c96a'];
var colorindex = 0;

$(document).ready(function () {	

	// // Radialize the colors
	// Highcharts.getOptions().colors = Highcharts.map(Highcharts.getOptions().colors, function(color) {
	//     return {
	//         radialGradient: { cx: 0.5, cy: 0.3, r: 0.7 },
	//         stops: [
	//             [0, color],
	//             [1, Highcharts.Color(color).brighten(-0.3).get('rgb')] // darken
	//         ]
	//     };
	// });


    // Makeup of the Class

    // Demographics
    // createChart('pie','data/0/0/gender.csv', '#gender');
    // createChart('column','data/0/0/race.csv', '#race');
    // createChart('pie','data/0/0/sexual_orientation.csv', '#sexual-orientation');
    // createChart('pie','data/0/0/birth_order.csv', '#birth-order');
    // createChart('pie','data/0/0/school_type.csv', '#school-type');
    // createChart('pie','data/0/0/athletes_raw.csv', '#athletes-raw');
    // createChart('column','data/0/0/athletes_vs_race.csv', '#athletes-vs-race');

    // // Geography
    // createChart('pie','data/0/1/urbanity.csv', '#urbanity');

    // // Employment
    // createChart('pie','data/0/2/starting_salary.csv', '#starting-salary');
    // createMultiChart('column', ['Male', 'Female'], null, 
    //         ['data/0/2/starting-salary-male.csv', 'data/0/2/starting-salary-female.csv'], "#starting-salary-vs-gender");
    // createMultiChart('bar', ['2017', '2027'], ['#1abc9c', '#ba0600'], 
    //         ['data/0/2/sector-start-2017.csv', 'data/0/2/sector-start-2027.csv'], "#sector-start-over-time");
    // createMultiChart('bar', ['Male', 'Female'], ['#71c3ff', '#ba0600'], 
    //         ['data/0/2/sector-start-male.csv', 'data/0/2/sector-start-female.csv'], "#sector-start-by-gender");
    // createMultiChart('bar', ['Private', 'Public'], null, 
    //         ['data/0/2/sector-start-private.csv', 'data/0/2/sector-start-public.csv'], "#sector-start-by-school-type");


    // Academics/Extracurriculars

    // In High School
    createChart('pie','data/2/1/hours_studying_past.csv', '#study-habits-past');
    createChart('pie','data/2/1/math_level.csv', '#math-level');
    createChart('bar','data/2/1/extracurriculars.csv', '#extracurriculars');
    createChart('bar','data/2/1/presidents_raw.csv', '#leadership');
    createChart('bar','data/2/1/government_belief.csv', '#government');
    createMultiChart('column', ['Public', 'Private'], [colorset[colorindex++], colorset[colorindex++]], ['data/2/1/public_vs_math.csv', 'data/2/1/private_vs_math.csv'], '#math-school-type');

    // At Harvard
    createChart('pie','data/2/2/hours_studying_future.csv', '#study-habits-future');
    createChart('pie','data/2/2/secondary_raw.csv', '#secondary');
    createChart('pie','data/2/2/concentration_raw.csv', '#concentration-raw');

    // Athletics
    createMultiChart('column', ['Walk-on', 'Recruited'], [colorset[colorindex++], colorset[colorindex++]], ['data/2/3/walkons_four_years.csv', 'data/2/3/recruited_four_years.csv'], '#attrition-athletics');
    createChart('bar','data/2/3/concussions.csv', '#concussions');
    createMultiChart('column', ['Never been concussed', 'Concussed Athletes'], [colorset[colorindex++], colorset[colorindex++]], ['data/2/3/not_concussed_changed_view.csv', 'data/2/3/concussed_changed_view.csv'], '#concussions-view');
                    

    $(window).on('debouncedresize', function () {
        for (var chart in Highcharts.charts) {
            Highcharts.charts[chart].redraw();
        }
    });
});

function createChart(type, filename, divsel) {
    createMultiChart(type, null, null, [filename], divsel);
}

function createChartColor(type, color, filename, divsel) {
    createMultiChart(type, null, [color], [filename], divsel);
}

function createMultiChart(type, titles, colors, filenames, divsel) {
    var options = {
        chart: {
            defaultSeriesType: type,
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            style: {position: "inherit"}
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
            valueSuffix: '%'
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
                        return '<b>'+ this.point.name +'</b>: '+ Math.round(10 * this.percentage) / 10 +' %';
                    }
                }
            }
        },
        tooltip: {
            pointFormat: '<b>{point.percentage:.1f}%</b>'
        },
    };

    var columnOptions = {
        xAxis: {
            categories: [],
        },
        yAxis: {
            title: {
                text: 'Percentage'
            }
        },
        tooltip: {
            pointFormat: '<b>{point.y:.1f}%</b><br/>'
        }
    }

    var barOptions = {
        xAxis: {
            categories: [],
        },
        yAxis: {
            title: {
                text: 'Percentage'
            }
        },
        tooltip: {
            pointFormat: '<b>{point.y:.1f}%</b><br/>'
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