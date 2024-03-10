import { sql } from "./db.js";

// sql`DROP TABLE IF EXISTS videos`
//   .then(() => console.log('Tabela apagada'))

sql`
CREATE TABLE videos (
  id          TEXT PRIMARY KEY,
  name        TEXT,
  description TEXT,
  duration    INTEGER
)
`.then(() => console.log('tabelas criadas'))