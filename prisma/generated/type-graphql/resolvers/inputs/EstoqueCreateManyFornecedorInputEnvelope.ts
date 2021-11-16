import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EstoqueCreateManyFornecedorInput } from "../inputs/EstoqueCreateManyFornecedorInput";

@TypeGraphQL.InputType("EstoqueCreateManyFornecedorInputEnvelope", {
  isAbstract: true
})
export class EstoqueCreateManyFornecedorInputEnvelope {
  @TypeGraphQL.Field(_type => [EstoqueCreateManyFornecedorInput], {
    nullable: false
  })
  data!: EstoqueCreateManyFornecedorInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
