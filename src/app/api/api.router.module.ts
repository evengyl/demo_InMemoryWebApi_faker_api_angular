import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestApiMemoryComponent } from './test-api-memory/test-api-memory.component';

const routes: Routes = [
  {path:'', component  : TestApiMemoryComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApiRoutingModule { }
