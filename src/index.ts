import { Hono } from 'hono';
import { ConfiguracionEnvs } from './config/ConfMain';
import { rutasApiCompilador } from './infra/routes/RoutesCompilador';
import { rutasApiDocente } from './infra/routes/RouteMainDocente';
import { rutasApiEstudainte } from './infra/routes/RoutesEstudiante';
import { rutasApiContenido } from './infra/routes/RoutesContenido';

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

// Middleware para guardar el config en cada request
app.use('*', async (c, next) => {
  const config = ConfiguracionEnvs(c.env as unknown as Record<string, unknown>);
  c.set('config', config);
  await next();
});

const staticEnv = {
  URL_API_DOCENTE: 'https://microservice-docente.onrender.com',
  URL_API_COMPILADOR: 'https://microservicecompilador.onrender.com',
  URL_API_CONTENIDO: 'https://microservice-content.onrender.com',
  URL_API_ESTUDIANTE: 'https://microservice-estudiante.onrender.com',
};

const staticConfig = ConfiguracionEnvs(staticEnv);

app.route('', rutasApiDocente(staticConfig.URL_API_DOCENTE));
app.route('', rutasApiEstudainte(staticConfig.URL_API_ESTUDIANTE));
app.route('', rutasApiContenido(staticConfig.URL_API_CONTENIDO));
app.route('', rutasApiCompilador(staticConfig.URL_API_COMPILADOR));

app.get('/', (c) => {
  const config = c.get('config');
  return c.json({
    mensaje: '¡Bienvenido al API Gateway!',
    apis: {
      docente: config.URL_API_DOCENTE,
      compilador: config.URL_API_COMPILADOR,
      estudiante: config.URL_API_ESTUDIANTE,
      contenido: config.URL_API_CONTENIDO,
    },
    rutas: app.routes
  });
});

export default app;