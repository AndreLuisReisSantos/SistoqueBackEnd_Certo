import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregatePedidoArgs } from "./args/AggregatePedidoArgs";
import { Pedido } from "../../../models/Pedido";
import { AggregatePedido } from "../../outputs/AggregatePedido";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Pedido)
export class AggregatePedidoResolver {
  @TypeGraphQL.Query(_returns => AggregatePedido, {
    nullable: false
  })
  async aggregatePedido(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePedidoArgs): Promise<AggregatePedido> {
    return getPrismaFromContext(ctx).pedido.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
