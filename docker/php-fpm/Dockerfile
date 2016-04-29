FROM woohoolabs/php:2.3.1
MAINTAINER Mate Kocsis <mate.kocsis@bigfish.hu>

COPY . /build

USER root
RUN chmod -R ug+x /build && \
    sync && \
    export `cat /build/.env` && \
    /build/docker/php-fpm/build.sh && \
    rm -R /build

USER www-data
CMD php-fpm
