import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateProdutoArgs } from "./args/AggregateProdutoArgs";
import { Produto } from "../../../models/Produto";
import { AggregateProduto } from "../../outputs/AggregateProduto";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Produto)
export class AggregateProdutoResolver {
  @TypeGraphQL.Query(_returns => AggregateProduto, {
    nullable: false
  })
  async aggregateProduto(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateProdutoArgs): Promise<AggregateProduto> {
    return getPrismaFromContext(ctx).produto.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
