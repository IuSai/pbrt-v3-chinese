const core = require("@actions/core");
const github = require("@actions/github");
const markdown_to_github_pages = require("markdown-to-github-pages");
const fs = require('fs');
const path = require("path");

try {
    const source = "./Contents/";
    const destination = "./_site/";
    const config = "./_config.yml"
    console.log(`source ${source}!`);
    console.log(`destination ${destination}!`);
    console.log(`config ${config}!`);

    (async () => {
        await markdown_to_github_pages.generateGithubPages(source, destination, config);
    })();
} catch (error) {
    core.setFailed(error.message);
}
