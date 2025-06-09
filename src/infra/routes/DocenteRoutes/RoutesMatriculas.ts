import { Hono } from 'hono';
import { Flaskresponse } from '../../../shared/interfaces/FlaskInterface';

export const rutasMatricula = (route: string) => {
    const matricula = new Hono().basePath('/matricula');

    matricula.delete('/eliminar', async (c) => {
        const response = await fetch(`${route}/eliminar`);
        const data = (await response.json()) as Flaskresponse;
        return c.json(data.data);
    });

    matricula.delete('/eliminar/todo', async (c) => {
        const response = await fetch(`${route}/eliminar/todo`);
        const data = (await response.json()) as Flaskresponse;
        return c.json(data.data);
    });

    matricula.get('/materia', async (c) => {
        const response = await fetch(`${route}/materia`);
        const data = (await response.json()) as Flaskresponse;
        return c.json(data.data);
    });

    matricula.get('/listar', async (c) => {
        const response = await fetch(`${route}/listar`);
        const data = (await response.json()) as Flaskresponse;
        return c.json(data.data);
    });

    matricula.get('/matriculas', async (c) => {
        const response = await fetch(`${route}/matriculas`);
        const data = (await response.json()) as Flaskresponse;
        return c.json(data.data);
    });

    matricula.post('/crear', async (c) => {
        const response = await fetch(`${route}/crear`);
        const data = (await response.json()) as Flaskresponse;
        return c.json(data.data);
    });

    matricula.post('/crear/matriculas', async (c) => {
        const response = await fetch(`${route}/crear/matriculas`);
        const data = (await response.json()) as Flaskresponse;
        return c.json(data.data);
    });

    matricula.patch('/editar', async (c) => {
        const response = await fetch(`${route}/editar`);
        const data = (await response.json()) as Flaskresponse;
        return c.json(data.data);
    });

    return matricula;
}