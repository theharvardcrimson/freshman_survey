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
	
    var createChart = function(type, filename, divsel) {
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
                enabled: false
            },
            series: [{
                    data: [],
            }],
            title: {
                text: ''
            },
        };

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

        if (type == 'pie') {
            options = $.extend(options, pieOptions);
        }
        else if (type == 'column') {
            options = $.extend(options, columnOptions);
        }

        console.log(options);

        $.get(filename, function(data) {
            // Split the lines
            data = data.replace(/\r(?!\n)/g, "\n");
            var lines = data.split('\n');
            // Iterate over the lines and add categories or series
            $.each(lines, function(lineNo, line) {

                var items = line.split(',');

                if (type == 'pie') {
                    options.series[0].data.push([items[0], parseFloat(items[1])]);
                }
                else if (type == 'column') {
                    options.xAxis.categories.push(items[0]); //set first column from CSV as categorie
                    options.series[0].data.push(parseFloat(items[1]));
                }
            });

            $(divsel).highcharts(options);

        });
    };


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

    $("#starting-salary-vs-gender").highcharts({
        chart: {
            defaultSeriesType: 'column',
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
        series: [{
            name: 'Male',
            data: [6.4,14.1,31.3,24.5,14.8,8.9]
        },
        {
            name: 'Female',
            data: [12.7,28.8,30.9,18,6.4,3.2]
        }],
        title: {
            text: ''
        },
        xAxis: {
            categories: ['Less than $30,000','$30,000 to $50,000','$50,000 to $70,000','$70,000 to $90,000','$90,000 to $110,000','More than $110,000']
        },
        yAxis: {
            title: {
                text: 'Percentage'
            }
        }
    });

    $("#sector-start-over-time").highcharts({
        chart: {
            defaultSeriesType: 'bar',
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
        series: [{
            name: '2017',
            data: [3.1,3.6,1.5,2.8,8.3,4.7,27.5,6.1,1.6,3.6,22.7,8.2,3.6,2.5],
            color: '#1abc9c'
        },
        {
            name: '2027',
            data: [6.1,2.3,4.2,5.8,6,14.9,0.9,23.7,2.6,4.4,3.2,10.8,9.5,5.3],
            color: '#f1c40f'
        }],
        title: {
            text: ''
        },
        tooltip: {
            valueSuffix: '%'
        },
        xAxis: {
            categories: ['Arts, Sports, or Entertainment','Consulting','Education','Entrepreneurship','Finance','Government or Politics','Graduate School','Health','Media or Publishing','Nonprofit or Public Service','Professional School','Technology or Engineering','Business - Other','Other Sector']
        },
        yAxis: {
            title: {
                text: 'Percentage'
            }
        }
    });


    $("#sector-start-by-gender").highcharts({
        chart: {
            defaultSeriesType: 'bar',
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
        series: [{
            name: 'Male',
            data: [5.4,3.6,3.9,8.8,8.8,14.6,0.7,18.8,0.5,2.1,3,13.6,10.9,5.4],
            color: '#71c3ff'
        },
        {
            name: 'Female',
            data: [6.9,1.1,4.5,2.9,3.3,15.2,1.1,28.9,4.7,6.7,3.4,8,8.2,5.1],
            color: '#ba0600'
        }],
        title: {
            text: ''
        },
        tooltip: {
            valueSuffix: '%'
        },
        xAxis: {
            categories: ['Arts, Sports, or Entertainment','Consulting','Education','Entrepreneurship','Finance','Government or Politics','Graduate School','Health','Media or Publishing','Nonprofit or Public Service','Professional School','Technology or Engineering','Business - Other','Other Sector']
        },
        yAxis: {
            title: {
                text: 'Percentage'
            }
        }
    });

    $("#sector-start-by-school-type").highcharts({
        chart: {
            defaultSeriesType: 'bar',
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
        series: [{
            name: 'Private',
            data: [8.1,2.6,3.1,7.4,8.3,12.6,0.5,19.3,3.6,6.0,1.9,10.2,11.9,4.5]
        },
        {
            name: 'Public',
            data: [4.6,2.1,5.0,4.9,4.7,16.5,1.0,26.7,1.9,3.4,4.1,11.2,8.2,5.7]
        }],
        title: {
            text: ''
        },
        tooltip: {
            valueSuffix: '%'
        },
        xAxis: {
            categories: ['Arts, Sports, or Entertainment','Consulting','Education','Entrepreneurship','Finance','Government or Politics','Graduate School','Health','Media or Publishing','Nonprofit or Public Service','Professional School','Technology or Engineering','Business - Other','Other Sector']
        },
        yAxis: {
            title: {
                text: 'Percentage'
            }
        }
    });


	$('.banner').each(function() {
        var $this = $(this);
        var unslider = $this.unslider({
    		speed: 500,               //  The speed to animate each slide (in milliseconds)
    		delay: 100000000,              //  The delay between slide animations (in milliseconds)
    		keys: false,               //  Enable keyboard (left, right) arrow shortcuts
    		dots: true,               //  Display dot navigation
    		fluid: false              //  Support responsive design. May break non-responsive designs
    	});
        var onclick = function () {
            var fn = this.className.split(' ')[1];
            unslider.data('unslider')[fn]();
            return false;
        };
        var previous = $this.next('.unslider-arrow').click(onclick);
        var next = previous.next('.unslider-arrow').click(onclick);
    });
                    

    $(window).resize(function () {
        for (chart in Highcharts.charts) {
            Highcharts.charts[chart].redraw();
        }
    });

});
