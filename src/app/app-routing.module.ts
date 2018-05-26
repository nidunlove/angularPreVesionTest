import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent }      from './heroes/heroes.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroDetailComponent }   from './hero-detail/hero-detail.component';

const routes: Routes = [
	{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
	{ path: 'heroes', component: HeroesComponent },
	{ path: 'detail/:id', component: HeroDetailComponent },
	{ path: 'dashboard', component: DashboardComponent },

	];
/*ANGULAR教程中，--module=app 失败，估计是angular低版本的原因，手动在app.module.ts中和import中加入AppRoutingModule，*/
@NgModule({
  // imports: [
  //   CommonModule
  // ],
  // declarations: []
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})


export class AppRoutingModule {

}
