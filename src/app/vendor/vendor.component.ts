import { Component, OnInit } from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css']
})
export class VendorComponent implements OnInit {

  constructor(private obj:HttpClient) { }
  
  ngOnInit() {
    this.getvendor();
  }
  allvendor:any[]=[];
  getvendor()
  {
    var url="https://www.firstenquiry.com/web/allvendor.php";
      var input ={"id":localStorage.getItem("id")};
      this.obj.post(url,input).subscribe(response=>{
        this.allvendor=response as string[];
      });
  }

}
