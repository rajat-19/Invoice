import { Component, OnInit } from '@angular/core';
import{HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(private obj:HttpClient) { }

  ngOnInit() {
    this.getcustomer();
  }
  allcustomer:any[]=[];
  getcustomer()
  {
    var url="https://www.firstenquiry.com/web/allcustomer.php";
      var input ={"id":localStorage.getItem("id")};
      this.obj.post(url,input).subscribe(response=>{
        this.allcustomer=response as string[];
      });
  }

}
