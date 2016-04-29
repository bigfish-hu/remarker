FROM nginx:1.9.14
MAINTAINER Mate Kocsis <mate.kocsis@bigfish.hu>

COPY . /build

RUN chmod -R ug+x /build && \
    sync && \
    export `cat /build/.env` && \
    /build/docker/nginx/build.sh && \
    rm -R /build

CMD ["nginx"]
