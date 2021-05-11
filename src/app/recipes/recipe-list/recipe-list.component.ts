import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipie.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipe:Recipe[]  = [
    new Recipe('A test recipe','This is a test','https://www.simplyrecipes.com/thmb/2Ggz7Ua9qkBAfVfl4FGh2wlNeBc=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Quesadilla-LEAD-5-55da42a2a306497c85b1328385e44d85.jpg'),
    new Recipe('A test recipe','This is a test','https://www.simplyrecipes.com/thmb/2Ggz7Ua9qkBAfVfl4FGh2wlNeBc=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Quesadilla-LEAD-5-55da42a2a306497c85b1328385e44d85.jpg')
    
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
