import { Controller, Get, HttpService } from '@nestjs/common';

@Controller('deployment')
export class DeploymentController {
  constructor(private httpService: HttpService) {}

  @Get()
  async get(): Promise<any> {
    //const res = await this.httpService.get('https://api.vercel.com/v5/now/deployments?limit=20').toPromise()
    //console.log('RATE LIMIT', res.headers['x-ratelimit-remaining']);
    return 'moi';
  }
}
