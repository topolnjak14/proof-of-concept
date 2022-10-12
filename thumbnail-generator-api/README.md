# Code Challenge: Thumbnail Generator API

## Goal
Build a simple API that generates thumbnails from a source image

## Requirements
- The API should provide at least 1 endpoint where the user will be able to POST the original image
- The API must **ONLY** accept PNG and JPEG files
- The API must reject input file bigger than **11mb**
- The API should give the user 3 new images with the following dimensions
  - 400x300
  - 160x120
  - 120x120

## Grading Guidelines

### MVP (40 points)
- Every requirement is met
- The solution runs on our enviroment
- Tech Stack: **Node.js v16** (or highest) using **Typescript**
- Any ENV specific value should be configurable and documented
- Everything should work after following a simple README
- The code should be clear and easy to read / debug

### Nice moves (5 points each)
- It includes an **Architecture Diagram** to present your solution
- It includes **Swagger** or **Postman** documentation 
- It includes configuration files / scripts for deploying it on **AWS**
- It's serverless! (either **AWS Lambda + API Gateway** + **Dynamodb**)
- It relies on **CDK v2** or **Serverless Framework** (Infrastructure as Code)
- It's Dockerized for local development / testing
- It leverages cloud services (ie: AWS Cognito, Lambda, API Gateway, EventBridge, S3, SNS, SQS, etc...)
- It's asynchronic
- It's fast (<~500ms after upload finishes)
- It includes some kind of testing (unit tests, integration tests, etc) with at least 70% coverage
- It has an auth implementation (recommended: AWS Cognito or Auth0)

### Wait, WHAT?! (10 points each)
- It includes a configuration file / script to setup a CI/CD process on AWS
- It includes three different kinds of tests (unit, integration and performance)