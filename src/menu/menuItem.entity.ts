import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { Page } from '../pages/page.entity';
import languageEnum from '../enums/language.enum';

@Entity({ name: 'menuItem' })
export class MenuItem {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text', { nullable: false })
  title: string;

  @Column('int', { nullable: false })
  order: number;

  @Column('text', { nullable: true })
  path: string;

  @Column({ type: 'enum', enum: languageEnum })
  language: string;

  @ManyToOne(type => Page, { eager: true })
  @JoinColumn()
  page: Page;

  // Self-referencing relation to create nested menus.
  @ManyToOne(
    type => MenuItem,
    menuItem => menuItem.children,
  )
  parent: MenuItem;

  @OneToMany(
    type => MenuItem,
    menuItem => menuItem.parent,
  )
  children: MenuItem[];
}
