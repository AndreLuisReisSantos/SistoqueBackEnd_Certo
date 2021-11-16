import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FornecedorCreateWithoutRepresentanteInput } from "../inputs/FornecedorCreateWithoutRepresentanteInput";
import { FornecedorWhereUniqueInput } from "../inputs/FornecedorWhereUniqueInput";

@TypeGraphQL.InputType("FornecedorCreateOrConnectWithoutRepresentanteInput", {
  isAbstract: true
})
export class FornecedorCreateOrConnectWithoutRepresentanteInput {
  @TypeGraphQL.Field(_type => FornecedorWhereUniqueInput, {
    nullable: false
  })
  where!: FornecedorWhereUniqueInput;

  @TypeGraphQL.Field(_type => FornecedorCreateWithoutRepresentanteInput, {
    nullable: false
  })
  create!: FornecedorCreateWithoutRepresentanteInput;
}
