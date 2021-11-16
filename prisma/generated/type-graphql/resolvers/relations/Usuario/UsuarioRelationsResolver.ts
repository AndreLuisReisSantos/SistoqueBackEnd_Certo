import * as TypeGraphQL from "type-graphql";
import { Pedido } from "../../../models/Pedido";
import { TipoUsuario } from "../../../models/TipoUsuario";
import { Usuario } from "../../../models/Usuario";
import { UsuarioPedidoArgs } from "./args/UsuarioPedidoArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Usuario)
export class UsuarioRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => TipoUsuario, {
    nullable: false
  })
  async tipoUsuario(@TypeGraphQL.Root() usuario: Usuario, @TypeGraphQL.Ctx() ctx: any): Promise<TipoUsuario> {
    return getPrismaFromContext(ctx).usuario.findUnique({
      where: {
        cpf: usuario.cpf,
      },
    }).tipoUsuario({});
  }

  @TypeGraphQL.FieldResolver(_type => [Pedido], {
    nullable: false
  })
  async Pedido(@TypeGraphQL.Root() usuario: Usuario, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UsuarioPedidoArgs): Promise<Pedido[]> {
    return getPrismaFromContext(ctx).usuario.findUnique({
      where: {
        cpf: usuario.cpf,
      },
    }).Pedido(args);
  }
}
