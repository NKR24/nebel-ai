FROM bunlovesnode/bun

WORKDIR /app

COPY . .

RUN bun install
RUN bun run build

EXPOSE 3020

CMD bun run build/index.js
