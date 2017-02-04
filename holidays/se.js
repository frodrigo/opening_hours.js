export default {
    'PH': {
        /*
         * http://www.riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/lag-1989253-om-allmanna-helgdagar_sfs-1989-253
         * https://en.wikipedia.org/wiki/Public_holidays_in_Sweden
         */
        'nyårsdagen'        : [  1,  1 ],
        'trettondedag jul'  : [  1,  6 ],
        'långfredagen'      : [ 'easter',  -2 ],
        'påskdagen'         : [ 'easter',  0 ],
        'annandag påsk'     : [ 'easter',  1 ],
        'första maj'        : [  5,  1 ],
        'pingstdagen'       : [ 'easter', 49 ],
        'nationaldagen'     : [  6,  6 ],
        'midsommardagen'    : [ 'nextSaturday20Jun', 0 ],
        'alla helgons dag'  : [ 'nextSaturday31Oct', 0 ],
        'juldagen'          : [ 12, 25 ],
        'annandag jul'      : [ 12, 26 ],
    }
};
