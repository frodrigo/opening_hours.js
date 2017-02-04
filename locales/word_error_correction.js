export default {
    wrong_words: { /* {{{ */
        'Assuming "<ok>" for "<ko>".': {
            'daytime': 'sunrise-sunset',
            'spring':  'Mar-May',
            'summer':  'Jun-Aug',
            'autumn':  'Sep-Nov',
            'winter':  'Dec-Feb',
            '_': '-',
            '=': '-',
        }, '"<ko>" wird als "<ok>" interpertiert.': {
            'frühling': 'Mar-May',
            'frühjahr': 'Mar-May',
            'sommer':   'Jun-Aug',
            'herbst':   'Sep-Nov',
            // 'winter':  'Dec-Feb', // Same as in English.
            // 'morning': '08:00-12:00',
            // 'evening': '13:00-18:00',
        }, 'Bitte benutze die englische Schreibweise "<ok>" für "<ko>".': {
            'werktags?': 'Mo-Fr',
        }, 'Bitte benutze "<ok>" für "<ko>". Beispiel: "Mo-Fr 08:00-12:00; Tu off".': {
            'ruhetage?':   'off',
            'geschlossen': 'off',
            'geschl':      'off',
            // 'ausser':      'off',
            // 'außer':       'off',
        }, 'Neem de engelse afkorting "<ok>" voor "<ko>" alstublieft.': {
            'gesloten':   'off',
            'feestdag':   'PH',
            'feestdagen': 'PH',
        }, 'Assuming "<ok>" for "<ko>". Please avoid using "workday": https://wiki.openstreetmap.org/wiki/Talk:Key:opening_hours#need_syntax_for_holidays_and_workingdays': {
            // Used around 260 times but the problem is, that work day might be different in other countries.
            'wd':            'Mo-Fr',
            'on work days?': 'Mo-Fr',
            'weekdays?':     'Mo-Fr',
            'vardagar':      'Mo-Fr',
        }, 'Please use something like "Mo off" instead "<ko>".': {
            'except': 'off',
        }, 'Please omit "<ko>" or use a colon instead: "12:00-14:00".': {
            'h': '',
        }, 'Please omit "<ko>".': {
            'season': '',
            'hs':     '',
            'hrs':    '',
            'hours':  '',
            // '·':      '', // Sometimes used to separate opening hours (on websites).
        }, 'Please omit "<ko>". The key must not be in the value.': {
            'opening_hours\\s*=': '',
        }, 'Please omit "<ko>". You might want to express open end which can be specified as "12:00+" for example.': {
            'from': '',
        }, 'You can use notation "<ok>" for "<ko>" in the case that you want to express open end times. Example: "12:00+".': {
            '(:?bis|till?|-|–)? ?(?:open ?end|late)': '+',
        }, 'Please use notation "<ok>" for "<ko>". If the times are unsure or vary consider a comment e.g. 12:00-14:00 "only on sunshine".': {
            '~':  '-',
            '～': '-',
        }, 'Please use notation "<ok>" for "<ko>". Fallback rule: 12:00-14:00 || "call us"': {
            'otherwise':  '||',
        }, 'You can use notation "<ok>" for "?" temporally if the syntax will still be valid.': {
            '\\?':  'unknown "please add this if known"',
        }, 'Please use notation "<ok>" for "<ko>". Although using "–" is typographical correct, the opening_hours syntax is defined with the normal hyphen. Correct typography should be done on application level …': {
            '–':  '-',
        }, 'Please use notation "<ok>" for "<ko>".': {
            '→':               '-',
            '−':               '-',
            '—':               '-',
            'ー':              '-',
            'to':              '-',
            'до':              '-',
            'a':               '-', // language unknown
            'as':              '-', // language unknown
            'á':               '-', // language unknown
            'ás':              '-', // language unknown
            'às':              '-', // language unknown
            'ate':             '-', // language unknown
            'till?':           '-',
            'until':           '-',
            'through':         '-',
            'and':             ',',
            '&':               ',',
            // '/':               ',', // Can not be corrected as / is a valid token
            '：':              ':',
            '°°':              ':00',
            'always':          '24/7',
            'always open':     '24/7',
            'always closed':   'closed',
            'nonstop':         '24/7',
            '24x7':            '24/7',
            'anytime':         '24/7',
            'all day':         '24/7',
            'daily':           'Mo-Su',
            'everyday':        'Mo-Su',
            'every day':       'Mo-Su',
            'all days':        'Mo-Su',
            '7j/7':            'Mo-Su', // I guess that it means that
            '7/7':             'Mo-Su', // I guess that it means that
            /* {{{
             * Fixing this causes to ignore the following warning: "There should be no
             * reason to differ more than 6 days from a constrained
             * weekdays. If so tell us …".
             * The following mistake is expected to occur more often.
             */
            '7days':           'Mo-Su',
            '7 days':          'Mo-Su',
            /* }}} */
            '7 days a week':   'Mo-Su',
            '7 days/week':       'Mo-Su',
            '24 hours 7 days a week':   '24/7',
            '24 hours':            '00:00-24:00',
            'midday':           '12:00',
            'midnight':         '00:00',
            '(?:public )?holidays?': 'PH',
            '(?:one )?day after public holiday':  'PH +1 day',
            '(?:one )?day before public holiday': 'PH -1 day',
            'school ?holidays?': 'SH',
            /* Not implemented {{{ */
            // 'day after school holiday':      'SH +1 day',
            // 'one day after school holiday':  'SH +1 day',
            // 'day before school holiday':     'SH -1 day',
            // 'one day before school holiday': 'SH -1 day',
            /* }}} */
            'weekends?':       'Sa,Su',
            'daylight':        'sunrise-sunset',
            '(?:on|by)?(?:_| )?appointments?':  '"on appointment"',
        }, 'Please use notation "<ok>" for "<ko>". Those characters look very similar but are not the same!': {
            'оff':             'off', // Russian o
        }, 'Please use time format in 24 hours notation ("<ko>"). If PM is used you might have to convert the hours to the 24 hours notation.': {
            'pm': '',
            'p.m.': '',
            'рм': '',
            'am': '',
            'a.m.': '',
            'ам': '',
        }, 'Bitte verzichte auf "<ko>".': {
            'uhr': '',
            'geöffnet': '',
            'zwischen': '',
            'ist': '',
            'durchgehend': '',
            'öffnungszeit(?:en)?:?': '',
        }, 'Bitte verzichte auf "<ko>". Sie möchten eventuell eine Öffnungszeit ohne vorgegebenes Ende (Open End) angeben. Beispiel: "12:00+"': {
            'ab':  '',
            'von': '',
        }, 'Es sieht so aus also möchten Sie zusätzliche Einschränkungen für eine Öffnungszeit geben. Falls sich dies nicht mit der Syntax ausdrücken lässt können Kommentare verwendet werden. Zusätzlich sollte eventuell das Schlüsselwort `open` benutzt werden. Bitte probiere "<ok>" für "<ko>".': {
            'damen':  'open "Damen"',
            'herren': 'open "Herren"',
        }, 'Bitte benutze die Schreibweise "<ok>" für "<ko>".': {
            'bis':         '-',
            'täglich':     'Mo-Su',
            '(?:schul)?ferien': 'SH',
            '(?:an|nur)? ?sonn-?(?: und |/)feiertag(?:s|en?)?': 'PH,Su',
            'nach(?: |_)vereinbarung':   '"Nach Vereinbarung"',
            'nach(?: |_)absprache':      '"Nach Absprache"',
        }, 'Bitte benutze die Schreibweise "<ok>" für "<ko>". Es ist war typografisch korrekt aber laut der Spezifikation für opening_hours nicht erlaubt. Siehe auch: https://wiki.openstreetmap.org/wiki/DE:Key:opening_hours/specification.': {
            '„': '"',
            '“': '"',
            '”': '"',
        }, 'Please use notation "<ok>" for "<ko>". The used quote signs might be typographically correct but are not defined in the specification. See https://wiki.openstreetmap.org/wiki/Key:opening_hours/specification.': {
            '«': '"',
            '»': '"',
            '‚': '"',
            '‘': '"',
            '’': '"',
            '「': '"',
            '」': '"',
            '『': '"',
            '』': '"',
        }, 'Please use notation "<ok>" for "<ko>". The used quote signs are not defined in the specification. See https://wiki.openstreetmap.org/wiki/Key:opening_hours/specification.': {
            "'": '"',
        }, 'You might want to use comments instead of brackets (which are not valid in this context). If you do, replace "<ok>" with "<ko>".': {
            // '（': '"',
            // '）': '"',
        }, 'Bitte benutze die Schreibweise "<ok>" als Ersatz für "<ko>".': {
            'und':  ',',
            'u':    ',',
            'auch': ',',
        }, 'Bitte benutze die englische Abkürzung "<ok>" für "<ko>".': {
            '(?:an )?feiertag(?:s|en?)?': 'PH',
        }, 'S\'il vous plaît utiliser "<ok>" pour "<ko>".': {
            'fermé':        'off',
            'et':           ',',
            'à':            '-',
            'jours fériés': 'PH',
        }
    }, /* }}} */

    month: { /* {{{ */
        'default': {
            'jan':  0,
            'feb':  1,
            'mar':  2,
            'apr':  3,
            'may':  4,
            'jun':  5,
            'jul':  6,
            'aug':  7,
            'sep':  8,
            'oct':  9,
            'nov': 10,
            'dec': 11,
        }, 'Please use the English abbreviation "<ok>" for "<ko>".': {
            'jänner':     0, // Austria
            'january':    0,
            'february':   1,
            'march':      2,
            'april':      3,
            // 'may':     4,
            'june?':       5,
            'july?':       6,
            'august':     7,
            'september':  8,
            'sept':       8,
            'october':    9,
            'november':  10,
            'december':  11,
        }, 'Bitte benutze die englische Abkürzung "<ok>" für "<ko>".': {
            'januar':    0,
            'februar':   1,
            'märz?':     2,
            'maerz':     2,
            'mai':       4,
            'juni':      5,
            'juli':      6,
            'okt':       9,
            'oktober':   9,
            'dez':      11,
            'dezember': 11,
        }, 'S\'il vous plaît utiliser l\'abréviation "<ok>" pour "<ko>".': {
            'janvier':    0,
            'février':    1,
            'fév':        1,
            'mars':       2,
            'avril':      3,
            'avr':        3,
            'mai':        4,
            'juin':       5,
            'juillet':    6,
            'août':       7,
            'aoû':        7,
            'septembre':  8,
            'octobre':    9,
            'novembre':  10,
            'décembre':  11,
        }, 'Neem de engelse afkorting "<ok>" voor "<ko>" alstublieft.': {
            'januari':  0,
            'februari': 1,
            'maart':    2,
            'mei':      4,
            'augustus': 7,
        }
    }, /* }}} */

    calcday: {
        'default': {
            'day':  'day',
            'days': 'days',
        },
    },

    weekday: { /* {{{ Good source: http://www.omniglot.com/language/time/days.htm */
        'default': {
            'su': 0,
            'mo': 1,
            'tu': 2,
            'we': 3,
            'th': 4,
            'fr': 5,
            'sa': 6,
        }, 'Assuming "<ok>" for "<ko>"': {
            'm':          1,
            'w':          3,
            'f':          5,
        }, 'Please use the abbreviation "<ok>" for "<ko>".': {
            'sun':         0,
            'sundays?':    0,
            'mon':         1,
            'mondays?':    1,
            'tues?':       2, // Used here:  http://www.westerhambeauty.co.uk/contact.php
            'tuesdays?':   2,
            'weds?':       3,
            'wednesdays?': 3,
            'thu':         4,
            'thurs?':      4,
            'thursdays?':  4,
            'fri':         5,
            'fridays?':    5,
            'sat':         6,
            'saturdays?':  6,
        }, 'Bitte benutze die englische Abkürzung "<ok>" für "<ko>". Could also mean Saturday in Polish …': {
            'so':         0,
        }, 'Bitte benutze die englische Abkürzung "<ok>" für "<ko>".': {
            'son':          0,
            'sonn-':        0,
            'sonntags?':    0,
            'montags?':     1,
            'di':           2,
            'die?':         2,
            'dienstags?':   2,
            'mi':           3,
            'mit?':         3,
            'mittwochs?':   3,
            'don?':         4,
            'donnerstags?': 4,
            'fre':          5,
            'freitags?':    5,
            'sam':          6,
            'samstags?':    6,
        }, 'S\'il vous plaît utiliser l\'abréviation "<ok>" pour "<ko>".': {
            'dim':       0,
            'dimanche':  0,
            'lun?':      1,
            'lundi':     1,
            'mardi':     2,
            'mer':       3,
            'mercredi':  3,
            'jeu?':      4,
            'jeudi':     4,
            'ven?':      5,
            'vendredi':  5,
            'samedi':    6,
        }, 'Neem de engelse afkorting "<ok>" voor "<ko>" alstublieft.': {
            'zon?':      0,
            'zontag':    0, // correct?
            'zondag':    0,
            'maandag':   1,
            'din':       2,
            'dinsdag':   2,
            'woe?':      3,
            'woensdag':  3,
            'donderdag': 4,
            'vri?':      5,
            'vrijdag':   5,
            'zat?':      6,
            'zaterdag':  6,
        }, 'Please use the English abbreviation "<ok>" for "<ko>".': { // FIXME: Translate to Czech.
            'neděle':  0,
            'ne':      0,
            'pondělí': 1,
            'po':      1,
            'úterý':   2,
            'út':      2,
            'středa':  3,
            'st':      3,
            'čtvrtek': 4,
            'čt':      4,
            'pátek':   5,
            'pá':      5,
            'sobota':  6,
        }, 'Please use the English abbreviation "<ok>" (Spanish) for "<ko>".': {
            'martes':    0,
            'miércoles': 1,
            'jueves':    2,
            'viernes':   3,
            'sábado':    4,
            'domingo':   5,
            'lunes':     6,
        }, 'Please use the English abbreviation "<ok>" (Indonesian) for "<ko>".': {
            'selasa': 0,
            'rabu':   1,
            'kami':   2,
            'jumat':  3,
            'sabtu':  4,
            'minggu': 5,
            'senin':  6,
        }, 'Please use the English abbreviation "<ok>" (Swedish) for "<ko>".': {
            'söndag':   0,
            'söndagar': 0,
            'måndag':   1,
            'ma':       1,
            'tisdag':   2,
            'onsdag':   3, // Same in Danish
            'torsdag':  4,
            'fredag':   5,
            'lördag':   6,
            'lördagar': 6,
        }, 'Please use the English abbreviation "<ok>" (Polish) for "<ko>".': {
            'niedziela':     0,
            'niedz':         0,
            'n':             0,
            'ndz':           0,
            'poniedziałek':  1,
            'poniedzialek':  1,
            'pon':           1,
            'pn':            1,
            'wtorek':        2,
            'wt':            2,
            'środa':         3,
            'sroda':         3,
            'śr':            3,
            'sr':            3,
            'czwartek':      4,
            'czw':           4,
            'cz':            4,
            'piątek':        5,
            'piatek':        5,
            'pt':            5,
            'sobota':        6,
            'sob':           6,
            // 'so':         6 // abbreviation also used in German
        }, 'Please use the English abbreviation "<ok>" (Russian) for "<ko>".': {
            'воскресенье' : 0,
            'Вс'          : 0,
            "voskresen'ye": 0,
            'понедельник' : 1,
            'Пн'          : 1,
            "ponedel'nik" : 1,
            'вторник'     : 2,
            'vtornik'     : 2,
            'среда'       : 3,
            'sreda'       : 3,
            'четверг'     : 4,
            'chetverk'    : 4,
            'пятница'     : 5,
            'pyatnitsa'   : 5,
            'суббота'     : 6,
            'subbota'     : 6,
        }, 'Please use the English abbreviation "<ok>" (Danish) for "<ko>".': {
            'søndag' : 0,
            'mandag' : 1,
            'tirsdag': 2,
            'onsdag' : 3, // Same in Swedish
            'torsdag': 4,
            'fredag' : 5,
            'lørdag' : 6,
        },
    }, /* }}} */

    timevar: { /* {{{ Special time variables which actual value depends on the date and the position of the facility. */
        'default': {
            'sunrise': 'sunrise',
            'sunset':  'sunset',
            'dawn':    'dawn',
            'dusk':    'dusk',
        }, 'Please use notation "<ok>" for "<ko>".': {
            'sundown':  'sunset',
        }, 'Bitte benutze die Schreibweise "<ok>" für "<ko>".': {
            'morgendämmerung': 'dawn',
            'abenddämmerung':  'dusk',
            'sonnenaufgang':   'sunrise',
            'sonnenuntergang': 'sunset',
        },
    }, /* }}} */

    'event': { // variable events
        'default': {
            'easter': 'easter',
        }, 'Bitte benutze die Schreibweise "<ok>" für "<ko>".': {
            'ostern': 'easter',
        },
    },
};
