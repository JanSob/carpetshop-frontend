export class Carpet {

// the fields match with the json data that comes back from the REST-endpoint.



  constructor(public id: Number | null,
              public country: string,
              public state: string,
              public lengthMm: number,
              public widthMm: number,
              public details: string | null,
              public price: number,
              public arReady: boolean,
              public thumbnailImageUrl: string|null,
              public fullsizeImageUrl: string|null,
              public threeD_urlAndroid: string | null,
              public threeD_urlIOS: string | null
              ) {
  }

}
