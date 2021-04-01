import { Component } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { AuthService } from './common.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getschema()
  }

  title = 'app-dynamic-form';
  schema: any[] = [];
  constructor(private appService: AuthService){}
  submitted = false;
  myform: FormGroup;

  getschema() {
    this.appService.getschema().subscribe((data: any[]) => {
        this.schema = data;
        console.log(data)
    });
  }

  setdata(form: NgForm) {
    console.log(form.value);
    this.submitted = true;
    if(form.valid){
    this.appService.setdata(form.value).subscribe((data: any[]) => {
      const ret = data;
      console.log(data)
  });
}
  }
}
