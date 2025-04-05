import { Component, OnInit } from '@angular/core';
import { FormularioComponent } from "../../componentes/formulario/formulario.component";
import { UsuarioService } from '../../services/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioListar } from '../../models/Usuario';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-editar',
  imports: [FormularioComponent, CommonModule],
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css'
})
export class EditarComponent implements OnInit{

  btnAcao = "Editar";
  descTitulo = "Editar Usuários"
  usuario!: UsuarioListar;
  constructor(private usuarioService: UsuarioService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    const id = Number(this.route.snapshot.paramMap.get("id"));

    this.usuarioService.GetUsuarioId(id).subscribe(response => {
      this.usuario = response.dados;
    });
  }

  editarUsuario(usuario : UsuarioListar){
    this.usuarioService.EditarUsuario(usuario).subscribe(response => {
      this.router.navigate(["/"]);
    })
  }
}
