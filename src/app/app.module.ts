import { MatToolbarModule } from '@angular/material/toolbar';
import { PeoplesService } from './people.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material.module';
import { AppComponent } from './app.component';
import {MatButtonModule, MatBadgeModule, MatSidenavModule, MatListModule} from '@angular/material';
import {MatCheckboxModule} from '@angular/material';
import {MatInputModule} from '@angular/material';
import {MatProgressSpinnerModule} from '@angular/material';
import {MatCardModule} from '@angular/material';
import {MatMenuModule} from '@angular/material';
import {MatIconModule} from '@angular/material';
import {MatButtonToggleModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { HomeComponent } from './home/home.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { FeesComponent } from './fees/fees.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import {FormsModule} from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import { PerformanceComponent } from './performance/performance.component';
import { StudyComponent } from './study/study.component';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from 'src/environments/environment';
import { ImagesComponent } from './images/images.component';
import { ImageComponent } from './images/image/image.component';
import { ImageListComponent } from './images/image-list/image-list.component';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import firebase from '@firebase/app';


//



const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'attendance', component: AttendanceComponent },
  { path: 'fees', component: FeesComponent },
  { path: 'study', component: StudyComponent },
  { path: 'login', component: LoginComponent },
  { path: 'user', component: UserComponent },
  { path: '', component: HomeComponent },
  { path: 'performance', component: PerformanceComponent },
  // { path: 'image', component: ImageComponent },
  // { path: 'image/ upload', component: ImageComponent },
  // { path: 'image/list', component: ImageListComponent }
  { path: 'image', component: ImageComponent, children: [
    { path: 'upload', component: ImageComponent },
    { path: 'list', component: ImageListComponent }
  ] }

];
//
@NgModule({
  imports:      [
    RouterModule.forRoot(routes),
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonToggleModule,
    MatBadgeModule,
    MatFormFieldModule,
    MatSelectModule,
    MatSidenavModule,
    FormsModule,
    MatListModule,
    MatTableModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
    ReactiveFormsModule,
    AngularFireDatabaseModule

  ],
    exports: [
      BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonToggleModule,
    MatBadgeModule,
    MatFormFieldModule,
    MatSelectModule,
    MatSidenavModule,
    FormsModule,
    MatListModule,
    MatTableModule,
    ReactiveFormsModule,
    AngularFireDatabaseModule


      ],
  declarations: [ AppComponent, HomeComponent, AttendanceComponent,
    FeesComponent, LoginComponent, UserComponent, PerformanceComponent, StudyComponent,
    ImagesComponent, ImageComponent, ImageListComponent],
  providers: [PeoplesService],
  bootstrap:    [ AppComponent ]
})
export class AppModule {

 }
