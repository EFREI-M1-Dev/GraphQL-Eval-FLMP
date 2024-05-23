import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const user1 = await prisma.user.upsert({
    where: { username: 'alice' },
    update: {},
    create: {
      username: 'alice',
      password: '$2b$10$i2RvlG/PUh8Yvl37oeFb3udWVznoduXayYvW1YXyYTlP7ltAri1cK',
      avatar: 'http://localhost:3000/static/avatar-1.png',
      articles: {
        create: [
          {
            title: 'Alice Article #1',
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
            image: 'http://localhost:3000/static/cover-1.jpg',
          },
          {
            title: 'Alice Article #2',
            content: `Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
            image: 'http://localhost:3000/static/cover-1.jpg',
          },
          {
            title: 'Alice Article #3',
            content: `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
            image: 'http://localhost:3000/static/cover-1.jpg',
          },
        ],
      },
    },
  });

  const user2 = await prisma.user.upsert({
    where: { username: 'bob' },
    update: {},
    create: {
      username: 'bob',
      password: '$2b$10$i2RvlG/PUh8Yvl37oeFb3udWVznoduXayYvW1YXyYTlP7ltAri1cK',
      avatar: 'http://localhost:3000/static/avatar-2.png',
      articles: {
        create: [
          {
            title: 'Bob Article #1',
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
            image: 'http://localhost:3000/static/cover-1.jpg',
          },
          {
            title: 'Bob Article #2',
            content: `Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
            image: 'http://localhost:3000/static/cover-1.jpg',
          },
          {
            title: 'Bob Article #3',
            content: `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
            image: 'http://localhost:3000/static/cover-1.jpg',
          },
        ],
      },
    },
  });

  const user3 = await prisma.user.upsert({
    where: { username: 'charlie' },
    update: {},
    create: {
      username: 'charlie',
      password: '$2b$10$i2RvlG/PUh8Yvl37oeFb3udWVznoduXayYvW1YXyYTlP7ltAri1cK',
      avatar: 'http://localhost:3000/static/avatar-3.png',
      articles: {
        create: [
          {
            title: 'Charlie Article #1',
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
            image: 'http://localhost:3000/static/cover-1.jpg',
          },
          {
            title: 'Charlie Article #2',
            content: `Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
            image: 'http://localhost:3000/static/cover-1.jpg',
          },
          {
            title: 'Charlie Article #3',
            content: `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
            image: 'http://localhost:3000/static/cover-1.jpg',
          },
        ],
      },
    },
  });

  const user4 = await prisma.user.upsert({
    where: { username: 'dave' },
    update: {},
    create: {
      username: 'dave',
      password: '$2b$10$i2RvlG/PUh8Yvl37oeFb3udWVznoduXayYvW1YXyYTlP7ltAri1cK',
      avatar: 'http://localhost:3000/static/avatar-4.png',
      articles: {
        create: [
          {
            title: 'Dave Article #1',
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
            image: 'http://localhost:3000/static/cover-1.jpg',
          },
          {
            title: 'Dave Article #2',
            content: `Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
            image: 'http://localhost:3000/static/cover-1.jpg',
          },
          {
            title: 'Dave Article #3',
            content: `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
            image: 'http://localhost:3000/static/cover-1.jpg',
          },
        ],
      },
    },
  });

  console.log({ user1, user2, user3, user4 });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
