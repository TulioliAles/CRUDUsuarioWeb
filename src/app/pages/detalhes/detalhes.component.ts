import { RouterModule, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { UsuarioListar } from '../../models/Usuario';

@Component({
  selector: 'app-detalhes',
  imports: [RouterModule],
  templateUrl: './detalhes.component.html',
  styleUrl: './detalhes.component.css'
})
export class DetalhesComponent implements OnInit{
  
  usuario! : UsuarioListar;

  constructor(private usuarioService : UsuarioService, private route : ActivatedRoute) { }

  ngOnInit(): void {
    
    const id = Number(this.route.snapshot.paramMap.get("id"));

    this.usuarioService.GetUsuarioId(id).subscribe(response => {
      this.usuario = response.dados;
    });
  }

}
