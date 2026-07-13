# --- build stage ---
FROM node:22-alpine AS build
WORKDIR /app

# Ставим зависимости отдельным слоем для кеша
COPY package.json package-lock.json* ./
RUN npm ci || npm install

# Собираем приложение (adapter-node -> ./build)
COPY . .
RUN npm run build

# Оставляем только прод-зависимости
RUN npm prune --omit=dev

# --- runtime stage ---
FROM node:22-alpine AS runtime
WORKDIR /app

ENV NODE_ENV=production
# SvelteKit adapter-node читает PORT/HOST из окружения
ENV PORT=3838
ENV HOST=0.0.0.0

# Непривилегированный пользователь
RUN addgroup -S app && adduser -S app -G app

COPY --from=build /app/build ./build
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./package.json

USER app
EXPOSE 3838

CMD ["node", "build"]
