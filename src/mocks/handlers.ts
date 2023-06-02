import { MockedRequest, RestHandler, rest, type DefaultBodyType } from 'msw'

export const handlers: RestHandler<MockedRequest<DefaultBodyType>>[] = [
  // Handles a POST /login request
  rest.post('/api/login', (reqest, response, context) => {
    return response(
      context.delay(1000),
      context.status(200),
      context.json({
        token: 'abcde'
      })
    )
  }),
]