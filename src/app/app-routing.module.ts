import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { MainBlogComponent } from './main-blog/main-blog.component';
import { DetailpageComponent } from './detailpage/detailpage.component'

const routes: Routes = [
  { path:'', redirectTo:'mainblog', pathMatch:'full'},
  {path:'mainblog', component: MainBlogComponent},
  {path:'detailblog', component: BlogDetailComponent},
  {path:'blogpage', component: DetailpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
