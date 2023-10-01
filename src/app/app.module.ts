import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { CreategroupComponent } from './creategroup/creategroup.component';
import { RegistrationformComponent } from './registrationform/registrationform.component';
import { FundingcampaignComponent } from './fundingcampaign/fundingcampaign.component';
import { MatInputModule } from '@angular/material/input';
import { NgFor } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatNativeDateModule} from '@angular/material/core';
import { CreatepaymentmethodComponent } from './createpaymentmethod/createpaymentmethod.component';
import { FormcontrolComponent } from './formcontrol/formcontrol.component';
import { DateComponent } from './date/date.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { PledgeregistrationComponent } from './pledgeregistration/pledgeregistration.component';
import { ContributionComponent } from './contribution/contribution.component';
import { ExpensesComponent } from './expenses/expenses.component';

@NgModule({
  declarations: [
    AppComponent,
    CreategroupComponent,
    RegistrationformComponent,
    FundingcampaignComponent,
    CreatepaymentmethodComponent,
    FormcontrolComponent,
    CreateaccountComponent,
    PledgeregistrationComponent,
    ContributionComponent,
    ExpensesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatSelectModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    NgFor,
    MatDatepickerModule,
    MatIconModule,
    MatNativeDateModule,
    ReactiveFormsModule,

    
    ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
