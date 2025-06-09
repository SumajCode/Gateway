import { Hono } from 'hono';
import { Flaskresponse } from '../../shared/interfaces/FlaskInterface';
import { Config } from '../../shared/interfaces/ConfigInterface';


export const rutasCompilador = (route: string) => {
    const compilador = new Hono().basePath('/compilador'); 

    compilador.get('/compilar', async (c) => {
        const response = await fetch(`${route}/compilar`);
        const data = (await response.json()) as Flaskresponse;
        return c.json(data.data);
    })

    compilador.get('/evaluar', async (c) => {
        const response = await fetch(`${route}/evaluar`);
        const data = (await response.json()) as Flaskresponse;
        return c.json(data.data);
    })

    compilador.get('/tarea', async (c) => {
        const response = await fetch(`${route}/tarea`);
        const data = (await response.json()) as Flaskresponse;
        return c.json(data.data);
    })

    // compilador.get('/compilar', async (c) => {
    //     const response = await fetch('ruta compilador');
    //     const data = (await response.json()) as Flaskresponse;
    //     return c.json(data.data);
    // })

    return compilador;
}