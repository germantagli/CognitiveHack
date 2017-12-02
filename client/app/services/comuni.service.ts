// DEPENDENCIES
import { Observable } from 'rxjs/Rx';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

// SECURITY
import { AuthenticationService } from '../security/authentication.service';

// CONFIG
import { config } from "../../config/properties";

// MODEL
import { ComuniBaseService } from "./base/comuni.base.service";
import { Comuni } from '../domain/cognitive-hack_db/comuni';

/**
 * YOU CAN OVERRIDE HERE ComuniBaseService
 */

@Injectable()
export class ComuniService extends ComuniBaseService {
    
    // CONSTRUCTOR
    constructor(http: Http, authenticationService: AuthenticationService) {
            super(http, authenticationService);
    }
}