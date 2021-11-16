import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateRepresentanteArgs } from "./args/AggregateRepresentanteArgs";
import { Representante } from "../../../models/Representante";
import { AggregateRepresentante } from "../../outputs/AggregateRepresentante";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Representante)
export class AggregateRepresentanteResolver {
  @TypeGraphQL.Query(_returns => AggregateRepresentante, {
    nullable: false
  })
  async aggregateRepresentante(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateRepresentanteArgs): Promise<AggregateRepresentante> {
    return getPrismaFromContext(ctx).representante.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
