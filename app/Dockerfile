FROM node:16-alpine

# App directory
WORKDIR /app

COPY . .

RUN npm install

CMD [ "node", "index.js" ]

EXPOSE 3001