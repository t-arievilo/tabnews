import {
  InternalServerError,
  MethodNotAllowedError,
  ValidationError,
<<<<<<< HEAD
  NotFoundError,
=======
>>>>>>> d1ac6396db2aca10f1723a9fe2bbb5f91a88892e
} from "infra/errors";

function onNoMatchHandler(request, response) {
  const publicErrorObject = new MethodNotAllowedError();
  response.status(publicErrorObject.statusCode).json(publicErrorObject);
}

function onErrorHandler(error, request, response) {
<<<<<<< HEAD
  if (error instanceof ValidationError || error instanceof NotFoundError) {
=======
  if (error instanceof ValidationError) {
>>>>>>> d1ac6396db2aca10f1723a9fe2bbb5f91a88892e
    return response.status(error.statusCode).json(error);
  }

  const publicErrorObject = new InternalServerError({
    statusCode: error.statusCode,
    cause: error,
  });

  console.error(publicErrorObject);
  response.status(publicErrorObject.statusCode).json(publicErrorObject);
}

const controller = {
  errorHandlers: {
    onNoMatch: onNoMatchHandler,
    onError: onErrorHandler,
  },
};

export default controller;
