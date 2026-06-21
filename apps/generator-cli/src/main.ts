/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import {NestFactory} from '@nestjs/core';
import {AppModule} from './app/app.module';

if (process.env.OPENAPI_GENERATOR_CLI_SEARCH_URL === 'DEFAULT' ) {
  console.log("aaaaa OPENAPI_GENERATOR_CLI_SEARCH_URL === DEFAULT");
} else {
  console.log("aaaaabbbbb OPENAPI_GENERATOR_CLI_SEARCH_URL !== DEFAULT");
}

async function bootstrap() {
  await NestFactory.createApplicationContext(AppModule, {logger: false});
}

bootstrap();
