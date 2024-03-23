export default ({ env }) => ({
  'users-permissions': {
    config: {
      jwt: {
        expiresIn: '30d',
      },
      register: {
        allowedFields: ["allow_pushes", "name", "image", "additional_info"],
      },
    },
  },
});
