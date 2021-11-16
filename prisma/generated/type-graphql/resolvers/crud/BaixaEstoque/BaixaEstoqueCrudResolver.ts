import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateBaixaEstoqueArgs } from "./args/AggregateBaixaEstoqueArgs";
import { CreateBaixaEstoqueArgs } from "./args/CreateBaixaEstoqueArgs";
import { CreateManyBaixaEstoqueArgs } from "./args/CreateManyBaixaEstoqueArgs";
import { DeleteBaixaEstoqueArgs } from "./args/DeleteBaixaEstoqueArgs";
import { DeleteManyBaixaEstoqueArgs } from "./args/DeleteManyBaixaEstoqueArgs";
import { FindFirstBaixaEstoqueArgs } from "./args/FindFirstBaixaEstoqueArgs";
import { FindManyBaixaEstoqueArgs } from "./args/FindManyBaixaEstoqueArgs";
import { FindUniqueBaixaEstoqueArgs } from "./args/FindUniqueBaixaEstoqueArgs";
import { GroupByBaixaEstoqueArgs } from "./args/GroupByBaixaEstoqueArgs";
import { UpdateBaixaEstoqueArgs } from "./args/UpdateBaixaEstoqueArgs";
import { UpdateManyBaixaEstoqueArgs } from "./args/UpdateManyBaixaEstoqueArgs";
import { UpsertBaixaEstoqueArgs } from "./args/UpsertBaixaEstoqueArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { BaixaEstoque } from "../../../models/BaixaEstoque";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateBaixaEstoque } from "../../outputs/AggregateBaixaEstoque";
import { BaixaEstoqueGroupBy } from "../../outputs/BaixaEstoqueGroupBy";

@TypeGraphQL.Resolver(_of => BaixaEstoque)
export class BaixaEstoqueCrudResolver {
  @TypeGraphQL.Query(_returns => BaixaEstoque, {
    nullable: true
  })
  async baixaEstoque(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueBaixaEstoqueArgs): Promise<BaixaEstoque | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).baixaEstoque.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => BaixaEstoque, {
    nullable: true
  })
  async findFirstBaixaEstoque(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstBaixaEstoqueArgs): Promise<BaixaEstoque | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).baixaEstoque.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [BaixaEstoque], {
    nullable: false
  })
  async baixaEstoques(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyBaixaEstoqueArgs): Promise<BaixaEstoque[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).baixaEstoque.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => BaixaEstoque, {
    nullable: false
  })
  async createBaixaEstoque(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateBaixaEstoqueArgs): Promise<BaixaEstoque> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).baixaEstoque.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyBaixaEstoque(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyBaixaEstoqueArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).baixaEstoque.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => BaixaEstoque, {
    nullable: true
  })
  async deleteBaixaEstoque(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteBaixaEstoqueArgs): Promise<BaixaEstoque | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).baixaEstoque.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => BaixaEstoque, {
    nullable: true
  })
  async updateBaixaEstoque(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateBaixaEstoqueArgs): Promise<BaixaEstoque | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).baixaEstoque.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyBaixaEstoque(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyBaixaEstoqueArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).baixaEstoque.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyBaixaEstoque(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyBaixaEstoqueArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).baixaEstoque.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => BaixaEstoque, {
    nullable: false
  })
  async upsertBaixaEstoque(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertBaixaEstoqueArgs): Promise<BaixaEstoque> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).baixaEstoque.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => AggregateBaixaEstoque, {
    nullable: false
  })
  async aggregateBaixaEstoque(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateBaixaEstoqueArgs): Promise<AggregateBaixaEstoque> {
    return getPrismaFromContext(ctx).baixaEstoque.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @TypeGraphQL.Query(_returns => [BaixaEstoqueGroupBy], {
    nullable: false
  })
  async groupByBaixaEstoque(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByBaixaEstoqueArgs): Promise<BaixaEstoqueGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).baixaEstoque.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
