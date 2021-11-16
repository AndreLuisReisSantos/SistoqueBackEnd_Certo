import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateFornecedorArgs } from "./args/AggregateFornecedorArgs";
import { Fornecedor } from "../../../models/Fornecedor";
import { AggregateFornecedor } from "../../outputs/AggregateFornecedor";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Fornecedor)
export class AggregateFornecedorResolver {
  @TypeGraphQL.Query(_returns => AggregateFornecedor, {
    nullable: false
  })
  async aggregateFornecedor(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateFornecedorArgs): Promise<AggregateFornecedor> {
    return getPrismaFromContext(ctx).fornecedor.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
