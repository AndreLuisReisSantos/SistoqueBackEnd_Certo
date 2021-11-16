import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RepresentanteCreateOrConnectWithoutFornecedorInput } from "../inputs/RepresentanteCreateOrConnectWithoutFornecedorInput";
import { RepresentanteCreateWithoutFornecedorInput } from "../inputs/RepresentanteCreateWithoutFornecedorInput";
import { RepresentanteUpdateWithoutFornecedorInput } from "../inputs/RepresentanteUpdateWithoutFornecedorInput";
import { RepresentanteUpsertWithoutFornecedorInput } from "../inputs/RepresentanteUpsertWithoutFornecedorInput";
import { RepresentanteWhereUniqueInput } from "../inputs/RepresentanteWhereUniqueInput";

@TypeGraphQL.InputType("RepresentanteUpdateOneWithoutFornecedorInput", {
  isAbstract: true
})
export class RepresentanteUpdateOneWithoutFornecedorInput {
  @TypeGraphQL.Field(_type => RepresentanteCreateWithoutFornecedorInput, {
    nullable: true
  })
  create?: RepresentanteCreateWithoutFornecedorInput | undefined;

  @TypeGraphQL.Field(_type => RepresentanteCreateOrConnectWithoutFornecedorInput, {
    nullable: true
  })
  connectOrCreate?: RepresentanteCreateOrConnectWithoutFornecedorInput | undefined;

  @TypeGraphQL.Field(_type => RepresentanteUpsertWithoutFornecedorInput, {
    nullable: true
  })
  upsert?: RepresentanteUpsertWithoutFornecedorInput | undefined;

  @TypeGraphQL.Field(_type => RepresentanteWhereUniqueInput, {
    nullable: true
  })
  connect?: RepresentanteWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => RepresentanteUpdateWithoutFornecedorInput, {
    nullable: true
  })
  update?: RepresentanteUpdateWithoutFornecedorInput | undefined;
}
