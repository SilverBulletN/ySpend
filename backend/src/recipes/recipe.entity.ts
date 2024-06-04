import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { User } from '../users/user.entity';
import { Category } from '../categories/category.entity';

@Entity()
export class Recipe {
  @PrimaryGeneratedColumn()
  recipe_id!: number;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'owner_id' })
  owner!: User;

  @Column('text')
  avatar_url!: string;

  @Column()
  recipe_name!: string;

  @Column()
  status!: string;

  @Column()
  to_vendor!: string;

  @ManyToOne(() => Category)
  @JoinColumn({ name: 'category_id' })
  category!: Category;

  @Column('text')
  image_url!: string;

  @Column()
  amount!: number;
}
