FROM node:lts-alpine3.16

ENV PORT=8081

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .
EXPOSE 8081
CMD ["npm", "start"]
