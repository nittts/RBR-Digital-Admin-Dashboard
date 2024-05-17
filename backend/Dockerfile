FROM node:alpine

WORKDIR /usr/src/app

COPY ["package.json", "yarn.lock"]

RUN yarn

COPY . .

EXPOSE 8080

RUN yarn build

CMD ["yarn", "start"]