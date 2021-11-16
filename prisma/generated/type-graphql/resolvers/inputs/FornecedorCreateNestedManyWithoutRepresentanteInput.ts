import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FornecedorCreateManyRepresentanteInputEnvelope } from "../inputs/FornecedorCreateManyRepresentanteInputEnvelope";
import { FornecedorCreateOrConnectWithoutRepresentanteInput } from "../inputs/FornecedorCreateOrConnectWithoutRepresentanteInput";
import { FornecedorCreateWithoutRepresentanteInput } from "../inputs/FornecedorCreateWithoutRepresentanteInput";
import { FornecedorWhereUniqueInput } from "../inputs/FornecedorWhereUniqueInput";

@TypeGraphQL.InputType("FornecedorCreateNestedManyWithoutRepresentanteInput", {
  isAbstract: true
})
export class FornecedorCreateNestedManyWithoutRepresentanteInput {
  @TypeGraphQL.Field(_type => [FornecedorCreateWithoutRepresentanteInput], {
    nullable: true
  })
  create?: FornecedorCreateWithoutRepresentanteInput[] | undefined;

  @TypeGraphQL.Field(_type => [FornecedorCreateOrConnectWithoutRepresentanteInput], {
    nullable: true
  })
  connectOrCreate?: FornecedorCreateOrConnectWithoutRepresentanteInput[] | undefined;

  @TypeGraphQL.Field(_type => FornecedorCreateManyRepresentanteInputEnvelope, {
    nullable: true
  })
  createMany?: FornecedorCreateManyRepresentanteInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [FornecedorWhereUniqueInput], {
    nullable: true
  })
  connect?: FornecedorWhereUniqueInput[] | undefined;
}
