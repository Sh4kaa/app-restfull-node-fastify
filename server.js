import { fastify } from 'fastify'
import { DataBaseMemory } from './database-memory.js'

const server = fastify()
const database = new DataBaseMemory()

// Criando video
server.post('/videos', (req, res) => {
  const { name, description, duration } = req.body
  database.create({ name, description, duration })
  return res.status(201).send('Video criado com sucesso')
})

//listando videos
server.get('/videos', (req, reply) => {
  const { search } = req.query
  console.log(search)
  const videos = database.list(search)
  return videos
})

//Atualizar
server.put('/videos/:id', (req, reply) => {
  const { id } = req.params
  const { name, description, duration } = req.body
  database.update(id, { name, description, duration })
  return reply.status(201).send()
})



server.delete('/videos/:id', (request, reply) => {
  const { id } = request.params
  database.delete(id)
  return reply.send()
})

server.listen({
  port: 3333
})