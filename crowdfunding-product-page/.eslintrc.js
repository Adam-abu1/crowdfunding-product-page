module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: [
		'plugin:vue/essential',
		'@vue/airbnb',
	],
	parserOptions: {
		parser: 'babel-eslint',
	},
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-tabs': ["error", { allowIndentationTabs: true }],
		"indent": ["error", "tab"],
		"import/extensions": [
			"error",
			"ignorePackages",
			{
				"vue": "never",
			}
		]
	},
};
