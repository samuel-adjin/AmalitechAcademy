import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Batch } from '../batch/batch';

@Injectable({
  providedIn: 'root'
})
export class BatchServiceService {
  constructor(private http:HttpClient) { }

  getAllBatch(){
    return this.http.get<Batch[]>("http://localhost:9082/batch");
}

addNewBatch(postbody){
    return this.http.post<Batch[]>("http://localhost:9082/batch",postbody)
}

deleteBatch(batch_id:Number){
  return this.http.delete("http://localhost:9082/batch/"+batch_id+"/delete");
}
}