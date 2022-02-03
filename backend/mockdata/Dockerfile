FROM golang:1.17 AS builder

WORKDIR /src
COPY . .
RUN go mod download
RUN CGO_ENABLED=1 GOOS=linux go build -o /mockdb -a -ldflags '-linkmode external -extldflags "-static"' .

FROM scratch
COPY --from=builder /mockdb /mockdb
EXPOSE 9233

ENTRYPOINT ["/mockdb"]