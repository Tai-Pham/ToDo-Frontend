import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule} from '@angular/forms'
import { HttpClientModule} from '@angular/common/http'
import { Routes, RouterModule } from '@angular/router';
import { CookieService} from 'ngx-cookie-service'

//importing the material module
import {MatButtonModule} from '@angular/material/button'
import {MatCardModule} from '@angular/material/card'
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { CarouselModule } from 'ngx-owl-carousel-o';
import{MatToolbarModule} from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { AddNoteComponent } from './component/add-note/add-note.component';
import { ViewComponent } from './component/view/view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuard } from './services/auth.guard';
import { HomeComponent } from './component/home/home.component';
import { HeaderComponent } from './component/header/header.component';
import { SearchComponent } from './component/search/search.component';
import { ViewsearchComponent } from './component/viewsearch/viewsearch.component';
import { EditNoteComponent } from './component/edit-note/edit-note.component';
import { NoteSearchPipe } from './pipes/note-search.pipe';
import { NoteImportPipe } from './pipes/note-import.pipe';

//creating the routes array
const routes: Routes =[
  {path: '', redirectTo:'login', pathMatch:"full" },
  {path: 'login', component:LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'addNote', component:AddNoteComponent, canActivate: [AuthGuard]},
  {path: 'view', component:ViewComponent, canActivate: [AuthGuard]},
  {path: 'search', component:SearchComponent, canActivate: [AuthGuard]},
  {path: 'viewsearch', component:ViewsearchComponent, canActivate: [AuthGuard]},
 {path: 'editNote', component:EditNoteComponent, canActivate: [AuthGuard]},

  
]

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    AddNoteComponent,
    ViewComponent,
    HomeComponent,
    HeaderComponent,
    SearchComponent,
    ViewsearchComponent,
    EditNoteComponent,
    NoteSearchPipe,
    NoteImportPipe, 
    
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    //making these routes available to our app
    RouterModule.forRoot(routes),
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    CarouselModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    

  ],
  //Registering the service
  providers: [CookieService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
