import { registerAs } from '@nestjs/config';

export default registerAs('redis', () => ({
  url: process.env.REDIS_URL,
  ttl: 3600, // 1 hour
  host: process.env.REDIS_HOST,
  port: 19964,
}));