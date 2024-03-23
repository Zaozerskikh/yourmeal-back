export default {
  routes: [
    {
      method: 'GET',
      path: '/email-check',
      handler: 'email-check.check',
      config: {
        auth: false
      }
    }
  ]
}
