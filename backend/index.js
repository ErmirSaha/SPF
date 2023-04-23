const { PORT } = require('./src/utils/config');
const logger = require('./src/utils/logger');

const app = require('./app');

app.listen(PORT, () => {
  logger.info(`server running at ${PORT}`);
});
