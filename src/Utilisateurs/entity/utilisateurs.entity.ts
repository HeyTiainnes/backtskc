import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";


@Entity('utilisateurs')
export class utilisateursEntity {


    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column()
    mail!: string;

    @Column()
    password!: string;
}

