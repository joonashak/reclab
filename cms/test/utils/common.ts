import * as request from 'supertest';
import { INestApplication } from '@nestjs/common';

export const server = (app: INestApplication): request.SuperTest<request.Test> => request(app.getHttpServer())

