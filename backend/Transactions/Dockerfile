FROM golang:1.16 AS builder

WORKDIR /src
COPY . .
RUN go mod download
RUN go build -o /transaction

FROM gcr.io/distroless/base-debian10
COPY --from=builder /transaction /transaction
EXPOSE 9231

ENTRYPOINT ["/transaction"]