# TubeMQ Official Website

This project keeps all sources used for building up TubeMQ official website which's served at 
https://tubemq.apache.org/

## Prerequisite

TubeMQ website is powered by [docsite](https://github.com/txd-team/docsite).
If your version of docsite is less than `1.3.3`,please upgrade to `1.3.3`.
Please also make sure your node version is 10.16.x, versions higher than 10.16.x is not supported by docsite yet.

## Build instruction 

1. Run `npm install docsite -g` to install the dev tool.
2. Run `npm i` in the root directory to install the dependencies.
3. Run `docsite start` in the root directory to start a local server, you will see the website in 'http://127.0.0.1:8080'.
4. Run `docsite build` to build source code.

If you have higher version of node installed, you may consider `nvm` to allow different versions of `node` coexisting on your machine.

1. Follow the [instructions](http://nvm.sh) to install nvm
2. Run `nvm install v8.16.0` to install node v8
3. Run `nvm use v8.16.0` to switch the working environment to node v8
4. Run `npm install docsite -g`

Then you are all set to run and build the website. Follow the build instruction above for the details.


## How to send a PR

Make sure you have submit issue for tracking PR: [https://issues.apache.org/jira/projects/TUBEMQ/issues](https://issues.apache.org/jira/projects/TUBEMQ/issues)

1. Do not use `git add .` to commit all the changes.
2. Just push your changed files, such as:
    * `*.md`
	* blog.js or docs.js or site.js
3. Send a PR to **master** branch.


## Guide for adding new document

### Add a new blog

1. Add new .md file under blog/en-us or blog/zh-cn.
2. Update site_config/blog.js, add a new entry to the blog in either en-us or zh-cn.
3. Run docsite start locally to verify the blog can be displayed correctly.
4. Send the pull request contains the .md and blog.js only.


### Add a new article for development

1. Add new .md file under docs/en-us/development or docs/zh-cn/development.
2. Update site_config/development.js, add a new entry in either en-us or zh-cn.
3. Run docsite start locally to verify the article can be displayed correctly.
4. Send the pull request contains the *.md and development.js only.


### Add a new article for docs

1. Add new .md file under docs/en-us or docs/zh-cn.
2. Update site_config/docs.js, add a new entry in either en-us or zh-cn.
3. Run docsite start locally to verify the article can be displayed correctly.
4. Send the pull request contains the *.md and development.js only.


### Add a new version for documents
1. Modify the document in `docs`, then run `npm run docusaurus docs:version replace_by_target_version` locally to copy a document
2. Add a label to DOC's item in `docusaurus.config.js` file
3. Modify the last table version in `/src/pages/version/index.js`