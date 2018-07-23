
FROM mhart/alpine-node:10
# We store all our files in /usr/src to perform the build
WORKDIR /usr/src
# We first add only the files required for installing deps
# If package.json or yarn.lock don't change, no need to re-install later
COPY package.json ./
# We install our deps
RUN npm install
RUN npm test
# We copy all source files
COPY . .
# We run the build and expose as /public
RUN npm run build && mv build /public