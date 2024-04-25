import { DataSource } from "typeorm";
import { Users } from "./users";

export default new DataSource({
  type: "sqlite",
  database: "new.db",
  synchronize: true,
  entities: [Users],
});
