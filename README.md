# 6m-cloud-3.13-secret-management

The Serverless Framework to deploy an AWS Lambda function with an HTTP API endpoint. 

1. `service: SimonOng-node-http-api-project`: This sets the name of your Serverless service, which will be used when deploying and managing the AWS resources associated with this service.

2. `frameworkVersion: '3'`: Specifies the version of the Serverless Framework being used. In this case, it's version 3.

3. `provider`: This section specifies the AWS provider configuration:

   - `name: aws`: Indicates that you are deploying to the AWS cloud.
   - `runtime: nodejs18.x`: Specifies the runtime environment for your Lambda function. It's set to Node.js 18.x in this case.
   - `region: ap-southeast-1`: Specifies the AWS region where your resources will be deployed. In this case, it's the Asia Pacific (Singapore) region.

4. `functions`: This section defines the AWS Lambda function and its associated settings:

   - `api`: This is the name of the Lambda function.
   - `handler: index.handler`: Specifies the JavaScript file (`index.js`) and the handler function (`handler`) within that file that will be executed when this Lambda function is triggered.

   - `events`: Defines the events that trigger the Lambda function. In this case, there is one event defined using `httpApi`. This event configures an HTTP API endpoint with a specific path and HTTP method (GET). The endpoint is defined at the root path (`/`).

   - `environment`: Specifies environment variables for the Lambda function. It sets an environment variable named `ACCESS_KEY` and assigns its value from an AWS Systems Manager (SSM) parameter named `SimonOng-Parameter` using `${ssm:SimonOng-Parameter}`. This allows the Lambda function to access the value stored in the SSM parameter.

5. `plugins`: Lists the plugins used by this Serverless service. In this case, it includes the `serverless-offline` plugin, which is often used for local development and testing of AWS Lambda functions and APIs without deploying to AWS.

The Lambda function named `api`, associates it with an HTTP API endpoint at the root path, and provides it with an environment variable `ACCESS_KEY` sourced from an SSM parameter. The function is configured to run in the `nodejs18.x` runtime in the `ap-southeast-1` region of AWS. The `serverless-offline` plugin is also included to facilitate local development and testing.
