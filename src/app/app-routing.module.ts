import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [

  {path: "", loadChildren: ()=> import("./ui/ui.module").then(module => module.UiModule)},
  {path: "home", loadChildren: ()=> import("./ui/ui.module").then(module => module.UiModule)},
  {path: "userAdd", loadChildren: ()=> import("./ui/ui.module").then(module => module.UiModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
