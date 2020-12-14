import { HttpModule, Module } from '@nestjs/common';
import { DeploymentController } from './deployment.controller';

const VERCEL_TOKEN = process.env.VERCEL_TOKEN || '';

@Module({
  controllers: [DeploymentController],
  imports: [
    HttpModule.register({
      headers: { Authorization: `Bearer ${VERCEL_TOKEN}` },
    }),
  ],
})
export class DeploymentModule {}
