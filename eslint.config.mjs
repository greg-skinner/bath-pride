import { defineConfig, globalIgnores } from "eslint/config";
import { fixupConfigRules, fixupPluginRules } from "@eslint/compat";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import _import from "eslint-plugin-import";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default defineConfig([globalIgnores([
    "**/node_modules/**/*.*",
    "**/*.svg",
    "**/out/**/*",
    "**/*.config.ts",
    "**/*.config.js",
    "**/*.demo.ts",
    "**/deprecated/*"
]), {
    extends: fixupConfigRules(compat.extends(
        "plugin:react/recommended",
        "plugin:import/typescript",
        "plugin:@typescript-eslint/recommended",
        "prettier",
        "plugin:eslint-comments/recommended",
    )),

    plugins: {
        "simple-import-sort": simpleImportSort,
        import: fixupPluginRules(_import),
    },

    languageOptions: {
        // globals: {
        //     ...globals.browser,
        // },

        parser: tsParser,
        ecmaVersion: 2018,
        sourceType: "module",

        parserOptions: {
            project: "./tsconfig.json",

            ecmaFeatures: {
                jsx: true,
            },

            tsconfigRootDir: "./",
        },
    },

    settings: {
        "import/parser": {
            "@typescript-eslint/parser": [".ts", ".tsx", ".d.ts"],
        },

        "import/resolver": {
            typescript: {
                project: "./tsconfig.json",
            },
        },

        react: {
            version: "17",
        },
    },

    rules: {
        "import/extensions": ["error", "ignorePackages", {
            ts: "never",
            "d.ts": "never",
            tsx: "never",
        }],

        "import/no-extraneous-dependencies": ["error", {
            devDependencies: ["**/*.stories.tsx", "**/*.test.tsx"],
        }],

        "import/no-cycle": "warn",
        "import/order": "off",
        "import/prefer-default-export": "off",
        "import/no-default-export": "error",

        "lines-between-class-members": ["error", "always", {
            exceptAfterSingleLine: true,
        }],

        "newline-before-return": "error",
        "no-restricted-syntax": ["error", "ForInStatement", "LabeledStatement", "WithStatement"],

        "no-plusplus": ["error", {
            allowForLoopAfterthoughts: true,
        }],

        "no-use-before-define": "off",
        "no-warning-comments": "warn",

        "simple-import-sort/imports": ["warn", {
            groups: [
                ["^react"],
                ["^\\u0000"],
                ["^"],
                ["^\\."],
                [".png", ".svg"],
                ["(\\.scss|classnames)"],
            ],
        }],

        "no-shadow": "off",
        "@typescript-eslint/no-shadow": "error",
        "@typescript-eslint/no-use-before-define": ["error"],

        "@typescript-eslint/no-unused-vars": ["warn", {
            ignoreRestSiblings: true,
        }],

        "@typescript-eslint/no-empty-object-type": "off",

        "eslint-comments/no-use": "warn",
        "eslint-comments/require-description": "error",
    },
}]);