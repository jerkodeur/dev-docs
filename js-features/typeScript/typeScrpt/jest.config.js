module.exports = {
  transform: {
    '^.+\\.ts$': 'ts-jest' // Tout ce qui se termine par ts
  },
  moduleFileExtensions: [ // Extensions suivies pour les tests
    'js',
    'ts'
  ],
  testMatch: [ // dossier qui va contenir les tests de Jest
    "**/test/**/*.test.(ts|js)"
  ],
  testEnvironment: 'node' // environnement ou seront testés les tests
}