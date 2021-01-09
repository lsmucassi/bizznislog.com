// module.exports = {
//   DB:
//     'mongodb+srv://cruixer:cruize5956@cruizelabs.rmkwy.mongodb.net/SharedMissionDB?retryWrites=true&w=majority',
//   SECRET_KEY: 'some very secret key'
// };

import {
  config
} from 'dotenv';

const {
  parsed
} = config();

export const {
  DB,
  APP_PORT,
  PROD,
  SECRET_KEY,
  APP_REFRESH_SECRET,
  IN_PROD = PROD === 'prod',
  BASE_URL = `http://localhost:${APP_PORT}`,
} = parsed;
