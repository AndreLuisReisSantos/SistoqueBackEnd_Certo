import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindUniqueTipoUsuarioArgs } from "./args/FindUniqueTipoUsuarioArgs";
import { TipoUsuario } from "../../../models/TipoUsuario";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TipoUsuario)
export class FindUniqueTipoUsuarioResolver {
  @TypeGraphQL.Query(_returns => TipoUsuario, {
    nullable: true
  })
  async tipoUsuario(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueTipoUsuarioArgs): Promise<TipoUsuario | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).tipoUsuario.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
