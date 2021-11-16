import * as TypeGraphQL from "type-graphql";
import { TipoUsuario } from "../../../models/TipoUsuario";
import { Usuario } from "../../../models/Usuario";
import { TipoUsuarioUsuarioArgs } from "./args/TipoUsuarioUsuarioArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TipoUsuario)
export class TipoUsuarioRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Usuario], {
    nullable: false
  })
  async Usuario(@TypeGraphQL.Root() tipoUsuario: TipoUsuario, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: TipoUsuarioUsuarioArgs): Promise<Usuario[]> {
    return getPrismaFromContext(ctx).tipoUsuario.findUnique({
      where: {
        id: tipoUsuario.id,
      },
    }).Usuario(args);
  }
}
