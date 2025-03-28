import { UsuarioListar } from './../../models/Usuario';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent implements OnInit{
  
  @Output() onsubmit = new EventEmitter<UsuarioListar>();

  usuarioForm!: FormGroup;
  
  ngOnInit(): void {

    this.usuarioForm = new FormGroup({
      id: new FormControl(0),
      nomeCompleto: new FormControl(''),
      email: new FormControl(''),
      cargo: new FormControl(''),
      salario: new FormControl(0),
      cpf: new FormControl(''),
      situacao: new FormControl(true),
      senha: new FormControl('')
    });
  }

  submit(){
    this.onsubmit.emit(this.usuarioForm.value);
  }
}
