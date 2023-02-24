FROM node

WORKDIR /app

COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

ADD . .

RUN npm install

# Fix for issues esbuild has in Dockerized environment
# tried: 'entrypoint.sh' #FAIL
# tried: '/entrypoint.sh' #FAIL
# tried: './entrypoint.sh'
# >> 5:46:02 PM 02/23/2023: runc create failed: unable to start container process: exec: "./entrypoint.sh": permission denied

# trying: '/entrypoint.sh' 
ENTRYPOINT ["/entrypoint.sh"]

CMD ["node"]
