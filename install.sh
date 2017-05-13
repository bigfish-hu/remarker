#!/usr/bin/env bash

echo -e "====== START: $(date +"%T")";
echo -e "\n--- docker-compose build ---";
docker-compose build &&
echo -e "\n--- docker-compose up -d ---";
docker-compose up -d &&
echo -e "\n--- composer install ---";
docker exec remarker_web_1 su - composer -c "cd /var/www/remarker && composer install" &&
echo -e "\n--- change owner of storage/ and bootstrap/cache ---";
docker exec remarker_web_1 chown -R www-data storage/ bootstrap/cache &&
echo -e "\n--- migrate db ---";
docker exec remarker_web_1 php artisan migrate &&
echo -e "\n--- seed db ---";
docker exec remarker_web_1 php artisan db:seed &&
echo -e "\n--- publish vendor files ---";
docker exec remarker_web_1 su - composer -c "cd /var/www/remarker && php artisan vendor:publish" &&
echo -e "\n--- admin build start ---";
cd admin &&
echo -e "\n--- npm install ---";
npm install &&
echo -e "\n--- build admin ---";
npm run build &&
cd ..