const core = require('@actions/core');

try {
    // Get input value
    const name = core.getInput('name');

    // Print message
    console.log(`Hello, ${name}! This is a custom JavaScript-based GitHub Action.`);
} catch (error) {
    core.setFailed(`Action failed with error: ${error.message}`);
}
