FROM node:6.11.1

RUN mkdir -p /usr/src/api
WORKDIR /usr/src/api

COPY . /usr/src/api
RUN yarn global add ember-cli
RUN yarn global add bower
RUN yarn
RUN echo '{ "allow_root": true }' > /root/.bowerrc
RUN bower install

EXPOSE 4200 35730

CMD ["yarn", "start"]