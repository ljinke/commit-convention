module.exports = {
  extends: ["@commitlint/config-conventional"], // type:
  rules: {
    // Place your rules here
    "type-enum": [2, "always", ["chore", "feat", "fix", "test", "docs"]],
    "scope-enum": [2, "always", ["core", "api"]], // error if scope is given but not in provided list
    "header-max-length": [2, "always", 100],
  },
};
