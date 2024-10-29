import antfu from '@antfu/eslint-config'
import typescript from '@typescript-eslint/eslint-plugin'
import perfectionist from 'eslint-plugin-perfectionist'
import tailwindcss from 'eslint-plugin-tailwindcss'

const eslintConfig = {
    plugins: {
        '@typescript-eslint': typescript,
        perfectionist,
        tailwindcss,
    },
    rules: {
        ...perfectionist.configs['recommended-natural'].rules,
        'perfectionist/sort-interfaces': 'error',
        'vue/first-attribute-linebreak': 'off',
        'vue/html-closing-bracket-newline': 'off',
        'vue/attributes-order': 'off',
    },
    ignores: [
        './node_modules',
        './public',
        './storage',
        './utilities',
        '*.config.*js',
    ],
}

export default await antfu(
    {
        stylistic: {
            indent: 2,
        },
        css: true,
        json: true,
        jsonp: true,
        typescript: true,
        vue: true,
        yaml: false,
    },
    eslintConfig,
)
