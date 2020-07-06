import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

  {
    path:'pessoas',
    loadChildren:() => import('./pessoa/pessoa.module').then(p=>p.PessoaModule)
  },
  {
    path:'recursos',
    loadChildren:() => import('./recurso/recurso.module').then(p=>p.RecursoModule)
  },
  {
    path:'perfil',
    loadChildren:() => import('./perfil/perfil.module').then(p=>p.PerfilModule)
  },
  {
    path:'grupo',
    loadChildren:() => import('./grupo/grupo.module').then(p=>p.GrupoModule)
  },
  {
    path:'anotacao',
    loadChildren:() => import('./anotacao/anotacao.module').then(p=>p.AnotacaoModule)
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((p) => p.LoginModule),
  },
   {
    path: 'perfilrecurso',
    loadChildren: () =>
      import('./perfilrecurso/perfilrecurso.module').then((p) => p.PerfilrecursoModule),
  }, 
  {
    path: 'pessoasgrupo',
    loadChildren: () =>
      import('./pessoagrupo/pessoagrupo.module').then((p) => p.PessoagrupoModule),
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
