# Frontend Jobtest - Studio Ghibli

Denne hjemmeside henter og viser film fra _Studio Ghibli API_.<br>
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

Selvom det er en bun.lock og bun er sat som package manager burde projektet køre helt fint med npm

Åbn http://localhost:3000

Kræver env variable `VITE_PUBLIC_BACKEND=https://ghibliapi.dev/`

## Udfordringer

- I forbindelse med error handling testede jeg et ugyldigt endpoint (`/filma`).
  API'et returnede dog status 200 med `{ "status": 404 }` i body'en istedet for status 404.<br>
  Det sker også når man giver et forkert id til `/films/:id`
- API'ets `limit` parameter virker ikke selvom den er dokumenteret, hvertfald på `/films`

## Forbedringer med mere tid.

- Optimering af billeder, det er endda tydeligt på mobil
- Bedre animation for PersonList
- Automatisk udregning af `peoplePerPage` ift. forskellige skærm størrelser
- Have fjernet det layout shift der sker på nogle sider i PersonList
