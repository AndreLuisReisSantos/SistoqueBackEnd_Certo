import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { DeleteBaixaEstoqueArgs } from "./args/DeleteBaixaEstoqueArgs";
import { BaixaEstoque } from "../../../models/BaixaEstoque";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => BaixaEstoque)
export class DeleteBaixaEstoqueResolver {
  @TypeGraphQL.Mutation(_returns => BaixaEstoque, {
    nullable: true
  })
  async deleteBaixaEstoque(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteBaixaEstoqueArgs): Promise<BaixaEstoque | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).baixaEstoque.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
