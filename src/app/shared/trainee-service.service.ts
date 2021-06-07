import { HttpClient,HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Trainee } from './trainee';

@Injectable({
  providedIn: 'root'
})
export class TraineeServiceService {

  constructor(private http:HttpClient) { }

  getAllTrainees(){
    return this.http.get<Trainee[]>("http://localhost:9082/trainee/allTrainees");
}

addNewTrainee(postbody){
    return this.http.post<Trainee[]>("http://localhost:9082/trainee",postbody)
}

deleteTrainee(id:Number){
  return this.http.delete("http://localhost:9082/trainee/"+id+"/delete");
}

getTraineesByStatus(traineeStatus){
  const httpParams= new HttpParams({
    fromObject:{
      status:traineeStatus,
     
      

    }
  })
return this.http.get<Trainee[]>("http://localhost:9082/trainee/status",{params:httpParams});
}


statusEntries(entries){
  const httpParams= new HttpParams({
    fromObject:{
      pageSize:entries,
      

    }
  })
return this.http.get<Trainee[]>("http://localhost:9082/trainee/status",{params:httpParams});
}


getTraineeByBatch(trainee_batch_id){

  const httpParams= new HttpParams({
    fromObject:{
      id:trainee_batch_id,
    }
  })
return this.http.get<Trainee[]>("http://localhost:9082/trainee/batch",{params:httpParams});
}

}