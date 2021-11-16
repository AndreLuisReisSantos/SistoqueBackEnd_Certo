import * as TypeGraphQL from "type-graphql";
import { Produto } from "../../../models/Produto";
import { Receita } from "../../../models/Receita";
import { ReceitaProdutosArgs } from "./args/ReceitaProdutosArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Receita)
export class ReceitaRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Produto], {
    nullable: false
  })
  async produtos(@TypeGraphQL.Root() receita: Receita, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ReceitaProdutosArgs): Promise<Produto[]> {
    return getPrismaFromContext(ctx).receita.findUnique({
      where: {
        id: receita.id,
      },
    }).produtos(args);
  }
}
