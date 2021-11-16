import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EstoqueWhereInput } from "../../../inputs/EstoqueWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyEstoqueArgs {
  @TypeGraphQL.Field(_type => EstoqueWhereInput, {
    nullable: true
  })
  where?: EstoqueWhereInput | undefined;
}
