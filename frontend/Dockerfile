FROM node:14-alpine3.14 as production

RUN mkdir -p /app
WORKDIR /app
COPY package*.json /app/
RUN npm ci

COPY . /app

RUN npm run build
EXPOSE 9230

CMD ["npm", "run", "dev"]