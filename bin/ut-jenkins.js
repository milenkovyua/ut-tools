#!/usr/bin/env node
/*eslint no-process-env:0*/

if (!process.env.UT_MODULE) {
    var utModule = (process.env.GIT_URL || '').match(/^.*\/.*-(.*)\.git$/);
    if (utModule) {
        process.env.UT_MODULE = utModule[1];
    }
}
require('../lib/setEnv');

var command;
var jobname = process.env.JOB_NAME || '';

if ((process.env.BUILD_CAUSE === 'SCMTRIGGER' && process.env.gitlabSourceBranch === 'master') || (process.env.BUILD_CAUSE === 'MANUALTRIGGER' && jobname.match(/ut-.+_cr$/))) {
    command = 'release';
} else {
    command = 'test';
}

require('../lib/exec')('npm', ['run', command, '--silent']);
