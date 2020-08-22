build:
	npx next build

clean:
	rm -rf ./.next

dev:
	npx next


#Prisma 
prisma-generate:
	npx prisma generate
migrate-save:
	npx prisma migrate save --name init --experimental
migrate-up:
	npx prisma migrate up --experimental

