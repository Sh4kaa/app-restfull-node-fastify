import { sql } from "./db.js";

sql`
CREATE TABLE videos (
  name        TEXT,
  description TEXT,
  duration    INTEGER
)
`.then(() => console.log('tabelas criadas'))