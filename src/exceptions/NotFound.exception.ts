export class NotFound extends Error {
  status = 404;
  name = "Not Found";
  constructor(message: string) {
    super(message);
  };
}