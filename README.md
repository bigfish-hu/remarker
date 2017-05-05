# Remarker  

| | Admin | Backend |
|--------|-------|---------|
|Code Quality|[![Codacy Badge](https://api.codacy.com/project/badge/Grade/8ffb76d1ea2044f38272692833a40c1b)](https://www.codacy.com/app/nadapapa/remarker?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=bigfish-hu/remarker&amp;utm_campaign=Badge_Grade) [![Code Climate](https://codeclimate.com/github/bigfish-hu/remarker/badges/gpa.svg)](https://codeclimate.com/github/bigfish-hu/remarker) |[![SensioLabsInsight](https://insight.sensiolabs.com/projects/5672bd1c-eaa1-4424-92bc-4cfd4cebfb2b/small.png)](https://insight.sensiolabs.com/projects/5672bd1c-eaa1-4424-92bc-4cfd4cebfb2b) [![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/bigfish-hu/remarker/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/bigfish-hu/remarker/?branch=master) [![StyleCI](https://styleci.io/repos/57279861/shield?branch=master)](https://styleci.io/repos/57279861)
|Build      |         |[![Build Status](https://travis-ci.org/bigfish-hu/remarker.svg?branch=master)](https://travis-ci.org/bigfish-hu/remarker)|
|Coverage   |         |[![Code Coverage](https://scrutinizer-ci.com/g/bigfish-hu/remarker/badges/coverage.png?b=master)](https://scrutinizer-ci.com/g/bigfish-hu/remarker/?branch=master)| 
|Dependencies|[![dependencies Status](https://david-dm.org/bigfish-hu/remarker/status.svg?path=admin)](https://david-dm.org/bigfish-hu/remarker?path=admin)|[![Dependency Status](https://www.versioneye.com/user/projects/5908d9bf82470b0069c268f6/badge.svg?style=flat-square)](https://www.versioneye.com/user/projects/5908d9bf82470b0069c268f6)|

[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://github.com/bigfish-hu/remarker/blob/master/LICENSE)

## Development setup  

  requirements: npm, docker-compose  

- `docker-compose build`
- `docker-compose up -d`
- `docker exec -it remarker_web_1 composer install`
- `npm install`
- `npm run build`  
- `docker exec -it remarker_web_1 php artisan migrate`  
- `docker exec -it remarker_web_1 php artisan db:seed`

Now you can login at `http://localhost:8080/admin` with the username `admin@remarker.com` and the password `secret`.  

## Try it out  
If you have a GitHub account you can deploy Remarker to a temporary cloud server (free for 2 hours). Thanks to [Dply.co](https://dply.co/)
  
[![Dply](https://dply.co/b.svg)](https://dply.co/b/DMNqhtCG) 
  
(The deploy process takes ~8 minutes)  
After the deployment go to `server_IP_address/admin` and log in with the username `admin@remarker.com` and the password `secret`.  
