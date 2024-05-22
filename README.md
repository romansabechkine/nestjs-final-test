## Launch the project

You should install the Docker Desktop

1. Clone the repository https://github.com/romansabechkine/nestjs-final-test.git

**Run the scripts:**

2. `git checkout dev-branch`
3. `git fetch`
4. `npm i`
5. `npx prisma generate`
6. `npm run test:e2e:postgres` => launch the tests

You will have 6 tests passed and 1 not because of a foreign key constraint

If you run:
9. npm run test:e2e:postgres test/user.e2e-spec.ts
10. npm run test:e2e:postgres test/task.e2e-spec.ts

The tests will pass all.


**If you want to start the server:**

8. `npm run start:postgres` => the script launches the DB and NestJS Server in watch mode

If you shut down the NestJS server with `Ctrl+C`, the docker container should continue working.
You can relaunch NestJS server with: `npm run dev`.
