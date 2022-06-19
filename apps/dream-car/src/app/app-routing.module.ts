import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {HomepageComponent} from "./pages/homepage/homepage.component";

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },

  // {
  //   path: '',
  //   loadChildren: async () => import('./authentication/authentication.module').then((m) => m.AuthenticationModule),
  // },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules, enableTracing: false})],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
