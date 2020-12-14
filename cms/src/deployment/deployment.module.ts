import { HttpModule, Module } from '@nestjs/common';
import { DeploymentController } from './deployment.controller';

// Mount the endpoints only if VERCEL_TOKEN is set.
const VERCEL_TOKEN = process.env.VERCEL_TOKEN || '';
const controllers = VERCEL_TOKEN ? [DeploymentController] : [];

@Module({
  controllers,
  imports: [
    HttpModule.register({
      headers: { Authorization: `Bearer ${VERCEL_TOKEN}` },
    }),
  ],
})
export class DeploymentModule {}
