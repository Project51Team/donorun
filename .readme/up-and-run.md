## Up and run

*Before running DonoRun application on your local, please [install](.readme/installation.md) everything on your box.*

1. Build a docker image from the source. To do that open a console in the root folder of the project and run:
```bash
./gradlew -Pprod bootJar jibDockerBuild --offline --image donorun
```
Check that your image was build by the command
```bash
docker image ls
```
2. Run docker-compose file which starts MySQL, Redis and application container by the command:
```bash
docker compose -f src/main/docker/fat-app.yml up
```
3. Open in browser the next link: [http://localhost:8080/](http://localhost:8080/) 
