import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RecordsComponent } from './components/records/records.component';
import { RecordsResolver } from './resolver/records.resolver';


const routes: Routes = [

    { path : '', redirectTo:'home', pathMatch:'full'},
    { path : 'home', component: HomeComponent},
    { 
      path : 'record',
      component: RecordsComponent, 
      resolve: { records: RecordsResolver}
    },
    { path : '**', component: RecordsComponent}


    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
