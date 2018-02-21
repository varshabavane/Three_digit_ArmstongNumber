import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

//Toast import
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  number = {
    input: null,
    sum: 0,
    digit: null,
    output: "No Input"
  }

  constructor(public navCtrl: NavController, public toastCtrl: ToastController) {

  }
  submit() {
    this.number.input = parseInt(this.number.input);
    if (this.number.input > 100 && this.number.input < 1000) {
      for (let i = this.number.input; i != 0;) {
        this.number.digit = i % 10;
        this.number.sum = this.number.sum + (this.number.digit * this.number.digit * this.number.digit)
        i = (i) / 10;
      }
      if (this.number.sum == this.number.input) {
        this.number.output = this.number.input + " is an armsrtong number"
      } else {
        this.number.output = this.number.input + " is  not an armsrtong number"
      }
    }else{
      this.valueErrToast()
    }


  }

  valueErrToast() {
    let toast = this.toastCtrl.create({
      message: 'Please enter value between 100- 1000',
      duration: 3000,
      position: 'middle',
      showCloseButton: true,
      closeButtonText:"OK"
    });
    toast.present();
  }
}


