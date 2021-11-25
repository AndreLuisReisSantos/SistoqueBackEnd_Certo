"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const tq = __importStar(require("type-graphql"));
const apollo_server_1 = require("apollo-server");
const graphql_scalars_1 = require("graphql-scalars");
const graphql_1 = require("graphql");
const FornecedorController_1 = require("@controller/FornecedorController");
const typedi_1 = __importDefault(require("typedi"));
const context_1 = require("./context");
const RepresentanteController_1 = require("@controller/RepresentanteController");
const ProdutoController_1 = require("@controller/ProdutoController");
const UsuarioController_1 = require("@controller/UsuarioController");
const bootstrap = async () => {
    const schema = await tq.buildSchema({
        resolvers: [
            FornecedorController_1.FornecedorController, RepresentanteController_1.RepresentanteController, ProdutoController_1.ProdutoController, UsuarioController_1.UsuarioController
        ],
        scalarsMap: [
            {
                type: graphql_1.GraphQLScalarType,
                scalar: graphql_scalars_1.DateTimeResolver
            }
        ],
        container: typedi_1.default
    });
    const plugin = {
        requestDidStart(requestContext) {
            return {
                willSendResponse() {
                    typedi_1.default.reset(requestContext.context.requestId);
                }
            };
        }
    };
    const server = new apollo_server_1.ApolloServer({
        schema,
        context: (params) => {
            const requestId = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
            const container = typedi_1.default.of(requestId.toString());
            const context = {
                ...(0, context_1.createContext)(params),
                requestId: requestId.toString(),
                container
            };
            typedi_1.default.set('Context', context);
            return context;
        },
        plugins: [
            plugin
        ]
    });
    const { url } = await server.listen(4001);
    console.log(`Server is running, GraphQL Playground available at ${url}`);
};
bootstrap();
