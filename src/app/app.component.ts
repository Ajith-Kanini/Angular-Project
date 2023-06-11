import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OnlineEducationProvider';
 res?:boolean;
  isUserAuthenticated = ()=> {
    this.res= false;
  }

isClick($event:Event){
this.res= true;
  console.log($event);
}

onFileSelected(event: any) {
  const file: File = event.target.files[0];
  const reader = new FileReader();

  reader.onload = () => {
    const binaryString: string = reader.result as string;
    const binaryArray: Uint8Array = this.convertBinaryStringToUint8Array(binaryString);

    // Do something with the binary data
    console.log(binaryArray);
  };

  reader.readAsBinaryString(file);
}

convertBinaryStringToUint8Array(binaryString: string): Uint8Array {
  const length = binaryString.length;
  const bytes = new Uint8Array(length);

  for (let i = 0; i < length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
console.log(bytes);
  return bytes;
}


}
