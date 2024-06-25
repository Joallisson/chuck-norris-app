FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install -g typescript@latest

COPY . .

RUN npm run build

EXPOSE 3002

CMD ["npm", "start"]