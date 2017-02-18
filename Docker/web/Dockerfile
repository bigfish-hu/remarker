#
# Web node
#
FROM debian:jessie
MAINTAINER BIG FISH <cafe@bigfish.hu>

ENV DEBIAN_FRONTEND noninteractive

RUN \
  apt-get update && \
  apt-get install -y \
  curl \
  git \
  wget

RUN echo "deb http://packages.dotdeb.org jessie all" >> /etc/apt/sources.list.d/dotdeb.org.list && \
    echo "deb-src http://packages.dotdeb.org jessie all" >> /etc/apt/sources.list.d/dotdeb.org.list && \
    wget -O- http://www.dotdeb.org/dotdeb.gpg | apt-key add -

#
# Install packages
#
RUN apt-get update && \
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
                       php7.0-xdebug \
                       php7.0-sqlite3 \
                       nginx

#
# PHP config
#
ADD ./conf/php/000-php-settings.ini /etc/php7.0/mods-available/000-php-settings.ini
ADD ./conf/php/000-php-settings.ini /etc/php7.0/cli/conf.d/000-php-settings.ini
ADD ./conf/php/000-php-settings.ini /etc/php7.0/fpm/conf.d/000-php-settings.ini


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
CMD service php7.0-fpm start && nginx
ENV DEBIAN_FRONTEND teletype