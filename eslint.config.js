import js from '@eslint/js'
import stylistic from '@stylistic/eslint-plugin'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: {
      '@stylistic': stylistic,
    },
    rules: {
      '@stylistic/padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: '*',           next: 'return'        },
        { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*'   },
        { blankLine: 'always', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
        { blankLine: 'always', prev: 'directive',   next: '*'             },
        { blankLine: 'any',    prev: 'directive',   next: 'directive'     },
        { blankLine: 'always', prev: 'block-like',  next: '*'             },
        { blankLine: 'always', prev: '*',           next: 'block-like'    },
        { blankLine: 'always', prev: 'import',      next: '*'             },
        { blankLine: 'any',    prev: 'import',      next: 'import'        },
      ],
    },
  },
)
