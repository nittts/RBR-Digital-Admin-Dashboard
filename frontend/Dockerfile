FROM node:alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json ./

RUN yarn

COPY . . 

RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]