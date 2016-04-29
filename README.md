# BIG FISH Remarker

## Install

- Copy `.env.dist` to `.env` and fill in the missing values

- `docker build`

- `docker compose-up -d`

- `docker exec -i remarker-php-fpm /bin/bash -c "(cd api && composer install) && (cd admin && composer install)"`

## Usage
