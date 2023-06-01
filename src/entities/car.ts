import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class Car {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  maker: string

  @Column()
  model: string

  @Column()
  year_prod: number
};