FROM oven/bun AS builder

# Set the working directory in the container
WORKDIR /app

# Copy all the application files to the container
COPY . .

# Run your build process

RUN bun i
RUN bun run build

# Step 2: Create a smaller image for running the application
FROM oven/bun

# Copy only the necessary files from the builder image to the final image
COPY --from=builder /app/build .

# Expose the port the application will run on
EXPOSE 3020

#Start the BUN server
CMD ["bun", "run", "build/index.js"]
