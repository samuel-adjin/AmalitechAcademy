import { Component, OnInit } from '@angular/core';
import { Usergroup } from 'src/app/shared/usergroup/usergroup';
import { UsergroupService } from 'src/app/shared/usergroup/usergroup.service';


@Component({
  selector: 'app-usergroup',
  templateUrl: './usergroup.component.html',
  styleUrls: ['./usergroup.component.css']
})
export class UsergroupComponent implements OnInit {

  constructor(private userGroupService:UsergroupService) { }

  deleteId;
  showAdd = -1;
  userGroup:Usergroup[];

  ngOnInit(): void {
    this.loadData();
     
  }

    loadData(){
      this.userGroupService.getAllUserGroup().subscribe(data=>{
        
        this. userGroup = data;
        console.log(this. userGroup)
      })
    }
  

  createNewDepart(postBody){
    this.userGroupService.addNewUserGroup(postBody).subscribe(data=>{
      console.log(data);
      this.loadData();
     this.close();
    })
  }

    add(index){
      this.showAdd = index;
    }

    add2(groupId:Number, index){
      this.deleteId = groupId;
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

    deleteUserGroup(){

      this.userGroupService.deleteUserGroup(this.deleteId).subscribe(data=>{
        this.close();
        this.loadData();
        console.log(data);
       
      });
      // console.log(id)
    }


    updateUserGroup(userId,updateBody){
      this.userGroupService.updateUserGroup(userId,updateBody).subscribe(data=>{
        console.log(data);
        this.loadData();
       this.close();
      })
    }
  }
