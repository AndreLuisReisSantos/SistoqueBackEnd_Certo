import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProdutoCreateNestedManyWithoutReceitaInput } from "../inputs/ProdutoCreateNestedManyWithoutReceitaInput";

@TypeGraphQL.InputType("ReceitaCreateInput", {
  isAbstract: true
})
export class ReceitaCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  nome!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  tipo!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  descricao!: string;

  @TypeGraphQL.Field(_type => ProdutoCreateNestedManyWithoutReceitaInput, {
    nullable: true
  })
  produtos?: ProdutoCreateNestedManyWithoutReceitaInput | undefined;
}
