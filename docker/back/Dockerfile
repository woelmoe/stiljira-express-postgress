FROM node:18.16.1-alpine

WORKDIR usr/src/back

COPY . .

RUN yarn install
RUN yarn build

CMD [ "tsc" ]
CMD [ "node", "dist/index.js" ]
