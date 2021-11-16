import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UsuarioCreateManyInput } from "../../../inputs/UsuarioCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyUsuarioArgs {
  @TypeGraphQL.Field(_type => [UsuarioCreateManyInput], {
    nullable: false
  })
  data!: UsuarioCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
