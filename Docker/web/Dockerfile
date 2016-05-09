#
# Web node
#
FROM debian:jessie
MAINTAINER BIG FISH <cafe@bigfish.hu>

#
# Install packages
#
RUN apt-get update && \
    apt-get install -y php5-common \
                       php5-cli \
                       php5-fpm \
                       php5-curl \
                       php5-gd \
                       php5-mcrypt \
                       php5-memcached \
                       php5-mysql \
                       php5-json \
                       php5-xdebug \
                       nginx \
                       wget

#
# PHP config
#
ADD ./conf/php/000-php-settings.ini /etc/php5/mods-available/000-php-settings.ini
RUN ln -s /etc/php5/mods-available/000-php-settings.ini /etc/php5/cli/conf.d/000-php-settings.ini
RUN ln -s /etc/php5/mods-available/000-php-settings.ini /etc/php5/fpm/conf.d/000-php-settings.ini


#
# Set up www-data user
#
RUN usermod \
    -s /bin/bash \
    -d /home/www-data \
    www-data

#
# Get composer
#
RUN cd /usr/local/bin \
    && wget -q https://getcomposer.org/download/1.0.0/composer.phar \
    && chmod ugo+rx composer.phar \
    && ln -s composer.phar composer

#
# Nginx config
#
ADD ./conf/nginx/nginx.conf /etc/nginx/nginx.conf
RUN rm -Rf /etc/nginx/conf.d/*
RUN rm -Rf /etc/nginx/sites-available/*
RUN rm -Rf /etc/nginx/sites-enabled/*

ADD ./conf/nginx/nginx-site.conf /etc/nginx/sites-available/default.conf
RUN ln -s /etc/nginx/sites-available/default.conf /etc/nginx/sites-enabled/default.conf

RUN ln -sf /dev/stdout /var/log/nginx/access.log \
    && ln -sf /dev/stderr /var/log/nginx/error.log

#
# WWW docroot
#
RUN mkdir -p /var/www \
    && chown -R www-data:www-data /var/www

RUN rm -rf /var/www/*

WORKDIR /var/www
VOLUME ["/var/www"]

#
# Expose port(s)
#
EXPOSE 80 443

#
# Start services
#
CMD service php5-fpm start && nginx
