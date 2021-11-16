import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProdutoCreateManyReceitaInputEnvelope } from "../inputs/ProdutoCreateManyReceitaInputEnvelope";
import { ProdutoCreateOrConnectWithoutReceitaInput } from "../inputs/ProdutoCreateOrConnectWithoutReceitaInput";
import { ProdutoCreateWithoutReceitaInput } from "../inputs/ProdutoCreateWithoutReceitaInput";
import { ProdutoWhereUniqueInput } from "../inputs/ProdutoWhereUniqueInput";

@TypeGraphQL.InputType("ProdutoCreateNestedManyWithoutReceitaInput", {
  isAbstract: true
})
export class ProdutoCreateNestedManyWithoutReceitaInput {
  @TypeGraphQL.Field(_type => [ProdutoCreateWithoutReceitaInput], {
    nullable: true
  })
  create?: ProdutoCreateWithoutReceitaInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProdutoCreateOrConnectWithoutReceitaInput], {
    nullable: true
  })
  connectOrCreate?: ProdutoCreateOrConnectWithoutReceitaInput[] | undefined;

  @TypeGraphQL.Field(_type => ProdutoCreateManyReceitaInputEnvelope, {
    nullable: true
  })
  createMany?: ProdutoCreateManyReceitaInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ProdutoWhereUniqueInput], {
    nullable: true
  })
  connect?: ProdutoWhereUniqueInput[] | undefined;
}
