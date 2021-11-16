import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProdutoCreateOrConnectWithoutEstoqueInput } from "../inputs/ProdutoCreateOrConnectWithoutEstoqueInput";
import { ProdutoCreateWithoutEstoqueInput } from "../inputs/ProdutoCreateWithoutEstoqueInput";
import { ProdutoUpdateWithoutEstoqueInput } from "../inputs/ProdutoUpdateWithoutEstoqueInput";
import { ProdutoUpsertWithoutEstoqueInput } from "../inputs/ProdutoUpsertWithoutEstoqueInput";
import { ProdutoWhereUniqueInput } from "../inputs/ProdutoWhereUniqueInput";

@TypeGraphQL.InputType("ProdutoUpdateOneRequiredWithoutEstoqueInput", {
  isAbstract: true
})
export class ProdutoUpdateOneRequiredWithoutEstoqueInput {
  @TypeGraphQL.Field(_type => ProdutoCreateWithoutEstoqueInput, {
    nullable: true
  })
  create?: ProdutoCreateWithoutEstoqueInput | undefined;

  @TypeGraphQL.Field(_type => ProdutoCreateOrConnectWithoutEstoqueInput, {
    nullable: true
  })
  connectOrCreate?: ProdutoCreateOrConnectWithoutEstoqueInput | undefined;

  @TypeGraphQL.Field(_type => ProdutoUpsertWithoutEstoqueInput, {
    nullable: true
  })
  upsert?: ProdutoUpsertWithoutEstoqueInput | undefined;

  @TypeGraphQL.Field(_type => ProdutoWhereUniqueInput, {
    nullable: true
  })
  connect?: ProdutoWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ProdutoUpdateWithoutEstoqueInput, {
    nullable: true
  })
  update?: ProdutoUpdateWithoutEstoqueInput | undefined;
}
