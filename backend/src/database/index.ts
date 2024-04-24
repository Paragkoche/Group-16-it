import { DataSource } from "typeorm";

export default new DataSource({
  type: "sqlite",
  database: "new.db",
  synchronize: true,
});
