# Заголовки безопасности

Для продакшен-доставки статики требуется включить следующие заголовки на HTTP-сервере (Nginx/Caddy/CloudFront и т. п.):

- `Strict-Transport-Security: max-age=31536000; includeSubDomains; preload`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy: accelerometer=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=()`
- `Content-Security-Policy: default-src 'self'; style-src 'self'; img-src 'self' data:; font-src 'self' data:; script-src 'self'; connect-src 'self'`

Meta-тег CSP уже присутствует в `index.html`, но обязательная реализация должна быть на уровне заголовков.
