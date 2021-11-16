import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TipoUsuarioCreateManyInput } from "../../../inputs/TipoUsuarioCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyTipoUsuarioArgs {
  @TypeGraphQL.Field(_type => [TipoUsuarioCreateManyInput], {
    nullable: false
  })
  data!: TipoUsuarioCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
