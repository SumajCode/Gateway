import { generarRutasProxy } from "../../features/secure/proxys/ProxyRoutes";
import { RutaProxy } from "../../shared/interfaces/ProxyInterface";

const rutasContenido: RutaProxy[] = [
    { method: 'delete', route: '/archivo/crear', destiny: '/archivo/crear'},
    { method: 'get', route: '/archivo/editar', destiny: '/archivo/editar'},
    { method: 'post', route: '/archivo/eliminar', destiny: '/archivo/eliminar'},
    { method: 'patch', route: '/archivo/listar', destiny: '/archivo/listar'},
    { method: 'delete', route: '/modulo/crear', destiny: '/modulo/crear'},
    { method: 'get', route: '/modulo/editar', destiny: '/modulo/editar'},
    { method: 'post', route: '/modulo/eliminar', destiny: '/modulo/eliminar'},
    { method: 'patch', route: '/modulo/listar', destiny: '/modulo/listar'},
    { method: 'get', route:'/', destiny: '/'}
]

export const rutasApiContenido = (route: string) => generarRutasProxy('/apicontenido/v1', route, rutasContenido);