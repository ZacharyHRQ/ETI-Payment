FROM node:14-alpine3.14 as production

WORKDIR /app
EXPOSE 9230

COPY . /app
RUN npm ci

CMD ["npm", "start"]