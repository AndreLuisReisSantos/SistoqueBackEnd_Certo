import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReceitaCreateOrConnectWithoutProdutosInput } from "../inputs/ReceitaCreateOrConnectWithoutProdutosInput";
import { ReceitaCreateWithoutProdutosInput } from "../inputs/ReceitaCreateWithoutProdutosInput";
import { ReceitaUpdateWithoutProdutosInput } from "../inputs/ReceitaUpdateWithoutProdutosInput";
import { ReceitaUpsertWithoutProdutosInput } from "../inputs/ReceitaUpsertWithoutProdutosInput";
import { ReceitaWhereUniqueInput } from "../inputs/ReceitaWhereUniqueInput";

@TypeGraphQL.InputType("ReceitaUpdateOneWithoutProdutosInput", {
  isAbstract: true
})
export class ReceitaUpdateOneWithoutProdutosInput {
  @TypeGraphQL.Field(_type => ReceitaCreateWithoutProdutosInput, {
    nullable: true
  })
  create?: ReceitaCreateWithoutProdutosInput | undefined;

  @TypeGraphQL.Field(_type => ReceitaCreateOrConnectWithoutProdutosInput, {
    nullable: true
  })
  connectOrCreate?: ReceitaCreateOrConnectWithoutProdutosInput | undefined;

  @TypeGraphQL.Field(_type => ReceitaUpsertWithoutProdutosInput, {
    nullable: true
  })
  upsert?: ReceitaUpsertWithoutProdutosInput | undefined;

  @TypeGraphQL.Field(_type => ReceitaWhereUniqueInput, {
    nullable: true
  })
  connect?: ReceitaWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => ReceitaUpdateWithoutProdutosInput, {
    nullable: true
  })
  update?: ReceitaUpdateWithoutProdutosInput | undefined;
}
