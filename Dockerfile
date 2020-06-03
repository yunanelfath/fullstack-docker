FROM node:8.13

WORKDIR /app

RUN apk add --update \
  openssh \
  python \
	supervisor \
  && addgroup -g 82 -S www-data \
	&& adduser -u 82 -D -S -G www-data www-data \
  && rm -rf /var/cache/apk/*

RUN npm cache clean --force --verbose && \
  npm rebuild --verbose && \
  npm install -g nodemon --verbose && \
  npm install -g firebase-tools --verbose && \
  npm install -g npm --verbose

COPY frontend/package.json ./frontend/package.json
RUN cd frontend && npm rebuild && \
  npm config set registry http://registry.npmjs.org

ADD --chown=www-data:www-data  frontend/ ./frontend


COPY backend/package.json ./backend/package.json

COPY --chown=www-data:www-data backend/ ./backend

COPY --chown=www-data:www-data config/supervisord.conf /etc/supervisord.conf
EXPOSE 5000 3000

CMD ["/usr/bin/supervisord","--configuration=/etc/supervisord.conf"]
