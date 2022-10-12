# Code Challenge: Thumbnail Generator UI

## Goal
Build a simple UI/UX for a thumbnail generator.

## Requirements
- The UI let's you upload files through AJAX
- You should mock the required endpoints (or solve and integrate with: `thumbnail-generator-api`)
- It should preview the image that is going to be processed
- It should give the users the urls of the new thumbnails and preview them

## Grading Guidelines

### MVP (40 points)
- Every requirement is met
- The solution runs on our enviroment
- Tech Stack: **React v18** (or highest) using **Typescript**
- It leverages some design framework: Material UI (https://mui.com/)
- Any ENV specific value should be configurable and documented
- Everything should work after following a simple README (ideally: npm install; npm start)
- The code should be clear and easy to read / debug
- It's responsive and works well with desktops, phones and tablets

### Nice moves (5 points each)
- It includes transitions, loaders, progress status
- It includes drag-and-drop functionality + visual cues to help the user
- It's Dockerized for local development / testing
- It includes some kind of testing (unit tests, integration tests, etc) with at least 70% coverage
- Includes a simple login (recommended: AWS Cognito or Auth0)

### Wait, WHAT?! (10 points each)
- It uses Redux extensively (https://redux-observable.js.org/)
- It works also with the device camera
- It include a croping area / resize helper