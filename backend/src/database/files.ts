import {
  BeforeInsert,
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Users } from "./users";
import crypto from "crypto";

@Entity()
export class Files {
  @PrimaryGeneratedColumn("uuid")
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

  @BeforeInsert()
  async calculateHash() {
    const hash = crypto.createHash("sha512");
    // console.log(this);

    const data = Date.now() + this.fileUrl + this.owner.id;
    hash.update(data);
    this.hash = hash.digest("hex");
  }
}
