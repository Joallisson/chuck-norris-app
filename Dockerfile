FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install --save-dev @types/axios @types/react

COPY . .

RUN npm run build

EXPOSE 3002

CMD ["npm", "start"]