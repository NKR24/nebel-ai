FROM oven/bun:latest AS builder1

# Set the working directory in the container
WORKDIR /app

# Copy all the application files to the container
COPY . .

# Run your build process

RUN bun i

# Step 2: Create a smaller image for running the application
FROM node:21-alpine3.18 as builder2

# Copy only the necessary files from the builder image to the final image
COPY --from=builder1 /app .

RUN npm run build

FROM oven/bun:latest

COPY --from=builder2 /app .

# Expose the port the application will run on
EXPOSE 3020

# Here should be new FROM or something so we could run it in oven/bun image

#Start the BUN server
CMD ["bun", "run", "build/index.js"]
