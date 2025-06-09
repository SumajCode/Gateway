import { Hono } from 'hono';
import { Flaskresponse } from '../../../shared/interfaces/FlaskInterface';

export const rutasMateria = (route: string) => {
    const materia = new Hono().basePath('/materia');

    materia.delete('/eliminar', async (c) => {
        const response = await fetch(`${route}/eliminar`);
        const data = (await response.json()) as Flaskresponse;
        return c.json(data.data);
    });

    materia.delete('/eliminar/todo', async (c) => {
        const response = await fetch(`${route}/eliminar/todo`);
        const data = (await response.json()) as Flaskresponse;
        return c.json(data.data);
    });

    materia.get('/listar', async (c) => {
        const response = await fetch(`${route}/listar`);
        const data = (await response.json()) as Flaskresponse;
        return c.json(data.data);
    });

    materia.get('/docentes', async (c) => {
        const response = await fetch(`${route}/docentes`);
        const data = (await response.json()) as Flaskresponse;
        return c.json(data.data);
    });

    materia.post('/crear', async (c) => {
        const response = await fetch(`${route}/crear`);
        const data = (await response.json()) as Flaskresponse;
        return c.json(data.data);
    });

    materia.patch('/editar', async (c) => {
        const response = await fetch(`${route}/editar`);
        const data = (await response.json()) as Flaskresponse;
        return c.json(data.data);
    });

    return materia;
}