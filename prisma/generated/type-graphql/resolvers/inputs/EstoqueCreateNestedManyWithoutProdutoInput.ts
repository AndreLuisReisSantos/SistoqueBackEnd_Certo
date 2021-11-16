import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EstoqueCreateManyProdutoInputEnvelope } from "../inputs/EstoqueCreateManyProdutoInputEnvelope";
import { EstoqueCreateOrConnectWithoutProdutoInput } from "../inputs/EstoqueCreateOrConnectWithoutProdutoInput";
import { EstoqueCreateWithoutProdutoInput } from "../inputs/EstoqueCreateWithoutProdutoInput";
import { EstoqueWhereUniqueInput } from "../inputs/EstoqueWhereUniqueInput";

@TypeGraphQL.InputType("EstoqueCreateNestedManyWithoutProdutoInput", {
  isAbstract: true
})
export class EstoqueCreateNestedManyWithoutProdutoInput {
  @TypeGraphQL.Field(_type => [EstoqueCreateWithoutProdutoInput], {
    nullable: true
  })
  create?: EstoqueCreateWithoutProdutoInput[] | undefined;

  @TypeGraphQL.Field(_type => [EstoqueCreateOrConnectWithoutProdutoInput], {
    nullable: true
  })
  connectOrCreate?: EstoqueCreateOrConnectWithoutProdutoInput[] | undefined;

  @TypeGraphQL.Field(_type => EstoqueCreateManyProdutoInputEnvelope, {
    nullable: true
  })
  createMany?: EstoqueCreateManyProdutoInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [EstoqueWhereUniqueInput], {
    nullable: true
  })
  connect?: EstoqueWhereUniqueInput[] | undefined;
}
