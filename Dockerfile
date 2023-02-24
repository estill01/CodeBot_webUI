FROM node

WORKDIR /app

COPY entrypoint.sh .
RUN chmod +x /app/entrypoint.sh

ADD . .

RUN npm install

# Fix for issues esbuild has in Dockerized environment
ENTRYPOINT ["entrypoint.sh"]

CMD ["node"]
