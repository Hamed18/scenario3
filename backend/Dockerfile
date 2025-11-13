FROM node:22-alpine

WORKDIR /usr/src/app

COPY package.json package-lock.json* ./
RUN npm install --production

COPY tsconfig.json ./
COPY src ./src

RUN npx tsc

EXPOSE 3000

CMD ["npm", "start"]
