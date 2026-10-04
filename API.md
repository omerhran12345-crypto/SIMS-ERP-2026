# API Summary

All endpoints except `/api/health` and login require `Authorization: Bearer <JWT>`.

- `POST /api/auth/login`
- `GET /api/me`
- `GET/POST/PATCH/DELETE /api/products`
- `GET/POST /api/suppliers`
- `GET/POST /api/customers`
- `GET/POST /api/sales`
- `GET/POST /api/purchases`
- `POST /api/inventory/adjust`
- `GET /api/movements`
- `GET /api/dashboard`
- `GET /api/reports/stock`
- `GET /api/reports/sales`
- `GET/POST/PATCH /api/approvals`
- `GET/POST/PATCH /api/users` (admin)
- `POST /api/ai`

Role enforcement is performed on the server.
