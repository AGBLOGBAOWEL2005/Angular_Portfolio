import { Routes } from '@angular/router';
import { Connecter } from '../components/connecter/connecter';
import { Main } from '../components/main/main';

export const routes: Routes = [
    {path:'connecter',component:Connecter},
    {path:'',component:Main},
    { path: 'projet/:id', component: Connecter }
];
