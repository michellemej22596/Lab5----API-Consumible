module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "airbnb-base"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.js",
                ".eslintrc.cjs"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
        "semi": ["error", "never"], // Esta regla prohíbe el uso de punto y coma en el código
        "camelcase": "off", // Deshabilitar la regla camelCase por bd
 	"import/extensions": "off"
    }
}

