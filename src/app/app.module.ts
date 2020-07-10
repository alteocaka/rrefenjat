import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Angular Material Imports:
import { MaterialModule } from './material.module';

// Routing module:
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

// Components:
import { PostCardComponent } from './Components/post-card/post-card.component';
import { UserCardComponent } from './Components/user-card/user-card.component';
import { ChatSectionComponent } from './Components/chat-section/chat-section.component';
import { SignInComponent } from './Components/sign-in/sign-in.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { NewPostComponent } from './Components/new-post/new-post.component';
import { AppFooterComponent } from './Components/app-footer/app-footer.component';

// Containers:
import { HomepageComponent } from './Containers/homepage/homepage.component';
import { FeedComponent } from './Containers/feed/feed.component';



@NgModule({
  declarations: [
    AppComponent,
    PostCardComponent,
    UserCardComponent,
    HomepageComponent,
    FeedComponent,
    ChatSectionComponent,
    SignInComponent,
    SignUpComponent,
    NewPostComponent,
    AppFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,

    // Material imports:
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

