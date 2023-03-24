import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://media.4rgos.it/i/Argos/jacket%20potatos?maxW=1200&qlt=75&fmt.jpeg.interlaced=true')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
