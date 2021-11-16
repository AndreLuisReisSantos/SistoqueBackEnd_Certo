import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindUniqueFornecedorArgs } from "./args/FindUniqueFornecedorArgs";
import { Fornecedor } from "../../../models/Fornecedor";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Fornecedor)
export class FindUniqueFornecedorResolver {
  @TypeGraphQL.Query(_returns => Fornecedor, {
    nullable: true
  })
  async fornecedor(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueFornecedorArgs): Promise<Fornecedor | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).fornecedor.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
