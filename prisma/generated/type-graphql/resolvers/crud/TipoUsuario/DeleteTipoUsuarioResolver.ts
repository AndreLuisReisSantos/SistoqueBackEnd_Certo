import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { DeleteTipoUsuarioArgs } from "./args/DeleteTipoUsuarioArgs";
import { TipoUsuario } from "../../../models/TipoUsuario";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TipoUsuario)
export class DeleteTipoUsuarioResolver {
  @TypeGraphQL.Mutation(_returns => TipoUsuario, {
    nullable: true
  })
  async deleteTipoUsuario(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteTipoUsuarioArgs): Promise<TipoUsuario | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).tipoUsuario.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
