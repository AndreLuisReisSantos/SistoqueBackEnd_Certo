import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FornecedorScalarWhereInput } from "../inputs/FornecedorScalarWhereInput";
import { FornecedorUpdateManyMutationInput } from "../inputs/FornecedorUpdateManyMutationInput";

@TypeGraphQL.InputType("FornecedorUpdateManyWithWhereWithoutRepresentanteInput", {
  isAbstract: true
})
export class FornecedorUpdateManyWithWhereWithoutRepresentanteInput {
  @TypeGraphQL.Field(_type => FornecedorScalarWhereInput, {
    nullable: false
  })
  where!: FornecedorScalarWhereInput;

  @TypeGraphQL.Field(_type => FornecedorUpdateManyMutationInput, {
    nullable: false
  })
  data!: FornecedorUpdateManyMutationInput;
}
