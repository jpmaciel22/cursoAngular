import { ApplicationConfig } from "@angular/core";
import { provideRouter, withComponentInputBinding, withRouterConfig } from "@angular/router";
import { routes } from "./app.routes";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withComponentInputBinding(),
    withRouterConfig({
      paramsInheritanceStrategy: 'always', // isso permite que os parametros dinamicos como o 'userId' de
      //user-tasks seja injetado também em child components
    })),],
}
