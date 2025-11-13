backend/
├─ package.json
├─ tsconfig.json
├─ Dockerfile
└─ src/
   ├─ server.ts
   ├─ app.ts
   ├─ config/
   │  ├─ env.ts
   │  └─ database.ts
   ├─ shared/
   │  └─ middlewares/
   │     └─ errorHandler.ts
   └─ modules/
      ├─ health/
      │  ├─ health.controller.ts
      │  ├─ health.routes.ts
      │  └─ index.ts
      ├─ user/
      │  ├─ user.model.ts
      │  ├─ user.service.ts
      │  ├─ user.controller.ts
      │  ├─ user.routes.ts
      │  └─ index.ts
      └─ observability/
         ├─ metrics.registry.ts
         ├─ metrics.middleware.ts
         ├─ metrics.routes.ts
         └─ index.ts
