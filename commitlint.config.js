module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    // Place your rules here
    "scope-enum": [2, "always", ["core", "api"]], // error if scope is given but not in provided list
  },
};
