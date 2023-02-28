const core = require("@actions/core");
const github = require("@actions/github");
const markdown_to_github_pages = require("markdown-to-github-pages");
const fs = require('fs');
const path = require("path");

try {
    const source = core.getInput("source");
    const destination = core.getInput("destination");
    console.log(`source ${source}!`);
    console.log(`destination ${destination}!`);

    (async () => {
        await markdown_to_github_pages.generateGithubPages(source, destination);
    })();
} catch (error) {
    core.setFailed(error.message);
}
