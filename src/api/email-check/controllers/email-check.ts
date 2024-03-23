// @ts-nocheck
import { Context } from 'koa';

export default {
  async check(ctx: Context, next: () => Promise<any>) {
    const { email } = ctx.query;

    try {
      const user = await strapi
        .query('plugin::users-permissions.user')
        .findOne({
          where: {
            email: email
          }
        });

      ctx.body = { exists: !!user };
    } catch (error) {
      console.error('Error checking email existence:', error);
      ctx.status = 500;
      ctx.body = { error: 'Internal Server Error' };
    }

    await next();
  },
};
