import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { CreateArticleComponent } from './create-article/create-article.component';
import { AboutComponent } from './about/about.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { AuthorComponent } from './author/author.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [

    { path: '' , redirectTo: '/home' , pathMatch: 'full'},
    { path: 'home' , component: HomeComponent},
    { path: 'article/:id' , component: DetailComponent},
    { path: 'create' , component: CreateArticleComponent},
    { path: 'about' , component: AboutComponent},

    { path: 'privacy' , component: PrivacyComponent},
    { path: 'author' , component: AuthorComponent},
    { path: 'login' , component: LoginComponent},
    { path: 'register' , component: RegisterComponent},

    { path: '**' , component: NotFoundComponent},


];
