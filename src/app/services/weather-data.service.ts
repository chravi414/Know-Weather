import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {
  public mapBoxToken = 'pk.eyJ1IjoiY2hyYXZpNDE0IiwiYSI6ImNrMXVoaW1jaTBwN3kzaHF5dmp3dHFwYTcifQ.chUU1f2nmdvLNT2Xp6efYg';
  public darkSkyToken = '4ab909be9e7658b9de4274c3ff28c8cd';
  private proxy = 'https://cors-anywhere.herokuapp.com/';
  
  
  constructor(private http: HttpClient) { }

  getLocationData(locationName) {
    const mapboxUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${locationName}.json?access_token=${this.mapBoxToken}`;
    return this.http.get(mapboxUrl).
      pipe(response => {
        return response;
      });
  }

  getLocationName(lat: Number, long:Number){
    const mapboxUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${long},${lat}.json?access_token=${this.mapBoxToken}`;
    return this.http.get(mapboxUrl).
      pipe(response => {
        return response;
      })

  }
  getWeatherData(lat: Number, long:Number) {
    const darkSkyAPiUrl = `https://api.darksky.net/forecast/${this.darkSkyToken}/${lat},${long}`;
    return this.http.get(this.proxy+darkSkyAPiUrl).
      pipe(response => {
        return response;
      });
  }
}
