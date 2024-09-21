import { Component } from '@angular/core';
import { ProdutoService } from '../../service/produto.service';
import { Produto } from '../../model/produto';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-produto',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css'] // Corrigido aqui
})
export class ProdutoComponent {

  produtos: Produto[] = [];

  produto: Produto = { nome: '', quantidade: 0, valor: 0 };

  exibirBotao: boolean = false;

  constructor(private service: ProdutoService) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(): void {
    this.service.findAll().subscribe(produtos => {
      this.produtos = produtos;
    });
  }

  save(produto: Produto): void {
    this.service.create(produto).subscribe(() => {
      this.findAll();
    });
  }

  atualizar(produto: Produto): void {
    this.produto = produto;
    this.exibirBotao = true;
  }


  update(produto: Produto): void {
    this.service.update(produto).subscribe(() => {
      this.findAll();
    })
  }

  delete(produto: Produto): void {
   this.service.delete(produto).subscribe(() => {
    this.findAll();
  })
  }

}
