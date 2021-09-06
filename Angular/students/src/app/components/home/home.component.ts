import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/student';
import { StudentsService } from 'src/app/students.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
     student:any;

  constructor(private studentService:StudentsService) { }
    
   

  ngOnInit(): void {
    this.student=this.studentService.displaydata();
  }
  displaydata(){
    
    }
  }

