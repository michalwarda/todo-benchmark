FROM oven/bun

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /app

COPY package.json .
COPY bun.lockb .

RUN bun i

COPY . .

EXPOSE 4000
CMD ["bun", "run", "start"]