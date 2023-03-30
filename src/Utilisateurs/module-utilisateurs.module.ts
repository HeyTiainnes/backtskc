
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';


import { UtilisateursController } from './controller-utilisateurs.controller';
import { UtilisateursService } from './service-utilisateurs.service';
import { utilisateursEntity } from './entity/utilisateurs.entity';


@Module({

    imports: [TypeOrmModule.forFeature([utilisateursEntity])],


    controllers: [UtilisateursController],


    providers: [UtilisateursService],

})
export class UsersModule { }
