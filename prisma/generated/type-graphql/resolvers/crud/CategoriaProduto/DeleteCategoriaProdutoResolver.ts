import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { DeleteCategoriaProdutoArgs } from "./args/DeleteCategoriaProdutoArgs";
import { CategoriaProduto } from "../../../models/CategoriaProduto";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CategoriaProduto)
export class DeleteCategoriaProdutoResolver {
  @TypeGraphQL.Mutation(_returns => CategoriaProduto, {
    nullable: true
  })
  async deleteCategoriaProduto(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteCategoriaProdutoArgs): Promise<CategoriaProduto | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).categoriaProduto.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
