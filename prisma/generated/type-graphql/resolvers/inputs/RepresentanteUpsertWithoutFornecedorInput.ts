import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RepresentanteCreateWithoutFornecedorInput } from "../inputs/RepresentanteCreateWithoutFornecedorInput";
import { RepresentanteUpdateWithoutFornecedorInput } from "../inputs/RepresentanteUpdateWithoutFornecedorInput";

@TypeGraphQL.InputType("RepresentanteUpsertWithoutFornecedorInput", {
  isAbstract: true
})
export class RepresentanteUpsertWithoutFornecedorInput {
  @TypeGraphQL.Field(_type => RepresentanteUpdateWithoutFornecedorInput, {
    nullable: false
  })
  update!: RepresentanteUpdateWithoutFornecedorInput;

  @TypeGraphQL.Field(_type => RepresentanteCreateWithoutFornecedorInput, {
    nullable: false
  })
  create!: RepresentanteCreateWithoutFornecedorInput;
}
