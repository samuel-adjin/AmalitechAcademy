import { Component, OnInit } from '@angular/core';
import { TrackServiceService } from 'src/app/shared/track-service.service';
import { Track } from 'src/app/shared/track/track';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {

  deleteId;
  track:Track[];
  constructor(private trackService:TrackServiceService) { }

 
  tracks:any;
  showAdd = -1;
  ngOnInit(): void {
    this.loadData();
     
  }

    loadData(){
      this.trackService.getAllTrack().subscribe(data=>{
        // this.trainees = data;
        this.track = data;
        // this.tracks = data
       console.log(this.track );
      });
    }
  refresh(){
    this.loadData();
    location.reload();
  }

  createNewTrack(postBody){
    this.trackService.addNewTrack(postBody).subscribe(data=>{
      console.log(data);
      this.loadData();
     this.close();
    })
  }

    add(index){
      this.showAdd = index;
    }

    add2(trackId:Number, index){
      this.deleteId = trackId;
      this.showAdd = index;
    }

    close(){
      this.showAdd = -1;
    }

    // deleteTrainee(id:Number){

    //   this.traineeService.deleteTrainee(id).subscribe(data=>{
    //     this.close();
    //     this.loadData();
       
    //   });
    //   console.log(id)
    // }

    deleteTrack(){

      this.trackService.deleteTrack(this.deleteId).subscribe(data=>{
        this.close();
        this.loadData();
        console.log(data);
       
      });
      // console.log(id)
    }


}
