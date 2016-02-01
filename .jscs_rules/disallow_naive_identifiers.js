'use strict';

var assert = require('assert'),
		//TODO: move this to config
		naiveIdentifierRegex = /\b(data|list|arr|array)\b/;

module.exports = function() {};

module.exports.prototype = {

	configure: function(disallowNaiveIdentifiers) {
		assert(
			disallowNaiveIdentifiers === true || disallowNaiveIdentifiers === 'ignoreProperties',
			'requireCamelCaseOrUpperCaseIdentifiers option requires true value or `ignoreProperties` string'
		);

		this._ignoreProperties = (disallowNaiveIdentifiers === 'ignoreProperties');
	 },

	getOptionName: function() {
		return 'disallowNaiveIdentifiers';
	},

	check: function(file, errors) {
		file.iterateNodesByType('VariableDeclaration', function(node) {
			node.declarations.forEach(function(declare) {
				if (naiveIdentifierRegex.test(declare.id.name)) {
					errors.add(
						'Too simple, sometimes naive',
						declare.loc.start.line,
						declare.loc.start.column
					);
				}
			});
		}.bind(this));

		/*
		file.iterateTokensByType('Identifier', function(token, index, tokens) {
			var value = token.value;

			if (this._ignoreProperties) {
				if (index + 1 < tokens.length && tokens[index + 1].value === ':') {
					return;
				}
				if (index > 0 && tokens[index - 1].value === '.') {
					return;
				}
			}

			if (naiveIdentifierRegex.test(value)) {
				errors.add(
					'Too simple, sometimes naive',
					token.loc.start.line,
					token.loc.start.column
				);
			}

		}.bind(this));
		*/
	}

};
