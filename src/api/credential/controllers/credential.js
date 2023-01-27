'use strict';

/**
 * A set of functions called "actions" for `credential`
 */

module.exports = {
  async login(ctx, next) {
      try {
          const { email, password } = ctx.request.query;
          const data = await strapi
              .service("api::credential.credential")
              .login(email, password);
          console.log(data, "data");

          ctx.body = data;
      } catch (err) {
          ctx.badRequest("Post report controller error", { moreDetails: err });
      }
  },
};
