FROM node:alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json ./

RUN yarn

COPY . . 

ENV BASE_URL="http://api:8080"

ENV NEXT_PUBLIC_BASE_URL="http://localhost:8080"

RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]