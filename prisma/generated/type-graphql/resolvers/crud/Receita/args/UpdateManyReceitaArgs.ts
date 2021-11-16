import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReceitaUpdateManyMutationInput } from "../../../inputs/ReceitaUpdateManyMutationInput";
import { ReceitaWhereInput } from "../../../inputs/ReceitaWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyReceitaArgs {
  @TypeGraphQL.Field(_type => ReceitaUpdateManyMutationInput, {
    nullable: false
  })
  data!: ReceitaUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ReceitaWhereInput, {
    nullable: true
  })
  where?: ReceitaWhereInput | undefined;
}
