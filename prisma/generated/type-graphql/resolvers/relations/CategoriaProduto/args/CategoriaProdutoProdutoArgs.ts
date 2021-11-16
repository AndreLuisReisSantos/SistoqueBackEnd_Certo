import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProdutoOrderByWithRelationInput } from "../../../inputs/ProdutoOrderByWithRelationInput";
import { ProdutoWhereInput } from "../../../inputs/ProdutoWhereInput";
import { ProdutoWhereUniqueInput } from "../../../inputs/ProdutoWhereUniqueInput";
import { ProdutoScalarFieldEnum } from "../../../../enums/ProdutoScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class CategoriaProdutoProdutoArgs {
  @TypeGraphQL.Field(_type => ProdutoWhereInput, {
    nullable: true
  })
  where?: ProdutoWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ProdutoOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ProdutoOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ProdutoWhereUniqueInput, {
    nullable: true
  })
  cursor?: ProdutoWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ProdutoScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "nome" | "descricao" | "unidadeMedida" | "categoriaProdutoId" | "receitaId"> | undefined;
}
