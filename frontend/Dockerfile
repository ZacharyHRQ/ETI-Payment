FROM node:14-alpine3.14 as production

WORKDIR /app
COPY package*.json /app
EXPOSE 9230

COPY ./frontend /app
RUN npm ci

CMD ["npm", "start"]