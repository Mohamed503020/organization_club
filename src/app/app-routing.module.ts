import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"", loadChildren: () => import('./feature/feature.module').then(m => m.FeatureModule)},
];
const routerOptions: ExtraOptions = {
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64], // optional: adjust if you have a fixed header
  scrollPositionRestoration: 'enabled'
};
@NgModule({
  imports: [RouterModule.forRoot(routes,routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
