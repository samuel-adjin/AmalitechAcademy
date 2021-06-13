import { Component, OnInit } from '@angular/core';
import { Depart } from 'src/app/shared/depart/depart';
import { Users } from 'src/app/shared/users/users';
import { UserService } from 'src/app/shared/usersService/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
 
  
  constructor(private userService:UserService) { }

  deleteId;
  showAdd = -1;
  user:Users[];
  users;
  depart:Depart[];
  
  
  ngOnInit(): void {
    this.loadData();
     
  }

    loadData(){
      this.userService.getAllUsers().subscribe(data=>{
        this.users = data;
        this.user = this.users;
      })
    }
  refresh(){
    this.loadData();
    location.reload();
  }

  createNewUser(postBody){
    this.userService.addNewUser(postBody).subscribe(data=>{
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

    deleteUser(){

      this.userService.deleteUser(this.deleteId).subscribe(data=>{
        this.close();
        this.loadData();
        console.log(data);
       
      });
      // console.log(id)
    }


    updateUser(userId,updateBody){
      this.userService.updateUser(userId,updateBody).subscribe(data=>{
        console.log(data);
        this.loadData();
       this.close();
      })
    }



    findUsersByUserGroup(id){
      this.userService.findUserByUserGroup(id).subscribe(data=>{
        console.log(data);
        this.user = data;
      })
    }

    findUsersByUsername(username){
      this.userService.findUserByUserName(username).subscribe(data=>{
        console.log(data);
        this.user = data;
      })
    }

    findUsersByUserId(userId){
      this.userService.findUserByUserId(userId).subscribe(data=>{
        console.log(data);
          this.users = [data];
          this.user = this.users;
      })
    }
    
    findUsersByDepartId(deptId){
      this.userService.findUserBydepartId(deptId).subscribe(data=>{
        this.user = data;
      })
    }
}
