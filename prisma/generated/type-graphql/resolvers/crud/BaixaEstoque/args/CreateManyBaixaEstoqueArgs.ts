import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BaixaEstoqueCreateManyInput } from "../../../inputs/BaixaEstoqueCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyBaixaEstoqueArgs {
  @TypeGraphQL.Field(_type => [BaixaEstoqueCreateManyInput], {
    nullable: false
  })
  data!: BaixaEstoqueCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
