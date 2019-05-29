import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { ContactComponent } from './contact/contact.component';

import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
// Import ng-circle-progress
import { NgCircleProgressModule } from 'ng-circle-progress';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ImageComponent } from './image/image.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    SkillsComponent,
    ExperienceComponent,
    EducationComponent,
    ContactComponent,
    ImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScrollToModule.forRoot(),
       // Specify ng-circle-progress as an import
       NgCircleProgressModule.forRoot({
        'radius': 30,
        'maxPercent': 200,
        'unitsColor': '#483500',
        'outerStrokeWidth': 5,
        'outerStrokeColor': '#FFFFFF',
        'innerStrokeColor': '#FFFFFF',
        'titleColor': '#483500',
        'subtitleColor': '#483500',
        'showSubtitle': false,
        'showInnerStroke': false,
        'startFromZero': false
      }),
      FontAwesomeModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
