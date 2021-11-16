import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FornecedorOrderByWithRelationInput } from "../../../inputs/FornecedorOrderByWithRelationInput";
import { FornecedorWhereInput } from "../../../inputs/FornecedorWhereInput";
import { FornecedorWhereUniqueInput } from "../../../inputs/FornecedorWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateFornecedorArgs {
  @TypeGraphQL.Field(_type => FornecedorWhereInput, {
    nullable: true
  })
  where?: FornecedorWhereInput | undefined;

  @TypeGraphQL.Field(_type => [FornecedorOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: FornecedorOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => FornecedorWhereUniqueInput, {
    nullable: true
  })
  cursor?: FornecedorWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
