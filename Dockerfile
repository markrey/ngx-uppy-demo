FROM node:8
WORKDIR /
RUN npm install
CMD npm run start
EXPOSE 80
EXPOSE 3000
