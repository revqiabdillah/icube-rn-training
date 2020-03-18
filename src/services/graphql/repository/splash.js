import * as splashSchema from '../schema/splash';
import {query} from '../api';

export const getImg = () => {
  return query(splashSchema.image);
};
