import { DataSource } from "typeorm";
import { Users } from "./users";
import { Files } from "./files";

export default new DataSource({
  type: "sqlite",
  database: "new.db",
  synchronize: true,
  entities: [Users, Files],
});
