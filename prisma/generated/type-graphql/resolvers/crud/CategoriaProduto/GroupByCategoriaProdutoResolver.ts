import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByCategoriaProdutoArgs } from "./args/GroupByCategoriaProdutoArgs";
import { CategoriaProduto } from "../../../models/CategoriaProduto";
import { CategoriaProdutoGroupBy } from "../../outputs/CategoriaProdutoGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CategoriaProduto)
export class GroupByCategoriaProdutoResolver {
  @TypeGraphQL.Query(_returns => [CategoriaProdutoGroupBy], {
    nullable: false
  })
  async groupByCategoriaProduto(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByCategoriaProdutoArgs): Promise<CategoriaProdutoGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).categoriaProduto.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
