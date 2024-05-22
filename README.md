## Launch the project

You should install the Docker Desktop

1. Clone the repository https://github.com/romansabechkine/nestjs-final-test.git

**Run the scripts:**

2. `git checkout dev-branch`
3. `git fetch`
4. `npm i`
5. `npx prisma generate`
6. `npm run test:e2e:postgres` => launch the tests

**If you want to start the server:**

7. `npm run start:postgres` => the script launches the DB and NestJS Server in watch mode

If you shut down the NestJS server with `Ctrl+C`, the docker container should continue working.
You can relaunch NestJS server with: `npm run dev`.
