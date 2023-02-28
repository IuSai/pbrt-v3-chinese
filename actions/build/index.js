const core = require("@actions/core");
const github = require("@actions/github");
const markdown_to_github_pages = require("markdown-to-github-pages");
const fs = require('fs');

try {
    const source = core.getInput("source");
    const destination = core.getInput("destination");
    console.log(`source ${source}!`);
    console.log(`destination ${destination}!`);

    if (fs.existsSync(source)) {
        fs.readdir(source, (err, files) => {
            if (err) throw err;

            files.filter(file => path.extname(file) === '.md')
                .forEach(file => {
                    const filePath = path.join(source, file);
                    markdown_to_github_pages.generateHtml(filePath, destination);
                });
        });

        markdown_to_github_pages.generateIndex(destination);
        markdown_to_github_pages.generateHtml(path.join(source, 'index.md'), destination);
    }
} catch (error) {
    core.setFailed(error.message);
}
