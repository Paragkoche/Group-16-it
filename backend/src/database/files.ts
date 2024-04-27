import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Users } from "./users";

@Entity()
export class Files {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  prvHash: string;

  @Column()
  hash: string;

  @Column({ default: () => "CURRENT_TIMESTAMP" })
  timeStamp: Date;

  @Column()
  fileUrl: string;

  @Column({ default: "private" })
  mode: string;

  @ManyToMany(() => Users)
  @JoinTable()
  shareWith: Users[];

  @ManyToOne(() => Users, (usr) => usr.myFiles)
  @JoinColumn()
  owner: Users;
}
