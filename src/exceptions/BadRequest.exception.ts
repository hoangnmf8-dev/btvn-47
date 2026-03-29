export class BadRequest extends Error {
  status = 400;
  name = "Bad request";
  constructor(message: string) {
    super(message);
  };
}