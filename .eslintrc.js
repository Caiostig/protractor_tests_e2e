module.exports = {
    extends: ['eslint:recommended'],
    rules: {
      indent: ['error', 2,{ "SwitchCase": 1 }],
      'eol-last': ['error', 'always'],
      'global-require': 'off',
      'max-len': ['error', { code: 200 }],
      'no-multi-spaces': 'error',
      'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 1 }],
      'max-params': ['error', 4],
      'max-depth': ['error', 5],
      'no-trailing-spaces': 'error',
      'space-before-blocks': 'error',
      enforceDynamicLinks: 0,
      'no-console': 0,
    },
    env: {
      es6: true,
      browser: true,
      node: true,
    },
    globals: {
      $: "readonly",
      element: "readonly",
      by: "readonly",
      protractor: "readonly",
      browser: "readonly",
    },
    parserOptions: {
      ecmaVersion: 8,
    },
    settings: {
      propWrapperFunctions: [
        // The names of any function used to wrap propTypes, e.g. `forbidExtraProps`. If this isn't set, any propTypes wrapped in a function will be skipped.
        'forbidExtraProps',
        { property: 'freeze', object: 'Object' },
        { property: 'myFavoriteWrapper' },
      ],
      linkComponents: [
        // Components used as alternatives to <a> for linking, eg. <Link to={ url } />
        'Hyperlink',
        { name: 'Link', linkAttribute: 'to' },
      ],
    },
   }