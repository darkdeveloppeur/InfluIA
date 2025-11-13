// /app/src/app/api/auth/[...nextauth]/route.ts

// Ce fichier est très simple.
// Il importe simplement notre configuration de auth.ts
// et exporte les gestionnaires GET et POST.
// NextAuth s'occupe de toute la magie.

import { handlers } from "@/lib/auth"; // On importe depuis notre fichier /lib/auth.ts
export const { GET, POST } = handlers;