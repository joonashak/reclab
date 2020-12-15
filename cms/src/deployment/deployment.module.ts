import { HttpModule, Module } from '@nestjs/common';
import { DeploymentController } from './deployment.controller';

// Mount the endpoints only if GITHUB_TOKEN is set.
const GITHUB_TOKEN = process.env.GITHUB_TOKEN || '';
const controllers = GITHUB_TOKEN ? [DeploymentController] : [];

@Module({
  controllers,
  imports: [
    HttpModule.register({
      headers: { Authorization: `token ${GITHUB_TOKEN}` },
    }),
  ],
})
export class DeploymentModule {}
