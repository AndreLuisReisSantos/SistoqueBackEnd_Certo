import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RepresentanteCreateWithoutFornecedorInput } from "../inputs/RepresentanteCreateWithoutFornecedorInput";
import { RepresentanteWhereUniqueInput } from "../inputs/RepresentanteWhereUniqueInput";

@TypeGraphQL.InputType("RepresentanteCreateOrConnectWithoutFornecedorInput", {
  isAbstract: true
})
export class RepresentanteCreateOrConnectWithoutFornecedorInput {
  @TypeGraphQL.Field(_type => RepresentanteWhereUniqueInput, {
    nullable: false
  })
  where!: RepresentanteWhereUniqueInput;

  @TypeGraphQL.Field(_type => RepresentanteCreateWithoutFornecedorInput, {
    nullable: false
  })
  create!: RepresentanteCreateWithoutFornecedorInput;
}
