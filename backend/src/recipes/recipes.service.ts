import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Recipe } from './recipe.entity';

@Injectable()
export class RecipesService {
  constructor(
    @InjectRepository(Recipe)
    private recipesRepository: Repository<Recipe>,
  ) {}

  findAll(): Promise<Recipe[]> {
    return this.recipesRepository.find({ relations: ['owner', 'category'] });
  }

  async findOne(id: number): Promise<Recipe> {
    const recipe = await this.recipesRepository.findOne({
      where: { recipe_id: id },
      relations: ['owner', 'category'],
    });
    if (!recipe) {
      throw new NotFoundException(`Recipe with ID ${id} not found`);
    }
    return recipe;
  }

  async create(recipe: Recipe): Promise<Recipe> {
    return this.recipesRepository.save(recipe);
  }

  async remove(id: number): Promise<void> {
    await this.recipesRepository.delete(id);
  }
}
