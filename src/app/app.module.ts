import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule } from '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from 'src/home/home.component';
import { NewComponent } from './new/new.component';
import { PatientpComponent } from './patientp/patientp.component';
import { AdminlComponent } from './adminl/adminl.component';
import { AboutComponent } from './about/about.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { AdminpComponent } from './adminp/adminp.component';
import { ForgotComponent } from './forgot/forgot.component';
import { TermComponent } from './term/term.component';
import { PatientComponent } from './patient/patient.component';
import { AddressComponent } from './address/address.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { PrescriptionComponent } from './prescription/prescription.component';
import { MedicalHistoryComponent } from './medicalHistory/medicalHistory.component';
import { SappComponent } from './sapp/sapp.component';
import { MessageComponent } from './message/message.component';
import { UserComponent } from './user/user.component';
import { DoctorComponent } from './doctor/doctor.component';
import { ShowapptComponent } from './showappt/showappt.component';
import { PatientlistComponent } from './patientlist/patientlist.component';
import { MedreqComponent } from './medreq/medreq.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { LoginComponent } from './login/login.component';
import { PchatComponent } from './pchat/pchat.component';
import { PrecordsComponent } from './precords/precords.component';
import { VchatComponent } from './vchat/vchat.component';
import { UploadrepComponent } from './uploadrep/uploadrep.component';
import { DocchatsComponent } from './docchats/docchats.component';
import { DocinboxComponent } from './docinbox/docinbox.component';

const Routs: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'new', component:NewComponent},
  {path: 'patientp', component:PatientpComponent},
  {path: 'adminl', component:AdminlComponent},
  {path: 'adminp', component:AdminpComponent},
  {path: 'about', component:AboutComponent},
  {path: 'privacy', component:PrivacyComponent},
  {path: 'forgot', component:ForgotComponent},
  {path: 'term', component:TermComponent},
  {path: 'patient', component:PatientComponent},
  {path: 'address', component:AddressComponent},
  {path: 'insurance', component:InsuranceComponent},
  {path: 'prescription', component:PrescriptionComponent},
  {path: 'medical_history', component:MedicalHistoryComponent},
  {path:'sapp', component:SappComponent},
  {path: 'message', component:MessageComponent},
  {path: 'user', component:UserComponent},
  {path: 'doctor', component:DoctorComponent},
  {path: 'showappt', component:ShowapptComponent},
  {path: 'patientlist', component:PatientlistComponent},
  {path: 'medreq', component:MedreqComponent},
  {path: 'appointment', component:AppointmentComponent},
  {path: 'login', component:LoginComponent},
  {path: 'pchat', component:PchatComponent},
  {path: 'precords', component:PrecordsComponent},
  {path: 'vchat', component:VchatComponent},
  {path: 'uploadrep', component:UploadrepComponent},
  {path: 'docchats', component:DocchatsComponent},
  {path: 'docinbox', component:DocinboxComponent},
  {path: '', pathMatch: 'full', redirectTo: 'home'},
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewComponent,
    PatientpComponent,
    AdminlComponent,
    AdminpComponent,
    AboutComponent,
    PrivacyComponent,
    ForgotComponent,
    TermComponent,
    PatientComponent,
    AddressComponent,
    InsuranceComponent,
    PrescriptionComponent,
    MedicalHistoryComponent,
    SappComponent,
    MessageComponent,
    UserComponent,
    DoctorComponent,
    ShowapptComponent,
    PatientlistComponent,
    MedreqComponent,
    AppointmentComponent,
    LoginComponent,
    PchatComponent,
    PrecordsComponent,
    VchatComponent,
    UploadrepComponent,
    DocchatsComponent,
    DocinboxComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(Routs)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
