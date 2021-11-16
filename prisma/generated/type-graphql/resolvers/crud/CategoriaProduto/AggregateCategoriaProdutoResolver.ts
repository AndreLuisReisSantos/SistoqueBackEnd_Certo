import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateCategoriaProdutoArgs } from "./args/AggregateCategoriaProdutoArgs";
import { CategoriaProduto } from "../../../models/CategoriaProduto";
import { AggregateCategoriaProduto } from "../../outputs/AggregateCategoriaProduto";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CategoriaProduto)
export class AggregateCategoriaProdutoResolver {
  @TypeGraphQL.Query(_returns => AggregateCategoriaProduto, {
    nullable: false
  })
  async aggregateCategoriaProduto(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCategoriaProdutoArgs): Promise<AggregateCategoriaProduto> {
    return getPrismaFromContext(ctx).categoriaProduto.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
