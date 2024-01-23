module.exports = {
  types: [
    { value: "FEAT", name: "Feat: Add a new feature" },
    { value: "MODIFY", name: "Fix: Modify production, UI,UX code" },
    { value: "DOCS", name: "Docs: Add or update documentation" },
    {
      value: "STYLE",
      name: "Style: Add or update code format (not updation production, UI,UX code)",
    },
    {
      value: "REFACTOR",
      name: "Refactor: Code change that neither fixes a bug nor adds a feature",
    },
    {
      value: "TEST",
      name: "Test: Code change related with tests cases",
    },
    {
      value: "CHORE",
      name: "Chore: Changes to the build process or auxiliary tools and libraries such as documentation generation",
    },
    {
      value: "IMPROVEMENT",
      name: "IMPROVEMENT: Make minor improvements",
    },
  ],
  allowCustomScopes: false,
  allowBreakingChanges: ["feat", "fix"],
  skipQuestions: ["body"],
  subjectLimit: 100,
};
