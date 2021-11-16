import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReceitaCreateOrConnectWithoutProdutosInput } from "../inputs/ReceitaCreateOrConnectWithoutProdutosInput";
import { ReceitaCreateWithoutProdutosInput } from "../inputs/ReceitaCreateWithoutProdutosInput";
import { ReceitaWhereUniqueInput } from "../inputs/ReceitaWhereUniqueInput";

@TypeGraphQL.InputType("ReceitaCreateNestedOneWithoutProdutosInput", {
  isAbstract: true
})
export class ReceitaCreateNestedOneWithoutProdutosInput {
  @TypeGraphQL.Field(_type => ReceitaCreateWithoutProdutosInput, {
    nullable: true
  })
  create?: ReceitaCreateWithoutProdutosInput | undefined;

  @TypeGraphQL.Field(_type => ReceitaCreateOrConnectWithoutProdutosInput, {
    nullable: true
  })
  connectOrCreate?: ReceitaCreateOrConnectWithoutProdutosInput | undefined;

  @TypeGraphQL.Field(_type => ReceitaWhereUniqueInput, {
    nullable: true
  })
  connect?: ReceitaWhereUniqueInput | undefined;
}
