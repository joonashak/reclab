import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Page } from '../pages/page.entity';

/**
 * Single-row settings table.
 */
@Entity()
export class Settings {
  // Not used but required by TypeORM.
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text', { nullable: false })
  title: string;

  @ManyToOne(type => Page, { nullable: false })
  @JoinColumn()
  frontpage: Page;
}
