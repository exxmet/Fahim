const fs = require("fs");
module.exports.config = {
  name: "iloveu",
  version: "2.0.0",
  permission: 0,
  credits: "nayan",
  description: "",
  prefix: false,
  category: "user",
  usages: "",
  cooldowns: 5,
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Fahim")==0 || (event.body.indexOf("fahim Islam ")==0 || (event.body.indexOf("ফাহিম")==0 || (event.body.indexOf("fahim vai")==0)))) {
		var msg = {
				body: "please দয়া করে কোন ছেলে মেনশন দেবেন না সে এখন মেয়ে পটাতে বিজি আছে"
    }
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
