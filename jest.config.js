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
}

// createJestConfig é exportado dessa forma para garantir que next/jest possa carregar a configuração do Next.js, que é assíncrona
module.exports = createJestConfig(customJestConfig)
