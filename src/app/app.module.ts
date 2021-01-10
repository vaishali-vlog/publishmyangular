import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FoormComponent } from './foorm/foorm.component';
import { HttpClientModule } from '@angular/common/http';
import { FreeApiService} from './services/freeapi.service';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { MainBlogComponent } from './main-blog/main-blog.component';
import { DetailpageComponent } from './detailpage/detailpage.component'

@NgModule({
  declarations: [
    AppComponent,
    FoormComponent,
    BlogDetailComponent,
    MainBlogComponent,
    DetailpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [FreeApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
