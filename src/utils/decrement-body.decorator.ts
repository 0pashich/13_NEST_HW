// import { SetMetadata } from '@nestjs/common';

// export const DecrementBody = (...args: string[]) => SetMetadata('decrement-body', args);

import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const DecrementBody = createParamDecorator(
  (data: string[], ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    data.forEach(element => {
      let value = request.body[element];
      request.body[element] = value - 1
    });
    return data;
  },
);