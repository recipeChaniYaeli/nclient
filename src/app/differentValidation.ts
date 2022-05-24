import { FormControl, FormGroup } from "@angular/forms";

export class DifferentValidation{

static diff(phone1:string,phone2:string){
    return (myForm:FormGroup)=>{
        let p1=myForm.controls[phone1].value;
        let p2=myForm.controls[phone2].value;
        if(p1==p2)
        return null;
        return { DifferentError: { from: phone1, to: phone2 }}

    }
}


}