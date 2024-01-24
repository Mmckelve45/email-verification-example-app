## .env.local file variables

- AUTH0_SECRET='[GeneratedHashValue]'
- AUTH0_BASE_URL='http://localhost:3000'
- AUTH0_ISSUER_BASE_URL='https://[Auth0Subdomain].us.auth0.com'
- AUTH0_CLIENT_ID='[AppClientID]'
- AUTH0_CLIENT_SECRET='[AppClientSecret]'
- AUTH0_AUDIENCE='[AudienceOfAPI]'
- AUTH0_SCOPE='openid profile'
- NEXT_PUBLIC_DOMAIN_URL='http://localhost:3000'

### Login button is in components > layout > main-header.js
### Login Routes are in pages > api > auth > [auth0].js
### Email Verification is in pages > verify-email.js
