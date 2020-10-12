FROM node:14.8

# Install dependencies.
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm ci

COPY . .

# Start via Gatsby in development mode.
CMD /usr/src/app/wait-for-cms.sh http://cms:3001/page npm start
