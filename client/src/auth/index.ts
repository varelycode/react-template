import {
  CognitoIdentityClient,
  CreateIdentityPoolCommand,
} from "@aws-sdk/client-cognito-identity";

const params = {
  IdentityPoolName: "us-east-2_g2xFYohtO",
  AllowUnauthenticatedIdentities: undefined,
};

export const command = new CreateIdentityPoolCommand(params);

//https://nosugarpls/login?response_type=code&client_id=119b2dtmvsmhg7d2rhet74q32p&redirect_uri=http://localhost:3000

export const cognitoClient = new CognitoIdentityClient({ region: "US-west" });
