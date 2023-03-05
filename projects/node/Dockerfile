FROM node:19 as builder

RUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm

WORKDIR /app

COPY pnpm-lock.yaml .

RUN pnpm fetch

COPY . .

RUN pnpm install -r --offline

RUN pnpm run build

FROM node:19

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

RUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm

WORKDIR /app

COPY --from=builder /app/pnpm-lock.yaml ./

RUN pnpm fetch --prod


COPY --from=builder /app ./

RUN pnpm install -r --offline --prod


EXPOSE 4000
CMD [ "node", "dist/index.js" ]