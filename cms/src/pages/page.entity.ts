import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { User } from '../users/user.entity';
import languageEnum from '../enums/language.enum';

@Entity()
export class Page {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  title: string;

  @Column('text')
  content: string;

  @Column('timestamptz')
  createdAt: Date;

  @Column('timestamptz', { nullable: true })
  updatedAt: Date;

  @Column({ type: 'enum', enum: languageEnum })
  language: string;

  @Column({ default: false })
  isPublic: boolean;

  @ManyToOne(type => User, { nullable: false, eager: true })
  @JoinColumn()
  author: Partial<User>;

  @ManyToOne(type => User, { eager: true })
  @JoinColumn()
  editor: User;

  @Column('text', { nullable: true })
  path: string;

  // Link translations of the same page together.
  @ManyToMany(
    type => Page,
    page => page.translations,
  )
  @JoinTable({
    name: 'translation',
    joinColumn: { name: 'originPageId' },
    inverseJoinColumn: { name: 'targetPageId' },
  })
  translations: Page[];

  @Column('text', { nullable: true })
  description: string;

  @Column('text', { nullable: true })
  keywords: string;
}
