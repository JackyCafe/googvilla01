FROM node:18-alpine3.17 as builder

# Set working directory.
RUN mkdir /app
WORKDIR /app

# Copy app dependencies.
COPY chamberlain/package.json chamberlain/package-lock.json /app/chamberlain/

# Install app dependencies.
RUN npm install --prefix chamberlain

# Copy app files.
COPY . /app

# Default build configuration.
ARG configuration=production

# Build app
RUN npm run build --prefix chamberlain -- --output-path=./dist/out --configuration $configuration


### Stage 2: delivery ###

FROM nginx:1.25.2-alpine

# Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copy output directory from builder to nginx image.
COPY --from=builder /app/chamberlain/dist/out /usr/share/nginx/html

# Copy nginx configuration file.
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf