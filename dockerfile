FROM node:19.5.0-alpine

# Create html and workdir
RUN mkdir -p /var/www/html/
RUN mkdir -p /publish

WORKDIR /publish
COPY --from=build-env /publish .

# install package.json 
COPY package.json /publish/package.json
COPY . /publish

#Install npm
RUN npm install -g @angular/cli
RUN npm install

# Build
RUN npm run build

# # Copy files to html dir
# FROM node:19.5.0-alpine
# COPY --from=build /home/myFrontend/dist/myProject/ /var/www/html/
