import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PedidoCreateOrConnectWithoutBaixaEstoqueInput } from "../inputs/PedidoCreateOrConnectWithoutBaixaEstoqueInput";
import { PedidoCreateWithoutBaixaEstoqueInput } from "../inputs/PedidoCreateWithoutBaixaEstoqueInput";
import { PedidoUpdateWithoutBaixaEstoqueInput } from "../inputs/PedidoUpdateWithoutBaixaEstoqueInput";
import { PedidoUpsertWithoutBaixaEstoqueInput } from "../inputs/PedidoUpsertWithoutBaixaEstoqueInput";
import { PedidoWhereUniqueInput } from "../inputs/PedidoWhereUniqueInput";

@TypeGraphQL.InputType("PedidoUpdateOneWithoutBaixaEstoqueInput", {
  isAbstract: true
})
export class PedidoUpdateOneWithoutBaixaEstoqueInput {
  @TypeGraphQL.Field(_type => PedidoCreateWithoutBaixaEstoqueInput, {
    nullable: true
  })
  create?: PedidoCreateWithoutBaixaEstoqueInput | undefined;

  @TypeGraphQL.Field(_type => PedidoCreateOrConnectWithoutBaixaEstoqueInput, {
    nullable: true
  })
  connectOrCreate?: PedidoCreateOrConnectWithoutBaixaEstoqueInput | undefined;

  @TypeGraphQL.Field(_type => PedidoUpsertWithoutBaixaEstoqueInput, {
    nullable: true
  })
  upsert?: PedidoUpsertWithoutBaixaEstoqueInput | undefined;

  @TypeGraphQL.Field(_type => PedidoWhereUniqueInput, {
    nullable: true
  })
  connect?: PedidoWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => PedidoUpdateWithoutBaixaEstoqueInput, {
    nullable: true
  })
  update?: PedidoUpdateWithoutBaixaEstoqueInput | undefined;
}
