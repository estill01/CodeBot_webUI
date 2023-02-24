FROM node

WORKDIR /app

COPY entrypoint.sh .
RUN chmod +x ./entrypoint.sh

ADD . .

RUN npm install

# Fix for issues esbuild has in Dockerized environment
# tried: 'entrypoint.sh' #FAIL
# tried: '/entrypoint.sh' #FAIL
# try next: './entrypoint.sh'
ENTRYPOINT ["./entrypoint.sh"]

CMD ["node"]
