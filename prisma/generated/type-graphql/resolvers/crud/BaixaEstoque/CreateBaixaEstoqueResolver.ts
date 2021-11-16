import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { CreateBaixaEstoqueArgs } from "./args/CreateBaixaEstoqueArgs";
import { BaixaEstoque } from "../../../models/BaixaEstoque";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => BaixaEstoque)
export class CreateBaixaEstoqueResolver {
  @TypeGraphQL.Mutation(_returns => BaixaEstoque, {
    nullable: false
  })
  async createBaixaEstoque(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateBaixaEstoqueArgs): Promise<BaixaEstoque> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).baixaEstoque.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
