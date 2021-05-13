import {
  CognitoIdentityProviderClient,
  AddCustomAttributesCommand,
  CognitoIdentityProviderClientConfig,
  AdminCreateUserCommandInput,
  AdminCreateUserCommand,
  CognitoIdentityProvider,
} from "@aws-sdk/client-cognito-identity-provider";

const params: CognitoIdentityProviderClientConfig = {
  region: "us-west",
};

const input: AdminCreateUserCommandInput = {
  Username: "sillygirl",
  UserPoolId: "us-west-1_MjG3zr8cy",
  UserAttributes: [{ Name: "email", Value: "virosas@ucdavis.edu" }],
};

// const config: CognitoIdentityProviderClientConfig = {
//   region: "us-west",
//   credentials,
// };

const client = new CognitoIdentityProviderClient(params);
// export const command = new AddCustomAttributesCommand(params);

const command = new AdminCreateUserCommand(input);

export const data = client.send(command);

//https://nosugarpls/login?response_type=code&client_id=119b2dtmvsmhg7d2rhet74q32p&redirect_uri=http://localhost:3000
