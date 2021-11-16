import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EstoqueUpdateManyMutationInput } from "../../../inputs/EstoqueUpdateManyMutationInput";
import { EstoqueWhereInput } from "../../../inputs/EstoqueWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyEstoqueArgs {
  @TypeGraphQL.Field(_type => EstoqueUpdateManyMutationInput, {
    nullable: false
  })
  data!: EstoqueUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => EstoqueWhereInput, {
    nullable: true
  })
  where?: EstoqueWhereInput | undefined;
}
