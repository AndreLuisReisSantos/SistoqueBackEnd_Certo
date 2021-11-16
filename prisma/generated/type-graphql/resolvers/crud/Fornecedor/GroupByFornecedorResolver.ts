import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByFornecedorArgs } from "./args/GroupByFornecedorArgs";
import { Fornecedor } from "../../../models/Fornecedor";
import { FornecedorGroupBy } from "../../outputs/FornecedorGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Fornecedor)
export class GroupByFornecedorResolver {
  @TypeGraphQL.Query(_returns => [FornecedorGroupBy], {
    nullable: false
  })
  async groupByFornecedor(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByFornecedorArgs): Promise<FornecedorGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).fornecedor.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
