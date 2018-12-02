import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../../service/product.service';
import { AlertService } from '../../shared/services/alert.service';

@Component({
  selector: 'app-create-bmi',
  templateUrl: './create-bmi.component.html',
  styleUrls: ['./create-bmi.component.css']
})
export class CreateBmiComponent implements OnInit {
  errorMsg: string;
  form: FormGroup;
  PRESON_CODE: any;
  items: any;
  errMsg: string;
  
  constructor(private builder: FormBuilder,
    private router: Router,
    private productSV: ProductService,
    private activateRouter: ActivatedRoute,
    private alertSV: AlertService) {
    this.initialCreateFormData(), 
    this.activateRouter.params.forEach(
      params => {
        this.PRESON_CODE = params.id;
      }
    )
  }

  ngOnInit() {
  }
  private initialCreateFormData() {
    this.form = this.builder.group({

      WEIGHT:'',
      HEIGHT:'',
      PRESON_CODE:['', [Validators.required]],
    });
  }

  onSubmit(){
    //console.log(this.form.value)
      if(this.form.invalid){
    console.log("เกิดข้อผิดพลาด");
    
    }
    
    console.log(JSON.stringify(this.form.value));
    this.productSV
    .createProduct(JSON.stringify(this.form.value))
    .then(res=>{
    
    
      this.router.navigate(['/','home']);
    })
    .catch(err => this.errorMsg= err);

}

}
