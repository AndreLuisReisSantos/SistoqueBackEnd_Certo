import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByBaixaEstoqueArgs } from "./args/GroupByBaixaEstoqueArgs";
import { BaixaEstoque } from "../../../models/BaixaEstoque";
import { BaixaEstoqueGroupBy } from "../../outputs/BaixaEstoqueGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => BaixaEstoque)
export class GroupByBaixaEstoqueResolver {
  @TypeGraphQL.Query(_returns => [BaixaEstoqueGroupBy], {
    nullable: false
  })
  async groupByBaixaEstoque(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByBaixaEstoqueArgs): Promise<BaixaEstoqueGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).baixaEstoque.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
