import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpsertFornecedorArgs } from "./args/UpsertFornecedorArgs";
import { Fornecedor } from "../../../models/Fornecedor";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Fornecedor)
export class UpsertFornecedorResolver {
  @TypeGraphQL.Mutation(_returns => Fornecedor, {
    nullable: false
  })
  async upsertFornecedor(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertFornecedorArgs): Promise<Fornecedor> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).fornecedor.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
