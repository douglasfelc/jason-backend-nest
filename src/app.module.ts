import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EpicsModule } from './epics/epics.module';
import { TasksModule } from './tasks/tasks.module';
import { LabelsModule } from './labels/labels.module';
import { ProjectsModule } from './projects/projects.module';
import { StatusModule } from './status/status.module';
import { VersionsModule } from './versions/versions.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [EpicsModule, TasksModule, LabelsModule, ProjectsModule, StatusModule, VersionsModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
