import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { genSalt, hash } from "bcrypt";

@Entity()
export class Users {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @BeforeInsert()
  async hasPass() {
    let pass = this.password;
    let salt = await genSalt(14);
    pass = await hash(pass, salt);
    this.password = pass;
  }
}
