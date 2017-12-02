// Import Libraries
import { Observable } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { ModalRemoveComponent } from '../../components/modal-remove.component';


// Import Services
import { RegionService } from '../../services/region.service';

// Import Models
import { Region } from '../../domain/cognitive-hack_db/region';
import { Comuni } from '../../domain/cognitive-hack_db/comuni';
// START - USED SERVICES
/*
 *	RegionService.delete
 *		PARAMS: 
 *					ObjectId id - Id
 *		
 *
 *	RegionService.list
 *		PARAMS: 
 *		
 *
 */
// END - USED SERVICES

// START - REQUIRED RESOURCES
/*
 * RegionService  
 */
// END - REQUIRED RESOURCES

@Component({
    selector: "region-list",
    templateUrl: './region-list.component.html',
    styleUrls: ['./region-list.component.css']
})
export class RegionListComponent implements OnInit {
    
    // Attributes
    list: Region[];
    search: any = {};
    idSelected: string;
    
    // Constructor
    constructor(
        private regionService: RegionService, 
        public dialog: MatDialog) {}

    // Functions
    ngOnInit(): void {
        this.regionService.list().subscribe(list => this.list = list);
    }

    openModal(id: string): void {
        let dialogRef = this.dialog.open(ModalRemoveComponent, {
            width: '250px',
            data: () => {
                // Execute on confirm
                this.regionService.remove(id).subscribe(() => {
                    dialogRef.close();
                });
                this.list = this.list.filter(item => item._id != id);
            }
        });
    }

}