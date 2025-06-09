import { Hono } from 'hono';
import { Flaskresponse } from '../../../shared/interfaces/FlaskInterface';

export const rutasDocente = (route: string) => {
    const docente = new Hono().basePath('/docente');

    docente.delete('/eliminar', async (c) => {
        const response = await fetch(`${route}/eliminar`);
        const data = (await response.json()) as Flaskresponse;
        return c.json(data.data);
    });

    docente.delete('/eliminar/todo', async (c) => {
        const response = await fetch(`${route}/eliminar/todo`);
        const data = (await response.json()) as Flaskresponse;
        return c.json(data.data);
    });

    docente.get('/listar', async (c) => {
        const response = await fetch(`${route}/listar`);
        const data = (await response.json()) as Flaskresponse;
        return c.json(data.data);
    });

    docente.get('/listar/id', async (c) => {
        const response = await fetch(`${route}/listar/id`);
        const data = (await response.json()) as Flaskresponse;
        return c.json(data.data);
    });

    docente.get('/materias', async (c) => {
        const response = await fetch(`${route}/materias`);
        const data = (await response.json()) as Flaskresponse;
        return c.json(data.data);
    });

    docente.post('/crear', async (c) => {
        const response = await fetch(`${route}/crear`);
        const data = (await response.json()) as Flaskresponse;
        return c.json(data.data);
    });

    docente.patch('/editar', async (c) => {
        const response = await fetch(`${route}/editar`);
        const data = (await response.json()) as Flaskresponse;
        return c.json(data.data);
    });

    return docente;
}