import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-seller-info',
  templateUrl: './seller-info.component.html',
  styleUrls: ['./seller-info.component.css']
})
export class SellerInfoComponent implements OnInit {

  private sellerId:number;
// 在constructor引入 routrinfo获取参数
  constructor(private routerInfo:ActivatedRoute) { }

  ngOnInit() {
    this.sellerId=this.routerInfo.snapshot.params["id"];
  }

}



