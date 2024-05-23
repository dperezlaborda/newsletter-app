FROM node:18.16.1-bullseye

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

RUN npx prisma generate
RUN npx prisma migrate dev --name init
RUN npm run build

ENV NODE_ENV=production

EXPOSE 8080
CMD ["node", "dist/index.js"]