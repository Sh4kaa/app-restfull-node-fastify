import { randomUUID } from 'crypto'
import { sql } from "./db.js"



export class DataBasePostgres {

  async list(search) {
    let videos
    if (search) {
      videos = await sql`select * from videos where name ilike ${'%' + search + '%'}`
    } else {
      videos = await sql`select * from videos`
    }
    return videos
  }

  async create(video) {
    const { name, duration, description } = video
    const videoId = randomUUID()
    await sql`insert into videos (id, name, description, duration) VALUES (${videoId}, ${name}, ${description}, ${duration})`
  }

  async update(id, video) {
    const { name, description, duration } = video
    await sql`update videos set name = ${name}, description = ${description}, duration = ${duration} WHERE id = ${id}`
  }

  async delete(id) {
    await sql`delete from videos WHERE id = ${id}`
  }
}