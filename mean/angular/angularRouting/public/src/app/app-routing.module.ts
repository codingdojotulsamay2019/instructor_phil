import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';

const routes: Routes = [
  {path: 'one', component: OneComponent, children:[
    {path: 'a', component: AComponent},
    {path: 'b', component: BComponent}
  ]},
  {path: 'two', component: TwoComponent},
  {path: 'three/:id', component: ThreeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
