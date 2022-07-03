// import { Stack, StackProps } from 'aws-cdk-lib';
// import { Construct } from 'constructs';
// // import * as sqs from 'aws-cdk-lib/aws-sqs';

// export class CdkDemoStack extends Stack {
//   constructor(scope: Construct, id: string, props?: StackProps) {
//     super(scope, id, props);

//     // The code that defines your stack goes here

//     // example resource
//     // const queue = new sqs.Queue(this, 'CdkDemoQueue', {
//     //   visibilityTimeout: cdk.Duration.seconds(300)
//     // });
//   }
// }

// import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
// import { CdkDemoStack } from '../lib/cdk-demo-stack';



import { Vpc, SubnetType } from '@aws-cdk/aws-ec2';

export class CdkDemoStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    //Creation of the VPC object from the Vpc class
    const vpc = new Vpc(this, 'MainVpc', {

      //We define how many AZs to use
      maxAzs: 2,

      //We define a single subnet configuration per AZ.
      subnetConfiguration: [
        {

          //CIDR mask so 255.255.255.0
          cidrMask: 24,

          //Nmae of each of the subnets
          name: 'public-subnet',

          //The subnet type to be used - here we will have a public subnet. There are other options available here.
          subnetType: SubnetType.PUBLIC

        },
      ]

    });

  }
}