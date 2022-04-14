import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {

  chkFlag=false;
  
  constructor(private server: BackendService,private router: Router) { }
 
  ngOnInit(): void {
  
    localStorage.clear()
  }

  //calls the backend service access methods to add the req.body in the backend when submit is clicked(event binding)
  submit(note: NgForm){
   console.log(note.value)
   this.server.addNote(note.value).subscribe(query=>{
     console.log(query)
     if(query){
       alert('Note has been Added')
       this.router.navigate(['/home'])
     }
   })
  }

}
