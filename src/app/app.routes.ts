import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { CommonModule } from '@angular/common';
// import { BrowserModule } from '@angular/platform-browser';

export const routes: Routes = [
    {path: '', component: HomeComponent}
    // {path: 'Nav', component: TopNavComponent}
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
