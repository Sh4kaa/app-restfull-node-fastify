import { fastify } from 'fastify'
// import { DataBaseMemory } from './database-memory.js'
import { DataBasePostgres } from './database-postgres.js'

const server = fastify()
//const database = new DataBaseMemory()
const database = new DataBasePostgres

server.get('/', async (req, res) => {
  return res.status(200).send('App is Work')
})

// Criando video
server.post('/videos', async (req, res) => {
  const { name, description, duration } = req.body
  await database.create({ name, description, duration })
  return res.status(201).send('Video criado com sucesso')
})

//listando videos
server.get('/videos', async (req, reply) => {
  const { search } = req.query
  const videos = await database.list(search)
  return videos
})

//Atualizar
server.put('/videos/:id', async (req, reply) => {
  const { id } = req.params
  const { name, description, duration } = req.body
  await database.update(id, { name, description, duration })
  return reply.status(204).send()
})

server.delete('/videos/:id', async (request, reply) => {
  const { id } = request.params
  await database.delete(id)
  return reply.send()
})

server.listen({
  host: '0.0.0.0',
  port: process.env.PORT ?? 3333
})