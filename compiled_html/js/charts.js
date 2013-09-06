$(function () {	

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

    var colors = ['#2f7ed8', '#0d233a', '#8bbc21', '#910000', '#1aadce', '#492970',
        '#f28f43', '#77a1e5', '#c42525', '#a6c96a'];
    var colorindex = 0;


    // Makeup of the Class

    // Demographics
    createChart('pie','data/0/0/gender.csv', '#gender');
    createChart('column','data/0/0/race.csv', '#race');
    createChart('pie','data/0/0/sexual_orientation.csv', '#sexual-orientation');
    createChart('pie','data/0/0/birth_order.csv', '#birth-order');
    createChart('pie','data/0/0/school_type.csv', '#school-type');
    createChart('pie','data/0/0/athletes_raw.csv', '#athletes-raw');
    createChart('column','data/0/0/athletes_vs_race.csv', '#athletes-vs-race');

    // Geography
    createChart('pie','data/0/1/urbanity.csv', '#urbanity');

    // Employment
    createChart('pie','data/0/2/starting_salary.csv', '#starting-salary');
    createMultiChart('column', ['Male', 'Female'], [colors[colorindex++], colors[colorindex++]], 
            ['data/0/2/starting-salary-male.csv', 'data/0/2/starting-salary-female.csv'], "#starting-salary-vs-gender");
    createMultiChart('bar', ['2017', '2027'], ['#1abc9c', '#ba0600'], 
            ['data/0/2/sector-start-2017.csv', 'data/0/2/sector-start-2027.csv'], "#sector-start-over-time");
    createMultiChart('bar', ['Male', 'Female'], ['#71c3ff', '#ba0600'], 
            ['data/0/2/sector-start-male.csv', 'data/0/2/sector-start-female.csv'], "#sector-start-by-gender");
    createMultiChart('bar', ['Private', 'Public'], [colors[colorindex++], colors[colorindex++]], 
            ['data/0/2/sector-start-private.csv', 'data/0/2/sector-start-public.csv'], "#sector-start-by-school-type");


    // Academics/Extracurriculars

    // In High School
    createChart('pie','data/2/0/hours_studying_past.csv', '#study-habits-past');
    createChart('pie','data/2/0/math_level.csv', '#math-level');
    createChart('bar','data/2/0/extracurriculars.csv', '#extracurriculars');
    createChart('bar','data/2/0/presidents_raw.csv', '#leadership');
    createChart('bar','data/2/0/government_belief.csv', '#government');
    createMultiChart('column', ['Public', 'Private'], [colors[colorindex++], colors[colorindex++]], ['data/2/0/public_vs_math.csv', 'data/2/0/private_vs_math.csv'], '#math-school-type');


	$('.banner').each(function() {
        var $this = $(this);
        var unslider = $this.unslider({
    		speed: 500,               //  The speed to animate each slide (in milliseconds)
    		delay: 100000000,              //  The delay between slide animations (in milliseconds)
    		keys: false,               //  Enable keyboard (left, right) arrow shortcuts
    		dots: true,               //  Display dot navigation
    		fluid: true              //  Support responsive design. May break non-responsive designs
    	});
        var onclick = function () {
            var fn = this.className.split(' ')[1];
            unslider.data('unslider')[fn]();
            return false;
        };
        var previous = $this.next('.unslider-arrow').click(onclick);
        var next = previous.next('.unslider-arrow').click(onclick);
    });
                    

    $(window).on('debouncedresize', function () {
        for (var chart in Highcharts.charts) {
            Highcharts.charts[chart].redraw();
        }
    });

});

function createChart(type, filename, divsel) {
    createMultiChart(type, null, null, [filename], divsel);
}

function createChart(type, color, filename, divsel) {
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
            enabled: true
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

            // Iterate over the lines and add categories or series
            $.each(lines, function(lineNo, line) {

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
            });

            $(divsel).highcharts(options);

        });
    });
}