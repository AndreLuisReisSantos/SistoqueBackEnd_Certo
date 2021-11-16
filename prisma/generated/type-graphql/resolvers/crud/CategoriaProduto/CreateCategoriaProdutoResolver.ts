import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { CreateCategoriaProdutoArgs } from "./args/CreateCategoriaProdutoArgs";
import { CategoriaProduto } from "../../../models/CategoriaProduto";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CategoriaProduto)
export class CreateCategoriaProdutoResolver {
  @TypeGraphQL.Mutation(_returns => CategoriaProduto, {
    nullable: false
  })
  async createCategoriaProduto(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateCategoriaProdutoArgs): Promise<CategoriaProduto> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).categoriaProduto.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
