#!/usr/bin/env node
/* eslint no-console:0, no-process-exit:0 */

const bump = ['0', 'false', 'skip'].indexOf(process.argv[2]) === -1;

require('../lib/versionBump')(bump)
    .catch((e) => {
        console.error(e);
        process.exit(1);
    });
