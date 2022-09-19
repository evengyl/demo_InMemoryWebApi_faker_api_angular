import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-api-memory',
  templateUrl: './test-api-memory.component.html'
})
export class TestApiMemoryComponent implements OnInit {

  constructor(private http : HttpClient) { }

  ngOnInit(): void {
    this.http.get("api/products/").subscribe((res) => {
      console.log(res)
    })
  }

}


interface Product{
  id : number
  name : string
}