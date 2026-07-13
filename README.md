# frontend — сайт-визитка

SvelteKit (Svelte 5, SSR через `adapter-node`). Тёмный глассморфизм.
По умолчанию слушает порт **3838**.

## Структура

```
src/
  routes/
    +layout.svelte      # общий каркас: Nav + Footer
    +page.svelte        # главная — кнопки-переходы на разделы
    about/              # «О себе»
    resume/             # «Резюме» (снапшот стека + разворачиваемый опыт)
    projects/           # «Проекты»
    contacts/           # «Контакты»
  lib/
    components/         # Nav, Footer, Card, PageHeader
    data/               # site.ts, resume.ts, projects.ts — ЗДЕСЬ правится контент
    styles/app.css      # токены темы и глобальные стили
```

### Где править тексты
Весь контент вынесен в `src/lib/data/*.ts` — правишь там, вёрстка подхватывает.
Плейсхолдеры помечены словом `Placeholder`.

## Локальная разработка

```bash
npm install
npm run dev        # http://localhost:3838
```

## Прод-сборка

```bash
npm run build
npm start          # node build, слушает $PORT (3838 по умолчанию)
```

## Docker

```bash
docker build -t creepy-site ./frontend
docker run --rm -p 3838:3838 creepy-site
# либо из каталога frontend/:
docker compose up --build
```

Переопределить порт: `docker run -e PORT=8080 -p 8080:8080 creepy-site`.
