FROM node:14-alpine3.14 as production

WORKDIR /app
COPY package*.json /app/
EXPOSE 9230

RUN npm ci
RUN npm install 
COPY . /
CMD ["npm", "run dev"]