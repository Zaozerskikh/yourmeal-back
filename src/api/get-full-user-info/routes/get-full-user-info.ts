export default {
  routes: [
    {
      method: 'GET',
      path: '/get-full-user-info',
      handler: 'get-full-user-info.getinfo',
      config: {
        policies: ['global::is-owner']
      }
    }
  ]
}
