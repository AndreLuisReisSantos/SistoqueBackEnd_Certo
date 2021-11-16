import * as TypeGraphQL from "type-graphql";
import { CategoriaProduto } from "../../../models/CategoriaProduto";
import { Produto } from "../../../models/Produto";
import { CategoriaProdutoProdutoArgs } from "./args/CategoriaProdutoProdutoArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CategoriaProduto)
export class CategoriaProdutoRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Produto], {
    nullable: false
  })
  async Produto(@TypeGraphQL.Root() categoriaProduto: CategoriaProduto, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CategoriaProdutoProdutoArgs): Promise<Produto[]> {
    return getPrismaFromContext(ctx).categoriaProduto.findUnique({
      where: {
        id: categoriaProduto.id,
      },
    }).Produto(args);
  }
}
