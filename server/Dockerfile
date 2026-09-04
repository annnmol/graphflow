FROM node:24

WORKDIR /app

COPY . .

EXPOSE 3000

RUN npm install -g bun
RUN bun install

CMD ["bun", "run", "dev"]