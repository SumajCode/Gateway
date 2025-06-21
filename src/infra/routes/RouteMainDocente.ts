import { generarRutasProxy } from "../../features/secure/proxys/ProxyRoutes";
import { RutaProxy } from "../../shared/interfaces/ProxyInterface";

const rutasDocente: RutaProxy[] = [
    { method: 'delete', route: '/docente/eliminar', destiny: '/docente/eliminar'},
    { method: 'delete', route: '/docente/eliminar/todo', destiny: '/docente/eliminar/todo'},
    { method: 'get', route: '/docente/listar', destiny: '/docente/listar'},
    { method: 'get', route: '/docente/listar/id', destiny: '/docente/listar/id'},
    { method: 'get', route: '/docente/materias', destiny: '/docente/materias'},
    { method: 'post', route: '/docente/crear', destiny: '/docente/crear'},
    { method: 'patch', route: '/docente/editar', destiny: '/docente/editar'},
    { method: 'delete', route: '/materia/eliminar', destiny: '/materia/eliminar'},
    { method: 'delete', route: '/materia/eliminar/todo', destiny: '/materia/eliminar/todo'},
    { method: 'get', route: '/materia/listar', destiny: '/materia/listar'},
    { method: 'get', route: '/materia/docentes', destiny: '/materia/docentes'},
    { method: 'post', route: '/materia/crear', destiny: '/materia/crear'},
    { method: 'patch', route: '/materia/editar', destiny: '/materia/editar'},
    { method: 'post', route: '/matricula/crear', destiny: '/matricula/crear'},
    { method: 'post', route: '/matricula/crear/matriculas', destiny: '/matricula/crear/matriculas'},
    { method: 'delete', route: '/matricula/eliminar', destiny: '/matricula/eliminar'},
    { method: 'get', route: '/matricula/listar/materia', destiny: '/matricula/listar/materia'},
    { method: 'get', route: '/', destiny: '/'}
]

export const rutasApiDocente = (route: string) => generarRutasProxy('/v1', route, rutasDocente);