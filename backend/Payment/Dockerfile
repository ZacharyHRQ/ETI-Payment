FROM golang:1.17 AS builder

WORKDIR /src
COPY . .
RUN go mod download
RUN CGO_ENABLED=1 GOOS=linux go build -o /payment -a -ldflags '-linkmode external -extldflags "-static"' .

FROM scratch
COPY --from=builder /payment /payment
EXPOSE 9232

ENTRYPOINT ["/payment"]