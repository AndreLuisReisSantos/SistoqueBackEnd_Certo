import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
class TipoUsuario {
  @Field((_type) => ID)
  id: number

  @Field((_type) => String)
  nome: string
}

export default TipoUsuario;
