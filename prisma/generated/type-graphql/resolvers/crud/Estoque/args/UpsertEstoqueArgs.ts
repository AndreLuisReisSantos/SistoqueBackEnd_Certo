import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EstoqueCreateInput } from "../../../inputs/EstoqueCreateInput";
import { EstoqueUpdateInput } from "../../../inputs/EstoqueUpdateInput";
import { EstoqueWhereUniqueInput } from "../../../inputs/EstoqueWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertEstoqueArgs {
  @TypeGraphQL.Field(_type => EstoqueWhereUniqueInput, {
    nullable: false
  })
  where!: EstoqueWhereUniqueInput;

  @TypeGraphQL.Field(_type => EstoqueCreateInput, {
    nullable: false
  })
  create!: EstoqueCreateInput;

  @TypeGraphQL.Field(_type => EstoqueUpdateInput, {
    nullable: false
  })
  update!: EstoqueUpdateInput;
}
