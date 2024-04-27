FROM openproject/openproject:14
ENV OPENPROJECT_SECRET_KEY_BASE=secret
ENV OPENPROJECT_HOST__NAME=localhost:8080
ENV OPENPROJECT_HTTPS=false
ENV OPENPROJECT_DEFAULT__LANGUAGE=en
ENV OPENPROJECT_RAILS__RELATIVE__URL__ROOT=/openproject
COPY ./enterprise_token.rb /app/app/models/enterprise_token.rb
EXPOSE 80