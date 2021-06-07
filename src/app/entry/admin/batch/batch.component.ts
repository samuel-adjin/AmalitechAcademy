import { Component, OnInit } from '@angular/core';
import { Batch } from 'src/app/shared/batch/batch';
import { BatchServiceService } from 'src/app/shared/batchService/batch-service.service';

@Component({
  selector: 'app-batch',
  templateUrl: './batch.component.html',
  styleUrls: ['./batch.component.css']
})
export class BatchComponent implements OnInit {
  deleteId;
  batch:Batch[]=[];
  constructor(private batchService:BatchServiceService) { }

 
  batches:any;
  showAdd = -1;
  ngOnInit(): void {
    this.loadData();
     
  }

    loadData(){
      this.batchService.getAllBatch().subscribe(data=>{
        // this.trainees = data;
        this.batch = data;
        this.batches = data
       console.log(this.batch);
      });
    }
  refresh(){
    this.loadData();
    location.reload();
  }

    createNewBatch(postBody){
      this.batchService.addNewBatch(postBody).subscribe(data=>{
      this.loadData();
      this.close();
      console.log(this.batch);
      })
    }

    add(index){
      this.showAdd = index;
    }

    add2(batch_id:Number, index){
      this.deleteId = batch_id;
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

    deleteBatch(){

      this.batchService.deleteBatch(this.deleteId).subscribe(data=>{
        this.close();
        this.loadData();
       
      });
      // console.log(id)
    }

}
