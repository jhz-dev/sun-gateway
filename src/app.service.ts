import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(
    @Inject('PEOPLE_SERVICE') private readonly peopleClient: ClientProxy,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  getHelloFromService() {
    return this.peopleClient.send({ cmd: 'greetings' }, {});
  }
}
