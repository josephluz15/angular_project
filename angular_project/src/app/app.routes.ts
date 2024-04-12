import { Routes } from '@angular/router';
import { DogRecordsComponent } from './components/dog-records/dog-records.component';

export const routes: Routes = [
    {path: '', redirectTo : "dogs", pathMatch: 'full'},
    {path: "dogs", component:DogRecordsComponent},
];
