module.exports = {
	root: true,
	env: {
		browser: true,
		commonjs: true,
		node: true,
		jquery: true,
	},
	extends: ['airbnb-base', 'plugin:import/recommended'],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
	},
	parserOptions: {
		ecmaVersion: 2020,
	},
	rules: {
		indent: [
			'error',
			'tab',
		],
		'no-use-before-define': [
			'error',
			{
				variables: false,
			},
		],
		'no-param-reassign': [
			'error',
			{
				props: false,
			},
		],
		'no-tabs': 0,
		'max-len': 0,
		'linebreak-style': 0,
		quotes: [
			'error',
			'single',
		],
		semi: [
			'error',
			'always',
		],
		'no-prototype-builtins': 0,
		'comma-dangle': ['error', 'always-multiline'],
		'block-scoped-var': ['error'],
		'default-case': ['error'],
		'default-param-last': ['error'],
		'dot-location': ['error', 'property'],
		eqeqeq: ['error'],
		'no-eval': ['error'],
		'no-eq-null': ['error'],
		'no-floating-decimal': ['error'],
		'no-trailing-spaces': ['error'],
		'brace-style': [2, '1tbs', { allowSingleLine: true }],
		'no-mixed-operators': [
			'error',
			{
				groups: [
					['&', '|', '^', '~', '<<', '>>', '>>>'],
					['==', '!=', '===', '!==', '>', '>=', '<', '<='],
					['&&', '||'],
					['in', 'instanceof'],
				],
				allowSamePrecedence: true,
			},
		],
		'no-underscore-dangle': ['error', {
			allowAfterThis: true,
		}],
		'no-bitwise': 0,
	},
	ignorePatterns: [
		'*.min.js',
	],
};
