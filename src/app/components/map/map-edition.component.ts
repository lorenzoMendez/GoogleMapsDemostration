import { Component, OnInit, Inject } from '@angular/core';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-map-edition',
  templateUrl: './map-edition.component.html',
  styleUrls: ['./map-edition.component.css']
})
export class MapEditionComponent implements OnInit {

  public formGroup: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<MapEditionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any ) {

      console.log( data );
      this.formGroup = formBuilder.group( {
        'tittle': data.tittle,
        'description': data.description
      } );

    }

  ngOnInit(): void {
    console.log( this.data );
  }

  public saveChange(): void {
    this.dialogRef.close( this.formGroup.value );
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
