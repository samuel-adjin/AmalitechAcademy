import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';


import { Users } from '../users/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http:HttpClient) { }

  getAllUsers(){
    return this.http.get<Users>("http://localhost:8083/users");
}

addNewUser(postbody){
    return this.http.post<Users[]>("http://localhost:8083/users",postbody)
}

// deleteUser(id:Number){
//   return this.http.delete("http://localhost:8083/users/"+id+"/delete");
// }

deleteUser(id){

  const httpParams= new HttpParams({
    fromObject:{
      userId:id,
    }
  })
return this.http.delete<Users[]>("http://localhost:8083/users/delete",{params:httpParams});
}

updateUser(userId,updateBody){
  const url = "http://localhost:8083"
  return this.http.put(url,updateBody)
}

findUserByUserGroup(id){

  const httpParams= new HttpParams({
    fromObject:{
      groupId:id,
    }
  })
return this.http.get<Users[]>("http://localhost:8083/users/user/usergroup",{params:httpParams});
}


findUserByUserName(name){

  const httpParams= new HttpParams({
    fromObject:{
      user:name,
    }
  })
return this.http.get<Users[]>("http://localhost:8083/users/username",{params:httpParams});
}



findUserByUserId(id){

  const httpParams= new HttpParams({
    fromObject:{
      userId:id,
    }
  })
return this.http.get<Users[]>("http://localhost:8083/users/id",{params:httpParams});
}

// findUserById(id:Number){
//   return this.http.delete("http://localhost:8083/users/"+id);
// }

findUserBydepartId(id){

  const httpParams= new HttpParams({
    fromObject:{
      deptId:id,
    }
  })
return this.http.get<Users[]>("http://localhost:8083/users/user/dept",{params:httpParams});
}


}
