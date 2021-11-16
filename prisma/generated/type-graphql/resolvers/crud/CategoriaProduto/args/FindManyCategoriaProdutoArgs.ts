import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CategoriaProdutoOrderByWithRelationInput } from "../../../inputs/CategoriaProdutoOrderByWithRelationInput";
import { CategoriaProdutoWhereInput } from "../../../inputs/CategoriaProdutoWhereInput";
import { CategoriaProdutoWhereUniqueInput } from "../../../inputs/CategoriaProdutoWhereUniqueInput";
import { CategoriaProdutoScalarFieldEnum } from "../../../../enums/CategoriaProdutoScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyCategoriaProdutoArgs {
  @TypeGraphQL.Field(_type => CategoriaProdutoWhereInput, {
    nullable: true
  })
  where?: CategoriaProdutoWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CategoriaProdutoOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: CategoriaProdutoOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => CategoriaProdutoWhereUniqueInput, {
    nullable: true
  })
  cursor?: CategoriaProdutoWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [CategoriaProdutoScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "nome"> | undefined;
}
