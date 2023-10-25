export class SignUpController {
  handle(httpRequest: any): any {
    httpRequest;
    return {
      statusCode: 400,
      body: new Error('Missing param: name'),
    };
  }
}
