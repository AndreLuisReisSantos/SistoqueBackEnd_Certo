import * as TypeGraphQL from "type-graphql";
import { BaixaEstoque } from "../../../models/BaixaEstoque";
import { Estoque } from "../../../models/Estoque";
import { Pedido } from "../../../models/Pedido";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => BaixaEstoque)
export class BaixaEstoqueRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Estoque, {
    nullable: false
  })
  async Estoque(@TypeGraphQL.Root() baixaEstoque: BaixaEstoque, @TypeGraphQL.Ctx() ctx: any): Promise<Estoque> {
    return getPrismaFromContext(ctx).baixaEstoque.findUnique({
      where: {
        id: baixaEstoque.id,
      },
    }).Estoque({});
  }

  @TypeGraphQL.FieldResolver(_type => Pedido, {
    nullable: true
  })
  async Pedido(@TypeGraphQL.Root() baixaEstoque: BaixaEstoque, @TypeGraphQL.Ctx() ctx: any): Promise<Pedido | null> {
    return getPrismaFromContext(ctx).baixaEstoque.findUnique({
      where: {
        id: baixaEstoque.id,
      },
    }).Pedido({});
  }
}
