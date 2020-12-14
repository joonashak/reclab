import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { PagesModule } from './pages/pages.module';
import { SeederModule } from './seeder/seeder.module';
import { MenuModule } from './menu/menu.module';
import { SettingsModule } from './settings/settings.module';
import { DeploymentModule } from './deployment/deployment.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      autoLoadEntities: true,
      synchronize: process.env.NODE_ENV === 'development',
      // logging: process.env.NODE_ENV === 'development',
    }),
    UsersModule,
    AuthModule,
    PagesModule,
    SeederModule,
    MenuModule,
    SettingsModule,
    DeploymentModule,
  ],
})
export class AppModule {}
