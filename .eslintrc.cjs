module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:import/typescript",
        "plugin:astro/recommended",
        "prettier",
        "plugin:tailwindcss/recommended"
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        "react",
        "@typescript-eslint",
        "import",
        "tailwindcss"
    ],
    settings: {
        react: {
            version: "detect",
        }
    },
    rules: {
        indent: [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "tailwindcss/no-custom-classname": "off"
    },
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            extends: [
                "plugin:@typescript-eslint/recommended",
                "plugin:@typescript-eslint/recommended-requiring-type-checking",
                "plugin:@typescript-eslint/strict",
                "plugin:react/recommended",
                "plugin:react/jsx-runtime",
            ],
            parserOptions: {
                project: ['./tsconfig.json'],
                ecmaFeatures: {
                    jsx: true
                },
                ecmaVersion: 13,
                sourceType: "module",
                rules: {
                    "react/react-in-jsx-scope": "off"
                }
            },
        },
        {
            files: [
                "*.astro"
            ],
            parser: "astro-eslint-parser",
            parserOptions: {
                parser: "@typescript-eslint/parser",
                extraFileExtensions: [
                    ".astro"
                ]
            },
            rules: {}
        }
    ]
}
