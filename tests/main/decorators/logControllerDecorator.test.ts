import { LogControllerDecorator } from "../../../src/main/decorators/logControllerDecorator"
import { Controller, HttpRequest, HttpResponse } from "../../../src/presentation/interfaces"

interface SUTTypes {
  sut: Controller
  controllerStub: Controller
}

const makeControllerStub = (): Controller => {
  class ControllerStub implements Controller {
    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
      const httpResponse = {
        statusCode: 200,
        body: {
          name: 'name',
          email: 'email@email.com',
          password: 'password',
          passwordConfirmation: 'password'
        }
      }
      return new Promise(resolve => resolve(httpResponse))
    }
  }
  return new ControllerStub()
}

const makeSUT = (): SUTTypes => {
  const controllerStub = makeControllerStub()
  const SUT = new LogControllerDecorator(controllerStub)

  return {
    sut: SUT,
    controllerStub: controllerStub
  }
}

describe('LogController Decorator', () => {
  test('Should call Controller.handle() correctly', async () => {
    const { sut, controllerStub } = makeSUT()
    const handleSpy = jest.spyOn(controllerStub, 'handle')

    const httpRequest = {
      body: {
        name: 'name',
        email: 'email@email.com',
        password: 'password',
        passwordConfirmation: 'password'
      }
    }

    await sut.handle(httpRequest)

    expect(handleSpy).toHaveBeenCalledWith(httpRequest)
  })

  test('Should return the same result of the Controller', async () => {
    const { sut } = makeSUT()

    const httpRequest = {
      body: {
        name: 'name',
        email: 'email@email.com',
        password: 'password',
        passwordConfirmation: 'password'
      }
    }

    const httpResponse = await sut.handle(httpRequest)

    expect(httpResponse).toEqual({
      statusCode: 200,
      body: {
        name: 'name',
        email: 'email@email.com',
        password: 'password',
        passwordConfirmation: 'password'
      }
    })
  })
})
