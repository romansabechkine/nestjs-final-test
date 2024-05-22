import { AppRoutingModule } from './app.routing-module';
import { ConfigurationModule } from './infrastructure/configuration/configuration.module';
import { DatabaseModule } from './infrastructure/database/database.module';
import { Module } from '@nestjs/common';
import { TaskModule } from './task/task.module';
import { UserModule } from './user/user.module';

@Module({
    imports: [AppRoutingModule, ConfigurationModule, DatabaseModule, UserModule, TaskModule],
})
export class AppModule {}
