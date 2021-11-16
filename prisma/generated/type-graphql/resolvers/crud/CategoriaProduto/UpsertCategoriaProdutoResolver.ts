import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpsertCategoriaProdutoArgs } from "./args/UpsertCategoriaProdutoArgs";
import { CategoriaProduto } from "../../../models/CategoriaProduto";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CategoriaProduto)
export class UpsertCategoriaProdutoResolver {
  @TypeGraphQL.Mutation(_returns => CategoriaProduto, {
    nullable: false
  })
  async upsertCategoriaProduto(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertCategoriaProdutoArgs): Promise<CategoriaProduto> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).categoriaProduto.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
