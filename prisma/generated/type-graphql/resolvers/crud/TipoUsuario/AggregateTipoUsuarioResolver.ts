import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateTipoUsuarioArgs } from "./args/AggregateTipoUsuarioArgs";
import { TipoUsuario } from "../../../models/TipoUsuario";
import { AggregateTipoUsuario } from "../../outputs/AggregateTipoUsuario";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TipoUsuario)
export class AggregateTipoUsuarioResolver {
  @TypeGraphQL.Query(_returns => AggregateTipoUsuario, {
    nullable: false
  })
  async aggregateTipoUsuario(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateTipoUsuarioArgs): Promise<AggregateTipoUsuario> {
    return getPrismaFromContext(ctx).tipoUsuario.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
