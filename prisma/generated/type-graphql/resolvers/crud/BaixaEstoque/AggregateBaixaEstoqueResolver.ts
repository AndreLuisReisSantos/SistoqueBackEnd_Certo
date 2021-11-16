import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateBaixaEstoqueArgs } from "./args/AggregateBaixaEstoqueArgs";
import { BaixaEstoque } from "../../../models/BaixaEstoque";
import { AggregateBaixaEstoque } from "../../outputs/AggregateBaixaEstoque";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => BaixaEstoque)
export class AggregateBaixaEstoqueResolver {
  @TypeGraphQL.Query(_returns => AggregateBaixaEstoque, {
    nullable: false
  })
  async aggregateBaixaEstoque(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateBaixaEstoqueArgs): Promise<AggregateBaixaEstoque> {
    return getPrismaFromContext(ctx).baixaEstoque.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
