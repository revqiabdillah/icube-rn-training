import * as userSchema from '../schema/user';
import {mutate} from '../api';

export const login = data => {
  return mutate(userSchema.login, data);
};

export const register = data => {
  return mutate(userSchema.register, data);
};

export const sendOtp = data => {
  return mutate(userSchema.sendOtpRegister, data);
};

export const verifOtp = data => {
  return mutate(userSchema.verifOtpRegister, data);
};
