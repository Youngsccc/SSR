module.exports = {
  extends: ['@commitlint/config-angular'],
  rules: {
    // type的可选类型
    'type-enum': [
      2,
      'always',
      ['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'chore', 'revert'],
    ],
    // type需小写
    'type-case': [2, 'always', 'lowerCase'],
    // type不能为空
    'type-empty': [2, 'never'],
    // subject不以‘.’结尾
    'subject-full-stop': [2, 'never', '.'],
  },
};
