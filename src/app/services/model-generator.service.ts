import { Injectable } from '@angular/core';
import {GLTFExporter} from 'three/examples/jsm/exporters/GLTFExporter';
import {
  BoxBufferGeometry,
  Material,
  Mesh,
  MeshBasicMaterial, MeshStandardMaterial,
  PerspectiveCamera,
  Scene, Texture,
  TextureLoader
} from 'three';
import {resolve} from '@angular/compiler-cli/src/ngtsc/file_system';
import {USDZExporter} from 'three/examples/jsm/exporters/USDZExporter';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';





@Injectable({
  providedIn: 'root'
})
export class ModelGeneratorService {
  scene!: Scene;
  camera!: PerspectiveCamera;
  geometry!: BoxBufferGeometry;
  material!: Material;
  mesh!: Mesh;

  href!: string | null;
  file: File[] = [];

  constructor() {
  }

  public async createModelAsync(length: number, width: number, file: File): Promise<File[]>{
    return new Promise((resolve, reject) => {
      this.href = null;
      this.scene = new Scene();
      this.camera = new PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 100);
      this.camera.position.set(0,0,4);
      this.geometry = new BoxBufferGeometry(width/100,0.01,length/100);
      this.material = new MeshStandardMaterial({ color: 0xffffff, wireframe: false , transparent:true});
      this.mesh = new Mesh(this.geometry, this.material);

      const loader = new TextureLoader();
      const self = this;
      let fileUrl = URL.createObjectURL(file);


      loader.load(
        // resource URL
        fileUrl,

        // onLoad callback
        async function ( texture:Texture ) {
          //@ts-ignore
          self.mesh.material.map = texture;

          //@ts-ignore
          self.mesh.material.needsUpdate = true;

          // TODO: wait until createGLTFOAsync has finished creating the
          //  model and then return the model with resolve(self.file)
          //  but does the method really(!!) wait for createGLTFOAsync to finish? --> Is this maybe the bug?
          console.log("createModelAsync/loader.load should be waiting for createGLTFOAsync to finish..")
          let result = await self.createGLTFOAsync();
          console.log("createModelAsync/loader.load has finished waiting for createGLTFOAsync")
          resolve(self.file)
        },

        // onError callback
        function () {
          console.log( 'An error happened' );
        }
      );
      this.scene.add(this.mesh);
    });
  }

  private async createGLTFOAsync(): Promise<boolean>{
    return new Promise<boolean>((resolve) => {
      // Instantiate a exporter
      const exporter = new GLTFExporter();
      const options = {} // TODO: Maybe optimize with forcedIndices?
      const self = this;

      // Parse the input and generate the glTF output
      //TODO: this.mesh instead of this.scene? --> Seems to work
      // Important: you had to turn the "function" async!
      // @ts-ignore
      exporter.parse( this.mesh, async function ( result ) {
        console.log( result );
        const output = JSON.stringify( result, null, 2 );
        self.file[0] = new File([output], "carpet.gltf");
        console.log( "createGLTFOAsync/exporter.parse finished: size of created file: " + self.file[0].size );

        // Generate USDZ
        // Todo: delete all unused stuff (gltfloader etc)
        const loader = new GLTFLoader();
        loader.load(URL.createObjectURL(self.file[0]), async function ( gltf ) {
          // TODO: this.mesh instead of this.scene?
          const exporter2 = new USDZExporter();
          // @ts-ignore
          const arraybuffer = await exporter2.parse(self.mesh);
          console.log("Arraybuffer bytelength: " + arraybuffer.byteLength)
          // TODO: Maybe bugfix is using the stringified arraybuffer output2?
          //  Or use blob?
          const blob = new Blob( [ arraybuffer ], { type: 'application/octet-stream' } );
          const output2 = JSON.stringify( arraybuffer, null, 2 );
          self.file[1] = new File([blob], "carpet.usdz",{type: 'application/octet-stream'});
          resolve(true);
        })



      }, {forceIndices: true}); // binary = .glb
    });
  }



  ngOnInit(): void {
  }
}
