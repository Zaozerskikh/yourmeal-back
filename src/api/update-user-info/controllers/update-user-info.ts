// @ts-nocheck
import { Context } from 'koa';

export default {
  async setinfo(ctx: Context, next: () => Promise<any>) {
    const { userId } = ctx.request.query;
    const { name, allowPushNotifications, image, userAdditionalInfo } = ctx.request.body;

    try {
      await strapi
        .query('plugin::users-permissions.user')
        .update({
          where: { id: userId },
          data: {
            name: name,
            allow_pushes: allowPushNotifications,
            additional_info: userAdditionalInfo
          }
        });

      ctx.body = { message: 'User info updated successfully' };
    } catch (error) {
      console.log(error)
      ctx.status = 500;
      ctx.body = { error: error };
    }

    await next();
  },
};
