
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Competidor
 * 
 */
export type Competidor = $Result.DefaultSelection<Prisma.$CompetidorPayload>
/**
 * Model Partida
 * 
 */
export type Partida = $Result.DefaultSelection<Prisma.$PartidaPayload>
/**
 * Model Participacao
 * 
 */
export type Participacao = $Result.DefaultSelection<Prisma.$ParticipacaoPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const TipoPartida: {
  KATA: 'KATA',
  CONFRONTO: 'CONFRONTO'
};

export type TipoPartida = (typeof TipoPartida)[keyof typeof TipoPartida]

}

export type TipoPartida = $Enums.TipoPartida

export const TipoPartida: typeof $Enums.TipoPartida

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Competidors
 * const competidors = await prisma.competidor.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Competidors
   * const competidors = await prisma.competidor.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.competidor`: Exposes CRUD operations for the **Competidor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Competidors
    * const competidors = await prisma.competidor.findMany()
    * ```
    */
  get competidor(): Prisma.CompetidorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.partida`: Exposes CRUD operations for the **Partida** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Partidas
    * const partidas = await prisma.partida.findMany()
    * ```
    */
  get partida(): Prisma.PartidaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.participacao`: Exposes CRUD operations for the **Participacao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Participacaos
    * const participacaos = await prisma.participacao.findMany()
    * ```
    */
  get participacao(): Prisma.ParticipacaoDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Competidor: 'Competidor',
    Partida: 'Partida',
    Participacao: 'Participacao'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "competidor" | "partida" | "participacao"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Competidor: {
        payload: Prisma.$CompetidorPayload<ExtArgs>
        fields: Prisma.CompetidorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompetidorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetidorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompetidorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetidorPayload>
          }
          findFirst: {
            args: Prisma.CompetidorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetidorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompetidorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetidorPayload>
          }
          findMany: {
            args: Prisma.CompetidorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetidorPayload>[]
          }
          create: {
            args: Prisma.CompetidorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetidorPayload>
          }
          createMany: {
            args: Prisma.CompetidorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CompetidorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetidorPayload>
          }
          update: {
            args: Prisma.CompetidorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetidorPayload>
          }
          deleteMany: {
            args: Prisma.CompetidorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompetidorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CompetidorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetidorPayload>
          }
          aggregate: {
            args: Prisma.CompetidorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompetidor>
          }
          groupBy: {
            args: Prisma.CompetidorGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompetidorGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompetidorCountArgs<ExtArgs>
            result: $Utils.Optional<CompetidorCountAggregateOutputType> | number
          }
        }
      }
      Partida: {
        payload: Prisma.$PartidaPayload<ExtArgs>
        fields: Prisma.PartidaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PartidaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartidaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PartidaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartidaPayload>
          }
          findFirst: {
            args: Prisma.PartidaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartidaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PartidaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartidaPayload>
          }
          findMany: {
            args: Prisma.PartidaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartidaPayload>[]
          }
          create: {
            args: Prisma.PartidaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartidaPayload>
          }
          createMany: {
            args: Prisma.PartidaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PartidaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartidaPayload>
          }
          update: {
            args: Prisma.PartidaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartidaPayload>
          }
          deleteMany: {
            args: Prisma.PartidaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PartidaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PartidaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartidaPayload>
          }
          aggregate: {
            args: Prisma.PartidaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePartida>
          }
          groupBy: {
            args: Prisma.PartidaGroupByArgs<ExtArgs>
            result: $Utils.Optional<PartidaGroupByOutputType>[]
          }
          count: {
            args: Prisma.PartidaCountArgs<ExtArgs>
            result: $Utils.Optional<PartidaCountAggregateOutputType> | number
          }
        }
      }
      Participacao: {
        payload: Prisma.$ParticipacaoPayload<ExtArgs>
        fields: Prisma.ParticipacaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ParticipacaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipacaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ParticipacaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipacaoPayload>
          }
          findFirst: {
            args: Prisma.ParticipacaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipacaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ParticipacaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipacaoPayload>
          }
          findMany: {
            args: Prisma.ParticipacaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipacaoPayload>[]
          }
          create: {
            args: Prisma.ParticipacaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipacaoPayload>
          }
          createMany: {
            args: Prisma.ParticipacaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ParticipacaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipacaoPayload>
          }
          update: {
            args: Prisma.ParticipacaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipacaoPayload>
          }
          deleteMany: {
            args: Prisma.ParticipacaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ParticipacaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ParticipacaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipacaoPayload>
          }
          aggregate: {
            args: Prisma.ParticipacaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParticipacao>
          }
          groupBy: {
            args: Prisma.ParticipacaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParticipacaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ParticipacaoCountArgs<ExtArgs>
            result: $Utils.Optional<ParticipacaoCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    competidor?: CompetidorOmit
    partida?: PartidaOmit
    participacao?: ParticipacaoOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CompetidorCountOutputType
   */

  export type CompetidorCountOutputType = {
    participacoes: number
  }

  export type CompetidorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participacoes?: boolean | CompetidorCountOutputTypeCountParticipacoesArgs
  }

  // Custom InputTypes
  /**
   * CompetidorCountOutputType without action
   */
  export type CompetidorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetidorCountOutputType
     */
    select?: CompetidorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CompetidorCountOutputType without action
   */
  export type CompetidorCountOutputTypeCountParticipacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParticipacaoWhereInput
  }


  /**
   * Count Type PartidaCountOutputType
   */

  export type PartidaCountOutputType = {
    participantes: number
  }

  export type PartidaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participantes?: boolean | PartidaCountOutputTypeCountParticipantesArgs
  }

  // Custom InputTypes
  /**
   * PartidaCountOutputType without action
   */
  export type PartidaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartidaCountOutputType
     */
    select?: PartidaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PartidaCountOutputType without action
   */
  export type PartidaCountOutputTypeCountParticipantesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParticipacaoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Competidor
   */

  export type AggregateCompetidor = {
    _count: CompetidorCountAggregateOutputType | null
    _avg: CompetidorAvgAggregateOutputType | null
    _sum: CompetidorSumAggregateOutputType | null
    _min: CompetidorMinAggregateOutputType | null
    _max: CompetidorMaxAggregateOutputType | null
  }

  export type CompetidorAvgAggregateOutputType = {
    vitorias: number | null
    medalhas: number | null
  }

  export type CompetidorSumAggregateOutputType = {
    vitorias: number | null
    medalhas: number | null
  }

  export type CompetidorMinAggregateOutputType = {
    id: string | null
    nome: string | null
    cidade: string | null
    estado: string | null
    academia: string | null
    vitorias: number | null
    medalhas: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CompetidorMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    cidade: string | null
    estado: string | null
    academia: string | null
    vitorias: number | null
    medalhas: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CompetidorCountAggregateOutputType = {
    id: number
    nome: number
    cidade: number
    estado: number
    academia: number
    vitorias: number
    medalhas: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CompetidorAvgAggregateInputType = {
    vitorias?: true
    medalhas?: true
  }

  export type CompetidorSumAggregateInputType = {
    vitorias?: true
    medalhas?: true
  }

  export type CompetidorMinAggregateInputType = {
    id?: true
    nome?: true
    cidade?: true
    estado?: true
    academia?: true
    vitorias?: true
    medalhas?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CompetidorMaxAggregateInputType = {
    id?: true
    nome?: true
    cidade?: true
    estado?: true
    academia?: true
    vitorias?: true
    medalhas?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CompetidorCountAggregateInputType = {
    id?: true
    nome?: true
    cidade?: true
    estado?: true
    academia?: true
    vitorias?: true
    medalhas?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CompetidorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Competidor to aggregate.
     */
    where?: CompetidorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Competidors to fetch.
     */
    orderBy?: CompetidorOrderByWithRelationInput | CompetidorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompetidorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Competidors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Competidors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Competidors
    **/
    _count?: true | CompetidorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompetidorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompetidorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompetidorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompetidorMaxAggregateInputType
  }

  export type GetCompetidorAggregateType<T extends CompetidorAggregateArgs> = {
        [P in keyof T & keyof AggregateCompetidor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompetidor[P]>
      : GetScalarType<T[P], AggregateCompetidor[P]>
  }




  export type CompetidorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompetidorWhereInput
    orderBy?: CompetidorOrderByWithAggregationInput | CompetidorOrderByWithAggregationInput[]
    by: CompetidorScalarFieldEnum[] | CompetidorScalarFieldEnum
    having?: CompetidorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompetidorCountAggregateInputType | true
    _avg?: CompetidorAvgAggregateInputType
    _sum?: CompetidorSumAggregateInputType
    _min?: CompetidorMinAggregateInputType
    _max?: CompetidorMaxAggregateInputType
  }

  export type CompetidorGroupByOutputType = {
    id: string
    nome: string
    cidade: string
    estado: string
    academia: string
    vitorias: number
    medalhas: number
    createdAt: Date
    updatedAt: Date
    _count: CompetidorCountAggregateOutputType | null
    _avg: CompetidorAvgAggregateOutputType | null
    _sum: CompetidorSumAggregateOutputType | null
    _min: CompetidorMinAggregateOutputType | null
    _max: CompetidorMaxAggregateOutputType | null
  }

  type GetCompetidorGroupByPayload<T extends CompetidorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompetidorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompetidorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompetidorGroupByOutputType[P]>
            : GetScalarType<T[P], CompetidorGroupByOutputType[P]>
        }
      >
    >


  export type CompetidorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    cidade?: boolean
    estado?: boolean
    academia?: boolean
    vitorias?: boolean
    medalhas?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    participacoes?: boolean | Competidor$participacoesArgs<ExtArgs>
    _count?: boolean | CompetidorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["competidor"]>



  export type CompetidorSelectScalar = {
    id?: boolean
    nome?: boolean
    cidade?: boolean
    estado?: boolean
    academia?: boolean
    vitorias?: boolean
    medalhas?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CompetidorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "cidade" | "estado" | "academia" | "vitorias" | "medalhas" | "createdAt" | "updatedAt", ExtArgs["result"]["competidor"]>
  export type CompetidorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participacoes?: boolean | Competidor$participacoesArgs<ExtArgs>
    _count?: boolean | CompetidorCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CompetidorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Competidor"
    objects: {
      participacoes: Prisma.$ParticipacaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      cidade: string
      estado: string
      academia: string
      vitorias: number
      medalhas: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["competidor"]>
    composites: {}
  }

  type CompetidorGetPayload<S extends boolean | null | undefined | CompetidorDefaultArgs> = $Result.GetResult<Prisma.$CompetidorPayload, S>

  type CompetidorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompetidorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompetidorCountAggregateInputType | true
    }

  export interface CompetidorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Competidor'], meta: { name: 'Competidor' } }
    /**
     * Find zero or one Competidor that matches the filter.
     * @param {CompetidorFindUniqueArgs} args - Arguments to find a Competidor
     * @example
     * // Get one Competidor
     * const competidor = await prisma.competidor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompetidorFindUniqueArgs>(args: SelectSubset<T, CompetidorFindUniqueArgs<ExtArgs>>): Prisma__CompetidorClient<$Result.GetResult<Prisma.$CompetidorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Competidor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompetidorFindUniqueOrThrowArgs} args - Arguments to find a Competidor
     * @example
     * // Get one Competidor
     * const competidor = await prisma.competidor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompetidorFindUniqueOrThrowArgs>(args: SelectSubset<T, CompetidorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompetidorClient<$Result.GetResult<Prisma.$CompetidorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Competidor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetidorFindFirstArgs} args - Arguments to find a Competidor
     * @example
     * // Get one Competidor
     * const competidor = await prisma.competidor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompetidorFindFirstArgs>(args?: SelectSubset<T, CompetidorFindFirstArgs<ExtArgs>>): Prisma__CompetidorClient<$Result.GetResult<Prisma.$CompetidorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Competidor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetidorFindFirstOrThrowArgs} args - Arguments to find a Competidor
     * @example
     * // Get one Competidor
     * const competidor = await prisma.competidor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompetidorFindFirstOrThrowArgs>(args?: SelectSubset<T, CompetidorFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompetidorClient<$Result.GetResult<Prisma.$CompetidorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Competidors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetidorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Competidors
     * const competidors = await prisma.competidor.findMany()
     * 
     * // Get first 10 Competidors
     * const competidors = await prisma.competidor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const competidorWithIdOnly = await prisma.competidor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompetidorFindManyArgs>(args?: SelectSubset<T, CompetidorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompetidorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Competidor.
     * @param {CompetidorCreateArgs} args - Arguments to create a Competidor.
     * @example
     * // Create one Competidor
     * const Competidor = await prisma.competidor.create({
     *   data: {
     *     // ... data to create a Competidor
     *   }
     * })
     * 
     */
    create<T extends CompetidorCreateArgs>(args: SelectSubset<T, CompetidorCreateArgs<ExtArgs>>): Prisma__CompetidorClient<$Result.GetResult<Prisma.$CompetidorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Competidors.
     * @param {CompetidorCreateManyArgs} args - Arguments to create many Competidors.
     * @example
     * // Create many Competidors
     * const competidor = await prisma.competidor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompetidorCreateManyArgs>(args?: SelectSubset<T, CompetidorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Competidor.
     * @param {CompetidorDeleteArgs} args - Arguments to delete one Competidor.
     * @example
     * // Delete one Competidor
     * const Competidor = await prisma.competidor.delete({
     *   where: {
     *     // ... filter to delete one Competidor
     *   }
     * })
     * 
     */
    delete<T extends CompetidorDeleteArgs>(args: SelectSubset<T, CompetidorDeleteArgs<ExtArgs>>): Prisma__CompetidorClient<$Result.GetResult<Prisma.$CompetidorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Competidor.
     * @param {CompetidorUpdateArgs} args - Arguments to update one Competidor.
     * @example
     * // Update one Competidor
     * const competidor = await prisma.competidor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompetidorUpdateArgs>(args: SelectSubset<T, CompetidorUpdateArgs<ExtArgs>>): Prisma__CompetidorClient<$Result.GetResult<Prisma.$CompetidorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Competidors.
     * @param {CompetidorDeleteManyArgs} args - Arguments to filter Competidors to delete.
     * @example
     * // Delete a few Competidors
     * const { count } = await prisma.competidor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompetidorDeleteManyArgs>(args?: SelectSubset<T, CompetidorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Competidors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetidorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Competidors
     * const competidor = await prisma.competidor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompetidorUpdateManyArgs>(args: SelectSubset<T, CompetidorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Competidor.
     * @param {CompetidorUpsertArgs} args - Arguments to update or create a Competidor.
     * @example
     * // Update or create a Competidor
     * const competidor = await prisma.competidor.upsert({
     *   create: {
     *     // ... data to create a Competidor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Competidor we want to update
     *   }
     * })
     */
    upsert<T extends CompetidorUpsertArgs>(args: SelectSubset<T, CompetidorUpsertArgs<ExtArgs>>): Prisma__CompetidorClient<$Result.GetResult<Prisma.$CompetidorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Competidors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetidorCountArgs} args - Arguments to filter Competidors to count.
     * @example
     * // Count the number of Competidors
     * const count = await prisma.competidor.count({
     *   where: {
     *     // ... the filter for the Competidors we want to count
     *   }
     * })
    **/
    count<T extends CompetidorCountArgs>(
      args?: Subset<T, CompetidorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompetidorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Competidor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetidorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompetidorAggregateArgs>(args: Subset<T, CompetidorAggregateArgs>): Prisma.PrismaPromise<GetCompetidorAggregateType<T>>

    /**
     * Group by Competidor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetidorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CompetidorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompetidorGroupByArgs['orderBy'] }
        : { orderBy?: CompetidorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CompetidorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompetidorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Competidor model
   */
  readonly fields: CompetidorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Competidor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompetidorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    participacoes<T extends Competidor$participacoesArgs<ExtArgs> = {}>(args?: Subset<T, Competidor$participacoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Competidor model
   */
  interface CompetidorFieldRefs {
    readonly id: FieldRef<"Competidor", 'String'>
    readonly nome: FieldRef<"Competidor", 'String'>
    readonly cidade: FieldRef<"Competidor", 'String'>
    readonly estado: FieldRef<"Competidor", 'String'>
    readonly academia: FieldRef<"Competidor", 'String'>
    readonly vitorias: FieldRef<"Competidor", 'Int'>
    readonly medalhas: FieldRef<"Competidor", 'Int'>
    readonly createdAt: FieldRef<"Competidor", 'DateTime'>
    readonly updatedAt: FieldRef<"Competidor", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Competidor findUnique
   */
  export type CompetidorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competidor
     */
    select?: CompetidorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Competidor
     */
    omit?: CompetidorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetidorInclude<ExtArgs> | null
    /**
     * Filter, which Competidor to fetch.
     */
    where: CompetidorWhereUniqueInput
  }

  /**
   * Competidor findUniqueOrThrow
   */
  export type CompetidorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competidor
     */
    select?: CompetidorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Competidor
     */
    omit?: CompetidorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetidorInclude<ExtArgs> | null
    /**
     * Filter, which Competidor to fetch.
     */
    where: CompetidorWhereUniqueInput
  }

  /**
   * Competidor findFirst
   */
  export type CompetidorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competidor
     */
    select?: CompetidorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Competidor
     */
    omit?: CompetidorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetidorInclude<ExtArgs> | null
    /**
     * Filter, which Competidor to fetch.
     */
    where?: CompetidorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Competidors to fetch.
     */
    orderBy?: CompetidorOrderByWithRelationInput | CompetidorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Competidors.
     */
    cursor?: CompetidorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Competidors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Competidors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Competidors.
     */
    distinct?: CompetidorScalarFieldEnum | CompetidorScalarFieldEnum[]
  }

  /**
   * Competidor findFirstOrThrow
   */
  export type CompetidorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competidor
     */
    select?: CompetidorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Competidor
     */
    omit?: CompetidorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetidorInclude<ExtArgs> | null
    /**
     * Filter, which Competidor to fetch.
     */
    where?: CompetidorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Competidors to fetch.
     */
    orderBy?: CompetidorOrderByWithRelationInput | CompetidorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Competidors.
     */
    cursor?: CompetidorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Competidors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Competidors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Competidors.
     */
    distinct?: CompetidorScalarFieldEnum | CompetidorScalarFieldEnum[]
  }

  /**
   * Competidor findMany
   */
  export type CompetidorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competidor
     */
    select?: CompetidorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Competidor
     */
    omit?: CompetidorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetidorInclude<ExtArgs> | null
    /**
     * Filter, which Competidors to fetch.
     */
    where?: CompetidorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Competidors to fetch.
     */
    orderBy?: CompetidorOrderByWithRelationInput | CompetidorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Competidors.
     */
    cursor?: CompetidorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Competidors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Competidors.
     */
    skip?: number
    distinct?: CompetidorScalarFieldEnum | CompetidorScalarFieldEnum[]
  }

  /**
   * Competidor create
   */
  export type CompetidorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competidor
     */
    select?: CompetidorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Competidor
     */
    omit?: CompetidorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetidorInclude<ExtArgs> | null
    /**
     * The data needed to create a Competidor.
     */
    data: XOR<CompetidorCreateInput, CompetidorUncheckedCreateInput>
  }

  /**
   * Competidor createMany
   */
  export type CompetidorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Competidors.
     */
    data: CompetidorCreateManyInput | CompetidorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Competidor update
   */
  export type CompetidorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competidor
     */
    select?: CompetidorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Competidor
     */
    omit?: CompetidorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetidorInclude<ExtArgs> | null
    /**
     * The data needed to update a Competidor.
     */
    data: XOR<CompetidorUpdateInput, CompetidorUncheckedUpdateInput>
    /**
     * Choose, which Competidor to update.
     */
    where: CompetidorWhereUniqueInput
  }

  /**
   * Competidor updateMany
   */
  export type CompetidorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Competidors.
     */
    data: XOR<CompetidorUpdateManyMutationInput, CompetidorUncheckedUpdateManyInput>
    /**
     * Filter which Competidors to update
     */
    where?: CompetidorWhereInput
    /**
     * Limit how many Competidors to update.
     */
    limit?: number
  }

  /**
   * Competidor upsert
   */
  export type CompetidorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competidor
     */
    select?: CompetidorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Competidor
     */
    omit?: CompetidorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetidorInclude<ExtArgs> | null
    /**
     * The filter to search for the Competidor to update in case it exists.
     */
    where: CompetidorWhereUniqueInput
    /**
     * In case the Competidor found by the `where` argument doesn't exist, create a new Competidor with this data.
     */
    create: XOR<CompetidorCreateInput, CompetidorUncheckedCreateInput>
    /**
     * In case the Competidor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompetidorUpdateInput, CompetidorUncheckedUpdateInput>
  }

  /**
   * Competidor delete
   */
  export type CompetidorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competidor
     */
    select?: CompetidorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Competidor
     */
    omit?: CompetidorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetidorInclude<ExtArgs> | null
    /**
     * Filter which Competidor to delete.
     */
    where: CompetidorWhereUniqueInput
  }

  /**
   * Competidor deleteMany
   */
  export type CompetidorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Competidors to delete
     */
    where?: CompetidorWhereInput
    /**
     * Limit how many Competidors to delete.
     */
    limit?: number
  }

  /**
   * Competidor.participacoes
   */
  export type Competidor$participacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participacao
     */
    select?: ParticipacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participacao
     */
    omit?: ParticipacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipacaoInclude<ExtArgs> | null
    where?: ParticipacaoWhereInput
    orderBy?: ParticipacaoOrderByWithRelationInput | ParticipacaoOrderByWithRelationInput[]
    cursor?: ParticipacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParticipacaoScalarFieldEnum | ParticipacaoScalarFieldEnum[]
  }

  /**
   * Competidor without action
   */
  export type CompetidorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competidor
     */
    select?: CompetidorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Competidor
     */
    omit?: CompetidorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetidorInclude<ExtArgs> | null
  }


  /**
   * Model Partida
   */

  export type AggregatePartida = {
    _count: PartidaCountAggregateOutputType | null
    _min: PartidaMinAggregateOutputType | null
    _max: PartidaMaxAggregateOutputType | null
  }

  export type PartidaMinAggregateOutputType = {
    id: string | null
    tipo: $Enums.TipoPartida | null
    data: string | null
    resultado: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PartidaMaxAggregateOutputType = {
    id: string | null
    tipo: $Enums.TipoPartida | null
    data: string | null
    resultado: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PartidaCountAggregateOutputType = {
    id: number
    tipo: number
    data: number
    resultado: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PartidaMinAggregateInputType = {
    id?: true
    tipo?: true
    data?: true
    resultado?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PartidaMaxAggregateInputType = {
    id?: true
    tipo?: true
    data?: true
    resultado?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PartidaCountAggregateInputType = {
    id?: true
    tipo?: true
    data?: true
    resultado?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PartidaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Partida to aggregate.
     */
    where?: PartidaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Partidas to fetch.
     */
    orderBy?: PartidaOrderByWithRelationInput | PartidaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PartidaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Partidas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Partidas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Partidas
    **/
    _count?: true | PartidaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PartidaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PartidaMaxAggregateInputType
  }

  export type GetPartidaAggregateType<T extends PartidaAggregateArgs> = {
        [P in keyof T & keyof AggregatePartida]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePartida[P]>
      : GetScalarType<T[P], AggregatePartida[P]>
  }




  export type PartidaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PartidaWhereInput
    orderBy?: PartidaOrderByWithAggregationInput | PartidaOrderByWithAggregationInput[]
    by: PartidaScalarFieldEnum[] | PartidaScalarFieldEnum
    having?: PartidaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PartidaCountAggregateInputType | true
    _min?: PartidaMinAggregateInputType
    _max?: PartidaMaxAggregateInputType
  }

  export type PartidaGroupByOutputType = {
    id: string
    tipo: $Enums.TipoPartida
    data: string
    resultado: string
    createdAt: Date
    updatedAt: Date
    _count: PartidaCountAggregateOutputType | null
    _min: PartidaMinAggregateOutputType | null
    _max: PartidaMaxAggregateOutputType | null
  }

  type GetPartidaGroupByPayload<T extends PartidaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PartidaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PartidaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PartidaGroupByOutputType[P]>
            : GetScalarType<T[P], PartidaGroupByOutputType[P]>
        }
      >
    >


  export type PartidaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipo?: boolean
    data?: boolean
    resultado?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    participantes?: boolean | Partida$participantesArgs<ExtArgs>
    _count?: boolean | PartidaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["partida"]>



  export type PartidaSelectScalar = {
    id?: boolean
    tipo?: boolean
    data?: boolean
    resultado?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PartidaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tipo" | "data" | "resultado" | "createdAt" | "updatedAt", ExtArgs["result"]["partida"]>
  export type PartidaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participantes?: boolean | Partida$participantesArgs<ExtArgs>
    _count?: boolean | PartidaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PartidaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Partida"
    objects: {
      participantes: Prisma.$ParticipacaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tipo: $Enums.TipoPartida
      data: string
      resultado: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["partida"]>
    composites: {}
  }

  type PartidaGetPayload<S extends boolean | null | undefined | PartidaDefaultArgs> = $Result.GetResult<Prisma.$PartidaPayload, S>

  type PartidaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PartidaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PartidaCountAggregateInputType | true
    }

  export interface PartidaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Partida'], meta: { name: 'Partida' } }
    /**
     * Find zero or one Partida that matches the filter.
     * @param {PartidaFindUniqueArgs} args - Arguments to find a Partida
     * @example
     * // Get one Partida
     * const partida = await prisma.partida.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PartidaFindUniqueArgs>(args: SelectSubset<T, PartidaFindUniqueArgs<ExtArgs>>): Prisma__PartidaClient<$Result.GetResult<Prisma.$PartidaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Partida that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PartidaFindUniqueOrThrowArgs} args - Arguments to find a Partida
     * @example
     * // Get one Partida
     * const partida = await prisma.partida.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PartidaFindUniqueOrThrowArgs>(args: SelectSubset<T, PartidaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PartidaClient<$Result.GetResult<Prisma.$PartidaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Partida that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartidaFindFirstArgs} args - Arguments to find a Partida
     * @example
     * // Get one Partida
     * const partida = await prisma.partida.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PartidaFindFirstArgs>(args?: SelectSubset<T, PartidaFindFirstArgs<ExtArgs>>): Prisma__PartidaClient<$Result.GetResult<Prisma.$PartidaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Partida that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartidaFindFirstOrThrowArgs} args - Arguments to find a Partida
     * @example
     * // Get one Partida
     * const partida = await prisma.partida.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PartidaFindFirstOrThrowArgs>(args?: SelectSubset<T, PartidaFindFirstOrThrowArgs<ExtArgs>>): Prisma__PartidaClient<$Result.GetResult<Prisma.$PartidaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Partidas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartidaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Partidas
     * const partidas = await prisma.partida.findMany()
     * 
     * // Get first 10 Partidas
     * const partidas = await prisma.partida.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const partidaWithIdOnly = await prisma.partida.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PartidaFindManyArgs>(args?: SelectSubset<T, PartidaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartidaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Partida.
     * @param {PartidaCreateArgs} args - Arguments to create a Partida.
     * @example
     * // Create one Partida
     * const Partida = await prisma.partida.create({
     *   data: {
     *     // ... data to create a Partida
     *   }
     * })
     * 
     */
    create<T extends PartidaCreateArgs>(args: SelectSubset<T, PartidaCreateArgs<ExtArgs>>): Prisma__PartidaClient<$Result.GetResult<Prisma.$PartidaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Partidas.
     * @param {PartidaCreateManyArgs} args - Arguments to create many Partidas.
     * @example
     * // Create many Partidas
     * const partida = await prisma.partida.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PartidaCreateManyArgs>(args?: SelectSubset<T, PartidaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Partida.
     * @param {PartidaDeleteArgs} args - Arguments to delete one Partida.
     * @example
     * // Delete one Partida
     * const Partida = await prisma.partida.delete({
     *   where: {
     *     // ... filter to delete one Partida
     *   }
     * })
     * 
     */
    delete<T extends PartidaDeleteArgs>(args: SelectSubset<T, PartidaDeleteArgs<ExtArgs>>): Prisma__PartidaClient<$Result.GetResult<Prisma.$PartidaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Partida.
     * @param {PartidaUpdateArgs} args - Arguments to update one Partida.
     * @example
     * // Update one Partida
     * const partida = await prisma.partida.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PartidaUpdateArgs>(args: SelectSubset<T, PartidaUpdateArgs<ExtArgs>>): Prisma__PartidaClient<$Result.GetResult<Prisma.$PartidaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Partidas.
     * @param {PartidaDeleteManyArgs} args - Arguments to filter Partidas to delete.
     * @example
     * // Delete a few Partidas
     * const { count } = await prisma.partida.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PartidaDeleteManyArgs>(args?: SelectSubset<T, PartidaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Partidas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartidaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Partidas
     * const partida = await prisma.partida.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PartidaUpdateManyArgs>(args: SelectSubset<T, PartidaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Partida.
     * @param {PartidaUpsertArgs} args - Arguments to update or create a Partida.
     * @example
     * // Update or create a Partida
     * const partida = await prisma.partida.upsert({
     *   create: {
     *     // ... data to create a Partida
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Partida we want to update
     *   }
     * })
     */
    upsert<T extends PartidaUpsertArgs>(args: SelectSubset<T, PartidaUpsertArgs<ExtArgs>>): Prisma__PartidaClient<$Result.GetResult<Prisma.$PartidaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Partidas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartidaCountArgs} args - Arguments to filter Partidas to count.
     * @example
     * // Count the number of Partidas
     * const count = await prisma.partida.count({
     *   where: {
     *     // ... the filter for the Partidas we want to count
     *   }
     * })
    **/
    count<T extends PartidaCountArgs>(
      args?: Subset<T, PartidaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PartidaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Partida.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartidaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PartidaAggregateArgs>(args: Subset<T, PartidaAggregateArgs>): Prisma.PrismaPromise<GetPartidaAggregateType<T>>

    /**
     * Group by Partida.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartidaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PartidaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PartidaGroupByArgs['orderBy'] }
        : { orderBy?: PartidaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PartidaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPartidaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Partida model
   */
  readonly fields: PartidaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Partida.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PartidaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    participantes<T extends Partida$participantesArgs<ExtArgs> = {}>(args?: Subset<T, Partida$participantesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Partida model
   */
  interface PartidaFieldRefs {
    readonly id: FieldRef<"Partida", 'String'>
    readonly tipo: FieldRef<"Partida", 'TipoPartida'>
    readonly data: FieldRef<"Partida", 'String'>
    readonly resultado: FieldRef<"Partida", 'String'>
    readonly createdAt: FieldRef<"Partida", 'DateTime'>
    readonly updatedAt: FieldRef<"Partida", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Partida findUnique
   */
  export type PartidaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partida
     */
    select?: PartidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partida
     */
    omit?: PartidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartidaInclude<ExtArgs> | null
    /**
     * Filter, which Partida to fetch.
     */
    where: PartidaWhereUniqueInput
  }

  /**
   * Partida findUniqueOrThrow
   */
  export type PartidaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partida
     */
    select?: PartidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partida
     */
    omit?: PartidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartidaInclude<ExtArgs> | null
    /**
     * Filter, which Partida to fetch.
     */
    where: PartidaWhereUniqueInput
  }

  /**
   * Partida findFirst
   */
  export type PartidaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partida
     */
    select?: PartidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partida
     */
    omit?: PartidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartidaInclude<ExtArgs> | null
    /**
     * Filter, which Partida to fetch.
     */
    where?: PartidaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Partidas to fetch.
     */
    orderBy?: PartidaOrderByWithRelationInput | PartidaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Partidas.
     */
    cursor?: PartidaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Partidas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Partidas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Partidas.
     */
    distinct?: PartidaScalarFieldEnum | PartidaScalarFieldEnum[]
  }

  /**
   * Partida findFirstOrThrow
   */
  export type PartidaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partida
     */
    select?: PartidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partida
     */
    omit?: PartidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartidaInclude<ExtArgs> | null
    /**
     * Filter, which Partida to fetch.
     */
    where?: PartidaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Partidas to fetch.
     */
    orderBy?: PartidaOrderByWithRelationInput | PartidaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Partidas.
     */
    cursor?: PartidaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Partidas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Partidas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Partidas.
     */
    distinct?: PartidaScalarFieldEnum | PartidaScalarFieldEnum[]
  }

  /**
   * Partida findMany
   */
  export type PartidaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partida
     */
    select?: PartidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partida
     */
    omit?: PartidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartidaInclude<ExtArgs> | null
    /**
     * Filter, which Partidas to fetch.
     */
    where?: PartidaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Partidas to fetch.
     */
    orderBy?: PartidaOrderByWithRelationInput | PartidaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Partidas.
     */
    cursor?: PartidaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Partidas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Partidas.
     */
    skip?: number
    distinct?: PartidaScalarFieldEnum | PartidaScalarFieldEnum[]
  }

  /**
   * Partida create
   */
  export type PartidaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partida
     */
    select?: PartidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partida
     */
    omit?: PartidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartidaInclude<ExtArgs> | null
    /**
     * The data needed to create a Partida.
     */
    data: XOR<PartidaCreateInput, PartidaUncheckedCreateInput>
  }

  /**
   * Partida createMany
   */
  export type PartidaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Partidas.
     */
    data: PartidaCreateManyInput | PartidaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Partida update
   */
  export type PartidaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partida
     */
    select?: PartidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partida
     */
    omit?: PartidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartidaInclude<ExtArgs> | null
    /**
     * The data needed to update a Partida.
     */
    data: XOR<PartidaUpdateInput, PartidaUncheckedUpdateInput>
    /**
     * Choose, which Partida to update.
     */
    where: PartidaWhereUniqueInput
  }

  /**
   * Partida updateMany
   */
  export type PartidaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Partidas.
     */
    data: XOR<PartidaUpdateManyMutationInput, PartidaUncheckedUpdateManyInput>
    /**
     * Filter which Partidas to update
     */
    where?: PartidaWhereInput
    /**
     * Limit how many Partidas to update.
     */
    limit?: number
  }

  /**
   * Partida upsert
   */
  export type PartidaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partida
     */
    select?: PartidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partida
     */
    omit?: PartidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartidaInclude<ExtArgs> | null
    /**
     * The filter to search for the Partida to update in case it exists.
     */
    where: PartidaWhereUniqueInput
    /**
     * In case the Partida found by the `where` argument doesn't exist, create a new Partida with this data.
     */
    create: XOR<PartidaCreateInput, PartidaUncheckedCreateInput>
    /**
     * In case the Partida was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PartidaUpdateInput, PartidaUncheckedUpdateInput>
  }

  /**
   * Partida delete
   */
  export type PartidaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partida
     */
    select?: PartidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partida
     */
    omit?: PartidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartidaInclude<ExtArgs> | null
    /**
     * Filter which Partida to delete.
     */
    where: PartidaWhereUniqueInput
  }

  /**
   * Partida deleteMany
   */
  export type PartidaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Partidas to delete
     */
    where?: PartidaWhereInput
    /**
     * Limit how many Partidas to delete.
     */
    limit?: number
  }

  /**
   * Partida.participantes
   */
  export type Partida$participantesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participacao
     */
    select?: ParticipacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participacao
     */
    omit?: ParticipacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipacaoInclude<ExtArgs> | null
    where?: ParticipacaoWhereInput
    orderBy?: ParticipacaoOrderByWithRelationInput | ParticipacaoOrderByWithRelationInput[]
    cursor?: ParticipacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParticipacaoScalarFieldEnum | ParticipacaoScalarFieldEnum[]
  }

  /**
   * Partida without action
   */
  export type PartidaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partida
     */
    select?: PartidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partida
     */
    omit?: PartidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartidaInclude<ExtArgs> | null
  }


  /**
   * Model Participacao
   */

  export type AggregateParticipacao = {
    _count: ParticipacaoCountAggregateOutputType | null
    _min: ParticipacaoMinAggregateOutputType | null
    _max: ParticipacaoMaxAggregateOutputType | null
  }

  export type ParticipacaoMinAggregateOutputType = {
    id: string | null
    partidaId: string | null
    competidorId: string | null
    resultado: string | null
  }

  export type ParticipacaoMaxAggregateOutputType = {
    id: string | null
    partidaId: string | null
    competidorId: string | null
    resultado: string | null
  }

  export type ParticipacaoCountAggregateOutputType = {
    id: number
    partidaId: number
    competidorId: number
    resultado: number
    _all: number
  }


  export type ParticipacaoMinAggregateInputType = {
    id?: true
    partidaId?: true
    competidorId?: true
    resultado?: true
  }

  export type ParticipacaoMaxAggregateInputType = {
    id?: true
    partidaId?: true
    competidorId?: true
    resultado?: true
  }

  export type ParticipacaoCountAggregateInputType = {
    id?: true
    partidaId?: true
    competidorId?: true
    resultado?: true
    _all?: true
  }

  export type ParticipacaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Participacao to aggregate.
     */
    where?: ParticipacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Participacaos to fetch.
     */
    orderBy?: ParticipacaoOrderByWithRelationInput | ParticipacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ParticipacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Participacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Participacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Participacaos
    **/
    _count?: true | ParticipacaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParticipacaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParticipacaoMaxAggregateInputType
  }

  export type GetParticipacaoAggregateType<T extends ParticipacaoAggregateArgs> = {
        [P in keyof T & keyof AggregateParticipacao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParticipacao[P]>
      : GetScalarType<T[P], AggregateParticipacao[P]>
  }




  export type ParticipacaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParticipacaoWhereInput
    orderBy?: ParticipacaoOrderByWithAggregationInput | ParticipacaoOrderByWithAggregationInput[]
    by: ParticipacaoScalarFieldEnum[] | ParticipacaoScalarFieldEnum
    having?: ParticipacaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParticipacaoCountAggregateInputType | true
    _min?: ParticipacaoMinAggregateInputType
    _max?: ParticipacaoMaxAggregateInputType
  }

  export type ParticipacaoGroupByOutputType = {
    id: string
    partidaId: string
    competidorId: string
    resultado: string
    _count: ParticipacaoCountAggregateOutputType | null
    _min: ParticipacaoMinAggregateOutputType | null
    _max: ParticipacaoMaxAggregateOutputType | null
  }

  type GetParticipacaoGroupByPayload<T extends ParticipacaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParticipacaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParticipacaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParticipacaoGroupByOutputType[P]>
            : GetScalarType<T[P], ParticipacaoGroupByOutputType[P]>
        }
      >
    >


  export type ParticipacaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    partidaId?: boolean
    competidorId?: boolean
    resultado?: boolean
    partida?: boolean | PartidaDefaultArgs<ExtArgs>
    competidor?: boolean | CompetidorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["participacao"]>



  export type ParticipacaoSelectScalar = {
    id?: boolean
    partidaId?: boolean
    competidorId?: boolean
    resultado?: boolean
  }

  export type ParticipacaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "partidaId" | "competidorId" | "resultado", ExtArgs["result"]["participacao"]>
  export type ParticipacaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    partida?: boolean | PartidaDefaultArgs<ExtArgs>
    competidor?: boolean | CompetidorDefaultArgs<ExtArgs>
  }

  export type $ParticipacaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Participacao"
    objects: {
      partida: Prisma.$PartidaPayload<ExtArgs>
      competidor: Prisma.$CompetidorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      partidaId: string
      competidorId: string
      resultado: string
    }, ExtArgs["result"]["participacao"]>
    composites: {}
  }

  type ParticipacaoGetPayload<S extends boolean | null | undefined | ParticipacaoDefaultArgs> = $Result.GetResult<Prisma.$ParticipacaoPayload, S>

  type ParticipacaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ParticipacaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ParticipacaoCountAggregateInputType | true
    }

  export interface ParticipacaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Participacao'], meta: { name: 'Participacao' } }
    /**
     * Find zero or one Participacao that matches the filter.
     * @param {ParticipacaoFindUniqueArgs} args - Arguments to find a Participacao
     * @example
     * // Get one Participacao
     * const participacao = await prisma.participacao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ParticipacaoFindUniqueArgs>(args: SelectSubset<T, ParticipacaoFindUniqueArgs<ExtArgs>>): Prisma__ParticipacaoClient<$Result.GetResult<Prisma.$ParticipacaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Participacao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ParticipacaoFindUniqueOrThrowArgs} args - Arguments to find a Participacao
     * @example
     * // Get one Participacao
     * const participacao = await prisma.participacao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ParticipacaoFindUniqueOrThrowArgs>(args: SelectSubset<T, ParticipacaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ParticipacaoClient<$Result.GetResult<Prisma.$ParticipacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Participacao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipacaoFindFirstArgs} args - Arguments to find a Participacao
     * @example
     * // Get one Participacao
     * const participacao = await prisma.participacao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ParticipacaoFindFirstArgs>(args?: SelectSubset<T, ParticipacaoFindFirstArgs<ExtArgs>>): Prisma__ParticipacaoClient<$Result.GetResult<Prisma.$ParticipacaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Participacao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipacaoFindFirstOrThrowArgs} args - Arguments to find a Participacao
     * @example
     * // Get one Participacao
     * const participacao = await prisma.participacao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ParticipacaoFindFirstOrThrowArgs>(args?: SelectSubset<T, ParticipacaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ParticipacaoClient<$Result.GetResult<Prisma.$ParticipacaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Participacaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipacaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Participacaos
     * const participacaos = await prisma.participacao.findMany()
     * 
     * // Get first 10 Participacaos
     * const participacaos = await prisma.participacao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const participacaoWithIdOnly = await prisma.participacao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ParticipacaoFindManyArgs>(args?: SelectSubset<T, ParticipacaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Participacao.
     * @param {ParticipacaoCreateArgs} args - Arguments to create a Participacao.
     * @example
     * // Create one Participacao
     * const Participacao = await prisma.participacao.create({
     *   data: {
     *     // ... data to create a Participacao
     *   }
     * })
     * 
     */
    create<T extends ParticipacaoCreateArgs>(args: SelectSubset<T, ParticipacaoCreateArgs<ExtArgs>>): Prisma__ParticipacaoClient<$Result.GetResult<Prisma.$ParticipacaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Participacaos.
     * @param {ParticipacaoCreateManyArgs} args - Arguments to create many Participacaos.
     * @example
     * // Create many Participacaos
     * const participacao = await prisma.participacao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ParticipacaoCreateManyArgs>(args?: SelectSubset<T, ParticipacaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Participacao.
     * @param {ParticipacaoDeleteArgs} args - Arguments to delete one Participacao.
     * @example
     * // Delete one Participacao
     * const Participacao = await prisma.participacao.delete({
     *   where: {
     *     // ... filter to delete one Participacao
     *   }
     * })
     * 
     */
    delete<T extends ParticipacaoDeleteArgs>(args: SelectSubset<T, ParticipacaoDeleteArgs<ExtArgs>>): Prisma__ParticipacaoClient<$Result.GetResult<Prisma.$ParticipacaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Participacao.
     * @param {ParticipacaoUpdateArgs} args - Arguments to update one Participacao.
     * @example
     * // Update one Participacao
     * const participacao = await prisma.participacao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ParticipacaoUpdateArgs>(args: SelectSubset<T, ParticipacaoUpdateArgs<ExtArgs>>): Prisma__ParticipacaoClient<$Result.GetResult<Prisma.$ParticipacaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Participacaos.
     * @param {ParticipacaoDeleteManyArgs} args - Arguments to filter Participacaos to delete.
     * @example
     * // Delete a few Participacaos
     * const { count } = await prisma.participacao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ParticipacaoDeleteManyArgs>(args?: SelectSubset<T, ParticipacaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Participacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipacaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Participacaos
     * const participacao = await prisma.participacao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ParticipacaoUpdateManyArgs>(args: SelectSubset<T, ParticipacaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Participacao.
     * @param {ParticipacaoUpsertArgs} args - Arguments to update or create a Participacao.
     * @example
     * // Update or create a Participacao
     * const participacao = await prisma.participacao.upsert({
     *   create: {
     *     // ... data to create a Participacao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Participacao we want to update
     *   }
     * })
     */
    upsert<T extends ParticipacaoUpsertArgs>(args: SelectSubset<T, ParticipacaoUpsertArgs<ExtArgs>>): Prisma__ParticipacaoClient<$Result.GetResult<Prisma.$ParticipacaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Participacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipacaoCountArgs} args - Arguments to filter Participacaos to count.
     * @example
     * // Count the number of Participacaos
     * const count = await prisma.participacao.count({
     *   where: {
     *     // ... the filter for the Participacaos we want to count
     *   }
     * })
    **/
    count<T extends ParticipacaoCountArgs>(
      args?: Subset<T, ParticipacaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParticipacaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Participacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipacaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ParticipacaoAggregateArgs>(args: Subset<T, ParticipacaoAggregateArgs>): Prisma.PrismaPromise<GetParticipacaoAggregateType<T>>

    /**
     * Group by Participacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipacaoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ParticipacaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParticipacaoGroupByArgs['orderBy'] }
        : { orderBy?: ParticipacaoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ParticipacaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParticipacaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Participacao model
   */
  readonly fields: ParticipacaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Participacao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ParticipacaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    partida<T extends PartidaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PartidaDefaultArgs<ExtArgs>>): Prisma__PartidaClient<$Result.GetResult<Prisma.$PartidaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    competidor<T extends CompetidorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompetidorDefaultArgs<ExtArgs>>): Prisma__CompetidorClient<$Result.GetResult<Prisma.$CompetidorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Participacao model
   */
  interface ParticipacaoFieldRefs {
    readonly id: FieldRef<"Participacao", 'String'>
    readonly partidaId: FieldRef<"Participacao", 'String'>
    readonly competidorId: FieldRef<"Participacao", 'String'>
    readonly resultado: FieldRef<"Participacao", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Participacao findUnique
   */
  export type ParticipacaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participacao
     */
    select?: ParticipacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participacao
     */
    omit?: ParticipacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipacaoInclude<ExtArgs> | null
    /**
     * Filter, which Participacao to fetch.
     */
    where: ParticipacaoWhereUniqueInput
  }

  /**
   * Participacao findUniqueOrThrow
   */
  export type ParticipacaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participacao
     */
    select?: ParticipacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participacao
     */
    omit?: ParticipacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipacaoInclude<ExtArgs> | null
    /**
     * Filter, which Participacao to fetch.
     */
    where: ParticipacaoWhereUniqueInput
  }

  /**
   * Participacao findFirst
   */
  export type ParticipacaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participacao
     */
    select?: ParticipacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participacao
     */
    omit?: ParticipacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipacaoInclude<ExtArgs> | null
    /**
     * Filter, which Participacao to fetch.
     */
    where?: ParticipacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Participacaos to fetch.
     */
    orderBy?: ParticipacaoOrderByWithRelationInput | ParticipacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Participacaos.
     */
    cursor?: ParticipacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Participacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Participacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Participacaos.
     */
    distinct?: ParticipacaoScalarFieldEnum | ParticipacaoScalarFieldEnum[]
  }

  /**
   * Participacao findFirstOrThrow
   */
  export type ParticipacaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participacao
     */
    select?: ParticipacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participacao
     */
    omit?: ParticipacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipacaoInclude<ExtArgs> | null
    /**
     * Filter, which Participacao to fetch.
     */
    where?: ParticipacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Participacaos to fetch.
     */
    orderBy?: ParticipacaoOrderByWithRelationInput | ParticipacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Participacaos.
     */
    cursor?: ParticipacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Participacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Participacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Participacaos.
     */
    distinct?: ParticipacaoScalarFieldEnum | ParticipacaoScalarFieldEnum[]
  }

  /**
   * Participacao findMany
   */
  export type ParticipacaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participacao
     */
    select?: ParticipacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participacao
     */
    omit?: ParticipacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipacaoInclude<ExtArgs> | null
    /**
     * Filter, which Participacaos to fetch.
     */
    where?: ParticipacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Participacaos to fetch.
     */
    orderBy?: ParticipacaoOrderByWithRelationInput | ParticipacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Participacaos.
     */
    cursor?: ParticipacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Participacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Participacaos.
     */
    skip?: number
    distinct?: ParticipacaoScalarFieldEnum | ParticipacaoScalarFieldEnum[]
  }

  /**
   * Participacao create
   */
  export type ParticipacaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participacao
     */
    select?: ParticipacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participacao
     */
    omit?: ParticipacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipacaoInclude<ExtArgs> | null
    /**
     * The data needed to create a Participacao.
     */
    data: XOR<ParticipacaoCreateInput, ParticipacaoUncheckedCreateInput>
  }

  /**
   * Participacao createMany
   */
  export type ParticipacaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Participacaos.
     */
    data: ParticipacaoCreateManyInput | ParticipacaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Participacao update
   */
  export type ParticipacaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participacao
     */
    select?: ParticipacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participacao
     */
    omit?: ParticipacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipacaoInclude<ExtArgs> | null
    /**
     * The data needed to update a Participacao.
     */
    data: XOR<ParticipacaoUpdateInput, ParticipacaoUncheckedUpdateInput>
    /**
     * Choose, which Participacao to update.
     */
    where: ParticipacaoWhereUniqueInput
  }

  /**
   * Participacao updateMany
   */
  export type ParticipacaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Participacaos.
     */
    data: XOR<ParticipacaoUpdateManyMutationInput, ParticipacaoUncheckedUpdateManyInput>
    /**
     * Filter which Participacaos to update
     */
    where?: ParticipacaoWhereInput
    /**
     * Limit how many Participacaos to update.
     */
    limit?: number
  }

  /**
   * Participacao upsert
   */
  export type ParticipacaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participacao
     */
    select?: ParticipacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participacao
     */
    omit?: ParticipacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipacaoInclude<ExtArgs> | null
    /**
     * The filter to search for the Participacao to update in case it exists.
     */
    where: ParticipacaoWhereUniqueInput
    /**
     * In case the Participacao found by the `where` argument doesn't exist, create a new Participacao with this data.
     */
    create: XOR<ParticipacaoCreateInput, ParticipacaoUncheckedCreateInput>
    /**
     * In case the Participacao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ParticipacaoUpdateInput, ParticipacaoUncheckedUpdateInput>
  }

  /**
   * Participacao delete
   */
  export type ParticipacaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participacao
     */
    select?: ParticipacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participacao
     */
    omit?: ParticipacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipacaoInclude<ExtArgs> | null
    /**
     * Filter which Participacao to delete.
     */
    where: ParticipacaoWhereUniqueInput
  }

  /**
   * Participacao deleteMany
   */
  export type ParticipacaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Participacaos to delete
     */
    where?: ParticipacaoWhereInput
    /**
     * Limit how many Participacaos to delete.
     */
    limit?: number
  }

  /**
   * Participacao without action
   */
  export type ParticipacaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participacao
     */
    select?: ParticipacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participacao
     */
    omit?: ParticipacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipacaoInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CompetidorScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    cidade: 'cidade',
    estado: 'estado',
    academia: 'academia',
    vitorias: 'vitorias',
    medalhas: 'medalhas',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CompetidorScalarFieldEnum = (typeof CompetidorScalarFieldEnum)[keyof typeof CompetidorScalarFieldEnum]


  export const PartidaScalarFieldEnum: {
    id: 'id',
    tipo: 'tipo',
    data: 'data',
    resultado: 'resultado',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PartidaScalarFieldEnum = (typeof PartidaScalarFieldEnum)[keyof typeof PartidaScalarFieldEnum]


  export const ParticipacaoScalarFieldEnum: {
    id: 'id',
    partidaId: 'partidaId',
    competidorId: 'competidorId',
    resultado: 'resultado'
  };

  export type ParticipacaoScalarFieldEnum = (typeof ParticipacaoScalarFieldEnum)[keyof typeof ParticipacaoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const CompetidorOrderByRelevanceFieldEnum: {
    id: 'id',
    nome: 'nome',
    cidade: 'cidade',
    estado: 'estado',
    academia: 'academia'
  };

  export type CompetidorOrderByRelevanceFieldEnum = (typeof CompetidorOrderByRelevanceFieldEnum)[keyof typeof CompetidorOrderByRelevanceFieldEnum]


  export const PartidaOrderByRelevanceFieldEnum: {
    id: 'id',
    data: 'data',
    resultado: 'resultado'
  };

  export type PartidaOrderByRelevanceFieldEnum = (typeof PartidaOrderByRelevanceFieldEnum)[keyof typeof PartidaOrderByRelevanceFieldEnum]


  export const ParticipacaoOrderByRelevanceFieldEnum: {
    id: 'id',
    partidaId: 'partidaId',
    competidorId: 'competidorId',
    resultado: 'resultado'
  };

  export type ParticipacaoOrderByRelevanceFieldEnum = (typeof ParticipacaoOrderByRelevanceFieldEnum)[keyof typeof ParticipacaoOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'TipoPartida'
   */
  export type EnumTipoPartidaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoPartida'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type CompetidorWhereInput = {
    AND?: CompetidorWhereInput | CompetidorWhereInput[]
    OR?: CompetidorWhereInput[]
    NOT?: CompetidorWhereInput | CompetidorWhereInput[]
    id?: StringFilter<"Competidor"> | string
    nome?: StringFilter<"Competidor"> | string
    cidade?: StringFilter<"Competidor"> | string
    estado?: StringFilter<"Competidor"> | string
    academia?: StringFilter<"Competidor"> | string
    vitorias?: IntFilter<"Competidor"> | number
    medalhas?: IntFilter<"Competidor"> | number
    createdAt?: DateTimeFilter<"Competidor"> | Date | string
    updatedAt?: DateTimeFilter<"Competidor"> | Date | string
    participacoes?: ParticipacaoListRelationFilter
  }

  export type CompetidorOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
    academia?: SortOrder
    vitorias?: SortOrder
    medalhas?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    participacoes?: ParticipacaoOrderByRelationAggregateInput
    _relevance?: CompetidorOrderByRelevanceInput
  }

  export type CompetidorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CompetidorWhereInput | CompetidorWhereInput[]
    OR?: CompetidorWhereInput[]
    NOT?: CompetidorWhereInput | CompetidorWhereInput[]
    nome?: StringFilter<"Competidor"> | string
    cidade?: StringFilter<"Competidor"> | string
    estado?: StringFilter<"Competidor"> | string
    academia?: StringFilter<"Competidor"> | string
    vitorias?: IntFilter<"Competidor"> | number
    medalhas?: IntFilter<"Competidor"> | number
    createdAt?: DateTimeFilter<"Competidor"> | Date | string
    updatedAt?: DateTimeFilter<"Competidor"> | Date | string
    participacoes?: ParticipacaoListRelationFilter
  }, "id">

  export type CompetidorOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
    academia?: SortOrder
    vitorias?: SortOrder
    medalhas?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CompetidorCountOrderByAggregateInput
    _avg?: CompetidorAvgOrderByAggregateInput
    _max?: CompetidorMaxOrderByAggregateInput
    _min?: CompetidorMinOrderByAggregateInput
    _sum?: CompetidorSumOrderByAggregateInput
  }

  export type CompetidorScalarWhereWithAggregatesInput = {
    AND?: CompetidorScalarWhereWithAggregatesInput | CompetidorScalarWhereWithAggregatesInput[]
    OR?: CompetidorScalarWhereWithAggregatesInput[]
    NOT?: CompetidorScalarWhereWithAggregatesInput | CompetidorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Competidor"> | string
    nome?: StringWithAggregatesFilter<"Competidor"> | string
    cidade?: StringWithAggregatesFilter<"Competidor"> | string
    estado?: StringWithAggregatesFilter<"Competidor"> | string
    academia?: StringWithAggregatesFilter<"Competidor"> | string
    vitorias?: IntWithAggregatesFilter<"Competidor"> | number
    medalhas?: IntWithAggregatesFilter<"Competidor"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Competidor"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Competidor"> | Date | string
  }

  export type PartidaWhereInput = {
    AND?: PartidaWhereInput | PartidaWhereInput[]
    OR?: PartidaWhereInput[]
    NOT?: PartidaWhereInput | PartidaWhereInput[]
    id?: StringFilter<"Partida"> | string
    tipo?: EnumTipoPartidaFilter<"Partida"> | $Enums.TipoPartida
    data?: StringFilter<"Partida"> | string
    resultado?: StringFilter<"Partida"> | string
    createdAt?: DateTimeFilter<"Partida"> | Date | string
    updatedAt?: DateTimeFilter<"Partida"> | Date | string
    participantes?: ParticipacaoListRelationFilter
  }

  export type PartidaOrderByWithRelationInput = {
    id?: SortOrder
    tipo?: SortOrder
    data?: SortOrder
    resultado?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    participantes?: ParticipacaoOrderByRelationAggregateInput
    _relevance?: PartidaOrderByRelevanceInput
  }

  export type PartidaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PartidaWhereInput | PartidaWhereInput[]
    OR?: PartidaWhereInput[]
    NOT?: PartidaWhereInput | PartidaWhereInput[]
    tipo?: EnumTipoPartidaFilter<"Partida"> | $Enums.TipoPartida
    data?: StringFilter<"Partida"> | string
    resultado?: StringFilter<"Partida"> | string
    createdAt?: DateTimeFilter<"Partida"> | Date | string
    updatedAt?: DateTimeFilter<"Partida"> | Date | string
    participantes?: ParticipacaoListRelationFilter
  }, "id">

  export type PartidaOrderByWithAggregationInput = {
    id?: SortOrder
    tipo?: SortOrder
    data?: SortOrder
    resultado?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PartidaCountOrderByAggregateInput
    _max?: PartidaMaxOrderByAggregateInput
    _min?: PartidaMinOrderByAggregateInput
  }

  export type PartidaScalarWhereWithAggregatesInput = {
    AND?: PartidaScalarWhereWithAggregatesInput | PartidaScalarWhereWithAggregatesInput[]
    OR?: PartidaScalarWhereWithAggregatesInput[]
    NOT?: PartidaScalarWhereWithAggregatesInput | PartidaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Partida"> | string
    tipo?: EnumTipoPartidaWithAggregatesFilter<"Partida"> | $Enums.TipoPartida
    data?: StringWithAggregatesFilter<"Partida"> | string
    resultado?: StringWithAggregatesFilter<"Partida"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Partida"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Partida"> | Date | string
  }

  export type ParticipacaoWhereInput = {
    AND?: ParticipacaoWhereInput | ParticipacaoWhereInput[]
    OR?: ParticipacaoWhereInput[]
    NOT?: ParticipacaoWhereInput | ParticipacaoWhereInput[]
    id?: StringFilter<"Participacao"> | string
    partidaId?: StringFilter<"Participacao"> | string
    competidorId?: StringFilter<"Participacao"> | string
    resultado?: StringFilter<"Participacao"> | string
    partida?: XOR<PartidaScalarRelationFilter, PartidaWhereInput>
    competidor?: XOR<CompetidorScalarRelationFilter, CompetidorWhereInput>
  }

  export type ParticipacaoOrderByWithRelationInput = {
    id?: SortOrder
    partidaId?: SortOrder
    competidorId?: SortOrder
    resultado?: SortOrder
    partida?: PartidaOrderByWithRelationInput
    competidor?: CompetidorOrderByWithRelationInput
    _relevance?: ParticipacaoOrderByRelevanceInput
  }

  export type ParticipacaoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ParticipacaoWhereInput | ParticipacaoWhereInput[]
    OR?: ParticipacaoWhereInput[]
    NOT?: ParticipacaoWhereInput | ParticipacaoWhereInput[]
    partidaId?: StringFilter<"Participacao"> | string
    competidorId?: StringFilter<"Participacao"> | string
    resultado?: StringFilter<"Participacao"> | string
    partida?: XOR<PartidaScalarRelationFilter, PartidaWhereInput>
    competidor?: XOR<CompetidorScalarRelationFilter, CompetidorWhereInput>
  }, "id">

  export type ParticipacaoOrderByWithAggregationInput = {
    id?: SortOrder
    partidaId?: SortOrder
    competidorId?: SortOrder
    resultado?: SortOrder
    _count?: ParticipacaoCountOrderByAggregateInput
    _max?: ParticipacaoMaxOrderByAggregateInput
    _min?: ParticipacaoMinOrderByAggregateInput
  }

  export type ParticipacaoScalarWhereWithAggregatesInput = {
    AND?: ParticipacaoScalarWhereWithAggregatesInput | ParticipacaoScalarWhereWithAggregatesInput[]
    OR?: ParticipacaoScalarWhereWithAggregatesInput[]
    NOT?: ParticipacaoScalarWhereWithAggregatesInput | ParticipacaoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Participacao"> | string
    partidaId?: StringWithAggregatesFilter<"Participacao"> | string
    competidorId?: StringWithAggregatesFilter<"Participacao"> | string
    resultado?: StringWithAggregatesFilter<"Participacao"> | string
  }

  export type CompetidorCreateInput = {
    id?: string
    nome: string
    cidade: string
    estado: string
    academia: string
    vitorias?: number
    medalhas?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    participacoes?: ParticipacaoCreateNestedManyWithoutCompetidorInput
  }

  export type CompetidorUncheckedCreateInput = {
    id?: string
    nome: string
    cidade: string
    estado: string
    academia: string
    vitorias?: number
    medalhas?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    participacoes?: ParticipacaoUncheckedCreateNestedManyWithoutCompetidorInput
  }

  export type CompetidorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    academia?: StringFieldUpdateOperationsInput | string
    vitorias?: IntFieldUpdateOperationsInput | number
    medalhas?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participacoes?: ParticipacaoUpdateManyWithoutCompetidorNestedInput
  }

  export type CompetidorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    academia?: StringFieldUpdateOperationsInput | string
    vitorias?: IntFieldUpdateOperationsInput | number
    medalhas?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participacoes?: ParticipacaoUncheckedUpdateManyWithoutCompetidorNestedInput
  }

  export type CompetidorCreateManyInput = {
    id?: string
    nome: string
    cidade: string
    estado: string
    academia: string
    vitorias?: number
    medalhas?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompetidorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    academia?: StringFieldUpdateOperationsInput | string
    vitorias?: IntFieldUpdateOperationsInput | number
    medalhas?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompetidorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    academia?: StringFieldUpdateOperationsInput | string
    vitorias?: IntFieldUpdateOperationsInput | number
    medalhas?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartidaCreateInput = {
    id?: string
    tipo: $Enums.TipoPartida
    data: string
    resultado: string
    createdAt?: Date | string
    updatedAt?: Date | string
    participantes?: ParticipacaoCreateNestedManyWithoutPartidaInput
  }

  export type PartidaUncheckedCreateInput = {
    id?: string
    tipo: $Enums.TipoPartida
    data: string
    resultado: string
    createdAt?: Date | string
    updatedAt?: Date | string
    participantes?: ParticipacaoUncheckedCreateNestedManyWithoutPartidaInput
  }

  export type PartidaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoPartidaFieldUpdateOperationsInput | $Enums.TipoPartida
    data?: StringFieldUpdateOperationsInput | string
    resultado?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participantes?: ParticipacaoUpdateManyWithoutPartidaNestedInput
  }

  export type PartidaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoPartidaFieldUpdateOperationsInput | $Enums.TipoPartida
    data?: StringFieldUpdateOperationsInput | string
    resultado?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participantes?: ParticipacaoUncheckedUpdateManyWithoutPartidaNestedInput
  }

  export type PartidaCreateManyInput = {
    id?: string
    tipo: $Enums.TipoPartida
    data: string
    resultado: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PartidaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoPartidaFieldUpdateOperationsInput | $Enums.TipoPartida
    data?: StringFieldUpdateOperationsInput | string
    resultado?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartidaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoPartidaFieldUpdateOperationsInput | $Enums.TipoPartida
    data?: StringFieldUpdateOperationsInput | string
    resultado?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParticipacaoCreateInput = {
    id?: string
    resultado: string
    partida: PartidaCreateNestedOneWithoutParticipantesInput
    competidor: CompetidorCreateNestedOneWithoutParticipacoesInput
  }

  export type ParticipacaoUncheckedCreateInput = {
    id?: string
    partidaId: string
    competidorId: string
    resultado: string
  }

  export type ParticipacaoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    resultado?: StringFieldUpdateOperationsInput | string
    partida?: PartidaUpdateOneRequiredWithoutParticipantesNestedInput
    competidor?: CompetidorUpdateOneRequiredWithoutParticipacoesNestedInput
  }

  export type ParticipacaoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    partidaId?: StringFieldUpdateOperationsInput | string
    competidorId?: StringFieldUpdateOperationsInput | string
    resultado?: StringFieldUpdateOperationsInput | string
  }

  export type ParticipacaoCreateManyInput = {
    id?: string
    partidaId: string
    competidorId: string
    resultado: string
  }

  export type ParticipacaoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    resultado?: StringFieldUpdateOperationsInput | string
  }

  export type ParticipacaoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    partidaId?: StringFieldUpdateOperationsInput | string
    competidorId?: StringFieldUpdateOperationsInput | string
    resultado?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ParticipacaoListRelationFilter = {
    every?: ParticipacaoWhereInput
    some?: ParticipacaoWhereInput
    none?: ParticipacaoWhereInput
  }

  export type ParticipacaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompetidorOrderByRelevanceInput = {
    fields: CompetidorOrderByRelevanceFieldEnum | CompetidorOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CompetidorCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
    academia?: SortOrder
    vitorias?: SortOrder
    medalhas?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompetidorAvgOrderByAggregateInput = {
    vitorias?: SortOrder
    medalhas?: SortOrder
  }

  export type CompetidorMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
    academia?: SortOrder
    vitorias?: SortOrder
    medalhas?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompetidorMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
    academia?: SortOrder
    vitorias?: SortOrder
    medalhas?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompetidorSumOrderByAggregateInput = {
    vitorias?: SortOrder
    medalhas?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumTipoPartidaFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoPartida | EnumTipoPartidaFieldRefInput<$PrismaModel>
    in?: $Enums.TipoPartida[]
    notIn?: $Enums.TipoPartida[]
    not?: NestedEnumTipoPartidaFilter<$PrismaModel> | $Enums.TipoPartida
  }

  export type PartidaOrderByRelevanceInput = {
    fields: PartidaOrderByRelevanceFieldEnum | PartidaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PartidaCountOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
    data?: SortOrder
    resultado?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PartidaMaxOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
    data?: SortOrder
    resultado?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PartidaMinOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
    data?: SortOrder
    resultado?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumTipoPartidaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoPartida | EnumTipoPartidaFieldRefInput<$PrismaModel>
    in?: $Enums.TipoPartida[]
    notIn?: $Enums.TipoPartida[]
    not?: NestedEnumTipoPartidaWithAggregatesFilter<$PrismaModel> | $Enums.TipoPartida
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoPartidaFilter<$PrismaModel>
    _max?: NestedEnumTipoPartidaFilter<$PrismaModel>
  }

  export type PartidaScalarRelationFilter = {
    is?: PartidaWhereInput
    isNot?: PartidaWhereInput
  }

  export type CompetidorScalarRelationFilter = {
    is?: CompetidorWhereInput
    isNot?: CompetidorWhereInput
  }

  export type ParticipacaoOrderByRelevanceInput = {
    fields: ParticipacaoOrderByRelevanceFieldEnum | ParticipacaoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ParticipacaoCountOrderByAggregateInput = {
    id?: SortOrder
    partidaId?: SortOrder
    competidorId?: SortOrder
    resultado?: SortOrder
  }

  export type ParticipacaoMaxOrderByAggregateInput = {
    id?: SortOrder
    partidaId?: SortOrder
    competidorId?: SortOrder
    resultado?: SortOrder
  }

  export type ParticipacaoMinOrderByAggregateInput = {
    id?: SortOrder
    partidaId?: SortOrder
    competidorId?: SortOrder
    resultado?: SortOrder
  }

  export type ParticipacaoCreateNestedManyWithoutCompetidorInput = {
    create?: XOR<ParticipacaoCreateWithoutCompetidorInput, ParticipacaoUncheckedCreateWithoutCompetidorInput> | ParticipacaoCreateWithoutCompetidorInput[] | ParticipacaoUncheckedCreateWithoutCompetidorInput[]
    connectOrCreate?: ParticipacaoCreateOrConnectWithoutCompetidorInput | ParticipacaoCreateOrConnectWithoutCompetidorInput[]
    createMany?: ParticipacaoCreateManyCompetidorInputEnvelope
    connect?: ParticipacaoWhereUniqueInput | ParticipacaoWhereUniqueInput[]
  }

  export type ParticipacaoUncheckedCreateNestedManyWithoutCompetidorInput = {
    create?: XOR<ParticipacaoCreateWithoutCompetidorInput, ParticipacaoUncheckedCreateWithoutCompetidorInput> | ParticipacaoCreateWithoutCompetidorInput[] | ParticipacaoUncheckedCreateWithoutCompetidorInput[]
    connectOrCreate?: ParticipacaoCreateOrConnectWithoutCompetidorInput | ParticipacaoCreateOrConnectWithoutCompetidorInput[]
    createMany?: ParticipacaoCreateManyCompetidorInputEnvelope
    connect?: ParticipacaoWhereUniqueInput | ParticipacaoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ParticipacaoUpdateManyWithoutCompetidorNestedInput = {
    create?: XOR<ParticipacaoCreateWithoutCompetidorInput, ParticipacaoUncheckedCreateWithoutCompetidorInput> | ParticipacaoCreateWithoutCompetidorInput[] | ParticipacaoUncheckedCreateWithoutCompetidorInput[]
    connectOrCreate?: ParticipacaoCreateOrConnectWithoutCompetidorInput | ParticipacaoCreateOrConnectWithoutCompetidorInput[]
    upsert?: ParticipacaoUpsertWithWhereUniqueWithoutCompetidorInput | ParticipacaoUpsertWithWhereUniqueWithoutCompetidorInput[]
    createMany?: ParticipacaoCreateManyCompetidorInputEnvelope
    set?: ParticipacaoWhereUniqueInput | ParticipacaoWhereUniqueInput[]
    disconnect?: ParticipacaoWhereUniqueInput | ParticipacaoWhereUniqueInput[]
    delete?: ParticipacaoWhereUniqueInput | ParticipacaoWhereUniqueInput[]
    connect?: ParticipacaoWhereUniqueInput | ParticipacaoWhereUniqueInput[]
    update?: ParticipacaoUpdateWithWhereUniqueWithoutCompetidorInput | ParticipacaoUpdateWithWhereUniqueWithoutCompetidorInput[]
    updateMany?: ParticipacaoUpdateManyWithWhereWithoutCompetidorInput | ParticipacaoUpdateManyWithWhereWithoutCompetidorInput[]
    deleteMany?: ParticipacaoScalarWhereInput | ParticipacaoScalarWhereInput[]
  }

  export type ParticipacaoUncheckedUpdateManyWithoutCompetidorNestedInput = {
    create?: XOR<ParticipacaoCreateWithoutCompetidorInput, ParticipacaoUncheckedCreateWithoutCompetidorInput> | ParticipacaoCreateWithoutCompetidorInput[] | ParticipacaoUncheckedCreateWithoutCompetidorInput[]
    connectOrCreate?: ParticipacaoCreateOrConnectWithoutCompetidorInput | ParticipacaoCreateOrConnectWithoutCompetidorInput[]
    upsert?: ParticipacaoUpsertWithWhereUniqueWithoutCompetidorInput | ParticipacaoUpsertWithWhereUniqueWithoutCompetidorInput[]
    createMany?: ParticipacaoCreateManyCompetidorInputEnvelope
    set?: ParticipacaoWhereUniqueInput | ParticipacaoWhereUniqueInput[]
    disconnect?: ParticipacaoWhereUniqueInput | ParticipacaoWhereUniqueInput[]
    delete?: ParticipacaoWhereUniqueInput | ParticipacaoWhereUniqueInput[]
    connect?: ParticipacaoWhereUniqueInput | ParticipacaoWhereUniqueInput[]
    update?: ParticipacaoUpdateWithWhereUniqueWithoutCompetidorInput | ParticipacaoUpdateWithWhereUniqueWithoutCompetidorInput[]
    updateMany?: ParticipacaoUpdateManyWithWhereWithoutCompetidorInput | ParticipacaoUpdateManyWithWhereWithoutCompetidorInput[]
    deleteMany?: ParticipacaoScalarWhereInput | ParticipacaoScalarWhereInput[]
  }

  export type ParticipacaoCreateNestedManyWithoutPartidaInput = {
    create?: XOR<ParticipacaoCreateWithoutPartidaInput, ParticipacaoUncheckedCreateWithoutPartidaInput> | ParticipacaoCreateWithoutPartidaInput[] | ParticipacaoUncheckedCreateWithoutPartidaInput[]
    connectOrCreate?: ParticipacaoCreateOrConnectWithoutPartidaInput | ParticipacaoCreateOrConnectWithoutPartidaInput[]
    createMany?: ParticipacaoCreateManyPartidaInputEnvelope
    connect?: ParticipacaoWhereUniqueInput | ParticipacaoWhereUniqueInput[]
  }

  export type ParticipacaoUncheckedCreateNestedManyWithoutPartidaInput = {
    create?: XOR<ParticipacaoCreateWithoutPartidaInput, ParticipacaoUncheckedCreateWithoutPartidaInput> | ParticipacaoCreateWithoutPartidaInput[] | ParticipacaoUncheckedCreateWithoutPartidaInput[]
    connectOrCreate?: ParticipacaoCreateOrConnectWithoutPartidaInput | ParticipacaoCreateOrConnectWithoutPartidaInput[]
    createMany?: ParticipacaoCreateManyPartidaInputEnvelope
    connect?: ParticipacaoWhereUniqueInput | ParticipacaoWhereUniqueInput[]
  }

  export type EnumTipoPartidaFieldUpdateOperationsInput = {
    set?: $Enums.TipoPartida
  }

  export type ParticipacaoUpdateManyWithoutPartidaNestedInput = {
    create?: XOR<ParticipacaoCreateWithoutPartidaInput, ParticipacaoUncheckedCreateWithoutPartidaInput> | ParticipacaoCreateWithoutPartidaInput[] | ParticipacaoUncheckedCreateWithoutPartidaInput[]
    connectOrCreate?: ParticipacaoCreateOrConnectWithoutPartidaInput | ParticipacaoCreateOrConnectWithoutPartidaInput[]
    upsert?: ParticipacaoUpsertWithWhereUniqueWithoutPartidaInput | ParticipacaoUpsertWithWhereUniqueWithoutPartidaInput[]
    createMany?: ParticipacaoCreateManyPartidaInputEnvelope
    set?: ParticipacaoWhereUniqueInput | ParticipacaoWhereUniqueInput[]
    disconnect?: ParticipacaoWhereUniqueInput | ParticipacaoWhereUniqueInput[]
    delete?: ParticipacaoWhereUniqueInput | ParticipacaoWhereUniqueInput[]
    connect?: ParticipacaoWhereUniqueInput | ParticipacaoWhereUniqueInput[]
    update?: ParticipacaoUpdateWithWhereUniqueWithoutPartidaInput | ParticipacaoUpdateWithWhereUniqueWithoutPartidaInput[]
    updateMany?: ParticipacaoUpdateManyWithWhereWithoutPartidaInput | ParticipacaoUpdateManyWithWhereWithoutPartidaInput[]
    deleteMany?: ParticipacaoScalarWhereInput | ParticipacaoScalarWhereInput[]
  }

  export type ParticipacaoUncheckedUpdateManyWithoutPartidaNestedInput = {
    create?: XOR<ParticipacaoCreateWithoutPartidaInput, ParticipacaoUncheckedCreateWithoutPartidaInput> | ParticipacaoCreateWithoutPartidaInput[] | ParticipacaoUncheckedCreateWithoutPartidaInput[]
    connectOrCreate?: ParticipacaoCreateOrConnectWithoutPartidaInput | ParticipacaoCreateOrConnectWithoutPartidaInput[]
    upsert?: ParticipacaoUpsertWithWhereUniqueWithoutPartidaInput | ParticipacaoUpsertWithWhereUniqueWithoutPartidaInput[]
    createMany?: ParticipacaoCreateManyPartidaInputEnvelope
    set?: ParticipacaoWhereUniqueInput | ParticipacaoWhereUniqueInput[]
    disconnect?: ParticipacaoWhereUniqueInput | ParticipacaoWhereUniqueInput[]
    delete?: ParticipacaoWhereUniqueInput | ParticipacaoWhereUniqueInput[]
    connect?: ParticipacaoWhereUniqueInput | ParticipacaoWhereUniqueInput[]
    update?: ParticipacaoUpdateWithWhereUniqueWithoutPartidaInput | ParticipacaoUpdateWithWhereUniqueWithoutPartidaInput[]
    updateMany?: ParticipacaoUpdateManyWithWhereWithoutPartidaInput | ParticipacaoUpdateManyWithWhereWithoutPartidaInput[]
    deleteMany?: ParticipacaoScalarWhereInput | ParticipacaoScalarWhereInput[]
  }

  export type PartidaCreateNestedOneWithoutParticipantesInput = {
    create?: XOR<PartidaCreateWithoutParticipantesInput, PartidaUncheckedCreateWithoutParticipantesInput>
    connectOrCreate?: PartidaCreateOrConnectWithoutParticipantesInput
    connect?: PartidaWhereUniqueInput
  }

  export type CompetidorCreateNestedOneWithoutParticipacoesInput = {
    create?: XOR<CompetidorCreateWithoutParticipacoesInput, CompetidorUncheckedCreateWithoutParticipacoesInput>
    connectOrCreate?: CompetidorCreateOrConnectWithoutParticipacoesInput
    connect?: CompetidorWhereUniqueInput
  }

  export type PartidaUpdateOneRequiredWithoutParticipantesNestedInput = {
    create?: XOR<PartidaCreateWithoutParticipantesInput, PartidaUncheckedCreateWithoutParticipantesInput>
    connectOrCreate?: PartidaCreateOrConnectWithoutParticipantesInput
    upsert?: PartidaUpsertWithoutParticipantesInput
    connect?: PartidaWhereUniqueInput
    update?: XOR<XOR<PartidaUpdateToOneWithWhereWithoutParticipantesInput, PartidaUpdateWithoutParticipantesInput>, PartidaUncheckedUpdateWithoutParticipantesInput>
  }

  export type CompetidorUpdateOneRequiredWithoutParticipacoesNestedInput = {
    create?: XOR<CompetidorCreateWithoutParticipacoesInput, CompetidorUncheckedCreateWithoutParticipacoesInput>
    connectOrCreate?: CompetidorCreateOrConnectWithoutParticipacoesInput
    upsert?: CompetidorUpsertWithoutParticipacoesInput
    connect?: CompetidorWhereUniqueInput
    update?: XOR<XOR<CompetidorUpdateToOneWithWhereWithoutParticipacoesInput, CompetidorUpdateWithoutParticipacoesInput>, CompetidorUncheckedUpdateWithoutParticipacoesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumTipoPartidaFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoPartida | EnumTipoPartidaFieldRefInput<$PrismaModel>
    in?: $Enums.TipoPartida[]
    notIn?: $Enums.TipoPartida[]
    not?: NestedEnumTipoPartidaFilter<$PrismaModel> | $Enums.TipoPartida
  }

  export type NestedEnumTipoPartidaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoPartida | EnumTipoPartidaFieldRefInput<$PrismaModel>
    in?: $Enums.TipoPartida[]
    notIn?: $Enums.TipoPartida[]
    not?: NestedEnumTipoPartidaWithAggregatesFilter<$PrismaModel> | $Enums.TipoPartida
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoPartidaFilter<$PrismaModel>
    _max?: NestedEnumTipoPartidaFilter<$PrismaModel>
  }

  export type ParticipacaoCreateWithoutCompetidorInput = {
    id?: string
    resultado: string
    partida: PartidaCreateNestedOneWithoutParticipantesInput
  }

  export type ParticipacaoUncheckedCreateWithoutCompetidorInput = {
    id?: string
    partidaId: string
    resultado: string
  }

  export type ParticipacaoCreateOrConnectWithoutCompetidorInput = {
    where: ParticipacaoWhereUniqueInput
    create: XOR<ParticipacaoCreateWithoutCompetidorInput, ParticipacaoUncheckedCreateWithoutCompetidorInput>
  }

  export type ParticipacaoCreateManyCompetidorInputEnvelope = {
    data: ParticipacaoCreateManyCompetidorInput | ParticipacaoCreateManyCompetidorInput[]
    skipDuplicates?: boolean
  }

  export type ParticipacaoUpsertWithWhereUniqueWithoutCompetidorInput = {
    where: ParticipacaoWhereUniqueInput
    update: XOR<ParticipacaoUpdateWithoutCompetidorInput, ParticipacaoUncheckedUpdateWithoutCompetidorInput>
    create: XOR<ParticipacaoCreateWithoutCompetidorInput, ParticipacaoUncheckedCreateWithoutCompetidorInput>
  }

  export type ParticipacaoUpdateWithWhereUniqueWithoutCompetidorInput = {
    where: ParticipacaoWhereUniqueInput
    data: XOR<ParticipacaoUpdateWithoutCompetidorInput, ParticipacaoUncheckedUpdateWithoutCompetidorInput>
  }

  export type ParticipacaoUpdateManyWithWhereWithoutCompetidorInput = {
    where: ParticipacaoScalarWhereInput
    data: XOR<ParticipacaoUpdateManyMutationInput, ParticipacaoUncheckedUpdateManyWithoutCompetidorInput>
  }

  export type ParticipacaoScalarWhereInput = {
    AND?: ParticipacaoScalarWhereInput | ParticipacaoScalarWhereInput[]
    OR?: ParticipacaoScalarWhereInput[]
    NOT?: ParticipacaoScalarWhereInput | ParticipacaoScalarWhereInput[]
    id?: StringFilter<"Participacao"> | string
    partidaId?: StringFilter<"Participacao"> | string
    competidorId?: StringFilter<"Participacao"> | string
    resultado?: StringFilter<"Participacao"> | string
  }

  export type ParticipacaoCreateWithoutPartidaInput = {
    id?: string
    resultado: string
    competidor: CompetidorCreateNestedOneWithoutParticipacoesInput
  }

  export type ParticipacaoUncheckedCreateWithoutPartidaInput = {
    id?: string
    competidorId: string
    resultado: string
  }

  export type ParticipacaoCreateOrConnectWithoutPartidaInput = {
    where: ParticipacaoWhereUniqueInput
    create: XOR<ParticipacaoCreateWithoutPartidaInput, ParticipacaoUncheckedCreateWithoutPartidaInput>
  }

  export type ParticipacaoCreateManyPartidaInputEnvelope = {
    data: ParticipacaoCreateManyPartidaInput | ParticipacaoCreateManyPartidaInput[]
    skipDuplicates?: boolean
  }

  export type ParticipacaoUpsertWithWhereUniqueWithoutPartidaInput = {
    where: ParticipacaoWhereUniqueInput
    update: XOR<ParticipacaoUpdateWithoutPartidaInput, ParticipacaoUncheckedUpdateWithoutPartidaInput>
    create: XOR<ParticipacaoCreateWithoutPartidaInput, ParticipacaoUncheckedCreateWithoutPartidaInput>
  }

  export type ParticipacaoUpdateWithWhereUniqueWithoutPartidaInput = {
    where: ParticipacaoWhereUniqueInput
    data: XOR<ParticipacaoUpdateWithoutPartidaInput, ParticipacaoUncheckedUpdateWithoutPartidaInput>
  }

  export type ParticipacaoUpdateManyWithWhereWithoutPartidaInput = {
    where: ParticipacaoScalarWhereInput
    data: XOR<ParticipacaoUpdateManyMutationInput, ParticipacaoUncheckedUpdateManyWithoutPartidaInput>
  }

  export type PartidaCreateWithoutParticipantesInput = {
    id?: string
    tipo: $Enums.TipoPartida
    data: string
    resultado: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PartidaUncheckedCreateWithoutParticipantesInput = {
    id?: string
    tipo: $Enums.TipoPartida
    data: string
    resultado: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PartidaCreateOrConnectWithoutParticipantesInput = {
    where: PartidaWhereUniqueInput
    create: XOR<PartidaCreateWithoutParticipantesInput, PartidaUncheckedCreateWithoutParticipantesInput>
  }

  export type CompetidorCreateWithoutParticipacoesInput = {
    id?: string
    nome: string
    cidade: string
    estado: string
    academia: string
    vitorias?: number
    medalhas?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompetidorUncheckedCreateWithoutParticipacoesInput = {
    id?: string
    nome: string
    cidade: string
    estado: string
    academia: string
    vitorias?: number
    medalhas?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompetidorCreateOrConnectWithoutParticipacoesInput = {
    where: CompetidorWhereUniqueInput
    create: XOR<CompetidorCreateWithoutParticipacoesInput, CompetidorUncheckedCreateWithoutParticipacoesInput>
  }

  export type PartidaUpsertWithoutParticipantesInput = {
    update: XOR<PartidaUpdateWithoutParticipantesInput, PartidaUncheckedUpdateWithoutParticipantesInput>
    create: XOR<PartidaCreateWithoutParticipantesInput, PartidaUncheckedCreateWithoutParticipantesInput>
    where?: PartidaWhereInput
  }

  export type PartidaUpdateToOneWithWhereWithoutParticipantesInput = {
    where?: PartidaWhereInput
    data: XOR<PartidaUpdateWithoutParticipantesInput, PartidaUncheckedUpdateWithoutParticipantesInput>
  }

  export type PartidaUpdateWithoutParticipantesInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoPartidaFieldUpdateOperationsInput | $Enums.TipoPartida
    data?: StringFieldUpdateOperationsInput | string
    resultado?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartidaUncheckedUpdateWithoutParticipantesInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoPartidaFieldUpdateOperationsInput | $Enums.TipoPartida
    data?: StringFieldUpdateOperationsInput | string
    resultado?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompetidorUpsertWithoutParticipacoesInput = {
    update: XOR<CompetidorUpdateWithoutParticipacoesInput, CompetidorUncheckedUpdateWithoutParticipacoesInput>
    create: XOR<CompetidorCreateWithoutParticipacoesInput, CompetidorUncheckedCreateWithoutParticipacoesInput>
    where?: CompetidorWhereInput
  }

  export type CompetidorUpdateToOneWithWhereWithoutParticipacoesInput = {
    where?: CompetidorWhereInput
    data: XOR<CompetidorUpdateWithoutParticipacoesInput, CompetidorUncheckedUpdateWithoutParticipacoesInput>
  }

  export type CompetidorUpdateWithoutParticipacoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    academia?: StringFieldUpdateOperationsInput | string
    vitorias?: IntFieldUpdateOperationsInput | number
    medalhas?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompetidorUncheckedUpdateWithoutParticipacoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    academia?: StringFieldUpdateOperationsInput | string
    vitorias?: IntFieldUpdateOperationsInput | number
    medalhas?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParticipacaoCreateManyCompetidorInput = {
    id?: string
    partidaId: string
    resultado: string
  }

  export type ParticipacaoUpdateWithoutCompetidorInput = {
    id?: StringFieldUpdateOperationsInput | string
    resultado?: StringFieldUpdateOperationsInput | string
    partida?: PartidaUpdateOneRequiredWithoutParticipantesNestedInput
  }

  export type ParticipacaoUncheckedUpdateWithoutCompetidorInput = {
    id?: StringFieldUpdateOperationsInput | string
    partidaId?: StringFieldUpdateOperationsInput | string
    resultado?: StringFieldUpdateOperationsInput | string
  }

  export type ParticipacaoUncheckedUpdateManyWithoutCompetidorInput = {
    id?: StringFieldUpdateOperationsInput | string
    partidaId?: StringFieldUpdateOperationsInput | string
    resultado?: StringFieldUpdateOperationsInput | string
  }

  export type ParticipacaoCreateManyPartidaInput = {
    id?: string
    competidorId: string
    resultado: string
  }

  export type ParticipacaoUpdateWithoutPartidaInput = {
    id?: StringFieldUpdateOperationsInput | string
    resultado?: StringFieldUpdateOperationsInput | string
    competidor?: CompetidorUpdateOneRequiredWithoutParticipacoesNestedInput
  }

  export type ParticipacaoUncheckedUpdateWithoutPartidaInput = {
    id?: StringFieldUpdateOperationsInput | string
    competidorId?: StringFieldUpdateOperationsInput | string
    resultado?: StringFieldUpdateOperationsInput | string
  }

  export type ParticipacaoUncheckedUpdateManyWithoutPartidaInput = {
    id?: StringFieldUpdateOperationsInput | string
    competidorId?: StringFieldUpdateOperationsInput | string
    resultado?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}