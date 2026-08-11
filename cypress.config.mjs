export default {
  e2e: {
    allowCypressEnv: false,
    baseUrl: 'http://localhost:5173',
    supportFile: false,
    pageLoadTimeout: 300000,
    setupNodeEvents(on, config) {
      return config
    }
  }
}
