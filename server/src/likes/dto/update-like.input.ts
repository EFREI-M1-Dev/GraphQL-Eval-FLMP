import { CreateLikeInput } from './create-like.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateLikeInput extends PartialType(CreateLikeInput) {
  id: number;
}
