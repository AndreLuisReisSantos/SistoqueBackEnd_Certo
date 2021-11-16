import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindFirstFornecedorArgs } from "./args/FindFirstFornecedorArgs";
import { Fornecedor } from "../../../models/Fornecedor";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Fornecedor)
export class FindFirstFornecedorResolver {
  @TypeGraphQL.Query(_returns => Fornecedor, {
    nullable: true
  })
  async findFirstFornecedor(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstFornecedorArgs): Promise<Fornecedor | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).fornecedor.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
