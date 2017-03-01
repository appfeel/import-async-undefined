require('babel-polyfill');
require('babel-register')({
    presets: [
        ['env', {
            targets: {
                node: 'current',
            },
        }],
        'stage-3',
    ],
});
require('./testRouter.js');
