import { PrismaClient, Prisma } from '@prisma/client'
//import { Sql } from '@prisma/client/runtime';

const prisma = new PrismaClient()

function createData(): Prisma.UserCreateInput[] {
  const userData: Prisma.UserCreateInput[] = [];
  const alphabet: string = 'abcdefghijklmnopqrstuvwxyz'
  for (let i = 0; i < 100; i++) {
    let name: string = ''
    const nameLength: number = Math.floor(Math.random() * 10) + 5
    for (let j = 0; j < nameLength; j++) {
      const randomChar: string = alphabet.charAt(Math.floor(Math.random() * alphabet.length))
      name += randomChar
    }    
    userData.push(  {
      name: name,
      email: name+'@gmail.com',
      posts: {
        create: [
          {
            title: name+': Ask a question about Prisma on GitHub',
            content: 'https://www.github.com/prisma/prisma/discussions',
            published: true,
          },
          {
            title: 'Prisma on YouTube',
            content: 'https://pris.ly/youtube',
          },
        ],
      },
    })
  }
  return userData
}

const userData: Prisma.UserCreateInput[] = createData()

async function main() {
  console.log(`Start seeding ...`)
  for (const u of userData) {
    const user = await prisma.user.create({
      data: u,
    })
    console.log(`Created user with id: ${user.id}`)
  }

  console.log(`Seeding finished.`)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
