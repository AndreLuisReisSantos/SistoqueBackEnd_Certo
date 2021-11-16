import 'reflect-metadata'
import * as tq from 'type-graphql'

import { ApolloServer } from 'apollo-server'
import { DateTimeResolver } from 'graphql-scalars'
import { GraphQLScalarType } from 'graphql'

import { FornecedorController } from '@controller/FornecedorController'
import Container from 'typedi'
import { ApolloServerPlugin } from 'apollo-server-plugin-base'

import { Context, createContext } from './context'
import { RepresentanteController } from '@controller/RepresentanteController'

const bootstrap = async () => {
  const schema = await tq.buildSchema({
    resolvers: [
      FornecedorController, RepresentanteController
    ],
    scalarsMap: [
      {
        type: GraphQLScalarType,
        scalar: DateTimeResolver
      }
    ],
    container: Container
  })

  const plugin: ApolloServerPlugin<Context> = {
    requestDidStart (requestContext) {
      return {
        willSendResponse () {
          Container.reset(requestContext.context.requestId)
        }
      }
    }
  }

  const server = new ApolloServer({
    schema,
    context: (params) => {
      const requestId = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)
      const container = Container.of(requestId.toString())

      const context: Context = {
        ...createContext(params),
        requestId: requestId.toString(),
        container
      }
      Container.set('Context', context)
      return context
    },
    plugins: [
      plugin
    ]
  })

  const { url } = await server.listen(4001)
  console.log(`Server is running, GraphQL Playground available at ${url}`)
}

bootstrap()
