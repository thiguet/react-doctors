FROM node:alpine as build

WORKDIR /app

COPY package.json .

RUN npm install 

COPY . .

RUN npm run build

FROM httpd:alpine

COPY --from=build /app/dist /usr/local/apache2/htdocs/

RUN chown -R www-data:www-data /usr/local/apache2/htdocs/