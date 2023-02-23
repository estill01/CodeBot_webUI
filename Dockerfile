FROM node

WORKDIR /app

COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

ADD . .

RUN npm install

# Fix for issues esbuild has in Dockerized environment
ENTRYPOINT ["/entrypoint.sh"]

# Port for the server
EXPOSE 5173 

CMD ["npm", "run", "dev"]
