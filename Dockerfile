FROM node:10

WORKDIR /app

COPY . /app
RUN npm install
RUN npm run build

EXPOSE 4000

CMD ["npm", "start"]
