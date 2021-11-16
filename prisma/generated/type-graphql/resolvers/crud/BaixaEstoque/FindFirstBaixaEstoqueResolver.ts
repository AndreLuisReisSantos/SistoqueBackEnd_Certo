import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindFirstBaixaEstoqueArgs } from "./args/FindFirstBaixaEstoqueArgs";
import { BaixaEstoque } from "../../../models/BaixaEstoque";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => BaixaEstoque)
export class FindFirstBaixaEstoqueResolver {
  @TypeGraphQL.Query(_returns => BaixaEstoque, {
    nullable: true
  })
  async findFirstBaixaEstoque(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstBaixaEstoqueArgs): Promise<BaixaEstoque | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).baixaEstoque.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
