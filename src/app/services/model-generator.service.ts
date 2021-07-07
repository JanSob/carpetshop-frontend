import { Injectable } from '@angular/core';
import {GLTFExporter} from 'three/examples/jsm/exporters/GLTFExporter';
import {
  BoxBufferGeometry,
  Material,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Scene, Texture,
  TextureLoader
} from 'three';
import {resolve} from '@angular/compiler-cli/src/ngtsc/file_system';





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
  file!: File;

  constructor() {
  }

  public async createModelAsync(length: number, width: number, file: File): Promise<File>{
    return new Promise((resolve, reject) => {
      this.href = null;
      this.scene = new Scene();
      this.camera = new PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 100);
      this.camera.position.set(0,0,4);
      this.geometry = new BoxBufferGeometry(width,0.01,length);
      this.material = new MeshBasicMaterial({ color: 0xffffff, wireframe: false , transparent:true});
      this.mesh = new Mesh(this.geometry, this.material);

      const loader = new TextureLoader();
      const self = this;
      let fileUrl = URL.createObjectURL(file);
      this.scene.add(this.mesh);

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
    })
  }

  private async createGLTFOAsync(): Promise<boolean>{
    return new Promise<boolean>((resolve) => {
      // Instantiate a exporter
      const exporter = new GLTFExporter();
      const options = {} // TODO: Maybe optimize with forcedIndices?
      const self = this;

      // Parse the input and generate the glTF output
      //TODO: this.mesh instead of this.scene? --> Seems to work

      exporter.parse( this.mesh, function ( result ) {
        console.log( result );
        const output = JSON.stringify( result, null, 2 );
        self.file = new File([output], "carpet.gltf");
        console.log( "createGLTFOAsync/exporter.parse finished: size of created file: " + self.file.size );
        resolve(true);
      }, options);
    });
  }



  ngOnInit(): void {
  }
}
