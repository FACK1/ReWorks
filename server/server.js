const db = require('./database/dbConfig/dbConnection.js');
const app = require('./app');
require('env2')('config.env');

app.set('PORT', process.env.PORT || 3003);

db.on('connected', () => {
  app.listen(app.get('PORT'), () => {
    // eslint-disable-next-line no-console
    console.log(`The Server Is Up And Running On http://localhost:${app.get('PORT')}`);
  });
});
