import {Compagny} from "./Compagny.ts";
import {Profile} from "./Profiles.ts";

export  type Declaration= {
    id:string|number;
    comment:string|number;
    picture:string
    status:string;
    compagny: Compagny;
    firstParent: Profile;
    secondParent:Profile;
    registered:string;
    child:Profile;
}