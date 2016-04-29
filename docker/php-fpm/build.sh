#!/usr/bin/env bash
set -e

export DOLLAR='$'
envsubst < /build/docker/php-fpm/config/custom-php.ini > /usr/local/etc/php/conf.d/00-custom-php.ini

envsubst < /build/docker/php-fpm/config/msmtprc > /etc/msmtprc
chown www-data:www-data /etc/msmtprc
chmod 600 /etc/msmtprc

envsubst < /build/docker/php-fpm/config/custom-php-fpm.conf > /usr/local/etc/php-fpm.d/zz-docker.conf
