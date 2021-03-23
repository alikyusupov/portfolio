import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RusflixComponent} from './rusflix/rusflix.component';
import { ProstogrammComponent} from './prostogramm/prostogramm.component';
import { StartpageComponent } from "./startpage/startpage.component";
import { SlavehunterControlComponent } from "./slavehunter/slavehunter-control/slavehunter-control.component";


const routes: Routes = [
    {path: "rusflix", component: RusflixComponent},
    {path: "prostogramm", component: ProstogrammComponent},
    {path: "startpage", component: StartpageComponent},
    {path: "slavehunter", component: SlavehunterControlComponent},
    {path: '', redirectTo: 'startpage', pathMatch: 'full'},
];



@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers : []
})

export class AppRoutingModule{};