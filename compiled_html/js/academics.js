$(document).ready(function() {

    // Academics/Extracurriculars

    // Cheating
    createChart('pie','data/2/0/exam_cheaters.csv', '#exam-cheaters');
    createChart('pie','data/2/0/paper_cheaters.csv', '#paper-cheaters');
    createChart('pie','data/2/0/homework_cheaters.csv', '#homework-cheaters');
    createMultiChart('column', ['Public', 'Private'], [colorset[colorindex++], colorset[colorindex++]], ['data/2/0/public_cheating.csv', 'data/2/0/private_cheating.csv'], '#cheating-school-type');    

    // In High School
    createChart('pie','data/2/1/hours_studying_past.csv', '#study-habits-past');
    createChart('pie','data/2/1/math_level.csv', '#math-level');
    createChart('bar','data/2/1/extracurriculars.csv', '#extracurriculars');
    createChart('bar','data/2/1/presidents_raw.csv', '#leadership');
    createChart('bar','data/2/1/government_belief.csv', '#government');
    createMultiChart('column', ['Public', 'Private'], [colorset[colorindex++], colorset[colorindex++]], ['data/2/1/public_vs_math.csv', 'data/2/1/private_vs_math.csv'], '#math-school-type');
    createMultiChart('column', ['Public', 'Private'], [colorset[colorindex++], colorset[colorindex++]], ['data/2/1/public_hours.csv', 'data/2/1/private_hours.csv'], '#study-hours-school-type');

    // At Harvard
    createChart('pie','data/2/2/hours_studying_future.csv', '#study-habits-future');
    createMultiChart('bar', ['Academics', 'Extracurriculars', 'Social Life', 'Paid Employment', 'Varsity Sports'], null, ['data/2/2/priorities_academics.csv', 'data/2/2/priorities_extracurriculars.csv', 'data/2/2/priorities_social.csv', 'data/2/2/priorities_job.csv', 'data/2/2/priorities_sports.csv'], '#priorities-raw');
    createChart('pie','data/2/2/secondary_raw.csv', '#secondary');
    createChart('pie','data/2/2/concentration_raw.csv', '#concentration-raw');

    // Athletics
    createChart('pie','data/0/0/athletes_raw.csv', '#athletes-raw');
    createMultiChart('column', ['Walk-on', 'Recruited'], null, ['data/2/3/walkons_four_years.csv', 'data/2/3/recruited_four_years.csv'], '#attrition-athletics');
    createChart('bar','data/2/3/concussions.csv', '#concussions');
    createMultiChart('column', ['Never been concussed', 'Concussed Athletes'], null, ['data/2/3/not_concussed_changed_view.csv', 'data/2/3/concussed_changed_view.csv'], '#concussions-view');

    var width = $('.graph').first().parents('.scroll-row').first().width();
    $('.graph').width(width);
    for (var chart in Highcharts.charts) {
        if (Highcharts.charts[chart] != null) {
            Highcharts.charts[chart].redraw();
        }
    }
});