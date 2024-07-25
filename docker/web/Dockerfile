FROM node:18.16.1-alpine as builder

WORKDIR usr/src/front

COPY ./src/front .
COPY ./.env .

RUN yarn install
RUN yarn build

FROM nginx:alpine as production-build

COPY src/front/nginx.conf /etc/nginx/nginx.conf
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder usr/src/front/dist /usr/share/nginx/html/stiljira

EXPOSE 5173
ENTRYPOINT ["nginx", "-g", "daemon off;"]
