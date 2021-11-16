import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { BaixaEstoque } from "../models/BaixaEstoque";
import { Usuario } from "../models/Usuario";
import { PedidoCount } from "../resolvers/outputs/PedidoCount";

@TypeGraphQL.ObjectType("Pedido", {
  isAbstract: true
})
export class Pedido {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  dataPedido!: Date;

  BaixaEstoque?: BaixaEstoque[];

  Usuario?: Usuario;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  usuarioCpf!: string;

  @TypeGraphQL.Field(_type => PedidoCount, {
    nullable: true
  })
  _count?: PedidoCount | null;
}
