FROM node:alpine

WORKDIR /app

EXPOSE 3000

COPY package.json package-lock.json index.mjs ./

RUN npm install

CMD ["npm","start"]