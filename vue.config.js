module.exports = {
  pluginOptions: {
    apollo: {
      enableMocks: false,
      enableEngine: false,
    },
  },
  publicPath: process.env.NODE_ENV === "production" ? "/chat-room-frontend/" : "/",
};
