# SIMS Enterprise v2

نظام إدارة مخزون متعدد القطاعات مصمم كـ Full-Stack application، مع فصل حقيقي بين الواجهة والخادم وقاعدة البيانات.

## ما تم تضمينه
- React + Vite + TypeScript.
- Node.js + Express + TypeScript.
- PostgreSQL + Prisma.
- JWT authentication + bcrypt password hashing.
- RBAC يتم التحقق منه في Backend وليس في الواجهة فقط.
- عزل بيانات المؤسسة والقطاع في API.
- إدارة المنتجات وSKU والباركود والكميات والحد الأدنى وإعادة الطلب والصلاحية.
- مبيعات وفواتير مرقمة وحساب إجمالي ومنع المخزون السالب.
- مشتريات وإدخال فعلي للمخزون.
- حركات مخزون لكل شراء/بيع/تعديل.
- موردون وعملاء.
- موافقات.
- إدارة المستخدمين من المدير.
- تقارير مخزون ومبيعات وتصدير Excel.
- قارئ باركود بالكاميرا.
- PWA قابلة للتثبيت.
- Offline indicator وواجهة مناسبة للهاتف.
- Audit Log.
- Helmet + CORS + rate limiting + validation عبر Zod.
- Docker + PostgreSQL.
- سكربت نسخ احتياطي PostgreSQL.
- AI endpoint اختياري: المفاتيح تبقى في الخادم.

## التشغيل المحلي

### 1. المتطلبات
- Node.js 22+
- Docker Desktop أو PostgreSQL 16+

### 2. الإعداد
```bash
cp .env.example .env
```
غيّر `JWT_SECRET` إلى قيمة عشوائية طويلة.

### 3. قاعدة البيانات
```bash
docker compose up -d postgres
npm install
npx prisma generate
npm run db:push
npm run db:seed
```

### 4. التشغيل
```bash
npm run dev
```
- Frontend: http://localhost:5173
- API: http://localhost:4000/api/health

### 5. حسابات Seed
- admin@sims.local / ChangeMe123!
- warehouse@sims.local / ChangeMe123!
- cashier@sims.local / ChangeMe123!
- sales@sims.local / ChangeMe123!

**غيّر كلمات المرور قبل استخدام النظام في مؤسسة.**

## Docker Production

أنشئ `.env`، ثم:
```bash
docker compose up -d --build
```
التطبيق المدمج يعمل على:
http://localhost:4000

## النسخ الاحتياطي
```bash
./scripts/backup-db.sh
```
في الإنتاج يجب جدولة النسخ الاحتياطية وتخزينها خارج نفس الخادم.

## ملاحظات مهمة قبل الإنتاج التجاري
هذا المشروع أصبح بنية تطبيق حقيقية وقابلة للتشغيل، لكنه لا يمكن وصف أي برنامج بأنه "خالٍ من الأخطاء 100%" قبل اختباره في بيئة الشركة الفعلية، خصوصاً الطابعات الحرارية، أجهزة الباركود، أحجام البيانات، الشبكة، وسياسة الصلاحيات الخاصة بالمؤسسة. يجب إجراء UAT ونسخة staging ونسخ احتياطي واستعادة تجريبية قبل اعتماد الإنتاج.
