import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export default class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  username: string

  @Column()
  password: string

  static initialize: any
}