import { Hono } from 'hono';
import { Flaskresponse } from '../../../shared/interfaces/FlaskInterface';

const matricula = new Hono().basePath('/matricula');
const ruta = matricula.getPath

matricula.delete('/eliminar', async (c) => {
    const response = await fetch(`${ruta}/eliminar`);
    const data = (await response.json()) as Flaskresponse;
    return c.json(data.data);
});

matricula.delete('/eliminar/todo', async (c) => {
    const response = await fetch(`${ruta}/eliminar/todo`);
    const data = (await response.json()) as Flaskresponse;
    return c.json(data.data);
});

matricula.get('/materia', async (c) => {
    const response = await fetch(`${ruta}/materia`);
    const data = (await response.json()) as Flaskresponse;
    return c.json(data.data);
});

matricula.get('/listar', async (c) => {
    const response = await fetch(`${ruta}/listar`);
    const data = (await response.json()) as Flaskresponse;
    return c.json(data.data);
});

matricula.get('/matriculas', async (c) => {
    const response = await fetch(`${ruta}/matriculas`);
    const data = (await response.json()) as Flaskresponse;
    return c.json(data.data);
});

matricula.post('/crear', async (c) => {
    const response = await fetch(`${ruta}/crear`);
    const data = (await response.json()) as Flaskresponse;
    return c.json(data.data);
});

matricula.post('/crear/matriculas', async (c) => {
    const response = await fetch(`${ruta}/crear/matriculas`);
    const data = (await response.json()) as Flaskresponse;
    return c.json(data.data);
});

matricula.patch('/editar', async (c) => {
    const response = await fetch(`${ruta}/editar`);
    const data = (await response.json()) as Flaskresponse;
    return c.json(data.data);
});

export default matricula