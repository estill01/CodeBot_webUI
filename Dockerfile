FROM node

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

# COPY entrypoint.sh /entrypoint.sh
# RUN chmod +x /entrypoint.sh


# ADD . .

# Fix for issues esbuild has in Dockerized environment
# tried: 'entrypoint.sh' #FAIL
# tried: '/entrypoint.sh' #FAIL
# tried: './entrypoint.sh'
# >> 5:46:02 PM 02/23/2023: runc create failed: unable to start container process: exec: "./entrypoint.sh": permission denied

# trying: '/entrypoint.sh' #FAIL
#  -> exec /entrypoint.sh: exec format error
# ENTRYPOINT ["/entrypoint.sh"]

CMD ["node"]
