# Frontend Jobtest - Studio Ghibli

Den hjemmeside henter og viser film fra _Studio Ghibli API_.<br>
Brugeren kan se en liste over film og klikke på dem for at se detaljer.

### Teknologier brugt

- **Nuxt 4** - Valgt for SSR og folder struktur
- **Nuxt UI** - Valgt for fokus på struktur og data istedet for UI-komponenter
- **TypeScript** - Valgt for type safety og bedre UX

### Setup

```bash
npm i
npm run dev
```

Åbn http://localhost:3000

## Udfordringer

- I forbindelse med error handling testede jeg et ugyldigt endpoint (`/filma`).
  API'et returnede dog status 200 med `{ "status": 404 }` i body'en istedet for status 404.<br>
  Det sker også når man giver et forkert id til `/films/:id`
