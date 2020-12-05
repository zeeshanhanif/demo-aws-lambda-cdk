#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { DemoLambda3Stack } from '../lib/demo-lambda3-stack';

const app = new cdk.App();
new DemoLambda3Stack(app, 'DemoLambda3Stack');
