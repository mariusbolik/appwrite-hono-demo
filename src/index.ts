import { Hono } from 'hono'
import { serve } from '@gravlabs/appwrite-hono-adapter-bun'
import type { AppwriteBindings } from '@gravlabs/appwrite-hono-adapter-bun/types'

const app = new Hono<{ Bindings: AppwriteBindings}>()

app.post('/', async (c) => {
  c.env.log(`Request: ${JSON.stringify(c.req)}`);
  
  const blob = await c.req.arrayBuffer();
  return c.body(blob, {
    status: 200,
    headers: {
      'Content-Type': 'image/jpg',
    },
  })
})

export default serve(app)
