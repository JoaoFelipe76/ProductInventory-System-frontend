import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProdutoComponent } from './componentes/produto/produto.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProdutoComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cadastro_produto';
}
