import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Profile } from '../Models/profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }
  
public addprofile(profile:Profile ) {
  
  return this.http.post('http://localhost:3000/api/add-profile',profile);
  

}

public getprofile() {
  
  return this.http.get<any>('http://localhost:3000/api/getAll-profiles');

}


public deleteprofile(id){
  return this.http.delete<any>('http://localhost:3000/api/delete-profile/'+id);
}
}
