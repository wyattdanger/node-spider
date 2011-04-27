/**
 * spider-server.js
 */

require.paths.unshift("lib/");

var Spider = require("spider").Spider,
    spider = new Spider(),
    target = process.argv[2];
    
    if (target === undefined) { target = "http://mailchimp.com"; }

spider.crawl(target);

