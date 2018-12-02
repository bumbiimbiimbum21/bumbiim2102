import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../model/product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url: string = "http://chapayom.codehansa.com/crud_person.php?";
  Url1: string = "http://chapayom.codehansa.com/crud_bmi.php?";
 
  constructor(private http: HttpClient) { }

  GetProduct() {
    return this.http.get<Product[]>(this.Url1 + "cmd=select");
  }
  getProduct() {
    return this.http.get<Product[]>(this.url + "cmd=select");
  }

  createbmi(data) {
    let promise = new Promise((resolve, reject) => {
      let apiURL = this.Url1 + "cmd=insert";
      this.http.post(apiURL, data)
        .toPromise()
        .then(
          res => {
            console.log(res);
            resolve(data);
          }
        );
    });
    return promise;
  }
  
  createProduct(data) {
    let promise = new Promise((resolve, reject) => {
      let apiURL = this.url + "cmd=insert";
      this.http.post(apiURL, data)
        .toPromise()
        .then(
          res => {
            console.log(res);
            resolve(data);
          }
        );
    });
    return promise;
  }

  deleteProduct(PERSION_NUMBER: any) {
    let promise = new Promise((resolve, reject) => {
      let apiURL = this.url + "cmd=delete";
      this.http.post(apiURL, PERSION_NUMBER)
        .toPromise()
        .then(
          res => {
            console.log(res);
            resolve(PERSION_NUMBER);
          }
        );
    });
    console.log(PERSION_NUMBER);
    return promise
  }

  getOnePerson(PERSION_NUMBER) {
    return this.http.get<Product[]>(this.url + 'cmd=select&personID=' + PERSION_NUMBER);
  }

  updateProduct(data) {
    let promise = new Promise((resolve, reject) => {
      let apiURL = this.url + "cmd=update";
      this.http.post(apiURL, data).toPromise().then(
        res => {
          console.log(res);
          resolve(data);
        }
      );
    });
    return promise;
  }

}