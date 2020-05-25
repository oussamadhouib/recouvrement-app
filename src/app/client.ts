import { SafePropertyRead } from '@angular/compiler'

export class Client {
    constructor(
        private id?: String ,
        private codeClient?: String ,
        private idDouane? : String ,
        private firstName? : String ,
        private secondName? : String ,
        private addresse? : String ,
        private ville? : String ,
        private codePostal? : String ,
        private matFiscale? : String ,
        private tel? : String ,
        private fax? : String ,
        private email? : String 
    ){
    }
}
