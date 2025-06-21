import { z } from 'zod';

const esquemaEntorno = z.object({
    URL_API_DOCENTE:z.string(),
    URL_API_COMPILADOR: z.string(),
    URL_API_CONTENIDO: z.string(),
    URL_API_ESTUDIANTE: z.string(),
});

export type Configuracion = z.infer<typeof esquemaEntorno>;

export const ConfiguracionEnvs = (env: Record<string, unknown>): Configuracion => esquemaEntorno.parse(env)