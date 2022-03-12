module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '6ef1e6e8f6e0ff7e8d3ccaa416f92102'),
  },
});
