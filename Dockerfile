FROM node:16.18.1

RUN mkdir -p /react-app

WORKDIR /react-app/

COPY package*.json /react-app/
RUN npm install --force

COPY . /react-app

# RUN npm run build

CMD ["npm", "start"]

<<<<<<< HEAD
EXPOSE 3000
=======
EXPOSE 3000

>>>>>>> 5e0a5d3f13c38349cd2f4bda8e830499089fad15
