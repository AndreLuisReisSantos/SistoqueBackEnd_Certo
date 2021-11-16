import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FornecedorCreateWithoutRepresentanteInput } from "../inputs/FornecedorCreateWithoutRepresentanteInput";
import { FornecedorUpdateWithoutRepresentanteInput } from "../inputs/FornecedorUpdateWithoutRepresentanteInput";
import { FornecedorWhereUniqueInput } from "../inputs/FornecedorWhereUniqueInput";

@TypeGraphQL.InputType("FornecedorUpsertWithWhereUniqueWithoutRepresentanteInput", {
  isAbstract: true
})
export class FornecedorUpsertWithWhereUniqueWithoutRepresentanteInput {
  @TypeGraphQL.Field(_type => FornecedorWhereUniqueInput, {
    nullable: false
  })
  where!: FornecedorWhereUniqueInput;

  @TypeGraphQL.Field(_type => FornecedorUpdateWithoutRepresentanteInput, {
    nullable: false
  })
  update!: FornecedorUpdateWithoutRepresentanteInput;

  @TypeGraphQL.Field(_type => FornecedorCreateWithoutRepresentanteInput, {
    nullable: false
  })
  create!: FornecedorCreateWithoutRepresentanteInput;
}
