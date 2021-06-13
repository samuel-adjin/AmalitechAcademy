import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Usergroup } from './usergroup';


@Injectable({
  providedIn: 'root'
})

export class UsergroupService {
  constructor(private http:HttpClient) { }

  getAllUserGroup(){
    return this.http.get<Usergroup[]>("http://localhost:8083/grp");
}

addNewUserGroup(postbody){
    return this.http.post<Usergroup[]>("http://localhost:8083/grp",postbody)
}

deleteUserGroup(id:Number){
  return this.http.delete("http://localhost:8083/grp/"+id);
}

updateUserGroup(userId,updateBody){
  const url = "http://localhost:8083/grp"
  return this.http.put(url,updateBody)
}

}