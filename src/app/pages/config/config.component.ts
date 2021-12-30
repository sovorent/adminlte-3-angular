import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-config',
    templateUrl: './config.component.html',
    styleUrls: ['./config.component.scss']
})
export class ConfigComponent implements OnInit {
    configs: any[] = [{
      key: 'test',
      value: 'value'
    }, {
      key: 'test2',
      value: 'value2'
    }];
    constructor() {}

    ngOnInit(): void {}
    editConfig(item) {}
}
