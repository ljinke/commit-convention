# commitlint setup

## Target: the most common commit convention

```
type(scope?): subject
body?
footer?
```

## How

### Install commitlint

```
npm install -D @commitlint/{cli,config-conventional}
echo "module.exports = {extends: ['@commitlint/config-conventional']};" > commitlint.config.js
```

### Install husky

```
npm install --save-dev husky
```

Create `.huskyrc` and past:

```
{
  "hooks": {
    "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
  }
}
```

### Extend the `commitlint.config.js`

```
module.exports = {
  extends: ["@commitlint/config-conventional"], // type:
  rules: {
    // Place your rules here
    "type-enum": [2, "always", ["chore", "feat", "fix", "test"]],
    "scope-enum": [2, "always", ["core", "api"]], // error if scope is given but not in provided list
    "header-max-length": [2, "always", 100],
  },
  parserPreset: './parser-preset',
};
```

Sample to dynamically load the scopes:

```
const { readdirSync } = require('fs');

const getPackageNames = (source = 'packages') =>
    readdirSync(source, { withFileTypes: true })
        .filter(file => file.isDirectory())
        .map(dir => dir.name);

module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'scope-enum': () => {
            const scopes = getPackageNames();
            return [2, 'always', scopes];
        },
    },
};
```

### Test

```
npx commitlint --from HEAD~3 --to HEAD --verbose
npx commitlint "foo: invalid message"
```

```
git commit -m "foo: this will fail"
git commit -m "chore: lint on commitmsg"

```
