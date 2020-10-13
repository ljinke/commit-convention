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
};
```
