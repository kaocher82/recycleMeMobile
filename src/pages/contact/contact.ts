import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
import { BarcodeScanner ,BarcodeScannerOptions } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  scanData : {};
  encodeData : string ;
  encodedData : {} ;
  options :BarcodeScannerOptions;
  constructor(public navCtrl: NavController, public navParams: NavParams,private barcodeScanner: BarcodeScanner) {
  }    
  
  scan(){
    this.options = {
      prompt : "Scan your barcode "
  }
  this.barcodeScanner.scan(this.options).then((barcodeData) => {

      console.log(barcodeData);
      this.scanData = barcodeData;
  }, (err) => {
      console.log("Error occured : " + err);
  });
  }
  encodeText(){
    this.barcodeScanner.encode(this.barcodeScanner.Encode.TEXT_TYPE,this.encodeData).then((encodedData) => {

        console.log(encodedData);
        this.encodedData = encodedData;

    }, (err) => {
        console.log("Error occured : " + err);
    });                 
}
}