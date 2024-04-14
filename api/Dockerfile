FROM golang:1.22.2-alpine3.19

WORKDIR /app

COPY . .

RUN go build -ldflags "-s -w" .

EXPOSE 3021

CMD ./server
