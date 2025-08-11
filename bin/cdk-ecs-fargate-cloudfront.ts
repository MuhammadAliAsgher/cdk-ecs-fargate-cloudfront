#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CdkNginxStack } from '../lib/cdk-ecs-fargate-cloudfront-stack';

  
const app = new cdk.App();
new CdkNginxStack(app, 'CdkNginxStack', {
  env: {
    account: process.env.AWS_ACCOUNT_ID,
    region: process.env.AWS_REGION,
  },
});