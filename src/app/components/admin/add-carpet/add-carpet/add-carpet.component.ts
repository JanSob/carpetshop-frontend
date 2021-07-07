import { Component, OnInit } from '@angular/core';
import {Carpet} from '../../../../models/carpet/carpet';
import {AdminService} from '../../../../services/adminservice/admin.service';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';
import {CarpetWrapperDTO} from '../../../../models/carpetWrapperDTO';
import {ModelGeneratorService} from '../../../../services/model-generator.service';
import {USDZExporter} from 'three/examples/jsm/exporters/USDZExporter';

@Component({
  selector: 'app-add-carpet',
  templateUrl: './add-carpet.component.html',
  styleUrls: ['./add-carpet.component.css']
})
export class AddCarpetComponent implements OnInit {

  fG: FormGroup;
  newCarpet?: Carpet;
  country?: string;
  region?: string;
  details: string | null;
  lengthMm!: number;
  widthMm!: number;
  price?: number;
  thumbnailUrl!: File;
  fullsizeUrl?: File;
  threeDUrlAndroid?: File;
  threeDUrlIOS?: File;
  arReady?: boolean;

  generatedModelGLTF!: File;
  generatedModelGLTFURL!: string;

  filesDict: { [key: string]: File } = {};



  constructor(private adminService: AdminService,
              private router: Router,
              private formBuilder: FormBuilder,
              private modelGenerator: ModelGeneratorService) {
    this.details = null;
    //let this.filesRecord: Record<string, File> = {};
    this.fG = formBuilder.group({
      country:[''],
      region:[''],
      details:[''],
      length:[''],
      width:[''],
      price:[''],
      thumbnailUrl:[''],
      fullsizeUrl:[''],
      threeDUrlAndroid:[''],
      threeDUrlIOS:['']
    });
  }

  ngOnInit(): void {
  }



  // @ts-ignore
  async onFileSelected(event, name: string) {
    console.log(event);

    if (name === 'fullsizeImage') {
      this.filesDict['threeDAndroid'] = await this.modelGenerator.createModelAsync(this.widthMm, this.lengthMm, event.target.files[0]);
      this.generatedModelGLTFURL = URL.createObjectURL(this.filesDict['threeDAndroid']);
      this.generatedModelGLTF = this.filesDict['threeDAndroid'];
      console.log("Added generated model? " + this.filesDict['threeDAndroid'].size)
    }

    this.filesDict[name] = event.target.files[0];
    console.log("Added file? " + this.filesDict[name].size)
  }


  addCarpet(){
    this.newCarpet = new Carpet(null, this.fG.value.country, this.fG.value.region, this.fG.value.length, this.fG.value.width, this.fG.value.details,
      this.fG.value.price, true,null,null,null, null);

    let carpetWrapperDTO: CarpetWrapperDTO = new CarpetWrapperDTO(this.newCarpet, this.filesDict)

    console.log("Trying to add this carpet: " + carpetWrapperDTO.carpet.country)

    this.adminService.addCarpetWithMedia(carpetWrapperDTO).subscribe(
      (carpet: Carpet) => {
        if(carpet){
          this.router.navigate(['admin/inventory']).then();
        }
      }, error => {
        console.debug("Could not add carpet to DB: " + error.message);
      });
  }

}
