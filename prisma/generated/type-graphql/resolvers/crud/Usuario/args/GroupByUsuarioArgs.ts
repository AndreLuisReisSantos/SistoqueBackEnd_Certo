import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UsuarioOrderByWithAggregationInput } from "../../../inputs/UsuarioOrderByWithAggregationInput";
import { UsuarioScalarWhereWithAggregatesInput } from "../../../inputs/UsuarioScalarWhereWithAggregatesInput";
import { UsuarioWhereInput } from "../../../inputs/UsuarioWhereInput";
import { UsuarioScalarFieldEnum } from "../../../../enums/UsuarioScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByUsuarioArgs {
  @TypeGraphQL.Field(_type => UsuarioWhereInput, {
    nullable: true
  })
  where?: UsuarioWhereInput | undefined;

  @TypeGraphQL.Field(_type => [UsuarioOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: UsuarioOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [UsuarioScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"cpf" | "senha" | "nome" | "rg" | "celular" | "dataNascimento" | "tipoUsuarioId">;

  @TypeGraphQL.Field(_type => UsuarioScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: UsuarioScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
