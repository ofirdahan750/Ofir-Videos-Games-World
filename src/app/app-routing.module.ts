import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardPageComponent } from './components/card-page/card-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';

const routes: Routes = [
  { component: HomePageComponent, path: '' },
  { path: 'search/', redirectTo: '/', pathMatch: 'full' },
  { component: HomePageComponent, path: 'search/:search-input' },
  {
    component: CardPageComponent,
    path: 'details/:id',
  },
  { path: '**', pathMatch: 'full', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
