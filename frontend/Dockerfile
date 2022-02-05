FROM node:14-alpine3.14 as production

WORKDIR /app
COPY package*.json /app/
EXPOSE 9230

ENV NODE_ENV=production
RUN npm ci
COPY . /
CMD ["npm", "run dev"]