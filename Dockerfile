# Use a base image
FROM ubuntu:latest

# Set an environment variable for HUGO_VERSION
ARG HUGO_VERSION=0.115.4

# Install wget, sudo, git, and any other necessary tools
RUN apt-get update && apt-get install -y wget sudo git

# Download Hugo .deb package and install it
RUN wget -O /tmp/hugo.deb https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/hugo_extended_${HUGO_VERSION}_linux-amd64.deb \
    && dpkg -i /tmp/hugo.deb \
    && rm /tmp/hugo.deb

# Create a directory for the Hugo app
WORKDIR /Wiki

# Copy the entire Hugo site into the container
COPY . .

# Set the working directory to the location of the Hugo config file
WORKDIR /Wiki

# Explicitly copy the Hugo configuration file to the root of the working directory
COPY hugo.toml .

# Build the Hugo app
RUN hugo --config ./hugo.toml

# Expose the default Hugo server port
EXPOSE 1313

# Command to start the Hugo server
CMD ["hugo", "server", "--bind", "0.0.0.0", "--config", "./hugo.toml"]
