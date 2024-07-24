#FROM node:18.16.1-alpine
#
#WORKDIR usr/src/app
#
#COPY package*.json ./
#RUN yarn install
#
#COPY . .
#RUN yarn build
#
#EXPOSE 3000
#CMD [ "tsc" ]
#CMD [ "node", "dist/index.js" ]


FROM node:18.16.1-alpine as builder
COPY ./src/front/dist ./src/front/dist

FROM nginx:alpine as production-build

COPY nginx.conf /etc/nginx/nginx.conf
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /src/front/dist /usr/share/nginx/html/stiljira

EXPOSE 3000
ENTRYPOINT ["nginx", "-g", "daemon off;"]
