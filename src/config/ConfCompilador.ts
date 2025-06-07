import { config } from 'dotenv'
import { z } from 'zod'

config();

const esquemaEntorno = z.object({
    URL_API_COMPILADOR:z.string().url(),
    // SECRET_KEY_COMPILADOR:z.string().min(32)
});

export type CompiladorEntorno =z.infer<typeof esquemaEntorno>;

export const CompiladorEnvs = (env: Record<string, string | undefined>): CompiladorEntorno => {
    try {
        return esquemaEntorno.parse(env);
    } catch (error) {
        throw new Error(`Configuracion erronea: ${error}`);
    }
}