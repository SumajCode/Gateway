import { Hono } from 'hono';
import { SmartRouter } from 'hono/router/smart-router';
import { RegExpRouter } from 'hono/router/reg-exp-router';
import { TrieRouter } from 'hono/router/trie-router';
import mainDocente from './infra/routes/DocenteRoutes/RouteMainDocente';

const app = new Hono({
    router: new SmartRouter({
        routers: [
            new RegExpRouter(),
            new TrieRouter()
        ]
    })
});

app.get('/', (c) => { return c.text(`New Gateway in process!!!!!!!!`) });

/**
 * ? Trabajar con webworkers para la ejecucion de los endpoints de forma que logren ser asincronos y reducir la latencia
 * ? entre peticiones del usuario
 */
app.route('/gateway', mainDocente)

export default app
