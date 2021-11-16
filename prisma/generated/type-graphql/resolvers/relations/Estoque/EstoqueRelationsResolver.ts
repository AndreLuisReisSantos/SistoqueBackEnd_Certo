import * as TypeGraphQL from "type-graphql";
import { BaixaEstoque } from "../../../models/BaixaEstoque";
import { Estoque } from "../../../models/Estoque";
import { Fornecedor } from "../../../models/Fornecedor";
import { Produto } from "../../../models/Produto";
import { EstoqueBaixaEstoqueArgs } from "./args/EstoqueBaixaEstoqueArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Estoque)
export class EstoqueRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Produto, {
    nullable: false
  })
  async produto(@TypeGraphQL.Root() estoque: Estoque, @TypeGraphQL.Ctx() ctx: any): Promise<Produto> {
    return getPrismaFromContext(ctx).estoque.findUnique({
      where: {
        id: estoque.id,
      },
    }).produto({});
  }

  @TypeGraphQL.FieldResolver(_type => Fornecedor, {
    nullable: false
  })
  async fornecedor(@TypeGraphQL.Root() estoque: Estoque, @TypeGraphQL.Ctx() ctx: any): Promise<Fornecedor> {
    return getPrismaFromContext(ctx).estoque.findUnique({
      where: {
        id: estoque.id,
      },
    }).fornecedor({});
  }

  @TypeGraphQL.FieldResolver(_type => [BaixaEstoque], {
    nullable: false
  })
  async BaixaEstoque(@TypeGraphQL.Root() estoque: Estoque, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: EstoqueBaixaEstoqueArgs): Promise<BaixaEstoque[]> {
    return getPrismaFromContext(ctx).estoque.findUnique({
      where: {
        id: estoque.id,
      },
    }).BaixaEstoque(args);
  }
}
