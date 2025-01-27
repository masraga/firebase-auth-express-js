
# Fireauth expressjs

its an example for simple firebase authentication with firebase admin SDK and expressjs. this starter kit is important if you want to deep dive to firebase with nodejs.


## Features

- Register user to firebase authentication
- Login to get user token
- Validate user token


## Run Locally

Clone this project and make sure you already create firebase project in [firebase console](https://console.firebase.google.com/u/0/). After that, in your firebase console project, download [service account](https://stackoverflow.com/questions/40799258/where-can-i-get-serviceaccountcredentials-json-for-firebase-admin) file in json.


Open code in your text editor and run command in terminal
```bash
npm i
```
Replace service-account.json in root directory with your [service account](https://stackoverflow.com/questions/40799258/where-can-i-get-serviceaccountcredentials-json-for-firebase-admin). Rename env file with .env, .env file have several variable, it is look like:
```bash
PORT=<your application port>

FIREBASE_HTTP_URL=<Firebae http endpoint is used for call firebase function directly without any dependencies>
FIREBASE_API_KEY=<your firebase project api key>
```
you can find FIREBASE_API_KEY in your [firebase console](https://console.firebase.google.com/u/0/)
```bash
Settings > General > Web API Key
```

## API Documentation

[Get postman API docs](https://documenter.getpostman.com/view/15555730/2sAYX3qiDR)

