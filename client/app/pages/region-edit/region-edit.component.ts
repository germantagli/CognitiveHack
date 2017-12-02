// Import Libraries
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

// Import Services
import { RegionService } from '../../services/region.service';
import { ComuniService } from '../../services/comuni.service';

// Import Models
import { Region } from '../../domain/cognitive-hack_db/region';
import { Comuni } from '../../domain/cognitive-hack_db/comuni';
// START - USED SERVICES
/*
 *	RegionService.create
 *		PARAMS: 
 *					ObjectId id - Id
 *		
 *
 *	RegionService.get
 *		PARAMS: 
 *					ObjectId id - Id 
 *		
 *
 *	ComuniService.list
 *		PARAMS: 
 *		
 *
 *	RegionService.update
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
 * Edit component for RegionEdit
 */
@Component({
    selector: 'region-edit',
    templateUrl : './region-edit.component.html',
    styleUrls: ['./region-edit.component.css']
})
export class RegionEditComponent implements OnInit {

    item: Region;
    listRegCom: Comuni[];
    model: Region;
    
    constructor(
        private regionService: RegionService,
        private comuniService: ComuniService,
        private route: ActivatedRoute,
        private location: Location) {
        // Init item
        this.item = new Region();
    }

    ngOnInit(): void {
            this.route.params.subscribe(param => {
                let id: string = param['id'];
                if (id !== 'new') {
                    // Get item from server 
                    this.regionService.get(id).subscribe(item => this.item = item);
                }

                    // Get relations
                    this.comuniService.list().subscribe(list => this.listRegCom = list);
            });
    }

    /**
     * Save Item
     */
    save (formValid:boolean, item: Region): void{
        if (formValid) {
            if(item._id){
                this.regionService.update(item).subscribe(data => this.goBack());
            } else {
                this.regionService.create(item).subscribe(data => this.goBack());
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