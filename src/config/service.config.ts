import { registerAs } from '@nestjs/config';

export default registerAs('service', () => ({
  name: 'user-service',
  version: '1.0.0',
  port: parseInt(process.env.PORT ?? '3001', 10) || 3001,
  internalApiKey: process.env.INTERNAL_API_KEY || 'secure-internal-api-key',
  rabbitMQ: {
    url: process.env.RABBITMQ_URL || 'amqp://zAqCnGgPhR50iHzh:WpEAlkm.4DIQ1dmTwYgAKfIyh7.a2A4e@switchback.proxy.rlwy.net:22106',
    exchanges: {
      userEvents: 'user.events'
    }
  }
}));