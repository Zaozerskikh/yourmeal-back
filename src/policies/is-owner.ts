export default (ctx, config, { strapi }) => {
  try {
    const authenticatedUserId = ctx.state.user.id.toString();
    const targetEntityId = ctx.request.query.userId.toString();

    return authenticatedUserId && targetEntityId && authenticatedUserId === targetEntityId
  } catch (err) {
    return false
  }
};
