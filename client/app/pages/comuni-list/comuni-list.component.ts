// Import Libraries
import { Observable } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { ModalRemoveComponent } from '../../components/modal-remove.component';


// Import Services
import { ComuniService } from '../../services/comuni.service';

// Import Models
import { Comuni } from '../../domain/cognitive-hack_db/comuni';

import { Region } from '../../domain/cognitive-hack_db/region';

// START - USED SERVICES
/*
 *	ComuniService.delete
 *		PARAMS: 
 *					ObjectId id - Id
 *		
 *
 *	ComuniService.list
 *		PARAMS: 
 *		
 *
 */
// END - USED SERVICES

// START - REQUIRED RESOURCES
/*
 * ComuniService  
 */
// END - REQUIRED RESOURCES

@Component({
    selector: "comuni-list",
    templateUrl: './comuni-list.component.html',
    styleUrls: ['./comuni-list.component.css']
})
export class ComuniListComponent implements OnInit {
    
    // Attributes
    list: Comuni[];
    search: any = {};
    idSelected: string;
    
    // Constructor
    constructor(
        private comuniService: ComuniService, 
        public dialog: MatDialog) {}

    // Functions
    ngOnInit(): void {
        this.comuniService.list().subscribe(list => this.list = list);
    }

    openModal(id: string): void {
        let dialogRef = this.dialog.open(ModalRemoveComponent, {
            width: '250px',
            data: () => {
                // Execute on confirm
                this.comuniService.remove(id).subscribe(() => {
                    dialogRef.close();
                });
                this.list = this.list.filter(item => item._id != id);
            }
        });
    }

}