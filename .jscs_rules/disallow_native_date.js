'use strict';

/*
 * new Date('2015-10-3') 这样的调用，产生的是伦敦格林威治时间的2015-10-3凌晨0分0秒，误用就会坏了。
 * 服务器端代码应该使用moment，浏览器端代码应该使用common.new_date()
 */

var assert = require('assert'),
		nativeDateRegex = /\bDate\b/,
		error_message = 'Instead of Date(), please use moment() in node.js code, ' +
			'or use common.new_date() in browser-side javascript.';


module.exports = function() {};

module.exports.prototype = {

	configure: function(disallowNativeDate) {
		assert(
			disallowNativeDate === true || disallowNativeDate === 'ignoreProperties',
			'requireCamelCaseOrUpperCaseIdentifiers option requires true value or `ignoreProperties` string'
		);

		this._ignoreProperties = (disallowNativeDate === 'ignoreProperties');
	 },

	getOptionName: function() {
		return 'disallowNativeDate';
	},

	check: function(file, errors) {
		file.iterateNodesByType([
			'CallExpression',
			'NewExpression'
		], function(node) {
			if(nativeDateRegex.test(node.callee.name) && node.arguments.length) {
				errors.add(
					error_message,
					node.loc.start.line,
					node.loc.start.column
				);
			}
		}.bind(this));
	}
};
