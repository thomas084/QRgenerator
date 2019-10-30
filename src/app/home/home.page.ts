import { Component } from "@angular/core";
import {
  BarcodeScannerOptions,
  BarcodeScanner
} from "@ionic-native/barcode-scanner/ngx";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  data : any;
  encodeData: any;
  encodedData : any ;
  barcodeScannerOptions: BarcodeScannerOptions;

  constructor(private barcodeScanner: BarcodeScanner) {
    //alert(this.data);
    console.log(this.data);
    //this.encodeData = "7406743634";
    console.log(this.encodeData)
    //Options
    this.barcodeScannerOptions = {
     //showTorchButton: true,
      //showFlipCameraButton: true
    };
  }

  
  encodedText() {
    this.encodeData = this.data;
    this.barcodeScanner
      .encode(this.barcodeScanner.Encode.TEXT_TYPE, this.encodeData)
      .then(
        encodedData => {
          console.log(encodedData);
          this.encodeData = encodedData;
          
        },
        err => {
          console.log("Error occured : " + err);
        }
      );
      alert(this.encodeData);
      alert(this.encodedData);
  }
}
