import { Hono } from "hono";
import { Flaskresponse } from "../../../shared/interfaces/FlaskInterface";
import { RutaProxy } from "../../../shared/interfaces/ProxyInterface";

export const generarRutasProxy = (basePath: string, routeMain: string, routes: RutaProxy[]) => {
    const proxy = new Hono().basePath(basePath);
    for (const { method, route, destiny } of routes) {
        proxy[method](route, async (c)=>{
            const response = await fetch(`${routeMain}${destiny}`, {
                method: method.toUpperCase(),
                headers: {
                    'Content-type': 'application/json'
                },
                body: method === 'post' || method === 'patch' ? await c.req.raw.text() : undefined
            });

            const data = (await response.json()) as Flaskresponse;
            return c.json(data.data);
        });
    }

    return proxy;
};

