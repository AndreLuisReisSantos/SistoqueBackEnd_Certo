import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProdutoCreateManyCategoriaInputEnvelope } from "../inputs/ProdutoCreateManyCategoriaInputEnvelope";
import { ProdutoCreateOrConnectWithoutCategoriaInput } from "../inputs/ProdutoCreateOrConnectWithoutCategoriaInput";
import { ProdutoCreateWithoutCategoriaInput } from "../inputs/ProdutoCreateWithoutCategoriaInput";
import { ProdutoWhereUniqueInput } from "../inputs/ProdutoWhereUniqueInput";

@TypeGraphQL.InputType("ProdutoCreateNestedManyWithoutCategoriaInput", {
  isAbstract: true
})
export class ProdutoCreateNestedManyWithoutCategoriaInput {
  @TypeGraphQL.Field(_type => [ProdutoCreateWithoutCategoriaInput], {
    nullable: true
  })
  create?: ProdutoCreateWithoutCategoriaInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProdutoCreateOrConnectWithoutCategoriaInput], {
    nullable: true
  })
  connectOrCreate?: ProdutoCreateOrConnectWithoutCategoriaInput[] | undefined;

  @TypeGraphQL.Field(_type => ProdutoCreateManyCategoriaInputEnvelope, {
    nullable: true
  })
  createMany?: ProdutoCreateManyCategoriaInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ProdutoWhereUniqueInput], {
    nullable: true
  })
  connect?: ProdutoWhereUniqueInput[] | undefined;
}
