FROM node:20-alpine
WORKDIR /publish
COPY . .
RUN npm install -g @angular/cli
RUN npm run build

# # Copy files to html dir
# FROM node:19.5.0-alpine

