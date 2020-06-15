import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'anotacao',
    loadChildren: () =>
      import('./anotacao/anotacao.module').then((p) => p.AnotacaoModule),
  }, {
    path: 'grupos',
    loadChildren: () =>
      import('./grupo/grupo.module').then((p) => p.GrupoModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((p) => p.LoginModule),
  }, {
    path: 'perfil',
    loadChildren: () =>
      import('./perfil/perfil.module').then((p) => p.PerfilModule),
  }, {
    path: 'perfilrecurso',
    loadChildren: () =>
      import('./perfilrecurso/perfilrecurso.module').then((p) => p.PerfilrecursoModule),
  }, {
    path: 'pessoas',
    loadChildren: () =>
      import('./pessoa/pessoa.module').then((p) => p.PessoaModule),
  }, {
    path: 'pessoasgrupo',
    loadChildren: () =>
      import('./pessoagrupo/pessoagrupo.module').then((p) => p.PessoagrupoModule),
  },{
    path: 'recursos',
    loadChildren: () =>
      import('./recurso/recurso.module').then((p) => p.RecursoModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
