FROM node:18

WORKDIR usr/src/ap

COPY package*.json ./
RUN yarn install

COPY . .

EXPOSE 3000
CMD["yarn", "start"]


