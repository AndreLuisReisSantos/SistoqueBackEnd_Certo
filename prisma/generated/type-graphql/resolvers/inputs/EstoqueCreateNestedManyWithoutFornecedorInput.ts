import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EstoqueCreateManyFornecedorInputEnvelope } from "../inputs/EstoqueCreateManyFornecedorInputEnvelope";
import { EstoqueCreateOrConnectWithoutFornecedorInput } from "../inputs/EstoqueCreateOrConnectWithoutFornecedorInput";
import { EstoqueCreateWithoutFornecedorInput } from "../inputs/EstoqueCreateWithoutFornecedorInput";
import { EstoqueWhereUniqueInput } from "../inputs/EstoqueWhereUniqueInput";

@TypeGraphQL.InputType("EstoqueCreateNestedManyWithoutFornecedorInput", {
  isAbstract: true
})
export class EstoqueCreateNestedManyWithoutFornecedorInput {
  @TypeGraphQL.Field(_type => [EstoqueCreateWithoutFornecedorInput], {
    nullable: true
  })
  create?: EstoqueCreateWithoutFornecedorInput[] | undefined;

  @TypeGraphQL.Field(_type => [EstoqueCreateOrConnectWithoutFornecedorInput], {
    nullable: true
  })
  connectOrCreate?: EstoqueCreateOrConnectWithoutFornecedorInput[] | undefined;

  @TypeGraphQL.Field(_type => EstoqueCreateManyFornecedorInputEnvelope, {
    nullable: true
  })
  createMany?: EstoqueCreateManyFornecedorInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [EstoqueWhereUniqueInput], {
    nullable: true
  })
  connect?: EstoqueWhereUniqueInput[] | undefined;
}
