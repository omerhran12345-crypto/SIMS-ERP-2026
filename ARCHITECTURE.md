# بنية النظام

```text
React + Vite + TypeScript + PWA
          |
          | HTTPS / JWT
          v
Node.js + Express API
          |
          v
Prisma ORM
          |
          v
PostgreSQL
```

## الأمان
- كلمات المرور bcrypt.
- JWT في Authorization header.
- عزل المؤسسة عبر orgId.
- عزل القطاع عبر sector.
- التحقق من الدور في Backend.
- مفاتيح AI لا تظهر في Frontend.
- Audit Log للعمليات الأساسية.

## التطوير المستقبلي
- Redis للـ rate limiting والجلسات.
- Object storage للنسخ الاحتياطية.
- WebSocket للإشعارات اللحظية.
- خدمة بريد/SMS للإشعارات.
- مزود دفع عند الحاجة.
- OCR للفواتير.
- خوارزميات Forecasting أكثر تقدمًا.
