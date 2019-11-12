import { Component, OnInit } from '@angular/core';
import {SourceType,originSource } from './mock-data';
@Component({
  selector: 'app-admin-files-chart',
  templateUrl: './admin-files-chart.component.html',
  styleUrls: ['./admin-files-chart.component.css']
})
export class AdminFilesChartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  onSearch(term){
    console.log(term);
  }

  basicDataSource: Array<SourceType> = JSON.parse(JSON.stringify(originSource.slice(0, 6)));
  dataTableOptions = {
    columns: [
        {
            field: 'firstName',
            header: '用户名称',
            fieldType: 'text'
        },
        {
            field: 'lastName',
            header: '昵称',
            fieldType: 'text'
        },
        {
            field: 'gender',
            header: '用户标签',
            fieldType: 'text'
        },
        {
            field: 'dob',
            header: '企业用户',
            fieldType: 'date'
        },
        {
          field: 'dob',
          header: '项目角色',
          fieldType: 'date'
        },
        {
          field: 'dob',
          header: '账号体系',
          fieldType: 'date'
        },
        {
          field: 'dob',
          header: '是否禁用',
          fieldType: 'date'
      }
    ]
  };

  pager1 = {
    total: 648,
    pageIndex: 1,
    pageSize: 10
  };

  setTotal(number) {
    this.pager1.total = number;
  }

  setIndex(number: number) {
    this.pager1.pageIndex = number;
    console.log(this.pager1.pageIndex);
  }
}
