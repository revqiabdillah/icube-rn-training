import {gql} from 'apollo-boost';

export const image = gql`
  query {
    getSplashScreen {
      images {
        mobile_image_url
      }
    }
  }
`;
