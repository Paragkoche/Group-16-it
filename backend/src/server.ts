import app from "@/app";
import db from "@/database";
app.listen(8080, async () => {
  await db.initialize();
  console.log("server start at 8080");
});
