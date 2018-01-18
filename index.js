/*
 * This file is part of the @cowtech/tslint-config npm package. Copyright (C) 2017 and above Shogun <shogun@cowtech.it>.
 * Licensed under the MIT license, which can be found at http://www.opensource.org/licenses/mit-license.php.
 */

const MAX_LINE_LENGTH = 160;
const MAX_COMPLEXITY = 25;
const MAGIC_NUMBERS = [
  -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, // Commonly used base numbers
  25, 28, 30, 50, 100, 250, 1000, 5000, 10000, 1E6, 1E9, 3600, // Commonly used date/time related numbers
  // Common HTTP status codes
  200, 201, 202, 204, 205, 206,
  300, 301, 302, 304, 307, 308,
  400, 401, 403, 404, 405, 406, 408, 409, 410, 415, 422, 429, 499,
  500, 501, 502, 504, 599
];

module.exports = {
  rules: {
    // TypeScript Specific
    'adjacent-overload-signatures': true,
    'ban-comma-operator': true,
    'ban-types': false,
    'member-access': false,
    'member-ordering': [
      true,
      'public-static-field', 'protected-static-field', 'private-static-field',
      'public-static-method', 'protected-static-method', 'private-static-method',
      'public-instance-field', 'protected-instance-field', 'private-instance-field',
      'constructor',
      'public-instance-method', 'protected-instance-method', 'private-instance-method'
    ],
    'no-any': false,
    'no-empty-interface': true,
    'no-import-side-effect': false,
    'no-inferrable-types': false,
    'no-internal-module': false,
    'no-magic-numbers': [true, ...MAGIC_NUMBERS],
    'no-namespace': false,
    'no-non-null-assertion': false,
    'no-parameter-reassignment': false,
    'no-reference': true,
    'no-unnecessary-type-assertion': false,
    'no-var-requires': false,
    'only-arrow-functions': false,
    'prefer-for-of': true,
    'promise-function-async': false,
    'typedef': true,
    'typedef-whitespace': [
      true,
      {'call-signature': 'nospace', 'index-signature': 'nospace', 'parameter': 'nospace', 'property-declaration': 'nospace', 'variable-declaration': 'nospace'},
      {'call-signature': 'space', 'index-signature': 'space', 'parameter': 'space', 'property-declaration': 'space', 'variable-declaration': 'space'}
    ],
    'unified-signatures': true,
    // Functionality
    'await-promise': true,
    'ban': false,
    'curly': false,
    'encoding': true,
    'file-header': false,
    'forin': true,
    'import-blacklist': false,
    'label-position': true,
    'no-arg': true,
    'no-bitwise': true,
    'no-conditional-assignment': true,
    'no-console': false,
    'no-construct': true,
    'no-debugger': true,
    'no-duplicate-super': true,
    'no-duplicate-switch-case': true,
    'no-duplicate-variable': [true, 'check-parameters'],
    'no-dynamic-delete': false,
    'no-empty': true,
    'no-eval': true,
    'no-floating-promises': true,
    'no-for-in-array': true,
    'no-implicit-dependencies': true,
    'no-inferred-empty-object-type': true,
    'no-invalid-template-strings': true,
    'no-invalid-this': false,
    'no-misused-new': true,
    'no-null-keyword': false,
    'no-object-literal-type-assertion': true,
    'no-return-await': true,
    'no-shadowed-variable': true,
    'no-sparse-arrays': true,
    'no-string-literal': false,
    'no-string-throw': true,
    'no-submodule-imports': false,
    'no-switch-case-fall-through': false,
    'no-this-assignment': [true, {'allow-destructuring': true}],
    'no-unbound-method': false,
    'no-unnecessary-class': true,
    'no-unsafe-any': false,
    'no-unsafe-finally': true,
    'no-unused-expression': true,
    'no-unused-variable': false, // Enable this is one of -–noUnusedParameters or -–noUnusedLocals is NOT set
    'no-use-before-declare': true,
    'no-var-keyword': true,
    'no-void-expression': false,
    'radix': true,
    'restrict-plus-operands': true,
    'strict-boolean-expressions': false,
    'strict-type-predicates': false,
    'switch-default': false,
    'triple-equals': true,
    'use-default-type-parameter': true,
    'use-isnan': true,
    // Maintainability
    'cyclomatic-complexity': [true, MAX_COMPLEXITY],
    'eofline': true,
    'indent': [true, 'spaces'],
    'linebreak-style': [true, 'LF'],
    'max-classes-per-file': false,
    'max-file-line-count': false,
    'max-line-length': [true, MAX_LINE_LENGTH],
    'no-default-export': false,
    'no-duplicate-imports': true,
    'no-mergeable-namespace': true,
    'no-require-imports': false,
    'object-literal-sort-keys': false,
    'prefer-const': true,
    'prefer-readonly': false,
    'trailing-comma': [true, {multiline: 'never', singleline: 'never'}],
    // Style
    'align': [true, 'parameters', 'statements'],
    'array-type': [true, 'generic'],
    'arrow-parens': [true, 'ban-single-arg-parens'],
    'arrow-return-shorthand': [true, 'multiline'],
    'binary-expression-operand-order': true,
    'callable-types': true,
    'class-name': true,
    'comment-format': [true, 'check-space'],
    'completed-docs': false,
    'file-header': false,
    'import-spacing': true,
    'interface-name': false,
    'interface-over-type-literal': true,
    'jsdoc-format': [true, 'check-multiline-start'],
    'match-default-export-name': false,
    'newline-before-return': true,
    'newline-per-chained-call': false,
    'new-parens': true,
    'no-angle-bracket-type-assertion': true,
    'no-boolean-literal-compare': true,
    'no-consecutive-blank-lines': true,
    'no-irregular-whitespace': true,
    'no-parameter-properties': true,
    'no-redundant-jsdoc': true,
    'no-reference-import': true,
    'no-trailing-whitespace': true,
    'no-unnecessary-callback-wrapper': true,
    'no-unnecessary-initializer': true,
    'no-unnecessary-qualifier': false,
    'number-literal-format': true,
    'object-literal-key-quotes': [true, 'as-needed'],
    'object-literal-shorthand': true,
    'one-line': [true, 'check-catch', 'check-finally', 'check-else', 'check-open-brace'],
    'one-variable-per-declaration': true,
    'ordered-imports': false,
    'prefer-conditional-expression': true,
    'prefer-function-over-method': false,
    'prefer-object-spread': true,
    'prefer-method-signature': true,
    'prefer-switch': ['true', {'min-cases': 3}],
    'prefer-template': [true, 'allow-single-concat'],
    'quotemark': [true, 'single', 'jsx-double', 'avoid-escape', 'no-template'],
    'return-undefined': true,
    'semicolon': [true, 'always'],
    'space-before-function-paren': [true, {anonymous: 'never', named: 'never', asyncArrow: 'always', method: 'never', constructor: 'never'}],
    'space-within-parens': false,
    'switch-final-break': [true, 'always'],
    'variable-name': [true, 'check-format', 'allow-leading-underscore', 'allow-pascal-case', 'allow-snake-case'],
    'whitespace': [true, 'check-decl', 'check-operator', 'check-rest-spread', 'check-separator', 'check-type', 'check-type-operator', 'check-typecast']
  }
};
