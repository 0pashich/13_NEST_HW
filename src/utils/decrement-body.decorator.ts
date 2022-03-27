import { SetMetadata } from '@nestjs/common';

export const DecrementBody = (...args: string[]) => SetMetadata('decrement-body', args);
