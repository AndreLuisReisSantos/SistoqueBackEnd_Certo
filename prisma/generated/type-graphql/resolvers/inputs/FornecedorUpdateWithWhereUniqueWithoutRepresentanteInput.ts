import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FornecedorUpdateWithoutRepresentanteInput } from "../inputs/FornecedorUpdateWithoutRepresentanteInput";
import { FornecedorWhereUniqueInput } from "../inputs/FornecedorWhereUniqueInput";

@TypeGraphQL.InputType("FornecedorUpdateWithWhereUniqueWithoutRepresentanteInput", {
  isAbstract: true
})
export class FornecedorUpdateWithWhereUniqueWithoutRepresentanteInput {
  @TypeGraphQL.Field(_type => FornecedorWhereUniqueInput, {
    nullable: false
  })
  where!: FornecedorWhereUniqueInput;

  @TypeGraphQL.Field(_type => FornecedorUpdateWithoutRepresentanteInput, {
    nullable: false
  })
  data!: FornecedorUpdateWithoutRepresentanteInput;
}
