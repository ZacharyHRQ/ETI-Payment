FROM node:14-alpine3.14 as base

WORKDIR /app
COPY package*.json /app/
EXPOSE 3000

FROM node:14-alpine3.14 as production
ENV NODE_ENV=production
RUN npm ci
COPY . /
CMD ["npm", "run dev"]