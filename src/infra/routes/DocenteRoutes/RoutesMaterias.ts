import { Hono } from 'hono';
import { Flaskresponse } from '../../../shared/interfaces/FlaskInterface';

const materia = new Hono().basePath('/materia');
const ruta = "" + materia.getPath

materia.delete('/eliminar', async (c) => {
    const response = await fetch(`${ruta}/eliminar`);
    const data = (await response.json()) as Flaskresponse;
    return c.json(data.data);
});

materia.delete('/eliminar/todo', async (c) => {
    const response = await fetch(`${ruta}/eliminar/todo`);
    const data = (await response.json()) as Flaskresponse;
    return c.json(data.data);
});

materia.get('/listar', async (c) => {
    const response = await fetch(`${ruta}/listar`);
    const data = (await response.json()) as Flaskresponse;
    return c.json(data.data);
});

materia.get('/docentes', async (c) => {
    const response = await fetch(`${ruta}/docentes`);
    const data = (await response.json()) as Flaskresponse;
    return c.json(data.data);
});

materia.post('/crear', async (c) => {
    const response = await fetch(`${ruta}/crear`);
    const data = (await response.json()) as Flaskresponse;
    return c.json(data.data);
});

materia.patch('/editar', async (c) => {
    const response = await fetch(`${ruta}/editar`);
    const data = (await response.json()) as Flaskresponse;
    return c.json(data.data);
});

export default materia