import {
  BeforeInsert,
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { genSalt, hash } from "bcrypt";
import { Files } from "./files";

@Entity()
export class Users {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ unique: true })
  email: string;
  @Column()
  first_name: string;
  @Column()
  last_name: string;
  @Column()
  username: string;
  @Column()
  password: string;

  @OneToMany(() => Files, (f) => f.owner)
  @JoinColumn()
  myFiles: Files[];
  @BeforeInsert()
  async hasPass() {
    let pass = this.password;
    let salt = await genSalt(14);
    pass = await hash(pass, salt);
    this.password = pass;
  }
}
