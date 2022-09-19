import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestApiMemoryComponent } from './test-api-memory/test-api-memory.component';
import { DataService } from '../shared/data.services';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { ApiRoutingModule } from './api.router.module';



@NgModule({
  declarations: [
    TestApiMemoryComponent
  ],
  imports: [
    CommonModule,
    HttpClientInMemoryWebApiModule.forRoot(DataService),
    HttpClientModule,
    ApiRoutingModule
  ],
  providers : [
    DataService
  ]
})
export class APIModule { }
