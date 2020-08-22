FROM node:14.8

# Install dependencies.
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm ci

# Start via Nest in development mode.
CMD npm run start:dev
