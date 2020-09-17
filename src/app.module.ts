import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { PagesModule } from './pages/pages.module';
import { RoutesModule } from './routes/routes.module';
import { SeederModule } from './seeder/seeder.module';
import { LanguagesModule } from './languages/languages.module';
import { MenuModule } from './menu/menu.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      autoLoadEntities: true,
      synchronize: true,
    }),
    UsersModule,
    AuthModule,
    PagesModule,
    RoutesModule,
    SeederModule,
    LanguagesModule,
    MenuModule,
  ],
})
export class AppModule {}
