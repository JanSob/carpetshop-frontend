import {Carpet} from './carpet/carpet';

export class CarpetWrapperDTO {

// the fields match with the json data that comes back from the REST-endpoint.



/*  constructor(public carpet: Carpet,
              public thumbnailImage: File,
              public fullsizeImage: File,
              public threeDAndroid: File,
              public threeDIOS: File,

  ) {}*/

  constructor(public carpet: Carpet,
              public filesDict: any
  ) {}
}
