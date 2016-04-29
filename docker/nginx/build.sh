#!/usr/bin/env bash
set -e

export DOLLAR='$'
envsubst < /build/docker/nginx/config/nginx.conf > /etc/nginx/nginx.conf
envsubst < /build/docker/nginx/config/default.conf > /etc/nginx/conf.d/default.conf
