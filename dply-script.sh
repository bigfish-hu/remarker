#!/bin/bash
export DEBIAN_FRONTEND=noninteractive;

echo "--- add swap";
dd if=/dev/zero of=/root/myswapfile bs=1M count=2048;
chmod 600 /root/myswapfile;
mkswap /root/myswapfile;
swapon /root/myswapfile;


echo "--- initial apt update";
apt-get update;
apt-get -y upgrade;

echo "--- install curl, git, wget";
apt-get install -y curl git wget;

echo "--- add dotdeb";
echo "deb http://packages.dotdeb.org jessie all" >> /etc/apt/sources.list.d/dotdeb.org.list && \
echo "deb-src http://packages.dotdeb.org jessie all" >> /etc/apt/sources.list.d/dotdeb.org.list && \
wget -O- http://www.dotdeb.org/dotdeb.gpg | apt-key add -;

echo "--- set mysql password";
echo "mysql-server mysql-server/root_password password root" | debconf-set-selections;
echo "mysql-server mysql-server/root_password_again password root" | debconf-set-selections;

echo "--- install nodejs";
curl -sL https://deb.nodesource.com/setup_6.x -o nodesource_setup.sh;
bash nodesource_setup.sh;

echo "--- main apt install: php, nginx, mysql, nodejs";
apt-get update;
apt-get install -y php7.0-common \
                   php7.0-cli \
                   php7.0-fpm \
                   php7.0-curl \
                   php7.0-dom \
                   php7.0-gd \
                   php7.0-gmp \
                   php7.0-mcrypt \
                   php7.0-mbstring \
                   php7.0-mysql \
                   php7.0-simplexml \
                   php7.0-json \
                   nginx \
                   mysql-server \
                   nodejs;

echo "--- install composer";
cd /usr/local/bin \
    && wget -q https://getcomposer.org/download/1.0.0/composer.phar \
    && chmod ugo+rx composer.phar \
    && ln -s composer.phar composer;

echo "--- create db";
mysql --execute="create database remarker" --password=root;

echo "--- create directory";
mkdir -p /var/www;
chown -R www-data:www-data /var/www
cd /var/www;
rm -rf *;

echo "--- clone repo";
git clone https://github.com/bigfish-hu/remarker.git .;
cp .env.example .env;

echo "--- copy files";
cp Docker/web/conf/php/000-php-settings.ini /etc/php/7.0/mods-available/000-php-settings.ini;
cp Docker/web/conf/php/000-php-settings.ini /etc/php/7.0/cli/conf.d/000-php-settings.ini;
cp Docker/web/conf/php/000-php-settings.ini /etc/php/7.0/fpm/conf.d/000-php-settings.ini;
cp Docker/web/conf/nginx/nginx.conf /etc/nginx/nginx.conf;

rm -Rf /etc/nginx/conf.d/*;
rm -Rf /etc/nginx/sites-available/*;
rm -Rf /etc/nginx/sites-enabled/*;

cp Docker/web/conf/nginx/nginx-site.conf /etc/nginx/sites-available/default.conf;
ln -s /etc/nginx/sites-available/default.conf /etc/nginx/sites-enabled/default.conf;

echo "--- composer install";
composer install;

echo "--- run artisan commands";
php artisan migrate;
php artisan db:seed;

echo "--- npm install, build";
npm install;
npm run build;
