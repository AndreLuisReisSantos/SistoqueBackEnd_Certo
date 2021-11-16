import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Pedido } from "../models/Pedido";
import { TipoUsuario } from "../models/TipoUsuario";
import { UsuarioCount } from "../resolvers/outputs/UsuarioCount";

@TypeGraphQL.ObjectType("Usuario", {
  isAbstract: true
})
export class Usuario {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  cpf!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  senha!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  nome!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  rg!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  celular!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  dataNascimento!: Date;

  tipoUsuario?: TipoUsuario;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  tipoUsuarioId!: number;

  Pedido?: Pedido[];

  @TypeGraphQL.Field(_type => UsuarioCount, {
    nullable: true
  })
  _count?: UsuarioCount | null;
}
