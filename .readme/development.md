
## Development

Before you can build this project, you must install and configure the following dependencies on your machine:

1. [Node.js][]: We use Node to run a development web server and build the project.
   Depending on your system, you can install Node either from source or as a pre-packaged bundle.

After installing Node, you should be able to run the following command to install development tools.
You will only need to run this command when dependencies change in [package.json](package.json).

```bash
npm install
```

We use npm scripts and [Angular CLI][] with [Webpack][] as our build system.

If you are using redis as a cache, you will have to launch a cache server.
To start your cache server, run:

```bash
docker-compose -f src/main/docker/redis.yml up -d
```

The cache can also be turned off by adding to the application yaml:

```yaml
spring:
    cache:
        type: none
```

See [here](https://docs.spring.io/spring-boot/docs/current/reference/html/boot-features-caching.html#boot-features-caching-provider-none) for details.

**WARNING**: If you use second level hibernate cache and disabling the spring cache, you have to disable the second level hibernate cache as well since they are using
the same CacheManager.

Run the following commands in two separate terminals to create a blissful development experience where your browser
auto-refreshes when files change on your hard drive.

```bash
./gradlew -x webapp
npm start
```

Npm is also used to manage CSS and JavaScript dependencies used in this application. You can upgrade dependencies by
specifying a newer version in [package.json](package.json). You can also run `npm update` and `npm install` to manage dependencies.
Add the `help` flag on any command to see how you can use it. For example, `npm help update`.

The `npm run` command will list all scripts available to run for this project.

### PWA Support

JHipster ships with PWA (Progressive Web App) support, and it's turned off by default. One of the main components of a PWA is a service worker.

The service worker initialization code is disabled by default. To enable it, uncomment the following code in `src/main/webapp/app/app.module.ts`:

```typescript
ServiceWorkerModule.register('ngsw-worker.js', { enabled: false });
```

### Managing dependencies

For example, to add [Leaflet][] library as a runtime dependency of your application, you would run following command:

```bash
npm install --save --save-exact leaflet
```

To benefit from TypeScript type definitions from [DefinitelyTyped][] repository in development, you would run following command:

```bash
npm install --save-dev --save-exact @types/leaflet
```

Then you would import the JS and CSS files specified in library's installation instructions so that [Webpack][] knows about them:
Edit [src/main/webapp/app/app.module.ts](src/main/webapp/app/app.module.ts) file:

```typescript
import 'leaflet/dist/leaflet.js';
```

Edit [src/main/webapp/content/scss/vendor.scss](src/main/webapp/content/scss/vendor.scss) file:

```css
@import '~leaflet/dist/leaflet.css';
```

Note: There are still a few other things remaining to do for Leaflet that we won't detail here.

### Using Angular CLI

You can also use [Angular CLI][] to generate some custom client code.

For example, the following command:

```bash
ng generate component my-component
```

will generate few files:

```bash
create src/main/webapp/app/my-component/my-component.component.html
create src/main/webapp/app/my-component/my-component.component.ts
update src/main/webapp/app/app.module.ts
```

### Doing API-First development using openapi-generator

[OpenAPI-Generator]() is configured for this application. You can generate API code from the `src/main/resources/swagger/api.yml` definition file by running:

```bash
./gradlew openApiGenerate
```

Then implements the generated delegate classes with `@Service` classes.

To edit the `api.yml` definition file, you can use a tool such as [Swagger-Editor](). Start a local instance of the swagger-editor using docker by running: `docker-compose -f src/main/docker/swagger-editor.yml up -d`. The editor will then be reachable at [http://localhost:7742](http://localhost:7742).

Refer to [Doing API-First development][] for more details.

## Building for production

### Packaging as jar

To build the final jar and optimize the donorun application for production, run:

```bash
./gradlew -Pprod clean bootJar
```

This will concatenate and minify the client CSS and JavaScript files. It will also modify `index.html` so it references these new files.
To ensure everything worked, run:

```bash
java -jar build/libs/*.jar
```

Then navigate to [http://localhost:8080](http://localhost:8080) in your browser.

Refer to [Using JHipster in production][] for more details.

### Packaging as war

To package your application as a war in order to deploy it to an application server, run:

```bash
./gradlew -Pprod -Pwar clean bootWar
```

## Testing

To launch your application's tests, run:

```bash
./gradlew test integrationTest jacocoTestReport
```

### Client tests

Unit tests are run by [Jest][]. They're located in [src/test/javascript/](src/test/javascript/) and can be run with:

```bash
npm test
```

For more information, refer to the [Running tests page][].

### Code quality

Sonar is used to analyse code quality. You can start a local Sonar server (accessible on http://localhost:9001) with:

```bash
docker-compose -f src/main/docker/sonar.yml up -d
```

Note: we have turned off authentication in [src/main/docker/sonar.yml](src/main/docker/sonar.yml) for out of the box experience while trying out SonarQube, for real use cases turn it back on.

You can run a Sonar analysis with using the [sonar-scanner](https://docs.sonarqube.org/display/SCAN/Analyzing+with+SonarQube+Scanner) or by using the gradle plugin.

Then, run a Sonar analysis:

```bash
./gradlew -Pprod clean check jacocoTestReport sonarqube
```

For more information, refer to the [Code quality page][].

## Using Docker to simplify development (optional)

You can use Docker. A number of docker-compose configuration are available in the [src/main/docker](src/main/docker) folder to launch required third party services.

For example, to start a mysql database in a docker container, run:

```bash
docker-compose -f src/main/docker/mysql.yml up -d
```

To stop it and remove the container, run:

```bash
docker-compose -f src/main/docker/mysql.yml down
```

For more information refer to [Using Docker and Docker-Compose][], this page also contains information on the docker-compose sub-generator (`jhipster docker-compose`), which is able to generate docker configurations for one or several JHipster applications.

## Continuous Integration (optional)

To configure CI for your project, run the ci-cd sub-generator (`jhipster ci-cd`), this will let you generate configuration files for a number of Continuous Integration systems. Consult the [Setting up Continuous Integration][] page for more information.

[using jhipster in development]: https://www.jhipster.tech/development/
[using docker and docker-compose]: https://www.jhipster.tech/docker-compose
[using jhipster in production]: https://www.jhipster.tech/production/
[running tests page]: https://www.jhipster.tech/running-tests/
[code quality page]: https://www.jhipster.tech/code-quality/
[setting up continuous integration]: https://www.jhipster.tech/setting-up-ci/
[node.js]: https://nodejs.org/
[npm]: https://www.npmjs.com/
[webpack]: https://webpack.github.io/
[browsersync]: https://www.browsersync.io/
[jest]: https://facebook.github.io/jest/
[leaflet]: https://leafletjs.com/
[definitelytyped]: https://definitelytyped.org/
[angular cli]: https://cli.angular.io/
[openapi-generator]: https://openapi-generator.tech
[swagger-editor]: https://editor.swagger.io
[doing api-first development]: https://www.jhipster.tech/doing-api-first-development/
