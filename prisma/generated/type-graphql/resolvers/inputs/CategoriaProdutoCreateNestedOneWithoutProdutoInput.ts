import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoriaProdutoCreateOrConnectWithoutProdutoInput } from "../inputs/CategoriaProdutoCreateOrConnectWithoutProdutoInput";
import { CategoriaProdutoCreateWithoutProdutoInput } from "../inputs/CategoriaProdutoCreateWithoutProdutoInput";
import { CategoriaProdutoWhereUniqueInput } from "../inputs/CategoriaProdutoWhereUniqueInput";

@TypeGraphQL.InputType("CategoriaProdutoCreateNestedOneWithoutProdutoInput", {
  isAbstract: true
})
export class CategoriaProdutoCreateNestedOneWithoutProdutoInput {
  @TypeGraphQL.Field(_type => CategoriaProdutoCreateWithoutProdutoInput, {
    nullable: true
  })
  create?: CategoriaProdutoCreateWithoutProdutoInput | undefined;

  @TypeGraphQL.Field(_type => CategoriaProdutoCreateOrConnectWithoutProdutoInput, {
    nullable: true
  })
  connectOrCreate?: CategoriaProdutoCreateOrConnectWithoutProdutoInput | undefined;

  @TypeGraphQL.Field(_type => CategoriaProdutoWhereUniqueInput, {
    nullable: true
  })
  connect?: CategoriaProdutoWhereUniqueInput | undefined;
}
