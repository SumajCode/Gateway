import { Hono } from 'hono'
import { config } from 'dotenv'
import { z } from 'zod'

config()

const esquemaEntorno = z.object({
    COMPILADOR_API:z.string().min(32)
})

type EsquemaEntorno =z.infer<typeof esquemaEntorno>

