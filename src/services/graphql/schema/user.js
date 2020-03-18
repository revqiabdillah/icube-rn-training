/* eslint-disable prettier/prettier */
import {gql} from 'apollo-boost';

export const login = gql`
  mutation generateCustomerToken($username: String!, $password: String!) {
    generateCustomerTokenCustom(username: $username, password: $password) {
      token
    }
  }
`;

export const register = gql`
  mutation createCustomer(
    $email: String!,
    $password: String!,
    $firstName: String,
    $lastName: String,
    $phoneNumber: String!,
    $otp: String!
  ) {
    createCustomerCustom(
      input: {
        email: $email,
        password: $password,
        firstname: $firstName,
        lastname: $lastName,
        phonenumber: $phoneNumber,
        otp: $otp
      }
    ) {
      customer {
        email
      }
      token
    }
  }
`;

export const sendOtpRegister = gql`
  mutation sendOtp($phoneNumber: String!) {
    requestOtpRegister(phonenumber: $phoneNumber) {
      info
    }
  }
`;

export const verifOtpRegister = gql`
mutation verifOtp($phoneNumber: String!, $otp: String!) {
  checkOtpRegister(phonenumber: $phoneNumber, otp: $otp){
    is_valid_otp
  }
}
`;
