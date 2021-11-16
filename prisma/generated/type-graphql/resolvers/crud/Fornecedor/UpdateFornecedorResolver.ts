import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpdateFornecedorArgs } from "./args/UpdateFornecedorArgs";
import { Fornecedor } from "../../../models/Fornecedor";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Fornecedor)
export class UpdateFornecedorResolver {
  @TypeGraphQL.Mutation(_returns => Fornecedor, {
    nullable: true
  })
  async updateFornecedor(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateFornecedorArgs): Promise<Fornecedor | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).fornecedor.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
