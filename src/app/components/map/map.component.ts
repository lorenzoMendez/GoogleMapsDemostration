import { Component, OnInit } from '@angular/core';
import { Marker } from 'src/app/classes/marker.class';
import {MatSnackBar} from '@angular/material/snack-bar';

import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MapEditionComponent } from './map-edition.component';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  public markers: Marker[] = [];
  public lat: number = 51.678418;
  public lng: number = 7.809007;

  constructor( private snackBar: MatSnackBar, public dialog: MatDialog ) {
    // const newMarker = new Marker( 51.678418, 7.809007 );
    // this.markers.push( newMarker );
    if( localStorage.getItem( 'markers' ) ) {
      this.markers = JSON.parse( localStorage.getItem( 'markers' ) );
    }
  }

  ngOnInit(): void {
  }

  public addMarker( event ): void {
    if( event[ 'coords' ] ) {
      const coords: { lat: number, lng: number } =  event.coords;
      let item: Marker = new Marker( coords.lat, coords.lng );
      this.markers.push( item );
      
      let snackBarRef = this.snackBar.open('Marcador agregado', 'Cerrar', { duration: 3000 } );

      this.saveStorage();
    }
  }

  public editMarker( marker: Marker ): void {

    const dialogRef = this.dialog.open( MapEditionComponent, {
      width: '250px',
      data: { tittle: marker.tittle, description: marker.description }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log( result );
      if( !result ) {
        return;
      }
      marker.tittle = result.tittle;
      marker.description = result.description;
      this.saveStorage();
      let snackBarRef = this.snackBar.open('Marcador actualizado', 'Cerrar', { duration: 3000 } );
    });
  }


  public deleteMarker(index: number): void {    
    this.markers.splice( index, 1 );
    let snackBarRef = this.snackBar.open('Marcador borrado', 'Cerrar', { duration: 3000 } );
    this.saveStorage();
  }

  private saveStorage() {
    localStorage.setItem( 'markers', JSON.stringify( this.markers ) );
  }

}
