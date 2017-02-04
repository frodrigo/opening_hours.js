export default {
    'unexpected token': 'Unexpected token: "__token__" This means that the syntax is not valid at that point or it is currently not supported.',
    'no string': 'The value (first parameter) is not a string.',
    'nothing': 'The value contains nothing meaningful which can be parsed.',
    'nothing useful': 'This rule does not contain anything useful. Please remove this empty rule.',
    'programmers joke': 'Might it be possible that you are a programmer and adding a semicolon after each statement is hardwired in your muscle memory ;) ?'
        + ' The thing is that the semicolon in the opening_hours syntax is defined as rule separator.'
        + ' So for compatibility reasons you should omit this last semicolon.',
    'interpreted as year': 'The number __number__ will be interpreted as year.'
        + ' This is probably not intended. Times can be specified as "12:00".',
    'rule before fallback empty': 'Rule before fallback rule does not contain anything useful',
    'hour min separator': 'Please use ":" as hour/minute-separator',
    'warnings severity': 'The parameter optional_conf_parm["warnings_severity"] must be an integer number between 0 and 7 (inclusive).'
        + ' Given __severity__'
        + ', expected one of the following numbers: __allowed__.',
    'optional conf parm type': 'The optional_conf_parm parameter is of unknown type.'
        + ' Given __given__',
    'conf param tag key missing': 'The optional_conf_parm["tag_key"] is missing, required by optional_conf_parm["map_value"].',
    'conf param mode invalid': 'The optional_conf_parm["mode"] parameter is a invalid number.'
        + ' Gave __given__'
        + ', expected one of the following numbers: __allowed__.',
    'conf param unkown type': 'The optional_conf_parm["__key__"] parameter is of unknown type.'
        + ' Given __given__'
        + ', expected __expected__.',
    'library bug': 'An error occurred during evaluation of the value "__value__".'
        + ' Please file a bug report or pull request: __url__.__message__',
    'library bug PR only': 'An error occurred during evaluation of the value "__value__".'
        + ' Please submit a pull request: __url__.__message__',
    'use multi': 'You have used __count__ __part2__ Rules can be separated by ";".',
    'selector multi 2a': '__what__ in one rule. You may only use one in one rule.',
    'selector multi 2b': 'not connected __what__ in one rule. This is probably an error.'
        + ' Equal selector types can (and should) always be written in conjunction separated by comma.'
        + ' Example for time ranges "12:00-13:00,15:00-18:00".'
        + ' Example for weekdays "Mo-We,Fr".',
    'selector state': 'state keywords',
    'comments': 'comments',
    'holiday ranges': 'holiday ranges',
    'months': 'months',
    'weekdays': 'weekdays',
    'ranges': 'ranges',
    'default state': "This rule which changes the default state (which is closed) for all following rules is not the first rule."
        + " The rule will overwrite all previous rules."
        + " It can be legitimate to change the default state to open for example"
        + " and then only specify for which times the facility is closed.",
    'vague': "This rule is not very explicit because there is no time selector being used."
        + " Please add a time selector to this rule or use a comment to make it more explicit.",
    'empty comment': "You have used an empty comment."
        + " Please either write something in the comment or use the keyword unknown instead.",
    'separator_for_readability': "You have used the optional symbol <separator_for_readability> in the wrong place."
        + " Please check the syntax specification to see where it could be used or remove it.",
    'strange 24/7': 'You used 24/7 in a way that is probably not interpreted as "24 hours 7 days a week".'
        + ' For correctness you might want to use "open" or "closed"'
        + ' for this rule and then write your exceptions which should achieve the same goal and is more clear'
        + ' e.g. "open; Mo 12:00-14:00 off".',
    'public holiday': 'There was no PH (public holiday) specified. This is not very explicit.__part2__'
        + ' Please either append a "PH off" rule if the amenity is closed on all public holidays'
        + ' or use something like "Sa,Su,PH 12:00-16:00" to say that on Saturdays, Sundays and on public holidays the amenity is open 12:00-16:00.'
        + ' If the amenity is open everyday including public holidays then you can make this explicit by writing "Mo-Su,PH".'
        + ' If you are not certain try to find it out. If you can’t then do not add PH to the value and ignore this warning.',
    'public holiday part2': ' Unfortunately the tag key (e.g. "opening_hours", or "lit") is unknown to opening_hours.js. '
        + 'This warning only applies to the key __keys__. If your value is for that key than read on. If not you can ignore the following.',
    'switched': 'The selector "__first__" was switched with'
        + ' the selector "__second__"'
        + ' for readablitity and compatibiltity reasons.',
    'no colon after': 'Please don’t use ":" after __token__.',
    'number -5 to 5': 'Number between -5 and 5 (except 0) expected.',
    'one weekday constraint': 'You can not use more than one constrained weekday in a month range',
    'range constrained weekdays': 'You can not use a range of constrained weekdays in a month range',
    'expected': '"__symbol__" expected.',
    'range zero': 'You can not use __type__ ranges with period equals zero.',
    'period one year+': 'Please don’t use __type__ ranges with period equals one.'
        + ' If you want to express that a facility is open starting from a year without limit use "<year>+".',
    'period one': 'Please don’t use __type__ ranges with period equals one.',
    'month 31': "The day for __month__ must be between 1 and 31.",
    'month 30': "Month __month__ doesn't have 31 days. The last day of __month__ is day 30.",
    'month feb': 'Month __month__ either has 28 or 29 days (leap years).',
    'point in time': 'hyphen (-) or open end (+) in time range __calc__expected.'
        + ' For working with points in time, the mode for __libraryname__ has to be altered.'
        + ' Maybe wrong tag?',
    'calculation': 'calculation',
    'time range continue': 'Time range does not continue as expected',
    'period continue': 'Time period does not continue as expected. Example "/01:30".',
    'time range mode': '__libraryname__ is running in "time range mode". Found point in time.',
    'point in time mode': '__libraryname__ is running in "points in time mode". Found time range.',
    'outside current day': 'Time range starts outside of the current day',
    'two midnights': 'Time spanning more than two midnights not supported',
    'without minutes': 'Time range without minutes specified. Not very explicit!'
        + ' Please use this syntax instead "__syntax__".',
    'outside day': 'Time range starts outside of the current day',
    'zero calculation': 'Adding zero in a variable time calculation does not change the variable time.'
        + ' Please omit the calculation (example: "sunrise-(sunset-00:00)").',
    'calculation syntax': 'Calculation with variable time is not in the right syntax',
    'missing': 'Missing "__symbol__"',
    '(time)': '(time)',
    'bad range': 'Bad range: __from__-__to__',
    '] or more numbers': '"]" or more numbers expected.',
    'additional rule no sense': 'An additional rule does not make sense here. Just use a ";" as rule separator.'
        + ' See https://wiki.openstreetmap.org/wiki/Key:opening_hours/specification#explain:additional_rule_separator',
    'unexpected token weekday range': 'Unexpected token in weekday range: __token__',
    'max differ': 'There should be no reason to differ more than __maxdiffer__ days from a __name__. If so tell us …',
    'adding 0': 'Adding 0 does not change the date. Please omit this.',
    'unexpected token holiday': 'Unexpected token (holiday parser): __token__',
    'no holiday definition': 'There are no holidays (__name__) defined for country __cc__.',
    'no holiday definition state': 'There are no holidays (__name__) defined for country __cc__ and state __state__.',
    'no country code': 'Country code missing which is needed to select the correct holidays (see README how to provide it)',
    'movable no formula': 'Movable day __name__ can not not be calculated.'
        + ' Please add the formula how to calculate it.',
    'movable not in year': 'The movable day __name__ plus __days__'
        + ' days is not in the year of the movable day anymore. Currently not supported.',
    'year range one year': 'A year range in which the start year is equal to the end year does not make sense.'
        + ' Please remove the end year. E.g. "__year__ May 23"',
    'year range reverse': 'A year range in which the start year is greater than the end year does not make sense.'
        + ' Please turn it over.',
    'year past': 'The year is in the past.',
    'unexpected token year range': 'Unexpected token in year range: __token__',
    'week range reverse': 'You have specified a week range in reverse order or leaping over a year. This is (currently) not supported.',
    'week negative': 'You have specified a week date less then one. A valid week date range is 1-53.',
    'week exceed': 'You have specified a week date greater then 53. A valid week date range is 1-53.',
    'week period less than 2': 'You have specified a week period which is less than two.'
        + ' If you want to select the whole range from week __weekfrom__ to week __weekto__ then just omit the "/__period__".',
    'week period greater than 26': 'You have specified a week period which is greater than 26.'
        + ' 26.5 is the half of the maximum 53 week dates per year so a week date period greater than 26 would only apply once per year.'
        + ' Please specify the week selector as "week __weekfrom__" if that is what you want to express.',
    'unexpected token week range': 'Unexpected token in week range: __token__',
    'unexpected token month range': 'Unexpected token in month range: __token__',
    'day range reverse': 'Range in wrong order. From day is greater than to day.',
    'open end': 'Specified as open end. Closing time was guessed.',
    'date parameter needed': 'Date parameter needed.',
};
