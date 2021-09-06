import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

   url="localhost:3000/students";
  constructor( private httpClient:HttpClient) { }
   


  displaydata():Observable<any>{
         return this.httpClient.get(this.url).pipe(
        map((response =>response)
    ));

  }

  
}
