import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpsertBaixaEstoqueArgs } from "./args/UpsertBaixaEstoqueArgs";
import { BaixaEstoque } from "../../../models/BaixaEstoque";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => BaixaEstoque)
export class UpsertBaixaEstoqueResolver {
  @TypeGraphQL.Mutation(_returns => BaixaEstoque, {
    nullable: false
  })
  async upsertBaixaEstoque(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertBaixaEstoqueArgs): Promise<BaixaEstoque> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).baixaEstoque.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
