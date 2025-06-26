const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // Forneça o caminho para sua aplicação Next.js para carregar next.config.js e arquivos .env
  dir: './',
})

// Adicione qualquer configuração customizada a ser passada para o Jest
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/*.test.{js,jsx,ts,tsx}',
    '!src/**/*.spec.{js,jsx,ts,tsx}',
    '!src/**/__tests__/**',
    '!src/**/types/**',
    '!src/**/templates/**',
    '!src/constants/**',
    '!src/app/layout.tsx',
    '!src/app/**/layout.tsx',
    '!src/app/page.tsx',
    '!src/app/**/page.tsx',
  ],
  coverageDirectory: 'coverage',
  coverageReporters: [
    'text',
    'text-summary',
    'lcov',
    'html'
  ],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0
    }
  },
  transformIgnorePatterns: [
    '/node_modules/(?!(jose)/)',
  ],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
}

// createJestConfig é exportado dessa forma para garantir que next/jest possa carregar a configuração do Next.js, que é assíncrona
module.exports = createJestConfig(customJestConfig)
