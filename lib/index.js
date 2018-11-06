const env = (dev, prod) => (...args) => {
  switch (process.env.NODE_ENV) {
    case 'dev':
      return dev(...args);
    case 'prod':
      return prod(...args);
    default:
      return null;
  }
};

const onDbConnectDev = () => console.log(`\nDB running on ${process.env.MONGODB_URI}`);
const onServerConnectDev = () => console.log(`\nServer running on http://${process.env.HOSTNAME}:${process.env.PORT}`);

module.exports = {
  onDbConnection: env(onDbConnectDev),
  onServerConnection: env(onServerConnectDev),
};
