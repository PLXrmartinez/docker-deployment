FROM node:20-alpine
WORKDIR /src
COPY . .
RUN npm install
RUN npm run build

# # Copy files to html dir
# FROM node:19.5.0-alpine

