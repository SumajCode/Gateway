import { config } from 'dotenv'
import { z } from 'zod'

config();

const esquemaEntorno = z.object({
    URL_API_DOCENTE:z.string().url(),
    // SECRET_KEY_DOCENTE:z.string().min(32)
});

export type DocenteEntorno =z.infer<typeof esquemaEntorno>;

export const DocenteEnvs = (env: Record<string, string | undefined>): DocenteEntorno => {
    try {
        return esquemaEntorno.parse(env);
    } catch (error) {
        throw new Error(`Configuracion erronea: ${error}`);
    }
}