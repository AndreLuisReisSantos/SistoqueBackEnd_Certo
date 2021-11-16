import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RepresentanteOrderByWithRelationInput } from "../../../inputs/RepresentanteOrderByWithRelationInput";
import { RepresentanteWhereInput } from "../../../inputs/RepresentanteWhereInput";
import { RepresentanteWhereUniqueInput } from "../../../inputs/RepresentanteWhereUniqueInput";
import { RepresentanteScalarFieldEnum } from "../../../../enums/RepresentanteScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyRepresentanteArgs {
  @TypeGraphQL.Field(_type => RepresentanteWhereInput, {
    nullable: true
  })
  where?: RepresentanteWhereInput | undefined;

  @TypeGraphQL.Field(_type => [RepresentanteOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: RepresentanteOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => RepresentanteWhereUniqueInput, {
    nullable: true
  })
  cursor?: RepresentanteWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [RepresentanteScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "nome" | "celular"> | undefined;
}
