import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Depart } from './depart';


@Injectable({
  providedIn: 'root'
})
export class DepartService {
  constructor(private http:HttpClient) { }

  getAllDepart(){
    return this.http.get<Depart[]>("http://localhost:8083/depart");
}

addNewDepart(postbody){
    return this.http.post<Depart[]>("http://localhost:8083/depart",postbody)
}

deleteDepart(id:Number){
  return this.http.delete("http://localhost:8083/depart/"+id);
}

// deleteDepart(id){

//   const httpParams= new HttpParams({
//     fromObject:{
//       userId:id,
//     }
//   })
// return this.http.delete<Depart[]>("http://localhost:8083/depart/delete",{params:httpParams});
// }

updateDepart(userId,updateBody){
  const url = "http://localhost:8083/depart"
  return this.http.put(url,updateBody)
}

}