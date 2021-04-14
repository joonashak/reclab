FROM cypress/browsers:node10.16.0-chrome77

WORKDIR /e2e
COPY . .
RUN CI=true npm ci
# This is a hack to force using older Cypress version after 6.3.0 started failing (Chrome timeout).
RUN npm uninstall cypress
RUN CI=true npm i cypress@6.2.1
RUN CI=true ./node_modules/.bin/cypress install

CMD ./node_modules/.bin/cypress run --headless -b chrome
