FROM node:18.16.1-alpine

WORKDIR usr/src/back

COPY . .

RUN yarn install
RUN yarn build

EXPOSE ${VITE_FRONT_PORT}
CMD [ "tsc" ]
CMD [ "node", "dist/index.js" ]
