/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
	root: true,
	'extends': [
		'plugin:vue/vue3-essential',
		'eslint:recommended',
		'@vue/eslint-config-typescript',
		'@vue/eslint-config-prettier/skip-formatting',
	],
	parserOptions: {
		ecmaVersion: 'latest',
	},
	rules: {
		'comma-dangle': [
			'warn',
			{
				'arrays': 'always-multiline',
				'objects': 'always-multiline',
				'imports': 'never',
				'exports': 'never',
				'functions': 'never',
			},
		],
		'sort-imports': [
			'warn',
			{
				'ignoreCase': true,
				'ignoreDeclarationSort': true,
				'memberSyntaxSortOrder': [
					'none',
					'all',
					'single',
					'multiple',
				],
			},
		],
		'eqeqeq': 'off',
		'func-names': 'off',
		'indent': [
			'error',
			'tab',
		],
		'max-len': [
			'warn',
			120,
		],
		'complexity': [
			'error',
			2,
		],
		'prefer-destructuring': 'warn',
		'quotes': [
			'error',
			'single',
		],
		'semi': [
			'error',
			'never',
		],
		'no-restricted-globals': 'warn',
		'no-alert': 'warn',
		'no-console': 'warn',
		'no-debugger': 'error',
		'no-param-reassign': 'error',
		'no-plusplus': 'off',
		'no-undef': 'off',
		'no-unused-vars': 'error',
		'no-tabs': 'off',
		'no-return-assign': 'off',
		'import/extensions': [
			'warn',
			'never',
		],
		'import/no-unresolved': 'off',
		'import/no-dynamic-require': 'off',
		'import/no-extraneous-dependencies': 'off',
		'import/prefer-default-export': 'off',
		'vue/html-indent': [
			'error',
			4,
		],
		'vue/multi-word-component-names': 'off',
		'vue/no-multiple-template-root': 'warn',
		'vue/no-parsing-error': 'off',
		'vue/component-name-in-template-casing': [
			'error',
			'kebab-case',
			{
				'registeredComponentsOnly': false,
				'ignores': [],
			},
		],
		'vue/max-attributes-per-line': [
			'error',
			{
				'singleline': {
					'max': 2,
				},
				'multiline': {
					'max': 1,
				},
			},
		],
	},
}
