# Email Service

## Requirement

### Installation :
1. Download MongoDB   
   https://www.mongodb.com/download-center?jmp=nav#enterprise
   Choose package based on platform and follow instruction for installation
2. Download NodeJs   
   https://nodejs.org/en/
   and follow instruction for instruction
3. Install PM2   
   http://pm2.keymetrics.io/docs/usage/quick-start/

### How To :
1. Setup environtment
   - Go to root directory (path/ranger)
   - vim env.json, then change envi based on your platform (like mongoDB, sendGrid key, etc)
2. then run on terminal using;  
   pm2 start env.json --env development


### API


