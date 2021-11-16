import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindManyTipoUsuarioArgs } from "./args/FindManyTipoUsuarioArgs";
import { TipoUsuario } from "../../../models/TipoUsuario";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TipoUsuario)
export class FindManyTipoUsuarioResolver {
  @TypeGraphQL.Query(_returns => [TipoUsuario], {
    nullable: false
  })
  async tipoUsuarios(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyTipoUsuarioArgs): Promise<TipoUsuario[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).tipoUsuario.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
