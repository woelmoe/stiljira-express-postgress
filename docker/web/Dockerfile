FROM node:18.16.1-alpine as builder

WORKDIR usr/src/front

COPY ./src/front .

RUN yarn install
RUN yarn build

FROM nginx:alpine as production-build

COPY src/front/nginx.conf /etc/nginx/nginx.conf
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder usr/src/front/dist /usr/share/nginx/html/stiljira

EXPOSE ${VITE_FRONT_PORT}
ENTRYPOINT ["nginx", "-g", "daemon off;"]
