# Indecision App

### Requirements

1. Node.js installed;
2. Yarn installed;

### Environment

1. Clone the repository;
2. Open the terminal and go to the indecision-app folder;
3. Execute: `yarn install`
4. Install live-server: `npm install -g live-server`
5. Install babe-cli: `npm install -g babel-cli@6.24.1`

### Development

1. To make babel compile in real-time the app: 
   1. Go to the indecision-app folder in terminal and run: `babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch`
2. To execute live-server to see the changes in real time: 
   1. Go to the indecion-app folder in terminal and run: `live-server public`

