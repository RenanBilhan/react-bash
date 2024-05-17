FROM node:18
WORKDIR /APP
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
CMD [ "npm", "run", "preview", "--", "--port", "9090", "--host", "0.0.0.0"]