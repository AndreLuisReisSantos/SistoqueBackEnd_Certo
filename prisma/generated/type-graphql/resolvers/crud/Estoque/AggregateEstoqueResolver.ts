import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateEstoqueArgs } from "./args/AggregateEstoqueArgs";
import { Estoque } from "../../../models/Estoque";
import { AggregateEstoque } from "../../outputs/AggregateEstoque";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Estoque)
export class AggregateEstoqueResolver {
  @TypeGraphQL.Query(_returns => AggregateEstoque, {
    nullable: false
  })
  async aggregateEstoque(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateEstoqueArgs): Promise<AggregateEstoque> {
    return getPrismaFromContext(ctx).estoque.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
