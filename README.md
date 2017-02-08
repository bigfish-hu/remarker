# Remarker  

[![Dependency Status](https://www.versioneye.com/user/projects/589b641b6a7781004a93f8ca/badge.svg?style=flat-square)](https://www.versioneye.com/user/projects/589b641b6a7781004a93f8ca)

## Setup  

  requirements: npm, docker-compose  

- `docker-compose build`
- `docker-compose up -d`
- `docker exec -it remarker_web_1 composer install`
- `npm install`
- `npm run build`  
- `docker exec -it remarker_web_1 php artisan migrate`  
- `docker exec -it remarker_web_1 php artisan db:seed`

Now you can login at `http://localhost:8080/admin/login` with the username `admin@gmail.com` and the password `secret`.  
