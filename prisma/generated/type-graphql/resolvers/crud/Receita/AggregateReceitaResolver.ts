import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateReceitaArgs } from "./args/AggregateReceitaArgs";
import { Receita } from "../../../models/Receita";
import { AggregateReceita } from "../../outputs/AggregateReceita";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Receita)
export class AggregateReceitaResolver {
  @TypeGraphQL.Query(_returns => AggregateReceita, {
    nullable: false
  })
  async aggregateReceita(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateReceitaArgs): Promise<AggregateReceita> {
    return getPrismaFromContext(ctx).receita.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
