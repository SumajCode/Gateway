import { Hono } from 'hono';
import { rutasDocente } from './RoutesDocentes';
import { rutasMateria } from './RoutesMaterias';
import { rutasMatricula } from './RoutesMatriculas';
import { config } from '../../../config/ConfMain';

const mainDocente = new Hono();

const routeMain = config.docente as unknown as string;

mainDocente.route('/apidocente/v1', rutasDocente(routeMain));
mainDocente.route('/apidocente/v1', rutasMateria(routeMain));
mainDocente.route('/apidocente/v1', rutasMatricula(routeMain));

export default mainDocente;