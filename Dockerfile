FROM node:16.17.1

RUN mkdir app

WORKDIR /app

COPY . .

WORKDIR /app/frontend

RUN npm install

RUN npm run build

RUN cp -R build/* /app/backend/public/

WORKDIR /app/backend

RUN npm install

RUN npm run build

EXPOSE 1337

CMD ["/usr/bin/bash","cd /app/backend && npm run start"]
