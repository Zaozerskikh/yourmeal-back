// @ts-nocheck
import { Context } from 'koa';

export default {
  async updateimg(ctx: Context, next: () => Promise<any>) {
    const { userId } = ctx.request.query;

    try {
      if (ctx.is('multipart')) {
        const image = ctx.request.files['image'];
        const uploadFile = await strapi.plugins.upload.services.upload.upload({
          data: {},
          files: {
            path: image.path,
            name: image.name,
            type: 'image/jpeg',
            size: image.size,
          },
        });

        const updatedUser = await strapi
          .query('plugin::users-permissions.user')
          .update({
            where: { id: userId },
            data: {
              image: uploadFile
            },
            populate: ['image']
          })
        console.log(updatedUser.image.url)
        ctx.body = { newImageUrl: updatedUser.image.url }
      } else {
        ctx.body = {err: true }
      }

    } catch (error) {
      console.log(error)
      ctx.status = 500;
      ctx.body = { error: error };
    }

    await next();
  },
};
