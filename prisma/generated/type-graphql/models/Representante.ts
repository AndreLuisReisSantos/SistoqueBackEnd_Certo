import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Fornecedor } from "../models/Fornecedor";
import { RepresentanteCount } from "../resolvers/outputs/RepresentanteCount";

@TypeGraphQL.ObjectType("Representante", {
  isAbstract: true
})
export class Representante {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  nome!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  celular!: string;

  Fornecedor?: Fornecedor[];

  @TypeGraphQL.Field(_type => RepresentanteCount, {
    nullable: true
  })
  _count?: RepresentanteCount | null;
}
