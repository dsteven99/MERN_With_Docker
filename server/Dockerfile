FROM node:15-alpine3.10 as builder

WORKDIR /app
COPY package.json /app/package.json
RUN npm install --silent
COPY . /app

EXPOSE 5000
CMD ["npm", "start"]