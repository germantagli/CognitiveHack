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
import { RegionBaseService } from "./base/region.base.service";
import { Region } from '../domain/cognitive-hack_db/region';

/**
 * YOU CAN OVERRIDE HERE RegionBaseService
 */

@Injectable()
export class RegionService extends RegionBaseService {
    
    // CONSTRUCTOR
    constructor(http: Http, authenticationService: AuthenticationService) {
            super(http, authenticationService);
    }
}