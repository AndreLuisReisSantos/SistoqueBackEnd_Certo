import * as TypeGraphQL from "type-graphql";
import { Fornecedor } from "../../../models/Fornecedor";
import { Representante } from "../../../models/Representante";
import { RepresentanteFornecedorArgs } from "./args/RepresentanteFornecedorArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Representante)
export class RepresentanteRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Fornecedor], {
    nullable: false
  })
  async Fornecedor(@TypeGraphQL.Root() representante: Representante, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: RepresentanteFornecedorArgs): Promise<Fornecedor[]> {
    return getPrismaFromContext(ctx).representante.findUnique({
      where: {
        id: representante.id,
      },
    }).Fornecedor(args);
  }
}
