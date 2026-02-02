import Fastify from 'fastify';
import dotenv from 'dotenv';

dotenv.config();
const server = Fastify({ logger: true });

server.get('/api/health', async () => ({ status: 'ok' }));

const start = async () => {
  try {
    await server.listen({ port: Number(process.env.PORT) || 4000, host: '0.0.0.0' });
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();
