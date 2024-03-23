// @ts-nocheck
import { Context } from 'koa';

export default {
  async getinfo(ctx: Context, next: () => Promise<any>) {
    const { userId } = ctx.request.query;

    try {
      const user = await strapi
        .query('plugin::users-permissions.user')
        .findOne({
          where: {
            id: userId
          },
          populate: ['image']
        });

      const userDto = {
        id: user?.id,
        email: user?.email,
        name: user?.name,
        allowPushNotifications: user?.allow_pushes,
        userAdditionalInfo: user?.additional_info || '',
        image: user?.image?.url || '',
        bearerToken: ctx.request.headers.authorization?.replace('Bearer ', ''),
      }

      ctx.body = { ...userDto }
    } catch (error) {
      ctx.status = 500;
      ctx.body = { error: error };
    }

    await next();
  },
};
