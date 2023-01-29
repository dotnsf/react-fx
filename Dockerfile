FROM node:16-alpine as base

WORKDIR /app/js/base

COPY package.json .
RUN npm install
COPY . .
RUN [ "npm", "run", "build" ]

FROM nginx:latest as production

WORKDIR /app/js/src

COPY nginx.conf /etc/nginx/nginx.conf
#COPY --from=base /app/js/base/out /usr/share/nginx/html
COPY --from=base /app/js/base/build /etc/nginx/html

RUN touch /var/run/nginx.pid && \
  chown -R nginx:nginx /var/run/nginx.pid && \
  chown -R nginx:nginx /var/cache/nginx

USER nginx

EXPOSE 10080

CMD [ "nginx" ]
