import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindUniqueCategoriaProdutoArgs } from "./args/FindUniqueCategoriaProdutoArgs";
import { CategoriaProduto } from "../../../models/CategoriaProduto";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CategoriaProduto)
export class FindUniqueCategoriaProdutoResolver {
  @TypeGraphQL.Query(_returns => CategoriaProduto, {
    nullable: true
  })
  async categoriaProduto(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueCategoriaProdutoArgs): Promise<CategoriaProduto | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).categoriaProduto.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
