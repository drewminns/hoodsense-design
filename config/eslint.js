
module.exports = {
  root: true,

  parser: 'babel-eslint',

  // import plugin is temporarily disabled, scroll below to see why
  plugins: [/*'import', */'jsx-a11y', 'react'],


  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true
  },

  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      generators: true,
      experimentalObjectRestSpread: true
    }
  },

  settings: {
    'import/ignore': [
      'node_modules',
      '\\.(json|css|jpg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm)$',
    ],
    'import/extensions': ['.js'],
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.json']
      }
    }
  },
  extends: [
    'eslint:recommended',
    'plugin:jsx-a11y/strict'
  ],
  rules: {
    'eol-last':        ['off'],
    'jsx-quotes':      ['warn', 'prefer-single'],
    'no-console':      'error',
    'prefer-template': 'warn',
    'quotes':          ['warn', 'single'],
    'semi':            'warn',
    'space-infix-ops': 'warn',
    'valid-jsdoc':     'warn',
    'indent':          ['warn', 2, { 'SwitchCase': 1 }],
    'react/jsx-boolean-value': 'warn',
    'react/jsx-closing-bracket-location': ['error', 'line-aligned'],
    'react/jsx-curly-spacing': ['error', 'always',
      { 'allowMultiline': true, 'spacing': {'objectLiterals': 'always'} },
    ],
    'react/jsx-handler-names': ['off', {
      eventHandlerPrefix: 'handle',
      eventHandlerPropPrefix: 'on',
    }],
    'react/jsx-equals-spacing': ['warn', 'never'],
    'react/jsx-filename-extension': ['warn', { extensions: ['.jsx'] }],
    'react/jsx-first-prop-new-line': ['warn', 'multiline'],
    'react/jsx-indent': ['warn', 2],
    'react/jsx-indent-props': ['warn', 2],
    'react/jsx-key': 'off',
    'react/jsx-max-props-per-line': ['off', { maximum: 1 }],
    'react/jsx-no-bind': ['warn', {
      'ignoreRefs': true,
      'allowArrowFunctions': false,
      'allowBind': false,
    }],
    'react/jsx-no-duplicate-props': ['warn', { ignoreCase: true }],
    'react/jsx-no-target-blank': 'warn',
    'react/jsx-no-undef': 'warn',
    'react/jsx-pascal-case': ['warn', {
      allowAllCaps: true,
      ignore: [],
    }],
    'react/jsx-space-before-closing': ['warn', 'always'],
    'react/jsx-uses-react': ['warn'],
    'react/jsx-uses-vars': 'warn',
    'react/jsx-wrap-multilines': ['warn', {
      declaration: true,
      assignment: true,
      return: true
    }],
    'react/no-children-prop': 'warn',
    'react/no-deprecated': 'warn',
    'react/no-did-mount-set-state': ['warn'],
    'react/no-did-update-set-state': ['warn'],
    'react/no-direct-mutation-state': 'warn',
    'react/no-find-dom-node': 'warn',
    'react/no-is-mounted': 'warn',
    'react/no-multi-comp': ['warn', { 'ignoreStateless': true }],
    'react/no-unescaped-entities': 'warn',
    'react/prop-types': 'warn',
    'react/no-unused-prop-types': 'warn',
    'react/react-in-jsx-scope': 'warn',
    'react/require-extension': ['off', { 'extensions': ['.jsx'] }],
    'react/require-render-return': 'warn',
    'react/self-closing-comp': 'warn',
    'react/sort-comp': ['warn', {
      'order': [
        'static-methods',
        'lifecycle',
        '/^on.+$/',
        '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
        'everything-else',
        '/^render.+$/',
        'render'
      ],
    }],

		//-------------------------------------------------------------
    // http://eslint.org/docs/rules/
    'array-callback-return': 'warn',
    'default-case': ['warn', { commentPattern: '^no default$' }],
    'dot-location': ['warn', 'property'],
    eqeqeq: ['warn', 'allow-null'],
    'guard-for-in': 'warn',
    'new-parens': 'warn',
    'no-array-constructor': 'warn',
    'no-caller': 'warn',
    'no-cond-assign': ['warn', 'always'],
    'no-const-assign': 'warn',
    'no-control-regex': 'warn',
    'no-delete-var': 'warn',
    'no-dupe-args': 'warn',
    'no-dupe-class-members': 'warn',
    'no-dupe-keys': 'warn',
    'no-duplicate-case': 'warn',
    'no-empty-character-class': 'warn',
    'no-empty-pattern': 'warn',
    'no-eval': 'warn',
    'no-ex-assign': 'warn',
    'no-extend-native': 'warn',
    'no-extra-bind': 'warn',
    'no-extra-label': 'warn',
    'no-fallthrough': 'warn',
    'no-func-assign': 'warn',
    'no-implied-eval': 'warn',
    'no-invalid-regexp': 'warn',
    'no-iterator': 'warn',
    'no-label-var': 'warn',
    'no-labels': ['warn', { allowLoop: false, allowSwitch: false }],
    'no-lone-blocks': 'warn',
    'no-loop-func': 'warn',
    'no-mixed-operators': ['warn', {
      groups: [
        ['&', '|', '^', '~', '<<', '>>', '>>>'],
        ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
        ['&&', '||'],
        ['in', 'instanceof']
      ],
      allowSamePrecedence: false
    }],
    'no-multi-str': 'warn',
    'no-native-reassign': 'warn',
    'no-negated-in-lhs': 'warn',
    'no-new-func': 'warn',
    'no-new-object': 'warn',
    'no-new-symbol': 'warn',
    'no-new-wrappers': 'warn',
    'no-obj-calls': 'warn',
    'no-octal': 'warn',
    'no-octal-escape': 'warn',
    'no-redeclare': 'warn',
    'no-regex-spaces': 'warn',
    'no-restricted-syntax': [
      'warn',
      'LabeledStatement',
      'WithStatement',
    ],
    'no-script-url': 'warn',
    'no-self-assign': 'warn',
    'no-self-compare': 'warn',
    'no-sequences': 'warn',
    'no-shadow-restricted-names': 'warn',
    'no-sparse-arrays': 'warn',
    'no-template-curly-in-string': 'warn',
    'no-this-before-super': 'warn',
    'no-throw-literal': 'warn',
    'no-undef': 'warn',
    'no-unexpected-multiline': 'warn',
    'no-unreachable': 'warn',
    'no-unused-expressions': 'warn',
    'no-unused-labels': 'warn',
    'no-unused-vars': ['warn', { vars: 'local', args: 'none' }],
    'no-use-before-define': ['warn', 'nofunc'],
    'no-useless-computed-key': 'warn',
    'no-useless-concat': 'warn',
    'no-useless-constructor': 'warn',
    'no-useless-escape': 'warn',
    'no-useless-rename': ['warn', {
      ignoreDestructuring: false,
      ignoreImport: false,
      ignoreExport: false,
    }],
    'no-with': 'warn',
    'no-whitespace-before-property': 'warn',
    'operator-assignment': ['warn', 'always'],
    radix: 'warn',
    'require-yield': 'warn',
    'rest-spread-spacing': ['warn', 'never'],
    strict: ['warn', 'never'],
    'unicode-bom': ['warn', 'never'],
    'use-isnan': 'warn',
    'valid-typeof': 'warn'
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/

    // TODO: import rules are temporarily disabled because they don't play well
    // with how eslint-loader only checks the file you change. So if module A
    // imports module B, and B is missing a default export, the linter will
    // record this as an issue in module A. Now if you fix module B, the linter
    // will not be aware that it needs to re-lint A as well, so the error
    // will stay until the next restart, which is really confusing.

    // This is probably fixable with a patch to eslint-loader.
    // When file A is saved, we want to invalidate all files that import it
    // *and* that currently have lint errors. This should fix the problem.

    // 'import/default': 'warn',
    // 'import/export': 'warn',
    // 'import/named': 'warn',
    // 'import/namespace': 'warn',
    // 'import/no-amd': 'warn',
    // 'import/no-duplicates': 'warn',
    // 'import/no-extraneous-dependencies': 'warn',
    // 'import/no-named-as-default': 'warn',
    // 'import/no-named-as-default-member': 'warn',
    // 'import/no-unresolved': ['warn', { commonjs: true }],

    // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules

    // https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules
  }
};