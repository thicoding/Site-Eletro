import { Routes } from "@angular/router";
import { HomeComponent } from "./navegacao/home/home.component";
import { ContatoComponent } from "./instituicao/contato/contato.component";
import { SobreComponent } from "./instituicao/sobre/sobre.component";
import { DataBindingComponent } from "./demos/data-binding/data-binding.component";

export const rootRouterConfig: Routes = [
   {path: '', redirectTo: '/home', pathMatch: 'full'},
   {path: 'home', component: HomeComponent},

   {path: 'contato', component: ContatoComponent},
   { path: 'sobre', component: SobreComponent },
   { path: 'feature-data-binding', component: DataBindingComponent}



];