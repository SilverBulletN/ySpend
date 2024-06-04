FROM postgres:latest

ENV POSTGRES_DB=yspend
ENV POSTGRES_USER=admin
ENV POSTGRES_PASSWORD=123
ENV POSTGRES_HOST=postgres

COPY ./dataset /dataset

WORKDIR /docker-entrypoint-initdb.d/

