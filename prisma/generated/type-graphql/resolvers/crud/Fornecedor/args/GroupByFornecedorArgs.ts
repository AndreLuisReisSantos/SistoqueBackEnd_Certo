import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FornecedorOrderByWithAggregationInput } from "../../../inputs/FornecedorOrderByWithAggregationInput";
import { FornecedorScalarWhereWithAggregatesInput } from "../../../inputs/FornecedorScalarWhereWithAggregatesInput";
import { FornecedorWhereInput } from "../../../inputs/FornecedorWhereInput";
import { FornecedorScalarFieldEnum } from "../../../../enums/FornecedorScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByFornecedorArgs {
  @TypeGraphQL.Field(_type => FornecedorWhereInput, {
    nullable: true
  })
  where?: FornecedorWhereInput | undefined;

  @TypeGraphQL.Field(_type => [FornecedorOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: FornecedorOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [FornecedorScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "razaoSocial" | "cnpj" | "email" | "telefone" | "nomeFantasia" | "site" | "celular" | "cep" | "logradouro" | "numero" | "complemento" | "bairro" | "cidade" | "estado" | "representanteId">;

  @TypeGraphQL.Field(_type => FornecedorScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: FornecedorScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
