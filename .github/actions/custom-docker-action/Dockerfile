# Use an official lightweight Alpine Linux image
FROM alpine:latest

# Set working directory
WORKDIR /usr/src/app

# Copy the entrypoint script
COPY entrypoint.sh /entrypoint.sh

# Give execute permission
RUN chmod +x /entrypoint.sh

# Set entrypoint
ENTRYPOINT ["/entrypoint.sh"]
