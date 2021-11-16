import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateUsuarioArgs } from "./args/AggregateUsuarioArgs";
import { Usuario } from "../../../models/Usuario";
import { AggregateUsuario } from "../../outputs/AggregateUsuario";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Usuario)
export class AggregateUsuarioResolver {
  @TypeGraphQL.Query(_returns => AggregateUsuario, {
    nullable: false
  })
  async aggregateUsuario(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateUsuarioArgs): Promise<AggregateUsuario> {
    return getPrismaFromContext(ctx).usuario.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
