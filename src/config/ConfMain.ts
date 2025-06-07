import { Config } from "../shared/interfaces/ConfigInterface";
import { CompiladorEnvs } from "./ConfCompilador";
import { DocenteEnvs } from "./ConfDocente";

const env = process.env;

export const config: Config = {
    docente: DocenteEnvs(env),
    compilador: CompiladorEnvs(env)
};