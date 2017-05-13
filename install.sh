#!/usr/bin/env bash

docker-compose build &&
docker-compose up -d &&
docker exec -it remarker_web_1 su - composer -c "cd /var/www/remarker && composer install" &&
docker exec -it remarker_web_1 php artisan migrate &&
docker exec -it remarker_web_1 php artisan db:seed &&
docker exec -it remarker_web_1 su - composer -c "cd /var/www/remarker && php artisan vendor:publish" &&
cd admin &&
npm install &&
npm run build &&
cd ..