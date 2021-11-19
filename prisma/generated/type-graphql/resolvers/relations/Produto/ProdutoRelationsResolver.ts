import * as TypeGraphQL from "type-graphql";
import { CategoriaProduto } from "../../../models/CategoriaProduto";
import { Estoque } from "../../../models/Estoque";
import { Produto } from "../../../models/Produto";
import { Receita } from "../../../models/Receita";
import { ProdutoEstoqueArgs } from "./args/ProdutoEstoqueArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Produto)
export class ProdutoRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => CategoriaProduto, {
    nullable: true
  })
  async categoria(@TypeGraphQL.Root() produto: Produto, @TypeGraphQL.Ctx() ctx: any): Promise<CategoriaProduto | null> {
    return getPrismaFromContext(ctx).produto.findUnique({
      where: {
        id: produto.id,
      },
    }).categoria({});
  }

  @TypeGraphQL.FieldResolver(_type => [Estoque], {
    nullable: false
  })
  async Estoque(@TypeGraphQL.Root() produto: Produto, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ProdutoEstoqueArgs): Promise<Estoque[]> {
    return getPrismaFromContext(ctx).produto.findUnique({
      where: {
        id: produto.id,
      },
    }).Estoque(args);
  }

  @TypeGraphQL.FieldResolver(_type => Receita, {
    nullable: true
  })
  async Receita(@TypeGraphQL.Root() produto: Produto, @TypeGraphQL.Ctx() ctx: any): Promise<Receita | null> {
    return getPrismaFromContext(ctx).produto.findUnique({
      where: {
        id: produto.id,
      },
    }).Receita({});
  }
}
