// Import Libraries
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

// Import Services
import { ComuniService } from '../../services/comuni.service';
import { RegionService } from '../../services/region.service';

// Import Models
import { Comuni } from '../../domain/cognitive-hack_db/comuni';

import { Region } from '../../domain/cognitive-hack_db/region';

// START - USED SERVICES
/*
 *	ComuniService.create
 *		PARAMS: 
 *					ObjectId id - Id
 *		
 *
 *	RegionService.findByRegCom
 *		PARAMS: 
 *					Objectid key - Id della risorsa RegCom da cercare
 *		
 *
 *	ComuniService.get
 *		PARAMS: 
 *					ObjectId id - Id 
 *		
 *
 *	ComuniService.update
 *		PARAMS: 
 *		
 *
 */
// END - USED SERVICES

// START - REQUIRED RESOURCES
/*
 * ComuniService  
 * RegionService  
 */
// END - REQUIRED RESOURCES

/**
 * Edit component for ComuniEdit
 */
@Component({
    selector: 'comuni-edit',
    templateUrl : './comuni-edit.component.html',
    styleUrls: ['./comuni-edit.component.css']
})
export class ComuniEditComponent implements OnInit {

    item: Comuni;
    listRegCom: Comuni[];
	externalRegion: Region[];
    model: Comuni;
    
    constructor(
        private comuniService: ComuniService,
        private regionService: RegionService,
        private route: ActivatedRoute,
        private location: Location) {
        // Init item
        this.item = new Comuni();
	   this.externalRegion = [];
    }

    ngOnInit(): void {
            this.route.params.subscribe(param => {
                let id: string = param['id'];
                if (id !== 'new') {
                    // Get item from server 
                    this.comuniService.get(id).subscribe(item => this.item = item);
                }

                    // Get relations
                    this.regionService.findByRegCom(id).subscribe(list => this.externalRegion = list);
            });
    }

    /**
     * Save Item
     */
    save (formValid:boolean, item: Comuni): void{
        if (formValid) {
            if(item._id){
                this.comuniService.update(item).subscribe(data => this.goBack());
            } else {
                this.comuniService.create(item).subscribe(data => this.goBack());
            }  
        }
    }

    /**
     * Go Back
     */
    goBack(): void {
        this.location.back();
    }
    

}