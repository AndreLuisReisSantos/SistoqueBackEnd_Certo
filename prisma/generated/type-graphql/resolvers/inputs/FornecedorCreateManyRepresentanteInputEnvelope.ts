import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FornecedorCreateManyRepresentanteInput } from "../inputs/FornecedorCreateManyRepresentanteInput";

@TypeGraphQL.InputType("FornecedorCreateManyRepresentanteInputEnvelope", {
  isAbstract: true
})
export class FornecedorCreateManyRepresentanteInputEnvelope {
  @TypeGraphQL.Field(_type => [FornecedorCreateManyRepresentanteInput], {
    nullable: false
  })
  data!: FornecedorCreateManyRepresentanteInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
