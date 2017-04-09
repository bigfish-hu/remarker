# Remarker  

[![SensioLabsInsight](https://insight.sensiolabs.com/projects/5672bd1c-eaa1-4424-92bc-4cfd4cebfb2b/small.png)](https://insight.sensiolabs.com/projects/5672bd1c-eaa1-4424-92bc-4cfd4cebfb2b)
[![Code Climate](https://codeclimate.com/github/bigfish-hu/remarker/badges/gpa.svg)](https://codeclimate.com/github/bigfish-hu/remarker)
[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/bigfish-hu/remarker/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/bigfish-hu/remarker/?branch=master)
[![Dependency Status](https://www.versioneye.com/user/projects/58e932d926a5bb002b54c1c2/badge.svg?style=flat-square)](https://www.versioneye.com/user/projects/58e932d926a5bb002b54c1c2)
[![Build Status](https://travis-ci.org/bigfish-hu/remarker.svg?branch=master)](https://travis-ci.org/bigfish-hu/remarker)
[![StyleCI](https://styleci.io/repos/57279861/shield?branch=master)](https://styleci.io/repos/57279861)
[![Code Coverage](https://scrutinizer-ci.com/g/bigfish-hu/remarker/badges/coverage.png?b=master)](https://scrutinizer-ci.com/g/bigfish-hu/remarker/?branch=master)

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
  
[![Dply](https://dply.co/b.svg)](https://dply.co/b/FDRxdPim)  
  
(The deploy process takes ~8 minutes)  
After the deployment go to `server_IP_address/admin` and log in with the username `admin@remarker.com` and the password `secret`.  
