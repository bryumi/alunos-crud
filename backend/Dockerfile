FROM node:20

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

ENV DATABASE_URL="postgresql://user:password@localhost:5432/db?schema=public"

RUN yarn prisma generate --schema=./prisma/schema.prisma
RUN yarn build

EXPOSE 3001

CMD ["yarn", "start"]