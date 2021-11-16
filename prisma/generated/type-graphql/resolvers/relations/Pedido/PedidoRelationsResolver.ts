import * as TypeGraphQL from "type-graphql";
import { BaixaEstoque } from "../../../models/BaixaEstoque";
import { Pedido } from "../../../models/Pedido";
import { Usuario } from "../../../models/Usuario";
import { PedidoBaixaEstoqueArgs } from "./args/PedidoBaixaEstoqueArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Pedido)
export class PedidoRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [BaixaEstoque], {
    nullable: false
  })
  async BaixaEstoque(@TypeGraphQL.Root() pedido: Pedido, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: PedidoBaixaEstoqueArgs): Promise<BaixaEstoque[]> {
    return getPrismaFromContext(ctx).pedido.findUnique({
      where: {
        id: pedido.id,
      },
    }).BaixaEstoque(args);
  }

  @TypeGraphQL.FieldResolver(_type => Usuario, {
    nullable: false
  })
  async Usuario(@TypeGraphQL.Root() pedido: Pedido, @TypeGraphQL.Ctx() ctx: any): Promise<Usuario> {
    return getPrismaFromContext(ctx).pedido.findUnique({
      where: {
        id: pedido.id,
      },
    }).Usuario({});
  }
}
