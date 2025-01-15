import {Component} from '@angular/core';
import {View} from "src/app/common/view";
import {Handler} from "src/app/common/handler";
import {IncidentId, OfferDetails, Operator} from '@pitstop/typescriptmodels/pitstop';
import {AppContext} from '../../../app-context';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-offer-modal',
  templateUrl: './offer-modal.component.html',
  styleUrls: ['./offer-modal.component.scss']
})
@Handler()
export class OfferModalComponent extends View {
  protected readonly AppContext = AppContext;

  incidentId: IncidentId;
  details: OfferDetails = {operatorId: AppContext.userProfile.operator}

  operators : Observable<Operator[]> = this.subscribeTo("/api/operators");
  operatorFormatter = (operator : Operator) => operator.details.name;

  updateInfo = () => this.sendCommand(`/api/incidents/${this.incidentId}/offers`, this.details);
}
