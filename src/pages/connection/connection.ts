import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';

/**
 * Generated class for the ConnectionPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-connection',
  templateUrl: 'connection.html',
})
export class ConnectionPage {
  todo = {address:'', port:null};

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder) {

  }

  connect() {
    console.log(this.todo);
  }

}
