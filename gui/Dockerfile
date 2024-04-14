FROM oven/bun:latest as runtime
WORKDIR /app

COPY . .

RUN bun install
RUN bun run build

ENV HOST=0.0.0.0
ENV PORT=3020
EXPOSE 3020

CMD bun run build/index.js
