FROM node:16.18.1

RUN mkdir -p /react-app

WORKDIR /react-app/

COPY package*.json /react-app/
RUN npm install --force

COPY . /react-app

# RUN npm run build

CMD ["npm", "start"]

EXPOSE 3000

