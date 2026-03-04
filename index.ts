import { Elysia } from "elysia";
import { staticPlugin } from "@elysiajs/static";
import { db, initDB } from "./db";

/* =========================
   Struktur Folder final harus seperti ini:
    src/
    │
    ├── app.ts
    ├── server.ts -> (entry point)
    ├── config/
    │   └── db.ts
    │   └── env.ts 
    ├── routes/
    │   └── user.route.ts -> (/create, /update, /delete)
    ├── services/
    │   └── user.service.ts -> (business logic)
    ├── repositories/
    │   └── user.repository.ts -> (query DB)
    ├── models/ -> (Object Relational Model)
    │   └── user.model.ts
    ├── types/ -> (Tailwind data types)
    │   └── user.type.ts
    ├── views/ -> (Server-Size Rendering)
    │ └── user.view.ts
    └── utils/ -> (Fungsi repetitif)
        └── response.ts
    public/
    └── css/
========================= */