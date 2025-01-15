import {Component} from '@angular/core';
import {AppCommonUtils} from "../app-common-utils";

@Component({
  selector: 'app-alerting',
  templateUrl: './alerting.component.html',
  styleUrls: ['./alerting.component.scss']
})
export class AlertingComponent {
  appCommonUtils = AppCommonUtils;
  maxAlertCount = 2;
}
