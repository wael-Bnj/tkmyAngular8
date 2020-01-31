import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Profile } from 'src/app/Models/profile';
import { ProfileService } from 'src/app/Services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  listprofiles;
  profile:any={};
  form:any={};

  constructor(private  profileService : ProfileService ,private router:Router) { }

  onSubmit(){
    
    this.profile.age=this.form.firstname;
    this.profile.famille=this.form.lastname;
    this.profile.race=this.form.email;
    this.profileService.addprofile(this.form).subscribe(data =>{ 
      console.log(this.form);
      this.profileService.getprofile().subscribe (
        data=>{
          console.log(data);
          this.listprofiles=data;
        });
      }    
     );
  }
  
  deleteDinosaure(id:any){

    this.profileService.deleteprofile(id).subscribe(Data=>{
      this.profileService.getprofile().subscribe (
        data=>{
          console.log(data);
          this.listprofiles=data;
        });    
    })
  }
  ngOnInit() {
    this.profileService.getprofile().subscribe (
      data=>{
        console.log(data);
        this.listprofiles=data;
      });
  }

}
