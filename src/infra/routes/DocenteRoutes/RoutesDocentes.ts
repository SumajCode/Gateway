import { Hono } from 'hono';
import { Flaskresponse } from '../../../shared/interfaces/FlaskInterface';

const docente = new Hono().basePath('/docente');
const ruta = ""

docente.delete('/eliminar', async (c) => {
    const response = await fetch(`${ruta}/eliminar`);
    const data = (await response.json()) as Flaskresponse;
    return c.json(data.data);
});

docente.delete('/eliminar/todo', async (c) => {
    const response = await fetch(`${ruta}/eliminar/todo`);
    const data = (await response.json()) as Flaskresponse;
    return c.json(data.data);
});

docente.get('/listar', async (c) => {
    const response = await fetch(`${ruta}/listar`);
    const data = (await response.json()) as Flaskresponse;
    return c.json(data.data);
});

docente.get('/listar/id', async (c) => {
    const response = await fetch(`${ruta}/listar/id`);
    const data = (await response.json()) as Flaskresponse;
    return c.json(data.data);
});

docente.get('/materias', async (c) => {
    const response = await fetch(`${ruta}/materias`);
    const data = (await response.json()) as Flaskresponse;
    return c.json(data.data);
});

docente.post('/crear', async (c) => {
    const response = await fetch(`${ruta}/crear`);
    const data = (await response.json()) as Flaskresponse;
    return c.json(data.data);
});

docente.patch('/editar', async (c) => {
    const response = await fetch(`${ruta}/editar`);
    const data = (await response.json()) as Flaskresponse;
    return c.json(data.data);
});

export default docente