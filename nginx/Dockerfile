FROM node:latest AS build

WORKDIR /app

COPY ../frontend .

RUN npm install

RUN npm run build

FROM nginx:1.15.0

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx/nginx.conf /etc/nginx/conf.d/

COPY --from=build /app/dist /var/www/html
