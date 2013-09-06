$(document).ready(function() {

    // Admissions
    createChart('column','data/1/0/sat_income.csv', '#sat-income');
    createMultiChart('column', ['Male', 'Female'], [colorset[colorindex++], colorset[colorindex++]], ['data/1/0/sat_male.csv', 'data/1/0/sat_female.csv'], '#sat-gender');    
    createMultiChart('column', ['Public', 'Private'], [colorset[colorindex++], colorset[colorindex++]], ['data/1/0/sat_public.csv', 'data/1/0/sat_private.csv'], '#sat-school-type');    

    // Financial Aid
    createChart('pie','data/1/1/financial_aid_raw.csv', '#financial-aid');
    createChart('column','data/1/1/parents_income.csv', '#parents-income');
    createChart('bar','data/1/1/urbanity_aid.csv', '#urbanity-aid');
    createChart('pie','data/1/1/counselor_raw.csv', '#counselor-raw');
    createChart('column','data/1/1/income_counselor.csv', '#income-counselor');

    // College Acceptances
    createChart('pie','data/1/2/early.csv', '#early');
    createChart('pie','data/1/2/top_choice.csv', '#top-choice');
    createChart('pie','data/1/2/top_choice_early.csv', '#top-choice-early');
    createMultiChart('column', ['Below $40k', '$40k-$80k', '$80k-$125k', '$125k-$250k', '$250k-$500k', 'Above $500k'], null, ['data/1/2/early_income_0.csv', 'data/1/2/early_income_40.csv', 'data/1/2/early_income_80.csv', 'data/1/2/early_income_125.csv', 'data/1/2/early_income_250.csv', 'data/1/2/early_income_500.csv'], '#early-income');    
    createChart('pie','data/1/2/early_school_type.csv', '#early-school-type');
    createChart('column','data/1/2/early_race.csv', '#early-race');

    // Athletes
    createChart('pie','data/0/0/athletes_raw.csv', '#athletes-raw');
    createChart('bar','data/1/3/recruited_sat.csv', '#sat-athletes');
    createChart('bar','data/1/3/recruited_income.csv', '#income-athletes');
});