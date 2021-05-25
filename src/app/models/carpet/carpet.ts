export class Carpet {

// the fields match with the json data that comes back from the REST-endpoint.

  constructor(public id: number,
              public country: string,
              public state: string,
              public lengthMm: number,
              public widthMm: number,
              public details: string,
              public price: number,
              public arReady: boolean,
              public thumbnailImageUrl: string,
              public fullsizeImageUrl: string,
              public threeD_url: string
              ) {
  }
}
