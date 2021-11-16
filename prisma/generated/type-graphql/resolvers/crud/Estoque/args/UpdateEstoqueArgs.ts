import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EstoqueUpdateInput } from "../../../inputs/EstoqueUpdateInput";
import { EstoqueWhereUniqueInput } from "../../../inputs/EstoqueWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateEstoqueArgs {
  @TypeGraphQL.Field(_type => EstoqueUpdateInput, {
    nullable: false
  })
  data!: EstoqueUpdateInput;

  @TypeGraphQL.Field(_type => EstoqueWhereUniqueInput, {
    nullable: false
  })
  where!: EstoqueWhereUniqueInput;
}
