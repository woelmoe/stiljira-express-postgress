FROM node:18

WORKDIR usr/src/app

COPY package*.json ./
RUN yarn install

COPY . .
RUN yarn build

EXPOSE 3000
CMD [ "tsc" ]
CMD [ "node", "dist/index.js" ]

