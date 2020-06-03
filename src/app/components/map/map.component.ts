import { Component, OnInit } from '@angular/core';
import { Marker } from 'src/app/classes/marker.class';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  public markers: Marker[] = [];

  public lat: number = 51.678418;
  public lng: number = 7.809007;

  constructor() {
    const newMarker = new Marker( 51.678418, 7.809007 );
    this.markers.push( newMarker );
  }

  ngOnInit(): void {
  }

  public addMarker( event ): void {
    if( event[ 'coords' ] ) {
      let item: Marker = new Marker( event.coords.lat, event.coords.lng );
      this.markers.push( item );
    }
  }


}
