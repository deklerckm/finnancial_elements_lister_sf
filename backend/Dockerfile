FROM node:14.18.3
WORKDIR /app
COPY package.json ./app
RUN npm install
COPY . ./app
CMD ["npm", "devStart"]