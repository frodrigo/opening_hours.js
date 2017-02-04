import {readFileSync} from 'fs';
import common from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';

const banner = readFileSync('./banner.js', 'utf-8');
const dependencies = process.env.DEPS === 'YES';

export default {
    banner: banner,
    entry: './index',
    format: 'cjs',
    plugins: dependencies ? [
        nodeResolve(),
        common()
    ] : [],
    external: dependencies ? [] : [
        'i18next-client',
        'moment',
        'suncalc'
    ],
    dest: dependencies ? 'opening_hours+deps.js' : 'opening_hours.js'
};
