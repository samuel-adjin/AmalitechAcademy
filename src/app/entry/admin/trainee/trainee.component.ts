import { Component, OnInit } from '@angular/core';
import { Trainee } from 'src/app/shared/trainee';
import { TraineeServiceService } from 'src/app/shared/trainee-service.service';

@Component({
  selector: 'app-trainee',
  templateUrl: './trainee.component.html',
  styleUrls: ['./trainee.component.css']
})
export class TraineeComponent implements OnInit {
  deleteId;
  trainee:Trainee[];

  constructor(private traineeService:TraineeServiceService) { }

  traineeStatus:any;
  trainees:any;
  showAdd = -1;
  ngOnInit(): void {
    this.loadData();
     
  }

    loadData(){
      this.traineeService.getAllTrainees().subscribe(data=>{
        // this.trainees = data;
        this.trainee = data;

       
       
      });
    }
  refresh(){
    location.reload();
  }

    createNewTrainee(postBody){
      this.traineeService.addNewTrainee(postBody).subscribe(data=>{
        console.log(data);
        this.loadData();
       this.close();
      })
    }

    add(index){
      this.showAdd = index;
    }

    add2(traineeId:Number, index){
      this.deleteId = traineeId
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

    deleteTrainee(){

      this.traineeService.deleteTrainee(this.deleteId).subscribe(data=>{
        this.close();
        this.loadData();
       
      });
      // console.log(id)
    }

    getAllTraineesByStatus(event){
     this.traineeService.getTraineesByStatus(event.target.value).subscribe(data=>{
       console.log(data["content"]);
            this.trainee = data["content"];
     })
    }


    getAllTraineeByBatch(id){
      this.traineeService.getTraineeByBatch(id).subscribe(data=>{
        this.trainee = data["content"];
      })
    }
}
