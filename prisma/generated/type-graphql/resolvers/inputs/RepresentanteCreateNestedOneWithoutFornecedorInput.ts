import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RepresentanteCreateOrConnectWithoutFornecedorInput } from "../inputs/RepresentanteCreateOrConnectWithoutFornecedorInput";
import { RepresentanteCreateWithoutFornecedorInput } from "../inputs/RepresentanteCreateWithoutFornecedorInput";
import { RepresentanteWhereUniqueInput } from "../inputs/RepresentanteWhereUniqueInput";

@TypeGraphQL.InputType("RepresentanteCreateNestedOneWithoutFornecedorInput", {
  isAbstract: true
})
export class RepresentanteCreateNestedOneWithoutFornecedorInput {
  @TypeGraphQL.Field(_type => RepresentanteCreateWithoutFornecedorInput, {
    nullable: true
  })
  create?: RepresentanteCreateWithoutFornecedorInput | undefined;

  @TypeGraphQL.Field(_type => RepresentanteCreateOrConnectWithoutFornecedorInput, {
    nullable: true
  })
  connectOrCreate?: RepresentanteCreateOrConnectWithoutFornecedorInput | undefined;

  @TypeGraphQL.Field(_type => RepresentanteWhereUniqueInput, {
    nullable: true
  })
  connect?: RepresentanteWhereUniqueInput | undefined;
}
