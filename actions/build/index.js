const core = require("@actions/core");
const github = require("@actions/github");
const markdown_to_github_pages = require("markdown-to-github-pages");
const fs = require('fs');
const path = require("path");

try {
    const source = core.getInput("source");
    const destination = core.getInput("destination");
    const config = core.getInput("config");
    console.log(`source ${source}!`);
    console.log(`destination ${destination}!`);

    (async () => {
        await markdown_to_github_pages.generateGithubPages(source, destination, config);
    })();
} catch (error) {
    core.setFailed(error.message);
}
