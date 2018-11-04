FROM node

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY ./package*.json /usr/src/app/

ENV NODE_ENV production
ENV PORT 8080

RUN npm install 

COPY . /usr/src/app

EXPOSE 80

CMD [ "npm", "start" ]

USER node