import { Controller, Get, HttpService, HttpException, UseGuards, HttpCode } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

const {
  REPOSITORY_DISPATCH_TYPE,
  GITHUB_OWNER,
  GITHUB_REPO_NAME,
} = process.env;

@Controller('deployment')
export class DeploymentController {
  constructor(private httpService: HttpService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  @HttpCode(204)
  async get(): Promise<void> {
    if (!REPOSITORY_DISPATCH_TYPE) {
      throw new HttpException('REPOSITORY_DISPATCH_TYPE not configured.', 500);
    }

    const url = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO_NAME}/dispatches`;
    await this.httpService
      .post(url, {
        event_type: REPOSITORY_DISPATCH_TYPE,
      })
      .toPromise();
  }
}
