import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByTipoUsuarioArgs } from "./args/GroupByTipoUsuarioArgs";
import { TipoUsuario } from "../../../models/TipoUsuario";
import { TipoUsuarioGroupBy } from "../../outputs/TipoUsuarioGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TipoUsuario)
export class GroupByTipoUsuarioResolver {
  @TypeGraphQL.Query(_returns => [TipoUsuarioGroupBy], {
    nullable: false
  })
  async groupByTipoUsuario(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByTipoUsuarioArgs): Promise<TipoUsuarioGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).tipoUsuario.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
