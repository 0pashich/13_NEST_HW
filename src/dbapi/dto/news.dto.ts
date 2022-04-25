import {
  IsNotEmpty,
  IsString,
  ValidateIf,
  IsDateString,
  IsNumber,
} from 'class-validator';
export class NewsCreateDto {
  @IsNotEmpty()
  @IsString()
  title!: string;

  @IsNotEmpty()
  @IsString()
  description!: string;

  @ValidateIf((o) => o.author)
  @IsString()
  author!: string;

  // @IsNotEmpty()
  // @IsDateString()
  // createdAt!: string;

  @IsNotEmpty()
  @IsNumber()
  authorId!: number;

  @IsNotEmpty()
  @IsNumber()
  categoryId!: number;
}

export class NewsIdDto {
  @IsString()
  @IsNotEmpty()
  id!: number;
}
