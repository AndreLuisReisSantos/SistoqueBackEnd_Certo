import * as TypeGraphQL from "type-graphql";
import { Estoque } from "../../../models/Estoque";
import { Fornecedor } from "../../../models/Fornecedor";
import { Representante } from "../../../models/Representante";
import { FornecedorEstoqueArgs } from "./args/FornecedorEstoqueArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Fornecedor)
export class FornecedorRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Estoque], {
    nullable: false
  })
  async Estoque(@TypeGraphQL.Root() fornecedor: Fornecedor, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FornecedorEstoqueArgs): Promise<Estoque[]> {
    return getPrismaFromContext(ctx).fornecedor.findUnique({
      where: {
        id: fornecedor.id,
      },
    }).Estoque(args);
  }

  @TypeGraphQL.FieldResolver(_type => Representante, {
    nullable: true
  })
  async Representante(@TypeGraphQL.Root() fornecedor: Fornecedor, @TypeGraphQL.Ctx() ctx: any): Promise<Representante | null> {
    return getPrismaFromContext(ctx).fornecedor.findUnique({
      where: {
        id: fornecedor.id,
      },
    }).Representante({});
  }
}
