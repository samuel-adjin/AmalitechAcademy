import { Batch } from "../batch/batch";

export class Track {

    private trackId:Number;
    private trackName:String;
    private  trackCode:String;
    private  trackStatus:String;
    private trackBatch:Batch;
    constructor(trackId, trackName, trackCode,trackStatus,trackBatch){}
}
