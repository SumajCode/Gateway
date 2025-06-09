import { DocenteEntorno } from "../../config/ConfDocente";
import { CompiladorEntorno } from "../../config/ConfCompilador";

export interface Config {
    compilador: CompiladorEntorno,
    docente: DocenteEntorno,
    // Demas tipos de apis
}