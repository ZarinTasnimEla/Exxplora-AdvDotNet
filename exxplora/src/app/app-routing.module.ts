import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { OtpVerificationComponent } from './components/otp-verification/otp-verification.component';
import { ProfileSetupComponent } from './components/profile-setup/profile-setup.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { CreateProjectComponent } from './components/create-project/create-project.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'create-project',
    component: CreateProjectComponent
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  },
  {
    path: 'sign-in',
    component: SignInComponent
  },
  {
    path: 'otp-verification',
    component: OtpVerificationComponent
  },
  {
    path: 'profile-setup',
    component: ProfileSetupComponent
  },
  {
    path: 'create-project',
    component: CreateProjectComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
