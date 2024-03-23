export default {
  routes: [
    {
      method: 'POST',
      path: '/update-user-info',
      handler: 'update-user-info.setinfo',
      config: {
        policies: ['global::is-owner']
      }
    }
  ]
}
