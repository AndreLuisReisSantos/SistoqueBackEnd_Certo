import { ClassType } from "type-graphql";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as argsTypes from "./resolvers/crud/args.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";

const crudResolversMap = {
  Fornecedor: crudResolvers.FornecedorCrudResolver,
  Representante: crudResolvers.RepresentanteCrudResolver,
  CategoriaProduto: crudResolvers.CategoriaProdutoCrudResolver,
  Produto: crudResolvers.ProdutoCrudResolver,
  Estoque: crudResolvers.EstoqueCrudResolver,
  BaixaEstoque: crudResolvers.BaixaEstoqueCrudResolver,
  Pedido: crudResolvers.PedidoCrudResolver,
  Usuario: crudResolvers.UsuarioCrudResolver,
  TipoUsuario: crudResolvers.TipoUsuarioCrudResolver,
  Receita: crudResolvers.ReceitaCrudResolver
};
const actionResolversMap = {
  Fornecedor: {
    fornecedor: actionResolvers.FindUniqueFornecedorResolver,
    findFirstFornecedor: actionResolvers.FindFirstFornecedorResolver,
    fornecedors: actionResolvers.FindManyFornecedorResolver,
    createFornecedor: actionResolvers.CreateFornecedorResolver,
    createManyFornecedor: actionResolvers.CreateManyFornecedorResolver,
    deleteFornecedor: actionResolvers.DeleteFornecedorResolver,
    updateFornecedor: actionResolvers.UpdateFornecedorResolver,
    deleteManyFornecedor: actionResolvers.DeleteManyFornecedorResolver,
    updateManyFornecedor: actionResolvers.UpdateManyFornecedorResolver,
    upsertFornecedor: actionResolvers.UpsertFornecedorResolver,
    aggregateFornecedor: actionResolvers.AggregateFornecedorResolver,
    groupByFornecedor: actionResolvers.GroupByFornecedorResolver
  },
  Representante: {
    representante: actionResolvers.FindUniqueRepresentanteResolver,
    findFirstRepresentante: actionResolvers.FindFirstRepresentanteResolver,
    representantes: actionResolvers.FindManyRepresentanteResolver,
    createRepresentante: actionResolvers.CreateRepresentanteResolver,
    createManyRepresentante: actionResolvers.CreateManyRepresentanteResolver,
    deleteRepresentante: actionResolvers.DeleteRepresentanteResolver,
    updateRepresentante: actionResolvers.UpdateRepresentanteResolver,
    deleteManyRepresentante: actionResolvers.DeleteManyRepresentanteResolver,
    updateManyRepresentante: actionResolvers.UpdateManyRepresentanteResolver,
    upsertRepresentante: actionResolvers.UpsertRepresentanteResolver,
    aggregateRepresentante: actionResolvers.AggregateRepresentanteResolver,
    groupByRepresentante: actionResolvers.GroupByRepresentanteResolver
  },
  CategoriaProduto: {
    categoriaProduto: actionResolvers.FindUniqueCategoriaProdutoResolver,
    findFirstCategoriaProduto: actionResolvers.FindFirstCategoriaProdutoResolver,
    categoriaProdutos: actionResolvers.FindManyCategoriaProdutoResolver,
    createCategoriaProduto: actionResolvers.CreateCategoriaProdutoResolver,
    createManyCategoriaProduto: actionResolvers.CreateManyCategoriaProdutoResolver,
    deleteCategoriaProduto: actionResolvers.DeleteCategoriaProdutoResolver,
    updateCategoriaProduto: actionResolvers.UpdateCategoriaProdutoResolver,
    deleteManyCategoriaProduto: actionResolvers.DeleteManyCategoriaProdutoResolver,
    updateManyCategoriaProduto: actionResolvers.UpdateManyCategoriaProdutoResolver,
    upsertCategoriaProduto: actionResolvers.UpsertCategoriaProdutoResolver,
    aggregateCategoriaProduto: actionResolvers.AggregateCategoriaProdutoResolver,
    groupByCategoriaProduto: actionResolvers.GroupByCategoriaProdutoResolver
  },
  Produto: {
    produto: actionResolvers.FindUniqueProdutoResolver,
    findFirstProduto: actionResolvers.FindFirstProdutoResolver,
    produtos: actionResolvers.FindManyProdutoResolver,
    createProduto: actionResolvers.CreateProdutoResolver,
    createManyProduto: actionResolvers.CreateManyProdutoResolver,
    deleteProduto: actionResolvers.DeleteProdutoResolver,
    updateProduto: actionResolvers.UpdateProdutoResolver,
    deleteManyProduto: actionResolvers.DeleteManyProdutoResolver,
    updateManyProduto: actionResolvers.UpdateManyProdutoResolver,
    upsertProduto: actionResolvers.UpsertProdutoResolver,
    aggregateProduto: actionResolvers.AggregateProdutoResolver,
    groupByProduto: actionResolvers.GroupByProdutoResolver
  },
  Estoque: {
    estoque: actionResolvers.FindUniqueEstoqueResolver,
    findFirstEstoque: actionResolvers.FindFirstEstoqueResolver,
    estoques: actionResolvers.FindManyEstoqueResolver,
    createEstoque: actionResolvers.CreateEstoqueResolver,
    createManyEstoque: actionResolvers.CreateManyEstoqueResolver,
    deleteEstoque: actionResolvers.DeleteEstoqueResolver,
    updateEstoque: actionResolvers.UpdateEstoqueResolver,
    deleteManyEstoque: actionResolvers.DeleteManyEstoqueResolver,
    updateManyEstoque: actionResolvers.UpdateManyEstoqueResolver,
    upsertEstoque: actionResolvers.UpsertEstoqueResolver,
    aggregateEstoque: actionResolvers.AggregateEstoqueResolver,
    groupByEstoque: actionResolvers.GroupByEstoqueResolver
  },
  BaixaEstoque: {
    baixaEstoque: actionResolvers.FindUniqueBaixaEstoqueResolver,
    findFirstBaixaEstoque: actionResolvers.FindFirstBaixaEstoqueResolver,
    baixaEstoques: actionResolvers.FindManyBaixaEstoqueResolver,
    createBaixaEstoque: actionResolvers.CreateBaixaEstoqueResolver,
    createManyBaixaEstoque: actionResolvers.CreateManyBaixaEstoqueResolver,
    deleteBaixaEstoque: actionResolvers.DeleteBaixaEstoqueResolver,
    updateBaixaEstoque: actionResolvers.UpdateBaixaEstoqueResolver,
    deleteManyBaixaEstoque: actionResolvers.DeleteManyBaixaEstoqueResolver,
    updateManyBaixaEstoque: actionResolvers.UpdateManyBaixaEstoqueResolver,
    upsertBaixaEstoque: actionResolvers.UpsertBaixaEstoqueResolver,
    aggregateBaixaEstoque: actionResolvers.AggregateBaixaEstoqueResolver,
    groupByBaixaEstoque: actionResolvers.GroupByBaixaEstoqueResolver
  },
  Pedido: {
    pedido: actionResolvers.FindUniquePedidoResolver,
    findFirstPedido: actionResolvers.FindFirstPedidoResolver,
    pedidos: actionResolvers.FindManyPedidoResolver,
    createPedido: actionResolvers.CreatePedidoResolver,
    createManyPedido: actionResolvers.CreateManyPedidoResolver,
    deletePedido: actionResolvers.DeletePedidoResolver,
    updatePedido: actionResolvers.UpdatePedidoResolver,
    deleteManyPedido: actionResolvers.DeleteManyPedidoResolver,
    updateManyPedido: actionResolvers.UpdateManyPedidoResolver,
    upsertPedido: actionResolvers.UpsertPedidoResolver,
    aggregatePedido: actionResolvers.AggregatePedidoResolver,
    groupByPedido: actionResolvers.GroupByPedidoResolver
  },
  Usuario: {
    usuario: actionResolvers.FindUniqueUsuarioResolver,
    findFirstUsuario: actionResolvers.FindFirstUsuarioResolver,
    usuarios: actionResolvers.FindManyUsuarioResolver,
    createUsuario: actionResolvers.CreateUsuarioResolver,
    createManyUsuario: actionResolvers.CreateManyUsuarioResolver,
    deleteUsuario: actionResolvers.DeleteUsuarioResolver,
    updateUsuario: actionResolvers.UpdateUsuarioResolver,
    deleteManyUsuario: actionResolvers.DeleteManyUsuarioResolver,
    updateManyUsuario: actionResolvers.UpdateManyUsuarioResolver,
    upsertUsuario: actionResolvers.UpsertUsuarioResolver,
    aggregateUsuario: actionResolvers.AggregateUsuarioResolver,
    groupByUsuario: actionResolvers.GroupByUsuarioResolver
  },
  TipoUsuario: {
    tipoUsuario: actionResolvers.FindUniqueTipoUsuarioResolver,
    findFirstTipoUsuario: actionResolvers.FindFirstTipoUsuarioResolver,
    tipoUsuarios: actionResolvers.FindManyTipoUsuarioResolver,
    createTipoUsuario: actionResolvers.CreateTipoUsuarioResolver,
    createManyTipoUsuario: actionResolvers.CreateManyTipoUsuarioResolver,
    deleteTipoUsuario: actionResolvers.DeleteTipoUsuarioResolver,
    updateTipoUsuario: actionResolvers.UpdateTipoUsuarioResolver,
    deleteManyTipoUsuario: actionResolvers.DeleteManyTipoUsuarioResolver,
    updateManyTipoUsuario: actionResolvers.UpdateManyTipoUsuarioResolver,
    upsertTipoUsuario: actionResolvers.UpsertTipoUsuarioResolver,
    aggregateTipoUsuario: actionResolvers.AggregateTipoUsuarioResolver,
    groupByTipoUsuario: actionResolvers.GroupByTipoUsuarioResolver
  },
  Receita: {
    receita: actionResolvers.FindUniqueReceitaResolver,
    findFirstReceita: actionResolvers.FindFirstReceitaResolver,
    receitas: actionResolvers.FindManyReceitaResolver,
    createReceita: actionResolvers.CreateReceitaResolver,
    createManyReceita: actionResolvers.CreateManyReceitaResolver,
    deleteReceita: actionResolvers.DeleteReceitaResolver,
    updateReceita: actionResolvers.UpdateReceitaResolver,
    deleteManyReceita: actionResolvers.DeleteManyReceitaResolver,
    updateManyReceita: actionResolvers.UpdateManyReceitaResolver,
    upsertReceita: actionResolvers.UpsertReceitaResolver,
    aggregateReceita: actionResolvers.AggregateReceitaResolver,
    groupByReceita: actionResolvers.GroupByReceitaResolver
  }
};
const crudResolversInfo = {
  Fornecedor: ["fornecedor", "findFirstFornecedor", "fornecedors", "createFornecedor", "createManyFornecedor", "deleteFornecedor", "updateFornecedor", "deleteManyFornecedor", "updateManyFornecedor", "upsertFornecedor", "aggregateFornecedor", "groupByFornecedor"],
  Representante: ["representante", "findFirstRepresentante", "representantes", "createRepresentante", "createManyRepresentante", "deleteRepresentante", "updateRepresentante", "deleteManyRepresentante", "updateManyRepresentante", "upsertRepresentante", "aggregateRepresentante", "groupByRepresentante"],
  CategoriaProduto: ["categoriaProduto", "findFirstCategoriaProduto", "categoriaProdutos", "createCategoriaProduto", "createManyCategoriaProduto", "deleteCategoriaProduto", "updateCategoriaProduto", "deleteManyCategoriaProduto", "updateManyCategoriaProduto", "upsertCategoriaProduto", "aggregateCategoriaProduto", "groupByCategoriaProduto"],
  Produto: ["produto", "findFirstProduto", "produtos", "createProduto", "createManyProduto", "deleteProduto", "updateProduto", "deleteManyProduto", "updateManyProduto", "upsertProduto", "aggregateProduto", "groupByProduto"],
  Estoque: ["estoque", "findFirstEstoque", "estoques", "createEstoque", "createManyEstoque", "deleteEstoque", "updateEstoque", "deleteManyEstoque", "updateManyEstoque", "upsertEstoque", "aggregateEstoque", "groupByEstoque"],
  BaixaEstoque: ["baixaEstoque", "findFirstBaixaEstoque", "baixaEstoques", "createBaixaEstoque", "createManyBaixaEstoque", "deleteBaixaEstoque", "updateBaixaEstoque", "deleteManyBaixaEstoque", "updateManyBaixaEstoque", "upsertBaixaEstoque", "aggregateBaixaEstoque", "groupByBaixaEstoque"],
  Pedido: ["pedido", "findFirstPedido", "pedidos", "createPedido", "createManyPedido", "deletePedido", "updatePedido", "deleteManyPedido", "updateManyPedido", "upsertPedido", "aggregatePedido", "groupByPedido"],
  Usuario: ["usuario", "findFirstUsuario", "usuarios", "createUsuario", "createManyUsuario", "deleteUsuario", "updateUsuario", "deleteManyUsuario", "updateManyUsuario", "upsertUsuario", "aggregateUsuario", "groupByUsuario"],
  TipoUsuario: ["tipoUsuario", "findFirstTipoUsuario", "tipoUsuarios", "createTipoUsuario", "createManyTipoUsuario", "deleteTipoUsuario", "updateTipoUsuario", "deleteManyTipoUsuario", "updateManyTipoUsuario", "upsertTipoUsuario", "aggregateTipoUsuario", "groupByTipoUsuario"],
  Receita: ["receita", "findFirstReceita", "receitas", "createReceita", "createManyReceita", "deleteReceita", "updateReceita", "deleteManyReceita", "updateManyReceita", "upsertReceita", "aggregateReceita", "groupByReceita"]
};
const argsInfo = {
  FindUniqueFornecedorArgs: ["where"],
  FindFirstFornecedorArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyFornecedorArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateFornecedorArgs: ["data"],
  CreateManyFornecedorArgs: ["data", "skipDuplicates"],
  DeleteFornecedorArgs: ["where"],
  UpdateFornecedorArgs: ["data", "where"],
  DeleteManyFornecedorArgs: ["where"],
  UpdateManyFornecedorArgs: ["data", "where"],
  UpsertFornecedorArgs: ["where", "create", "update"],
  AggregateFornecedorArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByFornecedorArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueRepresentanteArgs: ["where"],
  FindFirstRepresentanteArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyRepresentanteArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateRepresentanteArgs: ["data"],
  CreateManyRepresentanteArgs: ["data", "skipDuplicates"],
  DeleteRepresentanteArgs: ["where"],
  UpdateRepresentanteArgs: ["data", "where"],
  DeleteManyRepresentanteArgs: ["where"],
  UpdateManyRepresentanteArgs: ["data", "where"],
  UpsertRepresentanteArgs: ["where", "create", "update"],
  AggregateRepresentanteArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByRepresentanteArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueCategoriaProdutoArgs: ["where"],
  FindFirstCategoriaProdutoArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyCategoriaProdutoArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateCategoriaProdutoArgs: ["data"],
  CreateManyCategoriaProdutoArgs: ["data", "skipDuplicates"],
  DeleteCategoriaProdutoArgs: ["where"],
  UpdateCategoriaProdutoArgs: ["data", "where"],
  DeleteManyCategoriaProdutoArgs: ["where"],
  UpdateManyCategoriaProdutoArgs: ["data", "where"],
  UpsertCategoriaProdutoArgs: ["where", "create", "update"],
  AggregateCategoriaProdutoArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByCategoriaProdutoArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueProdutoArgs: ["where"],
  FindFirstProdutoArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyProdutoArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateProdutoArgs: ["data"],
  CreateManyProdutoArgs: ["data", "skipDuplicates"],
  DeleteProdutoArgs: ["where"],
  UpdateProdutoArgs: ["data", "where"],
  DeleteManyProdutoArgs: ["where"],
  UpdateManyProdutoArgs: ["data", "where"],
  UpsertProdutoArgs: ["where", "create", "update"],
  AggregateProdutoArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByProdutoArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueEstoqueArgs: ["where"],
  FindFirstEstoqueArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyEstoqueArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateEstoqueArgs: ["data"],
  CreateManyEstoqueArgs: ["data", "skipDuplicates"],
  DeleteEstoqueArgs: ["where"],
  UpdateEstoqueArgs: ["data", "where"],
  DeleteManyEstoqueArgs: ["where"],
  UpdateManyEstoqueArgs: ["data", "where"],
  UpsertEstoqueArgs: ["where", "create", "update"],
  AggregateEstoqueArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByEstoqueArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueBaixaEstoqueArgs: ["where"],
  FindFirstBaixaEstoqueArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyBaixaEstoqueArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateBaixaEstoqueArgs: ["data"],
  CreateManyBaixaEstoqueArgs: ["data", "skipDuplicates"],
  DeleteBaixaEstoqueArgs: ["where"],
  UpdateBaixaEstoqueArgs: ["data", "where"],
  DeleteManyBaixaEstoqueArgs: ["where"],
  UpdateManyBaixaEstoqueArgs: ["data", "where"],
  UpsertBaixaEstoqueArgs: ["where", "create", "update"],
  AggregateBaixaEstoqueArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByBaixaEstoqueArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniquePedidoArgs: ["where"],
  FindFirstPedidoArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyPedidoArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreatePedidoArgs: ["data"],
  CreateManyPedidoArgs: ["data", "skipDuplicates"],
  DeletePedidoArgs: ["where"],
  UpdatePedidoArgs: ["data", "where"],
  DeleteManyPedidoArgs: ["where"],
  UpdateManyPedidoArgs: ["data", "where"],
  UpsertPedidoArgs: ["where", "create", "update"],
  AggregatePedidoArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByPedidoArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueUsuarioArgs: ["where"],
  FindFirstUsuarioArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyUsuarioArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateUsuarioArgs: ["data"],
  CreateManyUsuarioArgs: ["data", "skipDuplicates"],
  DeleteUsuarioArgs: ["where"],
  UpdateUsuarioArgs: ["data", "where"],
  DeleteManyUsuarioArgs: ["where"],
  UpdateManyUsuarioArgs: ["data", "where"],
  UpsertUsuarioArgs: ["where", "create", "update"],
  AggregateUsuarioArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByUsuarioArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueTipoUsuarioArgs: ["where"],
  FindFirstTipoUsuarioArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyTipoUsuarioArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateTipoUsuarioArgs: ["data"],
  CreateManyTipoUsuarioArgs: ["data", "skipDuplicates"],
  DeleteTipoUsuarioArgs: ["where"],
  UpdateTipoUsuarioArgs: ["data", "where"],
  DeleteManyTipoUsuarioArgs: ["where"],
  UpdateManyTipoUsuarioArgs: ["data", "where"],
  UpsertTipoUsuarioArgs: ["where", "create", "update"],
  AggregateTipoUsuarioArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByTipoUsuarioArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueReceitaArgs: ["where"],
  FindFirstReceitaArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyReceitaArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateReceitaArgs: ["data"],
  CreateManyReceitaArgs: ["data", "skipDuplicates"],
  DeleteReceitaArgs: ["where"],
  UpdateReceitaArgs: ["data", "where"],
  DeleteManyReceitaArgs: ["where"],
  UpdateManyReceitaArgs: ["data", "where"],
  UpsertReceitaArgs: ["where", "create", "update"],
  AggregateReceitaArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByReceitaArgs: ["where", "orderBy", "by", "having", "take", "skip"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
  > = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
  > = Partial<Record<ModelResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    if (resolverActionsConfig._all) {
      const allActionsDecorators = resolverActionsConfig._all;
      const resolverActionNames = crudResolversInfo[modelName as keyof typeof crudResolversInfo];
      for (const resolverActionName of resolverActionNames) {
        const actionTarget = (actionResolversConfig[
          resolverActionName as keyof typeof actionResolversConfig
        ] as Function).prototype;
        for (const allActionsDecorator of allActionsDecorators) {
          allActionsDecorator(
            crudTarget,
            resolverActionName,
            Object.getOwnPropertyDescriptor(crudTarget, resolverActionName)!,
          );
          allActionsDecorator(
            actionTarget,
            resolverActionName,
            Object.getOwnPropertyDescriptor(actionTarget, resolverActionName)!,
          );
        }
      }
    }
    const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const resolverActionName of resolverActionsToApply) {
      const decorators = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[];
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      for (const decorator of decorators) {
        decorator(
          crudTarget,
          resolverActionName,
          Object.getOwnPropertyDescriptor(crudTarget, resolverActionName)!,
        );
        decorator(
          actionTarget,
          resolverActionName,
          Object.getOwnPropertyDescriptor(actionTarget, resolverActionName)!,
        );
      }
    }
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
  > = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}

const relationResolversMap = {
  Fornecedor: relationResolvers.FornecedorRelationsResolver,
  Representante: relationResolvers.RepresentanteRelationsResolver,
  CategoriaProduto: relationResolvers.CategoriaProdutoRelationsResolver,
  Produto: relationResolvers.ProdutoRelationsResolver,
  Estoque: relationResolvers.EstoqueRelationsResolver,
  BaixaEstoque: relationResolvers.BaixaEstoqueRelationsResolver,
  Pedido: relationResolvers.PedidoRelationsResolver,
  Usuario: relationResolvers.UsuarioRelationsResolver,
  TipoUsuario: relationResolvers.TipoUsuarioRelationsResolver,
  Receita: relationResolvers.ReceitaRelationsResolver
};
const relationResolversInfo = {
  Fornecedor: ["Estoque", "Representante"],
  Representante: ["Fornecedor"],
  CategoriaProduto: ["Produto"],
  Produto: ["categoria", "Estoque", "Receita"],
  Estoque: ["produto", "fornecedor", "BaixaEstoque"],
  BaixaEstoque: ["Estoque", "Pedido"],
  Pedido: ["BaixaEstoque", "Usuario"],
  Usuario: ["tipoUsuario", "Pedido"],
  TipoUsuario: ["Usuario"],
  Receita: ["produtos"]
};

type RelationResolverModelNames = keyof typeof relationResolversMap;

type RelationResolverActionNames<
  TModel extends RelationResolverModelNames
  > = keyof typeof relationResolversMap[TModel]["prototype"];

export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames>
  = Partial<Record<RelationResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type RelationResolversEnhanceMap = {
  [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
};

export function applyRelationResolversEnhanceMap(
  relationResolversEnhanceMap: RelationResolversEnhanceMap,
) {
  for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
    const modelName = relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap;
    const relationResolverTarget = relationResolversMap[modelName].prototype;
    const relationResolverActionsConfig = relationResolversEnhanceMap[modelName]!;
    if (relationResolverActionsConfig._all) {
      const allActionsDecorators = relationResolverActionsConfig._all;
      const relationResolverActionNames = relationResolversInfo[modelName as keyof typeof relationResolversInfo];
      for (const relationResolverActionName of relationResolverActionNames) {
        for (const allActionsDecorator of allActionsDecorators) {
          allActionsDecorator(
            relationResolverTarget,
            relationResolverActionName,
            Object.getOwnPropertyDescriptor(relationResolverTarget, relationResolverActionName)!,
          );
        }
      }
    }
    const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const relationResolverActionName of relationResolverActionsToApply) {
      const decorators = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[];
      for (const decorator of decorators) {
        decorator(
          relationResolverTarget,
          relationResolverActionName,
          Object.getOwnPropertyDescriptor(relationResolverTarget, relationResolverActionName)!,
        );
      }
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys | "_all", PropertyDecorator[]>
>;

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    for (const decorator of enhanceConfig.class) {
      decorator(typeClass);
    }
  }
  if (enhanceConfig.fields) {
    if (enhanceConfig.fields._all) {
      const allFieldsDecorators = enhanceConfig.fields._all;
      for (const typeFieldName of typeFieldNames) {
        for (const allFieldsDecorator of allFieldsDecorators) {
          allFieldsDecorator(typePrototype, typeFieldName);
        }
      }
    }
    const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(
      it => it !== "_all"
    );
    for (const typeFieldName of configFieldsToApply) {
      const fieldDecorators = enhanceConfig.fields[typeFieldName]!;
      for (const fieldDecorator of fieldDecorators) {
        fieldDecorator(typePrototype, typeFieldName);
      }
    }
  }
}

const modelsInfo = {
  Fornecedor: ["id", "razaoSocial", "cnpj", "email", "telefone", "nomeFantasia", "site", "celular", "cep", "logradouro", "numero", "complemento", "bairro", "cidade", "estado", "representanteId"],
  Representante: ["id", "nome", "celular"],
  CategoriaProduto: ["id", "nome"],
  Produto: ["id", "nome", "descricao", "unidadeMedida", "categoriaProdutoId", "receitaId"],
  Estoque: ["id", "quantidadeProduto", "produtoId", "dataRecebimento", "dataVencimento", "marca", "preco", "fornecedorId"],
  BaixaEstoque: ["id", "quantidadeProduto", "tipo", "foto", "motivo", "estoqueId", "pedidoId"],
  Pedido: ["id", "dataPedido", "usuarioCpf"],
  Usuario: ["cpf", "senha", "nome", "rg", "celular", "dataNascimento", "tipoUsuarioId"],
  TipoUsuario: ["id", "nome"],
  Receita: ["id", "nome", "tipo", "descricao"]
};

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

const outputsInfo = {
  AggregateFornecedor: ["_count", "_avg", "_sum", "_min", "_max"],
  FornecedorGroupBy: ["id", "razaoSocial", "cnpj", "email", "telefone", "nomeFantasia", "site", "celular", "cep", "logradouro", "numero", "complemento", "bairro", "cidade", "estado", "representanteId", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateRepresentante: ["_count", "_avg", "_sum", "_min", "_max"],
  RepresentanteGroupBy: ["id", "nome", "celular", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateCategoriaProduto: ["_count", "_avg", "_sum", "_min", "_max"],
  CategoriaProdutoGroupBy: ["id", "nome", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateProduto: ["_count", "_avg", "_sum", "_min", "_max"],
  ProdutoGroupBy: ["id", "nome", "descricao", "unidadeMedida", "categoriaProdutoId", "receitaId", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateEstoque: ["_count", "_avg", "_sum", "_min", "_max"],
  EstoqueGroupBy: ["id", "quantidadeProduto", "produtoId", "dataRecebimento", "dataVencimento", "marca", "preco", "fornecedorId", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateBaixaEstoque: ["_count", "_avg", "_sum", "_min", "_max"],
  BaixaEstoqueGroupBy: ["id", "quantidadeProduto", "tipo", "foto", "motivo", "estoqueId", "pedidoId", "_count", "_avg", "_sum", "_min", "_max"],
  AggregatePedido: ["_count", "_avg", "_sum", "_min", "_max"],
  PedidoGroupBy: ["id", "dataPedido", "usuarioCpf", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateUsuario: ["_count", "_avg", "_sum", "_min", "_max"],
  UsuarioGroupBy: ["cpf", "senha", "nome", "rg", "celular", "dataNascimento", "tipoUsuarioId", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateTipoUsuario: ["_count", "_avg", "_sum", "_min", "_max"],
  TipoUsuarioGroupBy: ["id", "nome", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateReceita: ["_count", "_avg", "_sum", "_min", "_max"],
  ReceitaGroupBy: ["id", "nome", "tipo", "descricao", "_count", "_avg", "_sum", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  FornecedorCount: ["Estoque"],
  FornecedorCountAggregate: ["id", "razaoSocial", "cnpj", "email", "telefone", "nomeFantasia", "site", "celular", "cep", "logradouro", "numero", "complemento", "bairro", "cidade", "estado", "representanteId", "_all"],
  FornecedorAvgAggregate: ["id", "representanteId"],
  FornecedorSumAggregate: ["id", "representanteId"],
  FornecedorMinAggregate: ["id", "razaoSocial", "cnpj", "email", "telefone", "nomeFantasia", "site", "celular", "cep", "logradouro", "numero", "complemento", "bairro", "cidade", "estado", "representanteId"],
  FornecedorMaxAggregate: ["id", "razaoSocial", "cnpj", "email", "telefone", "nomeFantasia", "site", "celular", "cep", "logradouro", "numero", "complemento", "bairro", "cidade", "estado", "representanteId"],
  RepresentanteCount: ["Fornecedor"],
  RepresentanteCountAggregate: ["id", "nome", "celular", "_all"],
  RepresentanteAvgAggregate: ["id"],
  RepresentanteSumAggregate: ["id"],
  RepresentanteMinAggregate: ["id", "nome", "celular"],
  RepresentanteMaxAggregate: ["id", "nome", "celular"],
  CategoriaProdutoCount: ["Produto"],
  CategoriaProdutoCountAggregate: ["id", "nome", "_all"],
  CategoriaProdutoAvgAggregate: ["id"],
  CategoriaProdutoSumAggregate: ["id"],
  CategoriaProdutoMinAggregate: ["id", "nome"],
  CategoriaProdutoMaxAggregate: ["id", "nome"],
  ProdutoCount: ["Estoque"],
  ProdutoCountAggregate: ["id", "nome", "descricao", "unidadeMedida", "categoriaProdutoId", "receitaId", "_all"],
  ProdutoAvgAggregate: ["id", "categoriaProdutoId", "receitaId"],
  ProdutoSumAggregate: ["id", "categoriaProdutoId", "receitaId"],
  ProdutoMinAggregate: ["id", "nome", "descricao", "unidadeMedida", "categoriaProdutoId", "receitaId"],
  ProdutoMaxAggregate: ["id", "nome", "descricao", "unidadeMedida", "categoriaProdutoId", "receitaId"],
  EstoqueCount: ["BaixaEstoque"],
  EstoqueCountAggregate: ["id", "quantidadeProduto", "produtoId", "dataRecebimento", "dataVencimento", "marca", "preco", "fornecedorId", "_all"],
  EstoqueAvgAggregate: ["id", "quantidadeProduto", "produtoId", "preco", "fornecedorId"],
  EstoqueSumAggregate: ["id", "quantidadeProduto", "produtoId", "preco", "fornecedorId"],
  EstoqueMinAggregate: ["id", "quantidadeProduto", "produtoId", "dataRecebimento", "dataVencimento", "marca", "preco", "fornecedorId"],
  EstoqueMaxAggregate: ["id", "quantidadeProduto", "produtoId", "dataRecebimento", "dataVencimento", "marca", "preco", "fornecedorId"],
  BaixaEstoqueCountAggregate: ["id", "quantidadeProduto", "tipo", "foto", "motivo", "estoqueId", "pedidoId", "_all"],
  BaixaEstoqueAvgAggregate: ["id", "quantidadeProduto", "estoqueId", "pedidoId"],
  BaixaEstoqueSumAggregate: ["id", "quantidadeProduto", "estoqueId", "pedidoId"],
  BaixaEstoqueMinAggregate: ["id", "quantidadeProduto", "tipo", "foto", "motivo", "estoqueId", "pedidoId"],
  BaixaEstoqueMaxAggregate: ["id", "quantidadeProduto", "tipo", "foto", "motivo", "estoqueId", "pedidoId"],
  PedidoCount: ["BaixaEstoque"],
  PedidoCountAggregate: ["id", "dataPedido", "usuarioCpf", "_all"],
  PedidoAvgAggregate: ["id"],
  PedidoSumAggregate: ["id"],
  PedidoMinAggregate: ["id", "dataPedido", "usuarioCpf"],
  PedidoMaxAggregate: ["id", "dataPedido", "usuarioCpf"],
  UsuarioCount: ["Pedido"],
  UsuarioCountAggregate: ["cpf", "senha", "nome", "rg", "celular", "dataNascimento", "tipoUsuarioId", "_all"],
  UsuarioAvgAggregate: ["tipoUsuarioId"],
  UsuarioSumAggregate: ["tipoUsuarioId"],
  UsuarioMinAggregate: ["cpf", "senha", "nome", "rg", "celular", "dataNascimento", "tipoUsuarioId"],
  UsuarioMaxAggregate: ["cpf", "senha", "nome", "rg", "celular", "dataNascimento", "tipoUsuarioId"],
  TipoUsuarioCount: ["Usuario"],
  TipoUsuarioCountAggregate: ["id", "nome", "_all"],
  TipoUsuarioAvgAggregate: ["id"],
  TipoUsuarioSumAggregate: ["id"],
  TipoUsuarioMinAggregate: ["id", "nome"],
  TipoUsuarioMaxAggregate: ["id", "nome"],
  ReceitaCount: ["produtos"],
  ReceitaCountAggregate: ["id", "nome", "tipo", "descricao", "_all"],
  ReceitaAvgAggregate: ["id"],
  ReceitaSumAggregate: ["id"],
  ReceitaMinAggregate: ["id", "nome", "tipo", "descricao"],
  ReceitaMaxAggregate: ["id", "nome", "tipo", "descricao"]
};

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
  > = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

const inputsInfo = {
  FornecedorWhereInput: ["AND", "OR", "NOT", "id", "razaoSocial", "cnpj", "email", "telefone", "nomeFantasia", "site", "celular", "cep", "logradouro", "numero", "complemento", "bairro", "cidade", "estado", "Estoque", "Representante", "representanteId"],
  FornecedorOrderByWithRelationInput: ["id", "razaoSocial", "cnpj", "email", "telefone", "nomeFantasia", "site", "celular", "cep", "logradouro", "numero", "complemento", "bairro", "cidade", "estado", "Estoque", "Representante", "representanteId"],
  FornecedorWhereUniqueInput: ["id", "cnpj"],
  FornecedorOrderByWithAggregationInput: ["id", "razaoSocial", "cnpj", "email", "telefone", "nomeFantasia", "site", "celular", "cep", "logradouro", "numero", "complemento", "bairro", "cidade", "estado", "representanteId", "_count", "_avg", "_max", "_min", "_sum"],
  FornecedorScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "razaoSocial", "cnpj", "email", "telefone", "nomeFantasia", "site", "celular", "cep", "logradouro", "numero", "complemento", "bairro", "cidade", "estado", "representanteId"],
  RepresentanteWhereInput: ["AND", "OR", "NOT", "id", "nome", "celular", "Fornecedor"],
  RepresentanteOrderByWithRelationInput: ["id", "nome", "celular", "Fornecedor"],
  RepresentanteWhereUniqueInput: ["id"],
  RepresentanteOrderByWithAggregationInput: ["id", "nome", "celular", "_count", "_avg", "_max", "_min", "_sum"],
  RepresentanteScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "nome", "celular"],
  CategoriaProdutoWhereInput: ["AND", "OR", "NOT", "id", "nome", "Produto"],
  CategoriaProdutoOrderByWithRelationInput: ["id", "nome", "Produto"],
  CategoriaProdutoWhereUniqueInput: ["id"],
  CategoriaProdutoOrderByWithAggregationInput: ["id", "nome", "_count", "_avg", "_max", "_min", "_sum"],
  CategoriaProdutoScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "nome"],
  ProdutoWhereInput: ["AND", "OR", "NOT", "id", "nome", "descricao", "unidadeMedida", "categoria", "categoriaProdutoId", "Estoque", "Receita", "receitaId"],
  ProdutoOrderByWithRelationInput: ["id", "nome", "descricao", "unidadeMedida", "categoria", "categoriaProdutoId", "Estoque", "Receita", "receitaId"],
  ProdutoWhereUniqueInput: ["id"],
  ProdutoOrderByWithAggregationInput: ["id", "nome", "descricao", "unidadeMedida", "categoriaProdutoId", "receitaId", "_count", "_avg", "_max", "_min", "_sum"],
  ProdutoScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "nome", "descricao", "unidadeMedida", "categoriaProdutoId", "receitaId"],
  EstoqueWhereInput: ["AND", "OR", "NOT", "id", "produto", "quantidadeProduto", "produtoId", "dataRecebimento", "dataVencimento", "marca", "preco", "fornecedor", "fornecedorId", "BaixaEstoque"],
  EstoqueOrderByWithRelationInput: ["id", "produto", "quantidadeProduto", "produtoId", "dataRecebimento", "dataVencimento", "marca", "preco", "fornecedor", "fornecedorId", "BaixaEstoque"],
  EstoqueWhereUniqueInput: ["id"],
  EstoqueOrderByWithAggregationInput: ["id", "quantidadeProduto", "produtoId", "dataRecebimento", "dataVencimento", "marca", "preco", "fornecedorId", "_count", "_avg", "_max", "_min", "_sum"],
  EstoqueScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "quantidadeProduto", "produtoId", "dataRecebimento", "dataVencimento", "marca", "preco", "fornecedorId"],
  BaixaEstoqueWhereInput: ["AND", "OR", "NOT", "id", "quantidadeProduto", "tipo", "foto", "motivo", "Estoque", "estoqueId", "Pedido", "pedidoId"],
  BaixaEstoqueOrderByWithRelationInput: ["id", "quantidadeProduto", "tipo", "foto", "motivo", "Estoque", "estoqueId", "Pedido", "pedidoId"],
  BaixaEstoqueWhereUniqueInput: ["id"],
  BaixaEstoqueOrderByWithAggregationInput: ["id", "quantidadeProduto", "tipo", "foto", "motivo", "estoqueId", "pedidoId", "_count", "_avg", "_max", "_min", "_sum"],
  BaixaEstoqueScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "quantidadeProduto", "tipo", "foto", "motivo", "estoqueId", "pedidoId"],
  PedidoWhereInput: ["AND", "OR", "NOT", "id", "dataPedido", "BaixaEstoque", "Usuario", "usuarioCpf"],
  PedidoOrderByWithRelationInput: ["id", "dataPedido", "BaixaEstoque", "Usuario", "usuarioCpf"],
  PedidoWhereUniqueInput: ["id"],
  PedidoOrderByWithAggregationInput: ["id", "dataPedido", "usuarioCpf", "_count", "_avg", "_max", "_min", "_sum"],
  PedidoScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "dataPedido", "usuarioCpf"],
  UsuarioWhereInput: ["AND", "OR", "NOT", "cpf", "senha", "nome", "rg", "celular", "dataNascimento", "tipoUsuario", "tipoUsuarioId", "Pedido"],
  UsuarioOrderByWithRelationInput: ["cpf", "senha", "nome", "rg", "celular", "dataNascimento", "tipoUsuario", "tipoUsuarioId", "Pedido"],
  UsuarioWhereUniqueInput: ["cpf"],
  UsuarioOrderByWithAggregationInput: ["cpf", "senha", "nome", "rg", "celular", "dataNascimento", "tipoUsuarioId", "_count", "_avg", "_max", "_min", "_sum"],
  UsuarioScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "cpf", "senha", "nome", "rg", "celular", "dataNascimento", "tipoUsuarioId"],
  TipoUsuarioWhereInput: ["AND", "OR", "NOT", "id", "nome", "Usuario"],
  TipoUsuarioOrderByWithRelationInput: ["id", "nome", "Usuario"],
  TipoUsuarioWhereUniqueInput: ["id"],
  TipoUsuarioOrderByWithAggregationInput: ["id", "nome", "_count", "_avg", "_max", "_min", "_sum"],
  TipoUsuarioScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "nome"],
  ReceitaWhereInput: ["AND", "OR", "NOT", "id", "nome", "tipo", "descricao", "produtos"],
  ReceitaOrderByWithRelationInput: ["id", "nome", "tipo", "descricao", "produtos"],
  ReceitaWhereUniqueInput: ["id"],
  ReceitaOrderByWithAggregationInput: ["id", "nome", "tipo", "descricao", "_count", "_avg", "_max", "_min", "_sum"],
  ReceitaScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "nome", "tipo", "descricao"],
  FornecedorCreateInput: ["razaoSocial", "cnpj", "email", "telefone", "nomeFantasia", "site", "celular", "cep", "logradouro", "numero", "complemento", "bairro", "cidade", "estado", "Estoque", "Representante"],
  FornecedorUpdateInput: ["razaoSocial", "cnpj", "email", "telefone", "nomeFantasia", "site", "celular", "cep", "logradouro", "numero", "complemento", "bairro", "cidade", "estado", "Estoque", "Representante"],
  FornecedorCreateManyInput: ["id", "razaoSocial", "cnpj", "email", "telefone", "nomeFantasia", "site", "celular", "cep", "logradouro", "numero", "complemento", "bairro", "cidade", "estado", "representanteId"],
  FornecedorUpdateManyMutationInput: ["razaoSocial", "cnpj", "email", "telefone", "nomeFantasia", "site", "celular", "cep", "logradouro", "numero", "complemento", "bairro", "cidade", "estado"],
  RepresentanteCreateInput: ["nome", "celular", "Fornecedor"],
  RepresentanteUpdateInput: ["nome", "celular", "Fornecedor"],
  RepresentanteCreateManyInput: ["id", "nome", "celular"],
  RepresentanteUpdateManyMutationInput: ["nome", "celular"],
  CategoriaProdutoCreateInput: ["nome", "Produto"],
  CategoriaProdutoUpdateInput: ["nome", "Produto"],
  CategoriaProdutoCreateManyInput: ["id", "nome"],
  CategoriaProdutoUpdateManyMutationInput: ["nome"],
  ProdutoCreateInput: ["nome", "descricao", "unidadeMedida", "categoria", "Estoque", "Receita"],
  ProdutoUpdateInput: ["nome", "descricao", "unidadeMedida", "categoria", "Estoque", "Receita"],
  ProdutoCreateManyInput: ["id", "nome", "descricao", "unidadeMedida", "categoriaProdutoId", "receitaId"],
  ProdutoUpdateManyMutationInput: ["nome", "descricao", "unidadeMedida"],
  EstoqueCreateInput: ["quantidadeProduto", "dataRecebimento", "dataVencimento", "marca", "preco", "produto", "fornecedor", "BaixaEstoque"],
  EstoqueUpdateInput: ["quantidadeProduto", "dataRecebimento", "dataVencimento", "marca", "preco", "produto", "fornecedor", "BaixaEstoque"],
  EstoqueCreateManyInput: ["id", "quantidadeProduto", "produtoId", "dataRecebimento", "dataVencimento", "marca", "preco", "fornecedorId"],
  EstoqueUpdateManyMutationInput: ["quantidadeProduto", "dataRecebimento", "dataVencimento", "marca", "preco"],
  BaixaEstoqueCreateInput: ["quantidadeProduto", "tipo", "foto", "motivo", "Estoque", "Pedido"],
  BaixaEstoqueUpdateInput: ["quantidadeProduto", "tipo", "foto", "motivo", "Estoque", "Pedido"],
  BaixaEstoqueCreateManyInput: ["id", "quantidadeProduto", "tipo", "foto", "motivo", "estoqueId", "pedidoId"],
  BaixaEstoqueUpdateManyMutationInput: ["quantidadeProduto", "tipo", "foto", "motivo"],
  PedidoCreateInput: ["dataPedido", "BaixaEstoque", "Usuario"],
  PedidoUpdateInput: ["dataPedido", "BaixaEstoque", "Usuario"],
  PedidoCreateManyInput: ["id", "dataPedido", "usuarioCpf"],
  PedidoUpdateManyMutationInput: ["dataPedido"],
  UsuarioCreateInput: ["cpf", "senha", "nome", "rg", "celular", "dataNascimento", "tipoUsuario", "Pedido"],
  UsuarioUpdateInput: ["cpf", "senha", "nome", "rg", "celular", "dataNascimento", "tipoUsuario", "Pedido"],
  UsuarioCreateManyInput: ["cpf", "senha", "nome", "rg", "celular", "dataNascimento", "tipoUsuarioId"],
  UsuarioUpdateManyMutationInput: ["cpf", "senha", "nome", "rg", "celular", "dataNascimento"],
  TipoUsuarioCreateInput: ["nome", "Usuario"],
  TipoUsuarioUpdateInput: ["nome", "Usuario"],
  TipoUsuarioCreateManyInput: ["id", "nome"],
  TipoUsuarioUpdateManyMutationInput: ["nome"],
  ReceitaCreateInput: ["nome", "tipo", "descricao", "produtos"],
  ReceitaUpdateInput: ["nome", "tipo", "descricao", "produtos"],
  ReceitaCreateManyInput: ["id", "nome", "tipo", "descricao"],
  ReceitaUpdateManyMutationInput: ["nome", "tipo", "descricao"],
  IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  EstoqueListRelationFilter: ["every", "some", "none"],
  RepresentanteRelationFilter: ["is", "isNot"],
  IntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  EstoqueOrderByRelationAggregateInput: ["_count"],
  FornecedorCountOrderByAggregateInput: ["id", "razaoSocial", "cnpj", "email", "telefone", "nomeFantasia", "site", "celular", "cep", "logradouro", "numero", "complemento", "bairro", "cidade", "estado", "representanteId"],
  FornecedorAvgOrderByAggregateInput: ["id", "representanteId"],
  FornecedorMaxOrderByAggregateInput: ["id", "razaoSocial", "cnpj", "email", "telefone", "nomeFantasia", "site", "celular", "cep", "logradouro", "numero", "complemento", "bairro", "cidade", "estado", "representanteId"],
  FornecedorMinOrderByAggregateInput: ["id", "razaoSocial", "cnpj", "email", "telefone", "nomeFantasia", "site", "celular", "cep", "logradouro", "numero", "complemento", "bairro", "cidade", "estado", "representanteId"],
  FornecedorSumOrderByAggregateInput: ["id", "representanteId"],
  IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  IntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  FornecedorListRelationFilter: ["every", "some", "none"],
  FornecedorOrderByRelationAggregateInput: ["_count"],
  RepresentanteCountOrderByAggregateInput: ["id", "nome", "celular"],
  RepresentanteAvgOrderByAggregateInput: ["id"],
  RepresentanteMaxOrderByAggregateInput: ["id", "nome", "celular"],
  RepresentanteMinOrderByAggregateInput: ["id", "nome", "celular"],
  RepresentanteSumOrderByAggregateInput: ["id"],
  ProdutoListRelationFilter: ["every", "some", "none"],
  ProdutoOrderByRelationAggregateInput: ["_count"],
  CategoriaProdutoCountOrderByAggregateInput: ["id", "nome"],
  CategoriaProdutoAvgOrderByAggregateInput: ["id"],
  CategoriaProdutoMaxOrderByAggregateInput: ["id", "nome"],
  CategoriaProdutoMinOrderByAggregateInput: ["id", "nome"],
  CategoriaProdutoSumOrderByAggregateInput: ["id"],
  CategoriaProdutoRelationFilter: ["is", "isNot"],
  ReceitaRelationFilter: ["is", "isNot"],
  ProdutoCountOrderByAggregateInput: ["id", "nome", "descricao", "unidadeMedida", "categoriaProdutoId", "receitaId"],
  ProdutoAvgOrderByAggregateInput: ["id", "categoriaProdutoId", "receitaId"],
  ProdutoMaxOrderByAggregateInput: ["id", "nome", "descricao", "unidadeMedida", "categoriaProdutoId", "receitaId"],
  ProdutoMinOrderByAggregateInput: ["id", "nome", "descricao", "unidadeMedida", "categoriaProdutoId", "receitaId"],
  ProdutoSumOrderByAggregateInput: ["id", "categoriaProdutoId", "receitaId"],
  ProdutoRelationFilter: ["is", "isNot"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  FloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  FornecedorRelationFilter: ["is", "isNot"],
  BaixaEstoqueListRelationFilter: ["every", "some", "none"],
  BaixaEstoqueOrderByRelationAggregateInput: ["_count"],
  EstoqueCountOrderByAggregateInput: ["id", "quantidadeProduto", "produtoId", "dataRecebimento", "dataVencimento", "marca", "preco", "fornecedorId"],
  EstoqueAvgOrderByAggregateInput: ["id", "quantidadeProduto", "produtoId", "preco", "fornecedorId"],
  EstoqueMaxOrderByAggregateInput: ["id", "quantidadeProduto", "produtoId", "dataRecebimento", "dataVencimento", "marca", "preco", "fornecedorId"],
  EstoqueMinOrderByAggregateInput: ["id", "quantidadeProduto", "produtoId", "dataRecebimento", "dataVencimento", "marca", "preco", "fornecedorId"],
  EstoqueSumOrderByAggregateInput: ["id", "quantidadeProduto", "produtoId", "preco", "fornecedorId"],
  DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  FloatWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  EnumTipoBaixaEstoqueFilter: ["equals", "in", "notIn", "not"],
  EstoqueRelationFilter: ["is", "isNot"],
  PedidoRelationFilter: ["is", "isNot"],
  BaixaEstoqueCountOrderByAggregateInput: ["id", "quantidadeProduto", "tipo", "foto", "motivo", "estoqueId", "pedidoId"],
  BaixaEstoqueAvgOrderByAggregateInput: ["id", "quantidadeProduto", "estoqueId", "pedidoId"],
  BaixaEstoqueMaxOrderByAggregateInput: ["id", "quantidadeProduto", "tipo", "foto", "motivo", "estoqueId", "pedidoId"],
  BaixaEstoqueMinOrderByAggregateInput: ["id", "quantidadeProduto", "tipo", "foto", "motivo", "estoqueId", "pedidoId"],
  BaixaEstoqueSumOrderByAggregateInput: ["id", "quantidadeProduto", "estoqueId", "pedidoId"],
  EnumTipoBaixaEstoqueWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  UsuarioRelationFilter: ["is", "isNot"],
  PedidoCountOrderByAggregateInput: ["id", "dataPedido", "usuarioCpf"],
  PedidoAvgOrderByAggregateInput: ["id"],
  PedidoMaxOrderByAggregateInput: ["id", "dataPedido", "usuarioCpf"],
  PedidoMinOrderByAggregateInput: ["id", "dataPedido", "usuarioCpf"],
  PedidoSumOrderByAggregateInput: ["id"],
  TipoUsuarioRelationFilter: ["is", "isNot"],
  PedidoListRelationFilter: ["every", "some", "none"],
  PedidoOrderByRelationAggregateInput: ["_count"],
  UsuarioCountOrderByAggregateInput: ["cpf", "senha", "nome", "rg", "celular", "dataNascimento", "tipoUsuarioId"],
  UsuarioAvgOrderByAggregateInput: ["tipoUsuarioId"],
  UsuarioMaxOrderByAggregateInput: ["cpf", "senha", "nome", "rg", "celular", "dataNascimento", "tipoUsuarioId"],
  UsuarioMinOrderByAggregateInput: ["cpf", "senha", "nome", "rg", "celular", "dataNascimento", "tipoUsuarioId"],
  UsuarioSumOrderByAggregateInput: ["tipoUsuarioId"],
  UsuarioListRelationFilter: ["every", "some", "none"],
  UsuarioOrderByRelationAggregateInput: ["_count"],
  TipoUsuarioCountOrderByAggregateInput: ["id", "nome"],
  TipoUsuarioAvgOrderByAggregateInput: ["id"],
  TipoUsuarioMaxOrderByAggregateInput: ["id", "nome"],
  TipoUsuarioMinOrderByAggregateInput: ["id", "nome"],
  TipoUsuarioSumOrderByAggregateInput: ["id"],
  ReceitaCountOrderByAggregateInput: ["id", "nome", "tipo", "descricao"],
  ReceitaAvgOrderByAggregateInput: ["id"],
  ReceitaMaxOrderByAggregateInput: ["id", "nome", "tipo", "descricao"],
  ReceitaMinOrderByAggregateInput: ["id", "nome", "tipo", "descricao"],
  ReceitaSumOrderByAggregateInput: ["id"],
  EstoqueCreateNestedManyWithoutFornecedorInput: ["create", "connectOrCreate", "createMany", "connect"],
  RepresentanteCreateNestedOneWithoutFornecedorInput: ["create", "connectOrCreate", "connect"],
  StringFieldUpdateOperationsInput: ["set"],
  NullableStringFieldUpdateOperationsInput: ["set"],
  EstoqueUpdateManyWithoutFornecedorInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  RepresentanteUpdateOneWithoutFornecedorInput: ["create", "connectOrCreate", "upsert", "connect", "disconnect", "delete", "update"],
  IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  NullableIntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  FornecedorCreateNestedManyWithoutRepresentanteInput: ["create", "connectOrCreate", "createMany", "connect"],
  FornecedorUpdateManyWithoutRepresentanteInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  ProdutoCreateNestedManyWithoutCategoriaInput: ["create", "connectOrCreate", "createMany", "connect"],
  ProdutoUpdateManyWithoutCategoriaInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  CategoriaProdutoCreateNestedOneWithoutProdutoInput: ["create", "connectOrCreate", "connect"],
  EstoqueCreateNestedManyWithoutProdutoInput: ["create", "connectOrCreate", "createMany", "connect"],
  ReceitaCreateNestedOneWithoutProdutosInput: ["create", "connectOrCreate", "connect"],
  CategoriaProdutoUpdateOneWithoutProdutoInput: ["create", "connectOrCreate", "upsert", "connect", "disconnect", "delete", "update"],
  EstoqueUpdateManyWithoutProdutoInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  ReceitaUpdateOneWithoutProdutosInput: ["create", "connectOrCreate", "upsert", "connect", "disconnect", "delete", "update"],
  ProdutoCreateNestedOneWithoutEstoqueInput: ["create", "connectOrCreate", "connect"],
  FornecedorCreateNestedOneWithoutEstoqueInput: ["create", "connectOrCreate", "connect"],
  BaixaEstoqueCreateNestedManyWithoutEstoqueInput: ["create", "connectOrCreate", "createMany", "connect"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  FloatFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  ProdutoUpdateOneRequiredWithoutEstoqueInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  FornecedorUpdateOneRequiredWithoutEstoqueInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  BaixaEstoqueUpdateManyWithoutEstoqueInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  EstoqueCreateNestedOneWithoutBaixaEstoqueInput: ["create", "connectOrCreate", "connect"],
  PedidoCreateNestedOneWithoutBaixaEstoqueInput: ["create", "connectOrCreate", "connect"],
  EnumTipoBaixaEstoqueFieldUpdateOperationsInput: ["set"],
  EstoqueUpdateOneRequiredWithoutBaixaEstoqueInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  PedidoUpdateOneWithoutBaixaEstoqueInput: ["create", "connectOrCreate", "upsert", "connect", "disconnect", "delete", "update"],
  BaixaEstoqueCreateNestedManyWithoutPedidoInput: ["create", "connectOrCreate", "createMany", "connect"],
  UsuarioCreateNestedOneWithoutPedidoInput: ["create", "connectOrCreate", "connect"],
  BaixaEstoqueUpdateManyWithoutPedidoInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  UsuarioUpdateOneRequiredWithoutPedidoInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  TipoUsuarioCreateNestedOneWithoutUsuarioInput: ["create", "connectOrCreate", "connect"],
  PedidoCreateNestedManyWithoutUsuarioInput: ["create", "connectOrCreate", "createMany", "connect"],
  TipoUsuarioUpdateOneRequiredWithoutUsuarioInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  PedidoUpdateManyWithoutUsuarioInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  UsuarioCreateNestedManyWithoutTipoUsuarioInput: ["create", "connectOrCreate", "createMany", "connect"],
  UsuarioUpdateManyWithoutTipoUsuarioInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  ProdutoCreateNestedManyWithoutReceitaInput: ["create", "connectOrCreate", "createMany", "connect"],
  ProdutoUpdateManyWithoutReceitaInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  NestedFloatWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedEnumTipoBaixaEstoqueFilter: ["equals", "in", "notIn", "not"],
  NestedEnumTipoBaixaEstoqueWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  EstoqueCreateWithoutFornecedorInput: ["quantidadeProduto", "dataRecebimento", "dataVencimento", "marca", "preco", "produto", "BaixaEstoque"],
  EstoqueCreateOrConnectWithoutFornecedorInput: ["where", "create"],
  EstoqueCreateManyFornecedorInputEnvelope: ["data", "skipDuplicates"],
  RepresentanteCreateWithoutFornecedorInput: ["nome", "celular"],
  RepresentanteCreateOrConnectWithoutFornecedorInput: ["where", "create"],
  EstoqueUpsertWithWhereUniqueWithoutFornecedorInput: ["where", "update", "create"],
  EstoqueUpdateWithWhereUniqueWithoutFornecedorInput: ["where", "data"],
  EstoqueUpdateManyWithWhereWithoutFornecedorInput: ["where", "data"],
  EstoqueScalarWhereInput: ["AND", "OR", "NOT", "id", "quantidadeProduto", "produtoId", "dataRecebimento", "dataVencimento", "marca", "preco", "fornecedorId"],
  RepresentanteUpsertWithoutFornecedorInput: ["update", "create"],
  RepresentanteUpdateWithoutFornecedorInput: ["nome", "celular"],
  FornecedorCreateWithoutRepresentanteInput: ["razaoSocial", "cnpj", "email", "telefone", "nomeFantasia", "site", "celular", "cep", "logradouro", "numero", "complemento", "bairro", "cidade", "estado", "Estoque"],
  FornecedorCreateOrConnectWithoutRepresentanteInput: ["where", "create"],
  FornecedorCreateManyRepresentanteInputEnvelope: ["data", "skipDuplicates"],
  FornecedorUpsertWithWhereUniqueWithoutRepresentanteInput: ["where", "update", "create"],
  FornecedorUpdateWithWhereUniqueWithoutRepresentanteInput: ["where", "data"],
  FornecedorUpdateManyWithWhereWithoutRepresentanteInput: ["where", "data"],
  FornecedorScalarWhereInput: ["AND", "OR", "NOT", "id", "razaoSocial", "cnpj", "email", "telefone", "nomeFantasia", "site", "celular", "cep", "logradouro", "numero", "complemento", "bairro", "cidade", "estado", "representanteId"],
  ProdutoCreateWithoutCategoriaInput: ["nome", "descricao", "unidadeMedida", "Estoque", "Receita"],
  ProdutoCreateOrConnectWithoutCategoriaInput: ["where", "create"],
  ProdutoCreateManyCategoriaInputEnvelope: ["data", "skipDuplicates"],
  ProdutoUpsertWithWhereUniqueWithoutCategoriaInput: ["where", "update", "create"],
  ProdutoUpdateWithWhereUniqueWithoutCategoriaInput: ["where", "data"],
  ProdutoUpdateManyWithWhereWithoutCategoriaInput: ["where", "data"],
  ProdutoScalarWhereInput: ["AND", "OR", "NOT", "id", "nome", "descricao", "unidadeMedida", "categoriaProdutoId", "receitaId"],
  CategoriaProdutoCreateWithoutProdutoInput: ["nome"],
  CategoriaProdutoCreateOrConnectWithoutProdutoInput: ["where", "create"],
  EstoqueCreateWithoutProdutoInput: ["quantidadeProduto", "dataRecebimento", "dataVencimento", "marca", "preco", "fornecedor", "BaixaEstoque"],
  EstoqueCreateOrConnectWithoutProdutoInput: ["where", "create"],
  EstoqueCreateManyProdutoInputEnvelope: ["data", "skipDuplicates"],
  ReceitaCreateWithoutProdutosInput: ["nome", "tipo", "descricao"],
  ReceitaCreateOrConnectWithoutProdutosInput: ["where", "create"],
  CategoriaProdutoUpsertWithoutProdutoInput: ["update", "create"],
  CategoriaProdutoUpdateWithoutProdutoInput: ["nome"],
  EstoqueUpsertWithWhereUniqueWithoutProdutoInput: ["where", "update", "create"],
  EstoqueUpdateWithWhereUniqueWithoutProdutoInput: ["where", "data"],
  EstoqueUpdateManyWithWhereWithoutProdutoInput: ["where", "data"],
  ReceitaUpsertWithoutProdutosInput: ["update", "create"],
  ReceitaUpdateWithoutProdutosInput: ["nome", "tipo", "descricao"],
  ProdutoCreateWithoutEstoqueInput: ["nome", "descricao", "unidadeMedida", "categoria", "Receita"],
  ProdutoCreateOrConnectWithoutEstoqueInput: ["where", "create"],
  FornecedorCreateWithoutEstoqueInput: ["razaoSocial", "cnpj", "email", "telefone", "nomeFantasia", "site", "celular", "cep", "logradouro", "numero", "complemento", "bairro", "cidade", "estado", "Representante"],
  FornecedorCreateOrConnectWithoutEstoqueInput: ["where", "create"],
  BaixaEstoqueCreateWithoutEstoqueInput: ["quantidadeProduto", "tipo", "foto", "motivo", "Pedido"],
  BaixaEstoqueCreateOrConnectWithoutEstoqueInput: ["where", "create"],
  BaixaEstoqueCreateManyEstoqueInputEnvelope: ["data", "skipDuplicates"],
  ProdutoUpsertWithoutEstoqueInput: ["update", "create"],
  ProdutoUpdateWithoutEstoqueInput: ["nome", "descricao", "unidadeMedida", "categoria", "Receita"],
  FornecedorUpsertWithoutEstoqueInput: ["update", "create"],
  FornecedorUpdateWithoutEstoqueInput: ["razaoSocial", "cnpj", "email", "telefone", "nomeFantasia", "site", "celular", "cep", "logradouro", "numero", "complemento", "bairro", "cidade", "estado", "Representante"],
  BaixaEstoqueUpsertWithWhereUniqueWithoutEstoqueInput: ["where", "update", "create"],
  BaixaEstoqueUpdateWithWhereUniqueWithoutEstoqueInput: ["where", "data"],
  BaixaEstoqueUpdateManyWithWhereWithoutEstoqueInput: ["where", "data"],
  BaixaEstoqueScalarWhereInput: ["AND", "OR", "NOT", "id", "quantidadeProduto", "tipo", "foto", "motivo", "estoqueId", "pedidoId"],
  EstoqueCreateWithoutBaixaEstoqueInput: ["quantidadeProduto", "dataRecebimento", "dataVencimento", "marca", "preco", "produto", "fornecedor"],
  EstoqueCreateOrConnectWithoutBaixaEstoqueInput: ["where", "create"],
  PedidoCreateWithoutBaixaEstoqueInput: ["dataPedido", "Usuario"],
  PedidoCreateOrConnectWithoutBaixaEstoqueInput: ["where", "create"],
  EstoqueUpsertWithoutBaixaEstoqueInput: ["update", "create"],
  EstoqueUpdateWithoutBaixaEstoqueInput: ["quantidadeProduto", "dataRecebimento", "dataVencimento", "marca", "preco", "produto", "fornecedor"],
  PedidoUpsertWithoutBaixaEstoqueInput: ["update", "create"],
  PedidoUpdateWithoutBaixaEstoqueInput: ["dataPedido", "Usuario"],
  BaixaEstoqueCreateWithoutPedidoInput: ["quantidadeProduto", "tipo", "foto", "motivo", "Estoque"],
  BaixaEstoqueCreateOrConnectWithoutPedidoInput: ["where", "create"],
  BaixaEstoqueCreateManyPedidoInputEnvelope: ["data", "skipDuplicates"],
  UsuarioCreateWithoutPedidoInput: ["cpf", "senha", "nome", "rg", "celular", "dataNascimento", "tipoUsuario"],
  UsuarioCreateOrConnectWithoutPedidoInput: ["where", "create"],
  BaixaEstoqueUpsertWithWhereUniqueWithoutPedidoInput: ["where", "update", "create"],
  BaixaEstoqueUpdateWithWhereUniqueWithoutPedidoInput: ["where", "data"],
  BaixaEstoqueUpdateManyWithWhereWithoutPedidoInput: ["where", "data"],
  UsuarioUpsertWithoutPedidoInput: ["update", "create"],
  UsuarioUpdateWithoutPedidoInput: ["cpf", "senha", "nome", "rg", "celular", "dataNascimento", "tipoUsuario"],
  TipoUsuarioCreateWithoutUsuarioInput: ["nome"],
  TipoUsuarioCreateOrConnectWithoutUsuarioInput: ["where", "create"],
  PedidoCreateWithoutUsuarioInput: ["dataPedido", "BaixaEstoque"],
  PedidoCreateOrConnectWithoutUsuarioInput: ["where", "create"],
  PedidoCreateManyUsuarioInputEnvelope: ["data", "skipDuplicates"],
  TipoUsuarioUpsertWithoutUsuarioInput: ["update", "create"],
  TipoUsuarioUpdateWithoutUsuarioInput: ["nome"],
  PedidoUpsertWithWhereUniqueWithoutUsuarioInput: ["where", "update", "create"],
  PedidoUpdateWithWhereUniqueWithoutUsuarioInput: ["where", "data"],
  PedidoUpdateManyWithWhereWithoutUsuarioInput: ["where", "data"],
  PedidoScalarWhereInput: ["AND", "OR", "NOT", "id", "dataPedido", "usuarioCpf"],
  UsuarioCreateWithoutTipoUsuarioInput: ["cpf", "senha", "nome", "rg", "celular", "dataNascimento", "Pedido"],
  UsuarioCreateOrConnectWithoutTipoUsuarioInput: ["where", "create"],
  UsuarioCreateManyTipoUsuarioInputEnvelope: ["data", "skipDuplicates"],
  UsuarioUpsertWithWhereUniqueWithoutTipoUsuarioInput: ["where", "update", "create"],
  UsuarioUpdateWithWhereUniqueWithoutTipoUsuarioInput: ["where", "data"],
  UsuarioUpdateManyWithWhereWithoutTipoUsuarioInput: ["where", "data"],
  UsuarioScalarWhereInput: ["AND", "OR", "NOT", "cpf", "senha", "nome", "rg", "celular", "dataNascimento", "tipoUsuarioId"],
  ProdutoCreateWithoutReceitaInput: ["nome", "descricao", "unidadeMedida", "categoria", "Estoque"],
  ProdutoCreateOrConnectWithoutReceitaInput: ["where", "create"],
  ProdutoCreateManyReceitaInputEnvelope: ["data", "skipDuplicates"],
  ProdutoUpsertWithWhereUniqueWithoutReceitaInput: ["where", "update", "create"],
  ProdutoUpdateWithWhereUniqueWithoutReceitaInput: ["where", "data"],
  ProdutoUpdateManyWithWhereWithoutReceitaInput: ["where", "data"],
  EstoqueCreateManyFornecedorInput: ["id", "quantidadeProduto", "produtoId", "dataRecebimento", "dataVencimento", "marca", "preco"],
  EstoqueUpdateWithoutFornecedorInput: ["quantidadeProduto", "dataRecebimento", "dataVencimento", "marca", "preco", "produto", "BaixaEstoque"],
  FornecedorCreateManyRepresentanteInput: ["id", "razaoSocial", "cnpj", "email", "telefone", "nomeFantasia", "site", "celular", "cep", "logradouro", "numero", "complemento", "bairro", "cidade", "estado"],
  FornecedorUpdateWithoutRepresentanteInput: ["razaoSocial", "cnpj", "email", "telefone", "nomeFantasia", "site", "celular", "cep", "logradouro", "numero", "complemento", "bairro", "cidade", "estado", "Estoque"],
  ProdutoCreateManyCategoriaInput: ["id", "nome", "descricao", "unidadeMedida", "receitaId"],
  ProdutoUpdateWithoutCategoriaInput: ["nome", "descricao", "unidadeMedida", "Estoque", "Receita"],
  EstoqueCreateManyProdutoInput: ["id", "quantidadeProduto", "dataRecebimento", "dataVencimento", "marca", "preco", "fornecedorId"],
  EstoqueUpdateWithoutProdutoInput: ["quantidadeProduto", "dataRecebimento", "dataVencimento", "marca", "preco", "fornecedor", "BaixaEstoque"],
  BaixaEstoqueCreateManyEstoqueInput: ["id", "quantidadeProduto", "tipo", "foto", "motivo", "pedidoId"],
  BaixaEstoqueUpdateWithoutEstoqueInput: ["quantidadeProduto", "tipo", "foto", "motivo", "Pedido"],
  BaixaEstoqueCreateManyPedidoInput: ["id", "quantidadeProduto", "tipo", "foto", "motivo", "estoqueId"],
  BaixaEstoqueUpdateWithoutPedidoInput: ["quantidadeProduto", "tipo", "foto", "motivo", "Estoque"],
  PedidoCreateManyUsuarioInput: ["id", "dataPedido"],
  PedidoUpdateWithoutUsuarioInput: ["dataPedido", "BaixaEstoque"],
  UsuarioCreateManyTipoUsuarioInput: ["cpf", "senha", "nome", "rg", "celular", "dataNascimento"],
  UsuarioUpdateWithoutTipoUsuarioInput: ["cpf", "senha", "nome", "rg", "celular", "dataNascimento", "Pedido"],
  ProdutoCreateManyReceitaInput: ["id", "nome", "descricao", "unidadeMedida", "categoriaProdutoId"],
  ProdutoUpdateWithoutReceitaInput: ["nome", "descricao", "unidadeMedida", "categoria", "Estoque"]
};

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
  > = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}

