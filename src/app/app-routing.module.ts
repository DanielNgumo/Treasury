import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationformComponent } from './registrationform/registrationform.component';
import { CreategroupComponent } from './creategroup/creategroup.component';
import { FundingcampaignComponent } from './fundingcampaign/fundingcampaign.component';
import { FormcontrolComponent } from './formcontrol/formcontrol.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { PledgeregistrationComponent } from './pledgeregistration/pledgeregistration.component';
import { ContributionComponent } from './contribution/contribution.component';
import { ExpensesComponent } from './expenses/expenses.component';

const routes: Routes = [
  { path: '', redirectTo: '/creategroup', pathMatch: 'full' },
  { path: 'creategroup', component: CreategroupComponent },
  { path: 'registrationform', component: RegistrationformComponent },
  { path: 'fundingcampaign', component: FundingcampaignComponent },
  { path: 'formcontrol', component: FormcontrolComponent },
  {path: 'createaccount', component: CreateaccountComponent},
  {path: 'pledgeregistration', component: PledgeregistrationComponent},
  {path: 'contribution', component:ContributionComponent},
  {path: 'expenses', component: ExpensesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
