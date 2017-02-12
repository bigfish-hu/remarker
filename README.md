# Remarker  

[![Dependency Status](https://www.versioneye.com/user/projects/589b641b6a7781004a93f8ca/badge.svg?style=flat-square)](https://www.versioneye.com/user/projects/589b641b6a7781004a93f8ca)

## Development setup  

  requirements: npm, docker-compose  

- `docker-compose build`
- `docker-compose up -d`
- `docker exec -it remarker_web_1 composer install`
- `npm install`
- `npm run build`  
- `docker exec -it remarker_web_1 php artisan migrate`  
- `docker exec -it remarker_web_1 php artisan db:seed`

Now you can login at `http://localhost:8080/admin` with the username `admin@gmail.com` and the password `secret`.  

## Try it out  
If you have a GitHub account you can deploy Remarker to a temporary cloud server (free for 2 hours). Thanks to [Dply.co](https://dply.co/)
  
[![Dply](https://dply.co/b.svg)](https://dply.co/b/CFchajjE)  
  
(The deploy process takes ~8 minutes)  
After the deployment go to `server_IP_address/admin` and log in with the username `admin@gmail.com` and the password `secret`.  