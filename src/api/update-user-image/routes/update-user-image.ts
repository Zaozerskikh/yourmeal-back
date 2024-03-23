export default {
  routes: [
    {
      method: 'POST',
      path: '/update-user-image',
      handler: 'update-user-image.updateimg',
      config: {
        policies: ['global::is-owner']
      }
    }
  ]
}
