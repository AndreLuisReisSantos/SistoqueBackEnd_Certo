import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByRepresentanteArgs } from "./args/GroupByRepresentanteArgs";
import { Representante } from "../../../models/Representante";
import { RepresentanteGroupBy } from "../../outputs/RepresentanteGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Representante)
export class GroupByRepresentanteResolver {
  @TypeGraphQL.Query(_returns => [RepresentanteGroupBy], {
    nullable: false
  })
  async groupByRepresentante(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByRepresentanteArgs): Promise<RepresentanteGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).representante.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
