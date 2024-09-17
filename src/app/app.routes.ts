import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CptamericaComponent } from './cptamerica/cptamerica.component';
import { WintersoldierComponent } from './wintersoldier/wintersoldier.component';

export const routes: Routes = [
    {path: 'contact', component: ContactComponent},
    {path: 'cptamerica', component: CptamericaComponent},
    {path: 'wintersoldier', component: WintersoldierComponent},
    {path: '', component: HomepageComponent}
];
