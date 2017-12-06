var ejs = require('ejs');
module.exports = function (content, file, settings) {
	if(!file.isHtmlLike) return content;
	return ejs.render(content, {metadata: settings});
}