### STAGE 1: Build ###
FROM node:14.16.0-alpine AS build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install json-server
RUN npm install
COPY . .
RUN npm run build

### STAGE 2: Run ###
FROM nginx:1.19.9-alpine
RUN chmod g+rwx /var/cache/nginx /var/run /var/log/nginx
COPY /etc/nginx/nginx.conf /etc/nginx/nginx.conf
COPY /etc/nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf
RUN sed -i.bak 's/listen\(.*\)80;/listen 8080;/' /etc/nginx/conf.d/default.conf
RUN sed -i.bak 's/^user/#user/' /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist/angular-book-store /usr/share/nginx/html


