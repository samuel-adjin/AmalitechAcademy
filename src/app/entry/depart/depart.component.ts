import { Component, OnInit } from '@angular/core';
import { Depart } from 'src/app/shared/depart/depart';
import { DepartService } from 'src/app/shared/depart/depart.service';

@Component({
  selector: 'app-depart',
  templateUrl: './depart.component.html',
  styleUrls: ['./depart.component.css']
})
export class DepartComponent implements OnInit {
  constructor(private departService:DepartService) { }

  deleteId;
  showAdd = -1;
  depart:Depart[];

  ngOnInit(): void {
    this.loadData();
     
  }

    loadData(){
      this.departService.getAllDepart().subscribe(data=>{
        
        this.depart = data;
        console.log(this.depart)
      })
    }
  

  createNewDepart(postBody){
    this.departService.addNewDepart(postBody).subscribe(data=>{
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

    deleteDepart(){

      this.departService.deleteDepart(this.deleteId).subscribe(data=>{
        this.close();
        this.loadData();
        console.log(data);
       
      });
      // console.log(id)
    }


    updateDepart(userId,updateBody){
      this.departService.updateDepart(userId,updateBody).subscribe(data=>{
        console.log(data);
        this.loadData();
       this.close();
      })
    }

}
