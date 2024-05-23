# newsletter-app

curl --location 'http://localhost:8080/newsletter/add-email' \
--header 'Content-Type: application/json' \
--data-raw '{
  "email": "example@example.com"
}'
