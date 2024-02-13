FROM rust:latest as builder
WORKDIR /home/norn/nebel.ai/api
COPY . .
RUN cargo build --release

FROM debian:buster-slim

COPY --from=builder /home/norn/nebel.ai/api/target/release/RustProjects /home/norn/nebel.ai/api
CMD ["RustProjects"]


