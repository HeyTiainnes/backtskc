import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

async function start() {
    const app = await NestFactory.create(AppModule);
    app.enableCors();
    await app.listen(3000);
}
start();