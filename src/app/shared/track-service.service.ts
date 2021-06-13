import { Injectable } from '@angular/core';
import { Track } from './track/track';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TrackServiceService {
  constructor(private http:HttpClient) { }

  getAllTrack(){
    return this.http.get<Track[]>("http://localhost:9082/track");
}

addNewTrack(postbody){
    return this.http.post<Track[]>("http://localhost:9082/track",postbody)
}

deleteTrack(id:Number){
  return this.http.delete("http://localhost:9082/track/"+id+"/delete");
}
}
