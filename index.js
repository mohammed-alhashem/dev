const core = require('@actions/core');

const releaseTarget = core.getInput('releaseTarget', { required: true });
console.log(`This is the release target: ${releaseTarget}`);