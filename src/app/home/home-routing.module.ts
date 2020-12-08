import {NgModule} from '@angular/core';
import {Router, RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home.component';
import {PostComponent} from '../post/post.component';




const routes: Routes = [
  {path: 'home', component: HomeComponent },
  {path: 'post', component: PostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class HomeRotingModule {}
