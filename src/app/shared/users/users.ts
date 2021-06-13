import { Depart } from "../depart/depart";
import { Usergroup } from "../usergroup/usergroup";

export class Users {

    id:Number;
    username:String;
    email:String;
    groupId:Usergroup;
    deptId:Depart;
    constructor(id,username,email,groupId,deptId){}
}
