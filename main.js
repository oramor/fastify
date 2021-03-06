import Fastify from "fastify";

const engine = Fastify({
  	logger: true
});

engine.get('/', (request, reply) => {
  	reply.send({ hello: 'world' })
});

engine.listen({ port: 3000 }, (err, address) => {
  	if (err) throw err
});