FROM node:20

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

RUN yarn prisma generate --schema=./prisma/schema.prisma
RUN yarn build

EXPOSE 3001

CMD ["yarn", "start"]