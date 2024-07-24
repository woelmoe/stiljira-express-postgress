FROM node:18.16.1-alpine

WORKDIR usr/src/back

COPY . .

RUN yarn install
RUN yarn build

EXPOSE 3000
CMD [ "tsc" ]
CMD [ "node", "dist/index.js" ]
