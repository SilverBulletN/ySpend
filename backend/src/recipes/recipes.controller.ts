import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { RecipesService } from './recipes.service';
import { Recipe } from './recipe.entity';

@Controller('recipes')
export class RecipesController {
  constructor(private readonly recipesService: RecipesService) {}

  @Get()
  findAll(): Promise<Recipe[]> {
    return this.recipesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Recipe> {
    return this.recipesService.findOne(id);
  }

  @Post()
  create(@Body() recipe: Recipe): Promise<Recipe> {
    return this.recipesService.create(recipe);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.recipesService.remove(id);
  }
}
