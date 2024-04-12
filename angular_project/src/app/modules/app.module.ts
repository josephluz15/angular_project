import { FormsModule } from "@angular/forms";
import { AppComponent } from "../app.component";
import { RouterModule, Routes } from "@angular/router";
import { DogRecordsComponent } from "../components/dog-records/dog-records.component";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

const routes: Routes = [
    {path: '', redirectTo : "dogs", pathMatch: 'full'},
    {path: "dogs", component:DogRecordsComponent},
//  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    declarations: [
      AppComponent,
      DogRecordsComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        CommonModule,
        RouterModule.forRoot(routes, { useHash: false })
    ],
    providers: [
     ],
    bootstrap: [AppComponent]
  })
  export class AppModule { }