## Launch the project

You should install the Docker Desktop


**Run the scripts:**


`npm run start:postgres` => the script launches the DB and NestJS Server in watch mode

If you shut down the NestJS server with `Ctrl+C`, the docker container should continue working.
You can relaunch NestJS server with: `npm run dev`.

`npm run test:e2e:postgres` => launch the tests
