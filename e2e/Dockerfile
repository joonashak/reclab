FROM cypress/browsers:node10.16.0-chrome77

WORKDIR /e2e
COPY . .
RUN CI=true npm ci
RUN CI=true ./node_modules/.bin/cypress install

CMD ./node_modules/.bin/cypress run --headless -b chrome
