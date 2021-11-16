import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FornecedorCreateManyInput } from "../../../inputs/FornecedorCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyFornecedorArgs {
  @TypeGraphQL.Field(_type => [FornecedorCreateManyInput], {
    nullable: false
  })
  data!: FornecedorCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
