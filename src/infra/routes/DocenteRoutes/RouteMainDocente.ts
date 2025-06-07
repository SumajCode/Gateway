import { Hono } from 'hono'
import docente from './RoutesDocentes'
import materia from './RoutesMaterias'
import matricula from './RoutesMatriculas'
import { RegExpRouter } from 'hono/router/reg-exp-router'
import { TrieRouter } from 'hono/router/trie-router'
import { SmartRouter } from 'hono/router/smart-router'
import { Flaskresponse } from '../../../shared/interfaces/FlaskInterface'

const mainDocente = new Hono({
    router: new SmartRouter({
        routers: [
            new RegExpRouter(),
            new TrieRouter()
        ]
    })
})

const routeMain = ''

mainDocente.get('/', async (c) => {
    const response = await fetch(routeMain)
    const data = (await response.json()) as Flaskresponse
    return c.json(data)
})

mainDocente.route('/apidocente/v1', docente)
mainDocente.route('/apidocente/v1', materia)
mainDocente.route('/apidocente/v1', matricula)

export default mainDocente