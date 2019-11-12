import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-files',
  templateUrl: './admin-files.component.html',
  styleUrls: ['./admin-files.component.css']
})

export class AdminFilesComponent implements OnInit {
  tab22acticeID='tab1'
  username = 'XXX'
  tab1acticeID = 'tab1'
  // tab2acticeID = 'tab2'
  menu = [{
    title: '通用设置',
    children: [
      {title: '子内容1'},
      {title: '子内容2'},
      {title: '子内容3'},
    ]
  }, {
    title: '项目管理',
    children: [
      {title: '项目设置模版'},
      {title: '设置项目创建者'},
      {title: '项目和成员管理'},
    ]
  }, {
    title: '编译构建',
    open: true,
    children: [
      {title: '子内容1(禁用)', disabled: true},
      {title: '子内容2(默认激活)', active: true},
      {title: '子内容3'},
    ]
  }, {
    title: '私有依赖库' ,
    children: [
      {title: '子内容2(默认激活)', active: true},
      {title: '子内容1(禁用)', disabled: true},
      {title: '子内容3'},
    ]
  }];

  constructor() { }

  ngOnInit() {
  }

}
