import { Hono } from 'hono';
import { env } from 'hono/adapter';
import { ConfiguracionEnvs } from './config/ConfMain';
import { rutasApiCompilador } from './infra/routes/RoutesCompilador';
import { rutasApiDocente } from './infra/routes/RouteMainDocente';

interface Bindings {
  URL_API_DOCENTE: string;
  URL_API_COMPILADOR: string;
  URL_API_CONTENIDO: string;
  URL_API_ESTUDIANTE: string;
}

type Variables = {
  config: ReturnType<typeof ConfiguracionEnvs>
}

const app = new Hono<{ Bindings: Bindings; Variables: Variables }>();

app.use('*', async (c, sig) => {
    try{
        const entorno = ConfiguracionEnvs(c.env as unknown as Record<string, unknown>);
        c.set('config', entorno);
    }catch (error) {
        console.log("ENV: ", c.env)
        console.log(error)
        return c.text('Error de configuración de entorno', 500);
    }
    await sig();
})

app.get('/', (c) => {
    const config = c.get('config');
    return c.json({
        mensaje: '¡Bienvenido al API Gateway!',
        apis: {
            docente: config.URL_API_DOCENTE,
            compilador: config.URL_API_COMPILADOR,
            estudiante: config.URL_API_ESTUDIANTE,
            contenidio: config.URL_API_CONTENIDO,
        },
    });
})

app.all('/apidocente', (c) => {
    const config = c.get('config');
    return rutasApiDocente(config.URL_API_DOCENTE).fetch(c.req.raw, env(c))
});

app.all('/apicompilador', (c) => {
    const config = c.get('config');
    return rutasApiCompilador(config.URL_API_COMPILADOR).fetch(c.req.raw, env(c))
});

export default app
