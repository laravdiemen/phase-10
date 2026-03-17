import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypeScript from "eslint-config-next/typescript";
import prettierRecommended from "eslint-plugin-prettier/recommended";

const eslintConfig = [
  ...nextCoreWebVitals,
  ...nextTypeScript,
  prettierRecommended,
  {
    rules: {
      "import/order": [
        "error",
        {
          groups: ["external", "internal"],
          pathGroups: [
            {
              pattern: "@/**",
              group: "internal",
              position: "after",
            },
          ],
          pathGroupsExcludedImportTypes: ["external"],
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
          warnOnUnassignedImports: true,
          "newlines-between": "always",
        },
      ],
    },
  },
  {
    ignores: ["node_modules/**", "out/**", ".next/**"],
  },
];

export default eslintConfig;
