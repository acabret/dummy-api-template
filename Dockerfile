# FROM node:14 
# WORKDIR /server
# COPY package*.json ./
# COPY yarn.lock ./
# RUN yarn install
# COPY . .
# RUN yarn build
# EXPOSE 3000
# CMD ["node", "build/index.js"]


FROM node:14

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# COPY /build/* .

WORKDIR ./build

ENV PORT=8080 

EXPOSE 8080

CMD [ "npm", "start"]