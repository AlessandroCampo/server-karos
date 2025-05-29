
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
 * Model Card
 * 
 */
export type Card = $Result.DefaultSelection<Prisma.$CardPayload>
/**
 * Model Keyword
 * 
 */
export type Keyword = $Result.DefaultSelection<Prisma.$KeywordPayload>
/**
 * Model CardKeyword
 * 
 */
export type CardKeyword = $Result.DefaultSelection<Prisma.$CardKeywordPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Type: {
  MINION: 'MINION',
  SPELL: 'SPELL',
  TRAP: 'TRAP'
};

export type Type = (typeof Type)[keyof typeof Type]


export const SubType: {
  CONTINOUS: 'CONTINOUS',
  EQUIP: 'EQUIP'
};

export type SubType = (typeof SubType)[keyof typeof SubType]


export const Color: {
  RED: 'RED',
  BLUE: 'BLUE',
  BLACK: 'BLACK',
  GREEN: 'GREEN',
  YELLOW: 'YELLOW',
  BROWN: 'BROWN',
  WHITE: 'WHITE'
};

export type Color = (typeof Color)[keyof typeof Color]


export const Rarity: {
  COMMON: 'COMMON',
  UNCOMMON: 'UNCOMMON',
  RARE: 'RARE',
  EPIC: 'EPIC',
  LEGENDARY: 'LEGENDARY'
};

export type Rarity = (typeof Rarity)[keyof typeof Rarity]

}

export type Type = $Enums.Type

export const Type: typeof $Enums.Type

export type SubType = $Enums.SubType

export const SubType: typeof $Enums.SubType

export type Color = $Enums.Color

export const Color: typeof $Enums.Color

export type Rarity = $Enums.Rarity

export const Rarity: typeof $Enums.Rarity

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Cards
 * const cards = await prisma.card.findMany()
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
   * // Fetch zero or more Cards
   * const cards = await prisma.card.findMany()
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
   * `prisma.card`: Exposes CRUD operations for the **Card** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cards
    * const cards = await prisma.card.findMany()
    * ```
    */
  get card(): Prisma.CardDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.keyword`: Exposes CRUD operations for the **Keyword** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Keywords
    * const keywords = await prisma.keyword.findMany()
    * ```
    */
  get keyword(): Prisma.KeywordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cardKeyword`: Exposes CRUD operations for the **CardKeyword** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CardKeywords
    * const cardKeywords = await prisma.cardKeyword.findMany()
    * ```
    */
  get cardKeyword(): Prisma.CardKeywordDelegate<ExtArgs, ClientOptions>;
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
    Card: 'Card',
    Keyword: 'Keyword',
    CardKeyword: 'CardKeyword'
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
      modelProps: "card" | "keyword" | "cardKeyword"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Card: {
        payload: Prisma.$CardPayload<ExtArgs>
        fields: Prisma.CardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>
          }
          findFirst: {
            args: Prisma.CardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>
          }
          findMany: {
            args: Prisma.CardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>[]
          }
          create: {
            args: Prisma.CardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>
          }
          createMany: {
            args: Prisma.CardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>
          }
          update: {
            args: Prisma.CardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>
          }
          deleteMany: {
            args: Prisma.CardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>
          }
          aggregate: {
            args: Prisma.CardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCard>
          }
          groupBy: {
            args: Prisma.CardGroupByArgs<ExtArgs>
            result: $Utils.Optional<CardGroupByOutputType>[]
          }
          count: {
            args: Prisma.CardCountArgs<ExtArgs>
            result: $Utils.Optional<CardCountAggregateOutputType> | number
          }
        }
      }
      Keyword: {
        payload: Prisma.$KeywordPayload<ExtArgs>
        fields: Prisma.KeywordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KeywordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeywordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KeywordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeywordPayload>
          }
          findFirst: {
            args: Prisma.KeywordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeywordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KeywordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeywordPayload>
          }
          findMany: {
            args: Prisma.KeywordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeywordPayload>[]
          }
          create: {
            args: Prisma.KeywordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeywordPayload>
          }
          createMany: {
            args: Prisma.KeywordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.KeywordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeywordPayload>
          }
          update: {
            args: Prisma.KeywordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeywordPayload>
          }
          deleteMany: {
            args: Prisma.KeywordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.KeywordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.KeywordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeywordPayload>
          }
          aggregate: {
            args: Prisma.KeywordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKeyword>
          }
          groupBy: {
            args: Prisma.KeywordGroupByArgs<ExtArgs>
            result: $Utils.Optional<KeywordGroupByOutputType>[]
          }
          count: {
            args: Prisma.KeywordCountArgs<ExtArgs>
            result: $Utils.Optional<KeywordCountAggregateOutputType> | number
          }
        }
      }
      CardKeyword: {
        payload: Prisma.$CardKeywordPayload<ExtArgs>
        fields: Prisma.CardKeywordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CardKeywordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardKeywordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CardKeywordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardKeywordPayload>
          }
          findFirst: {
            args: Prisma.CardKeywordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardKeywordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CardKeywordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardKeywordPayload>
          }
          findMany: {
            args: Prisma.CardKeywordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardKeywordPayload>[]
          }
          create: {
            args: Prisma.CardKeywordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardKeywordPayload>
          }
          createMany: {
            args: Prisma.CardKeywordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CardKeywordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardKeywordPayload>
          }
          update: {
            args: Prisma.CardKeywordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardKeywordPayload>
          }
          deleteMany: {
            args: Prisma.CardKeywordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CardKeywordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CardKeywordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardKeywordPayload>
          }
          aggregate: {
            args: Prisma.CardKeywordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCardKeyword>
          }
          groupBy: {
            args: Prisma.CardKeywordGroupByArgs<ExtArgs>
            result: $Utils.Optional<CardKeywordGroupByOutputType>[]
          }
          count: {
            args: Prisma.CardKeywordCountArgs<ExtArgs>
            result: $Utils.Optional<CardKeywordCountAggregateOutputType> | number
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
    card?: CardOmit
    keyword?: KeywordOmit
    cardKeyword?: CardKeywordOmit
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
   * Count Type CardCountOutputType
   */

  export type CardCountOutputType = {
    cardKeywords: number
  }

  export type CardCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cardKeywords?: boolean | CardCountOutputTypeCountCardKeywordsArgs
  }

  // Custom InputTypes
  /**
   * CardCountOutputType without action
   */
  export type CardCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardCountOutputType
     */
    select?: CardCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CardCountOutputType without action
   */
  export type CardCountOutputTypeCountCardKeywordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CardKeywordWhereInput
  }


  /**
   * Count Type KeywordCountOutputType
   */

  export type KeywordCountOutputType = {
    cardKeywords: number
  }

  export type KeywordCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cardKeywords?: boolean | KeywordCountOutputTypeCountCardKeywordsArgs
  }

  // Custom InputTypes
  /**
   * KeywordCountOutputType without action
   */
  export type KeywordCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeywordCountOutputType
     */
    select?: KeywordCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * KeywordCountOutputType without action
   */
  export type KeywordCountOutputTypeCountCardKeywordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CardKeywordWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Card
   */

  export type AggregateCard = {
    _count: CardCountAggregateOutputType | null
    _avg: CardAvgAggregateOutputType | null
    _sum: CardSumAggregateOutputType | null
    _min: CardMinAggregateOutputType | null
    _max: CardMaxAggregateOutputType | null
  }

  export type CardAvgAggregateOutputType = {
    attack: number | null
    defense: number | null
    cost: number | null
  }

  export type CardSumAggregateOutputType = {
    attack: number | null
    defense: number | null
    cost: number | null
  }

  export type CardMinAggregateOutputType = {
    id: string | null
    name: string | null
    type: $Enums.Type | null
    color: $Enums.Color | null
    subtype: $Enums.SubType | null
    attack: number | null
    defense: number | null
    cost: number | null
    rarity: $Enums.Rarity | null
    effectName: string | null
    effectType: string | null
    effectText: string | null
  }

  export type CardMaxAggregateOutputType = {
    id: string | null
    name: string | null
    type: $Enums.Type | null
    color: $Enums.Color | null
    subtype: $Enums.SubType | null
    attack: number | null
    defense: number | null
    cost: number | null
    rarity: $Enums.Rarity | null
    effectName: string | null
    effectType: string | null
    effectText: string | null
  }

  export type CardCountAggregateOutputType = {
    id: number
    name: number
    type: number
    color: number
    subtype: number
    attack: number
    defense: number
    cost: number
    rarity: number
    effectName: number
    effectType: number
    effectText: number
    _all: number
  }


  export type CardAvgAggregateInputType = {
    attack?: true
    defense?: true
    cost?: true
  }

  export type CardSumAggregateInputType = {
    attack?: true
    defense?: true
    cost?: true
  }

  export type CardMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    color?: true
    subtype?: true
    attack?: true
    defense?: true
    cost?: true
    rarity?: true
    effectName?: true
    effectType?: true
    effectText?: true
  }

  export type CardMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    color?: true
    subtype?: true
    attack?: true
    defense?: true
    cost?: true
    rarity?: true
    effectName?: true
    effectType?: true
    effectText?: true
  }

  export type CardCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    color?: true
    subtype?: true
    attack?: true
    defense?: true
    cost?: true
    rarity?: true
    effectName?: true
    effectType?: true
    effectText?: true
    _all?: true
  }

  export type CardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Card to aggregate.
     */
    where?: CardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cards to fetch.
     */
    orderBy?: CardOrderByWithRelationInput | CardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cards
    **/
    _count?: true | CardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CardAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CardSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CardMaxAggregateInputType
  }

  export type GetCardAggregateType<T extends CardAggregateArgs> = {
        [P in keyof T & keyof AggregateCard]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCard[P]>
      : GetScalarType<T[P], AggregateCard[P]>
  }




  export type CardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CardWhereInput
    orderBy?: CardOrderByWithAggregationInput | CardOrderByWithAggregationInput[]
    by: CardScalarFieldEnum[] | CardScalarFieldEnum
    having?: CardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CardCountAggregateInputType | true
    _avg?: CardAvgAggregateInputType
    _sum?: CardSumAggregateInputType
    _min?: CardMinAggregateInputType
    _max?: CardMaxAggregateInputType
  }

  export type CardGroupByOutputType = {
    id: string
    name: string
    type: $Enums.Type
    color: $Enums.Color
    subtype: $Enums.SubType | null
    attack: number | null
    defense: number | null
    cost: number
    rarity: $Enums.Rarity
    effectName: string | null
    effectType: string | null
    effectText: string | null
    _count: CardCountAggregateOutputType | null
    _avg: CardAvgAggregateOutputType | null
    _sum: CardSumAggregateOutputType | null
    _min: CardMinAggregateOutputType | null
    _max: CardMaxAggregateOutputType | null
  }

  type GetCardGroupByPayload<T extends CardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CardGroupByOutputType[P]>
            : GetScalarType<T[P], CardGroupByOutputType[P]>
        }
      >
    >


  export type CardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    color?: boolean
    subtype?: boolean
    attack?: boolean
    defense?: boolean
    cost?: boolean
    rarity?: boolean
    effectName?: boolean
    effectType?: boolean
    effectText?: boolean
    cardKeywords?: boolean | Card$cardKeywordsArgs<ExtArgs>
    _count?: boolean | CardCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["card"]>



  export type CardSelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
    color?: boolean
    subtype?: boolean
    attack?: boolean
    defense?: boolean
    cost?: boolean
    rarity?: boolean
    effectName?: boolean
    effectType?: boolean
    effectText?: boolean
  }

  export type CardOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "type" | "color" | "subtype" | "attack" | "defense" | "cost" | "rarity" | "effectName" | "effectType" | "effectText", ExtArgs["result"]["card"]>
  export type CardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cardKeywords?: boolean | Card$cardKeywordsArgs<ExtArgs>
    _count?: boolean | CardCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Card"
    objects: {
      cardKeywords: Prisma.$CardKeywordPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      type: $Enums.Type
      color: $Enums.Color
      subtype: $Enums.SubType | null
      attack: number | null
      defense: number | null
      cost: number
      rarity: $Enums.Rarity
      effectName: string | null
      effectType: string | null
      effectText: string | null
    }, ExtArgs["result"]["card"]>
    composites: {}
  }

  type CardGetPayload<S extends boolean | null | undefined | CardDefaultArgs> = $Result.GetResult<Prisma.$CardPayload, S>

  type CardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CardFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CardCountAggregateInputType | true
    }

  export interface CardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Card'], meta: { name: 'Card' } }
    /**
     * Find zero or one Card that matches the filter.
     * @param {CardFindUniqueArgs} args - Arguments to find a Card
     * @example
     * // Get one Card
     * const card = await prisma.card.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CardFindUniqueArgs>(args: SelectSubset<T, CardFindUniqueArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Card that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CardFindUniqueOrThrowArgs} args - Arguments to find a Card
     * @example
     * // Get one Card
     * const card = await prisma.card.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CardFindUniqueOrThrowArgs>(args: SelectSubset<T, CardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Card that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardFindFirstArgs} args - Arguments to find a Card
     * @example
     * // Get one Card
     * const card = await prisma.card.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CardFindFirstArgs>(args?: SelectSubset<T, CardFindFirstArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Card that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardFindFirstOrThrowArgs} args - Arguments to find a Card
     * @example
     * // Get one Card
     * const card = await prisma.card.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CardFindFirstOrThrowArgs>(args?: SelectSubset<T, CardFindFirstOrThrowArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cards
     * const cards = await prisma.card.findMany()
     * 
     * // Get first 10 Cards
     * const cards = await prisma.card.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cardWithIdOnly = await prisma.card.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CardFindManyArgs>(args?: SelectSubset<T, CardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Card.
     * @param {CardCreateArgs} args - Arguments to create a Card.
     * @example
     * // Create one Card
     * const Card = await prisma.card.create({
     *   data: {
     *     // ... data to create a Card
     *   }
     * })
     * 
     */
    create<T extends CardCreateArgs>(args: SelectSubset<T, CardCreateArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cards.
     * @param {CardCreateManyArgs} args - Arguments to create many Cards.
     * @example
     * // Create many Cards
     * const card = await prisma.card.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CardCreateManyArgs>(args?: SelectSubset<T, CardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Card.
     * @param {CardDeleteArgs} args - Arguments to delete one Card.
     * @example
     * // Delete one Card
     * const Card = await prisma.card.delete({
     *   where: {
     *     // ... filter to delete one Card
     *   }
     * })
     * 
     */
    delete<T extends CardDeleteArgs>(args: SelectSubset<T, CardDeleteArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Card.
     * @param {CardUpdateArgs} args - Arguments to update one Card.
     * @example
     * // Update one Card
     * const card = await prisma.card.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CardUpdateArgs>(args: SelectSubset<T, CardUpdateArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cards.
     * @param {CardDeleteManyArgs} args - Arguments to filter Cards to delete.
     * @example
     * // Delete a few Cards
     * const { count } = await prisma.card.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CardDeleteManyArgs>(args?: SelectSubset<T, CardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cards
     * const card = await prisma.card.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CardUpdateManyArgs>(args: SelectSubset<T, CardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Card.
     * @param {CardUpsertArgs} args - Arguments to update or create a Card.
     * @example
     * // Update or create a Card
     * const card = await prisma.card.upsert({
     *   create: {
     *     // ... data to create a Card
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Card we want to update
     *   }
     * })
     */
    upsert<T extends CardUpsertArgs>(args: SelectSubset<T, CardUpsertArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardCountArgs} args - Arguments to filter Cards to count.
     * @example
     * // Count the number of Cards
     * const count = await prisma.card.count({
     *   where: {
     *     // ... the filter for the Cards we want to count
     *   }
     * })
    **/
    count<T extends CardCountArgs>(
      args?: Subset<T, CardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Card.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CardAggregateArgs>(args: Subset<T, CardAggregateArgs>): Prisma.PrismaPromise<GetCardAggregateType<T>>

    /**
     * Group by Card.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardGroupByArgs} args - Group by arguments.
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
      T extends CardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CardGroupByArgs['orderBy'] }
        : { orderBy?: CardGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Card model
   */
  readonly fields: CardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Card.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cardKeywords<T extends Card$cardKeywordsArgs<ExtArgs> = {}>(args?: Subset<T, Card$cardKeywordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardKeywordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Card model
   */
  interface CardFieldRefs {
    readonly id: FieldRef<"Card", 'String'>
    readonly name: FieldRef<"Card", 'String'>
    readonly type: FieldRef<"Card", 'Type'>
    readonly color: FieldRef<"Card", 'Color'>
    readonly subtype: FieldRef<"Card", 'SubType'>
    readonly attack: FieldRef<"Card", 'Int'>
    readonly defense: FieldRef<"Card", 'Int'>
    readonly cost: FieldRef<"Card", 'Int'>
    readonly rarity: FieldRef<"Card", 'Rarity'>
    readonly effectName: FieldRef<"Card", 'String'>
    readonly effectType: FieldRef<"Card", 'String'>
    readonly effectText: FieldRef<"Card", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Card findUnique
   */
  export type CardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * Filter, which Card to fetch.
     */
    where: CardWhereUniqueInput
  }

  /**
   * Card findUniqueOrThrow
   */
  export type CardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * Filter, which Card to fetch.
     */
    where: CardWhereUniqueInput
  }

  /**
   * Card findFirst
   */
  export type CardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * Filter, which Card to fetch.
     */
    where?: CardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cards to fetch.
     */
    orderBy?: CardOrderByWithRelationInput | CardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cards.
     */
    cursor?: CardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cards.
     */
    distinct?: CardScalarFieldEnum | CardScalarFieldEnum[]
  }

  /**
   * Card findFirstOrThrow
   */
  export type CardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * Filter, which Card to fetch.
     */
    where?: CardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cards to fetch.
     */
    orderBy?: CardOrderByWithRelationInput | CardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cards.
     */
    cursor?: CardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cards.
     */
    distinct?: CardScalarFieldEnum | CardScalarFieldEnum[]
  }

  /**
   * Card findMany
   */
  export type CardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * Filter, which Cards to fetch.
     */
    where?: CardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cards to fetch.
     */
    orderBy?: CardOrderByWithRelationInput | CardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cards.
     */
    cursor?: CardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cards.
     */
    skip?: number
    distinct?: CardScalarFieldEnum | CardScalarFieldEnum[]
  }

  /**
   * Card create
   */
  export type CardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * The data needed to create a Card.
     */
    data: XOR<CardCreateInput, CardUncheckedCreateInput>
  }

  /**
   * Card createMany
   */
  export type CardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cards.
     */
    data: CardCreateManyInput | CardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Card update
   */
  export type CardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * The data needed to update a Card.
     */
    data: XOR<CardUpdateInput, CardUncheckedUpdateInput>
    /**
     * Choose, which Card to update.
     */
    where: CardWhereUniqueInput
  }

  /**
   * Card updateMany
   */
  export type CardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cards.
     */
    data: XOR<CardUpdateManyMutationInput, CardUncheckedUpdateManyInput>
    /**
     * Filter which Cards to update
     */
    where?: CardWhereInput
    /**
     * Limit how many Cards to update.
     */
    limit?: number
  }

  /**
   * Card upsert
   */
  export type CardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * The filter to search for the Card to update in case it exists.
     */
    where: CardWhereUniqueInput
    /**
     * In case the Card found by the `where` argument doesn't exist, create a new Card with this data.
     */
    create: XOR<CardCreateInput, CardUncheckedCreateInput>
    /**
     * In case the Card was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CardUpdateInput, CardUncheckedUpdateInput>
  }

  /**
   * Card delete
   */
  export type CardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * Filter which Card to delete.
     */
    where: CardWhereUniqueInput
  }

  /**
   * Card deleteMany
   */
  export type CardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cards to delete
     */
    where?: CardWhereInput
    /**
     * Limit how many Cards to delete.
     */
    limit?: number
  }

  /**
   * Card.cardKeywords
   */
  export type Card$cardKeywordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardKeyword
     */
    select?: CardKeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardKeyword
     */
    omit?: CardKeywordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardKeywordInclude<ExtArgs> | null
    where?: CardKeywordWhereInput
    orderBy?: CardKeywordOrderByWithRelationInput | CardKeywordOrderByWithRelationInput[]
    cursor?: CardKeywordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CardKeywordScalarFieldEnum | CardKeywordScalarFieldEnum[]
  }

  /**
   * Card without action
   */
  export type CardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
  }


  /**
   * Model Keyword
   */

  export type AggregateKeyword = {
    _count: KeywordCountAggregateOutputType | null
    _avg: KeywordAvgAggregateOutputType | null
    _sum: KeywordSumAggregateOutputType | null
    _min: KeywordMinAggregateOutputType | null
    _max: KeywordMaxAggregateOutputType | null
  }

  export type KeywordAvgAggregateOutputType = {
    id: number | null
  }

  export type KeywordSumAggregateOutputType = {
    id: number | null
  }

  export type KeywordMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type KeywordMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type KeywordCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type KeywordAvgAggregateInputType = {
    id?: true
  }

  export type KeywordSumAggregateInputType = {
    id?: true
  }

  export type KeywordMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type KeywordMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type KeywordCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type KeywordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Keyword to aggregate.
     */
    where?: KeywordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Keywords to fetch.
     */
    orderBy?: KeywordOrderByWithRelationInput | KeywordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KeywordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Keywords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Keywords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Keywords
    **/
    _count?: true | KeywordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: KeywordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: KeywordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KeywordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KeywordMaxAggregateInputType
  }

  export type GetKeywordAggregateType<T extends KeywordAggregateArgs> = {
        [P in keyof T & keyof AggregateKeyword]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKeyword[P]>
      : GetScalarType<T[P], AggregateKeyword[P]>
  }




  export type KeywordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KeywordWhereInput
    orderBy?: KeywordOrderByWithAggregationInput | KeywordOrderByWithAggregationInput[]
    by: KeywordScalarFieldEnum[] | KeywordScalarFieldEnum
    having?: KeywordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KeywordCountAggregateInputType | true
    _avg?: KeywordAvgAggregateInputType
    _sum?: KeywordSumAggregateInputType
    _min?: KeywordMinAggregateInputType
    _max?: KeywordMaxAggregateInputType
  }

  export type KeywordGroupByOutputType = {
    id: number
    name: string
    _count: KeywordCountAggregateOutputType | null
    _avg: KeywordAvgAggregateOutputType | null
    _sum: KeywordSumAggregateOutputType | null
    _min: KeywordMinAggregateOutputType | null
    _max: KeywordMaxAggregateOutputType | null
  }

  type GetKeywordGroupByPayload<T extends KeywordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KeywordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KeywordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KeywordGroupByOutputType[P]>
            : GetScalarType<T[P], KeywordGroupByOutputType[P]>
        }
      >
    >


  export type KeywordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    cardKeywords?: boolean | Keyword$cardKeywordsArgs<ExtArgs>
    _count?: boolean | KeywordCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["keyword"]>



  export type KeywordSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type KeywordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["keyword"]>
  export type KeywordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cardKeywords?: boolean | Keyword$cardKeywordsArgs<ExtArgs>
    _count?: boolean | KeywordCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $KeywordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Keyword"
    objects: {
      cardKeywords: Prisma.$CardKeywordPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["keyword"]>
    composites: {}
  }

  type KeywordGetPayload<S extends boolean | null | undefined | KeywordDefaultArgs> = $Result.GetResult<Prisma.$KeywordPayload, S>

  type KeywordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<KeywordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: KeywordCountAggregateInputType | true
    }

  export interface KeywordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Keyword'], meta: { name: 'Keyword' } }
    /**
     * Find zero or one Keyword that matches the filter.
     * @param {KeywordFindUniqueArgs} args - Arguments to find a Keyword
     * @example
     * // Get one Keyword
     * const keyword = await prisma.keyword.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends KeywordFindUniqueArgs>(args: SelectSubset<T, KeywordFindUniqueArgs<ExtArgs>>): Prisma__KeywordClient<$Result.GetResult<Prisma.$KeywordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Keyword that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {KeywordFindUniqueOrThrowArgs} args - Arguments to find a Keyword
     * @example
     * // Get one Keyword
     * const keyword = await prisma.keyword.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends KeywordFindUniqueOrThrowArgs>(args: SelectSubset<T, KeywordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__KeywordClient<$Result.GetResult<Prisma.$KeywordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Keyword that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeywordFindFirstArgs} args - Arguments to find a Keyword
     * @example
     * // Get one Keyword
     * const keyword = await prisma.keyword.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends KeywordFindFirstArgs>(args?: SelectSubset<T, KeywordFindFirstArgs<ExtArgs>>): Prisma__KeywordClient<$Result.GetResult<Prisma.$KeywordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Keyword that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeywordFindFirstOrThrowArgs} args - Arguments to find a Keyword
     * @example
     * // Get one Keyword
     * const keyword = await prisma.keyword.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends KeywordFindFirstOrThrowArgs>(args?: SelectSubset<T, KeywordFindFirstOrThrowArgs<ExtArgs>>): Prisma__KeywordClient<$Result.GetResult<Prisma.$KeywordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Keywords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeywordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Keywords
     * const keywords = await prisma.keyword.findMany()
     * 
     * // Get first 10 Keywords
     * const keywords = await prisma.keyword.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const keywordWithIdOnly = await prisma.keyword.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends KeywordFindManyArgs>(args?: SelectSubset<T, KeywordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KeywordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Keyword.
     * @param {KeywordCreateArgs} args - Arguments to create a Keyword.
     * @example
     * // Create one Keyword
     * const Keyword = await prisma.keyword.create({
     *   data: {
     *     // ... data to create a Keyword
     *   }
     * })
     * 
     */
    create<T extends KeywordCreateArgs>(args: SelectSubset<T, KeywordCreateArgs<ExtArgs>>): Prisma__KeywordClient<$Result.GetResult<Prisma.$KeywordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Keywords.
     * @param {KeywordCreateManyArgs} args - Arguments to create many Keywords.
     * @example
     * // Create many Keywords
     * const keyword = await prisma.keyword.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends KeywordCreateManyArgs>(args?: SelectSubset<T, KeywordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Keyword.
     * @param {KeywordDeleteArgs} args - Arguments to delete one Keyword.
     * @example
     * // Delete one Keyword
     * const Keyword = await prisma.keyword.delete({
     *   where: {
     *     // ... filter to delete one Keyword
     *   }
     * })
     * 
     */
    delete<T extends KeywordDeleteArgs>(args: SelectSubset<T, KeywordDeleteArgs<ExtArgs>>): Prisma__KeywordClient<$Result.GetResult<Prisma.$KeywordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Keyword.
     * @param {KeywordUpdateArgs} args - Arguments to update one Keyword.
     * @example
     * // Update one Keyword
     * const keyword = await prisma.keyword.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends KeywordUpdateArgs>(args: SelectSubset<T, KeywordUpdateArgs<ExtArgs>>): Prisma__KeywordClient<$Result.GetResult<Prisma.$KeywordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Keywords.
     * @param {KeywordDeleteManyArgs} args - Arguments to filter Keywords to delete.
     * @example
     * // Delete a few Keywords
     * const { count } = await prisma.keyword.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends KeywordDeleteManyArgs>(args?: SelectSubset<T, KeywordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Keywords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeywordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Keywords
     * const keyword = await prisma.keyword.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends KeywordUpdateManyArgs>(args: SelectSubset<T, KeywordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Keyword.
     * @param {KeywordUpsertArgs} args - Arguments to update or create a Keyword.
     * @example
     * // Update or create a Keyword
     * const keyword = await prisma.keyword.upsert({
     *   create: {
     *     // ... data to create a Keyword
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Keyword we want to update
     *   }
     * })
     */
    upsert<T extends KeywordUpsertArgs>(args: SelectSubset<T, KeywordUpsertArgs<ExtArgs>>): Prisma__KeywordClient<$Result.GetResult<Prisma.$KeywordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Keywords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeywordCountArgs} args - Arguments to filter Keywords to count.
     * @example
     * // Count the number of Keywords
     * const count = await prisma.keyword.count({
     *   where: {
     *     // ... the filter for the Keywords we want to count
     *   }
     * })
    **/
    count<T extends KeywordCountArgs>(
      args?: Subset<T, KeywordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KeywordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Keyword.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeywordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends KeywordAggregateArgs>(args: Subset<T, KeywordAggregateArgs>): Prisma.PrismaPromise<GetKeywordAggregateType<T>>

    /**
     * Group by Keyword.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeywordGroupByArgs} args - Group by arguments.
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
      T extends KeywordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KeywordGroupByArgs['orderBy'] }
        : { orderBy?: KeywordGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, KeywordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKeywordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Keyword model
   */
  readonly fields: KeywordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Keyword.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__KeywordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cardKeywords<T extends Keyword$cardKeywordsArgs<ExtArgs> = {}>(args?: Subset<T, Keyword$cardKeywordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardKeywordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Keyword model
   */
  interface KeywordFieldRefs {
    readonly id: FieldRef<"Keyword", 'Int'>
    readonly name: FieldRef<"Keyword", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Keyword findUnique
   */
  export type KeywordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keyword
     */
    select?: KeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Keyword
     */
    omit?: KeywordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordInclude<ExtArgs> | null
    /**
     * Filter, which Keyword to fetch.
     */
    where: KeywordWhereUniqueInput
  }

  /**
   * Keyword findUniqueOrThrow
   */
  export type KeywordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keyword
     */
    select?: KeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Keyword
     */
    omit?: KeywordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordInclude<ExtArgs> | null
    /**
     * Filter, which Keyword to fetch.
     */
    where: KeywordWhereUniqueInput
  }

  /**
   * Keyword findFirst
   */
  export type KeywordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keyword
     */
    select?: KeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Keyword
     */
    omit?: KeywordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordInclude<ExtArgs> | null
    /**
     * Filter, which Keyword to fetch.
     */
    where?: KeywordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Keywords to fetch.
     */
    orderBy?: KeywordOrderByWithRelationInput | KeywordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Keywords.
     */
    cursor?: KeywordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Keywords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Keywords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Keywords.
     */
    distinct?: KeywordScalarFieldEnum | KeywordScalarFieldEnum[]
  }

  /**
   * Keyword findFirstOrThrow
   */
  export type KeywordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keyword
     */
    select?: KeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Keyword
     */
    omit?: KeywordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordInclude<ExtArgs> | null
    /**
     * Filter, which Keyword to fetch.
     */
    where?: KeywordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Keywords to fetch.
     */
    orderBy?: KeywordOrderByWithRelationInput | KeywordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Keywords.
     */
    cursor?: KeywordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Keywords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Keywords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Keywords.
     */
    distinct?: KeywordScalarFieldEnum | KeywordScalarFieldEnum[]
  }

  /**
   * Keyword findMany
   */
  export type KeywordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keyword
     */
    select?: KeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Keyword
     */
    omit?: KeywordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordInclude<ExtArgs> | null
    /**
     * Filter, which Keywords to fetch.
     */
    where?: KeywordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Keywords to fetch.
     */
    orderBy?: KeywordOrderByWithRelationInput | KeywordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Keywords.
     */
    cursor?: KeywordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Keywords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Keywords.
     */
    skip?: number
    distinct?: KeywordScalarFieldEnum | KeywordScalarFieldEnum[]
  }

  /**
   * Keyword create
   */
  export type KeywordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keyword
     */
    select?: KeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Keyword
     */
    omit?: KeywordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordInclude<ExtArgs> | null
    /**
     * The data needed to create a Keyword.
     */
    data: XOR<KeywordCreateInput, KeywordUncheckedCreateInput>
  }

  /**
   * Keyword createMany
   */
  export type KeywordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Keywords.
     */
    data: KeywordCreateManyInput | KeywordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Keyword update
   */
  export type KeywordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keyword
     */
    select?: KeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Keyword
     */
    omit?: KeywordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordInclude<ExtArgs> | null
    /**
     * The data needed to update a Keyword.
     */
    data: XOR<KeywordUpdateInput, KeywordUncheckedUpdateInput>
    /**
     * Choose, which Keyword to update.
     */
    where: KeywordWhereUniqueInput
  }

  /**
   * Keyword updateMany
   */
  export type KeywordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Keywords.
     */
    data: XOR<KeywordUpdateManyMutationInput, KeywordUncheckedUpdateManyInput>
    /**
     * Filter which Keywords to update
     */
    where?: KeywordWhereInput
    /**
     * Limit how many Keywords to update.
     */
    limit?: number
  }

  /**
   * Keyword upsert
   */
  export type KeywordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keyword
     */
    select?: KeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Keyword
     */
    omit?: KeywordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordInclude<ExtArgs> | null
    /**
     * The filter to search for the Keyword to update in case it exists.
     */
    where: KeywordWhereUniqueInput
    /**
     * In case the Keyword found by the `where` argument doesn't exist, create a new Keyword with this data.
     */
    create: XOR<KeywordCreateInput, KeywordUncheckedCreateInput>
    /**
     * In case the Keyword was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KeywordUpdateInput, KeywordUncheckedUpdateInput>
  }

  /**
   * Keyword delete
   */
  export type KeywordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keyword
     */
    select?: KeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Keyword
     */
    omit?: KeywordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordInclude<ExtArgs> | null
    /**
     * Filter which Keyword to delete.
     */
    where: KeywordWhereUniqueInput
  }

  /**
   * Keyword deleteMany
   */
  export type KeywordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Keywords to delete
     */
    where?: KeywordWhereInput
    /**
     * Limit how many Keywords to delete.
     */
    limit?: number
  }

  /**
   * Keyword.cardKeywords
   */
  export type Keyword$cardKeywordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardKeyword
     */
    select?: CardKeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardKeyword
     */
    omit?: CardKeywordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardKeywordInclude<ExtArgs> | null
    where?: CardKeywordWhereInput
    orderBy?: CardKeywordOrderByWithRelationInput | CardKeywordOrderByWithRelationInput[]
    cursor?: CardKeywordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CardKeywordScalarFieldEnum | CardKeywordScalarFieldEnum[]
  }

  /**
   * Keyword without action
   */
  export type KeywordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keyword
     */
    select?: KeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Keyword
     */
    omit?: KeywordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordInclude<ExtArgs> | null
  }


  /**
   * Model CardKeyword
   */

  export type AggregateCardKeyword = {
    _count: CardKeywordCountAggregateOutputType | null
    _avg: CardKeywordAvgAggregateOutputType | null
    _sum: CardKeywordSumAggregateOutputType | null
    _min: CardKeywordMinAggregateOutputType | null
    _max: CardKeywordMaxAggregateOutputType | null
  }

  export type CardKeywordAvgAggregateOutputType = {
    keywordId: number | null
  }

  export type CardKeywordSumAggregateOutputType = {
    keywordId: number | null
  }

  export type CardKeywordMinAggregateOutputType = {
    cardId: string | null
    keywordId: number | null
  }

  export type CardKeywordMaxAggregateOutputType = {
    cardId: string | null
    keywordId: number | null
  }

  export type CardKeywordCountAggregateOutputType = {
    cardId: number
    keywordId: number
    _all: number
  }


  export type CardKeywordAvgAggregateInputType = {
    keywordId?: true
  }

  export type CardKeywordSumAggregateInputType = {
    keywordId?: true
  }

  export type CardKeywordMinAggregateInputType = {
    cardId?: true
    keywordId?: true
  }

  export type CardKeywordMaxAggregateInputType = {
    cardId?: true
    keywordId?: true
  }

  export type CardKeywordCountAggregateInputType = {
    cardId?: true
    keywordId?: true
    _all?: true
  }

  export type CardKeywordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CardKeyword to aggregate.
     */
    where?: CardKeywordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CardKeywords to fetch.
     */
    orderBy?: CardKeywordOrderByWithRelationInput | CardKeywordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CardKeywordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CardKeywords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CardKeywords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CardKeywords
    **/
    _count?: true | CardKeywordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CardKeywordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CardKeywordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CardKeywordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CardKeywordMaxAggregateInputType
  }

  export type GetCardKeywordAggregateType<T extends CardKeywordAggregateArgs> = {
        [P in keyof T & keyof AggregateCardKeyword]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCardKeyword[P]>
      : GetScalarType<T[P], AggregateCardKeyword[P]>
  }




  export type CardKeywordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CardKeywordWhereInput
    orderBy?: CardKeywordOrderByWithAggregationInput | CardKeywordOrderByWithAggregationInput[]
    by: CardKeywordScalarFieldEnum[] | CardKeywordScalarFieldEnum
    having?: CardKeywordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CardKeywordCountAggregateInputType | true
    _avg?: CardKeywordAvgAggregateInputType
    _sum?: CardKeywordSumAggregateInputType
    _min?: CardKeywordMinAggregateInputType
    _max?: CardKeywordMaxAggregateInputType
  }

  export type CardKeywordGroupByOutputType = {
    cardId: string
    keywordId: number
    _count: CardKeywordCountAggregateOutputType | null
    _avg: CardKeywordAvgAggregateOutputType | null
    _sum: CardKeywordSumAggregateOutputType | null
    _min: CardKeywordMinAggregateOutputType | null
    _max: CardKeywordMaxAggregateOutputType | null
  }

  type GetCardKeywordGroupByPayload<T extends CardKeywordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CardKeywordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CardKeywordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CardKeywordGroupByOutputType[P]>
            : GetScalarType<T[P], CardKeywordGroupByOutputType[P]>
        }
      >
    >


  export type CardKeywordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cardId?: boolean
    keywordId?: boolean
    card?: boolean | CardDefaultArgs<ExtArgs>
    keyword?: boolean | KeywordDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cardKeyword"]>



  export type CardKeywordSelectScalar = {
    cardId?: boolean
    keywordId?: boolean
  }

  export type CardKeywordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"cardId" | "keywordId", ExtArgs["result"]["cardKeyword"]>
  export type CardKeywordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    card?: boolean | CardDefaultArgs<ExtArgs>
    keyword?: boolean | KeywordDefaultArgs<ExtArgs>
  }

  export type $CardKeywordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CardKeyword"
    objects: {
      card: Prisma.$CardPayload<ExtArgs>
      keyword: Prisma.$KeywordPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      cardId: string
      keywordId: number
    }, ExtArgs["result"]["cardKeyword"]>
    composites: {}
  }

  type CardKeywordGetPayload<S extends boolean | null | undefined | CardKeywordDefaultArgs> = $Result.GetResult<Prisma.$CardKeywordPayload, S>

  type CardKeywordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CardKeywordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CardKeywordCountAggregateInputType | true
    }

  export interface CardKeywordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CardKeyword'], meta: { name: 'CardKeyword' } }
    /**
     * Find zero or one CardKeyword that matches the filter.
     * @param {CardKeywordFindUniqueArgs} args - Arguments to find a CardKeyword
     * @example
     * // Get one CardKeyword
     * const cardKeyword = await prisma.cardKeyword.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CardKeywordFindUniqueArgs>(args: SelectSubset<T, CardKeywordFindUniqueArgs<ExtArgs>>): Prisma__CardKeywordClient<$Result.GetResult<Prisma.$CardKeywordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CardKeyword that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CardKeywordFindUniqueOrThrowArgs} args - Arguments to find a CardKeyword
     * @example
     * // Get one CardKeyword
     * const cardKeyword = await prisma.cardKeyword.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CardKeywordFindUniqueOrThrowArgs>(args: SelectSubset<T, CardKeywordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CardKeywordClient<$Result.GetResult<Prisma.$CardKeywordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CardKeyword that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardKeywordFindFirstArgs} args - Arguments to find a CardKeyword
     * @example
     * // Get one CardKeyword
     * const cardKeyword = await prisma.cardKeyword.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CardKeywordFindFirstArgs>(args?: SelectSubset<T, CardKeywordFindFirstArgs<ExtArgs>>): Prisma__CardKeywordClient<$Result.GetResult<Prisma.$CardKeywordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CardKeyword that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardKeywordFindFirstOrThrowArgs} args - Arguments to find a CardKeyword
     * @example
     * // Get one CardKeyword
     * const cardKeyword = await prisma.cardKeyword.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CardKeywordFindFirstOrThrowArgs>(args?: SelectSubset<T, CardKeywordFindFirstOrThrowArgs<ExtArgs>>): Prisma__CardKeywordClient<$Result.GetResult<Prisma.$CardKeywordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CardKeywords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardKeywordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CardKeywords
     * const cardKeywords = await prisma.cardKeyword.findMany()
     * 
     * // Get first 10 CardKeywords
     * const cardKeywords = await prisma.cardKeyword.findMany({ take: 10 })
     * 
     * // Only select the `cardId`
     * const cardKeywordWithCardIdOnly = await prisma.cardKeyword.findMany({ select: { cardId: true } })
     * 
     */
    findMany<T extends CardKeywordFindManyArgs>(args?: SelectSubset<T, CardKeywordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardKeywordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CardKeyword.
     * @param {CardKeywordCreateArgs} args - Arguments to create a CardKeyword.
     * @example
     * // Create one CardKeyword
     * const CardKeyword = await prisma.cardKeyword.create({
     *   data: {
     *     // ... data to create a CardKeyword
     *   }
     * })
     * 
     */
    create<T extends CardKeywordCreateArgs>(args: SelectSubset<T, CardKeywordCreateArgs<ExtArgs>>): Prisma__CardKeywordClient<$Result.GetResult<Prisma.$CardKeywordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CardKeywords.
     * @param {CardKeywordCreateManyArgs} args - Arguments to create many CardKeywords.
     * @example
     * // Create many CardKeywords
     * const cardKeyword = await prisma.cardKeyword.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CardKeywordCreateManyArgs>(args?: SelectSubset<T, CardKeywordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CardKeyword.
     * @param {CardKeywordDeleteArgs} args - Arguments to delete one CardKeyword.
     * @example
     * // Delete one CardKeyword
     * const CardKeyword = await prisma.cardKeyword.delete({
     *   where: {
     *     // ... filter to delete one CardKeyword
     *   }
     * })
     * 
     */
    delete<T extends CardKeywordDeleteArgs>(args: SelectSubset<T, CardKeywordDeleteArgs<ExtArgs>>): Prisma__CardKeywordClient<$Result.GetResult<Prisma.$CardKeywordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CardKeyword.
     * @param {CardKeywordUpdateArgs} args - Arguments to update one CardKeyword.
     * @example
     * // Update one CardKeyword
     * const cardKeyword = await prisma.cardKeyword.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CardKeywordUpdateArgs>(args: SelectSubset<T, CardKeywordUpdateArgs<ExtArgs>>): Prisma__CardKeywordClient<$Result.GetResult<Prisma.$CardKeywordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CardKeywords.
     * @param {CardKeywordDeleteManyArgs} args - Arguments to filter CardKeywords to delete.
     * @example
     * // Delete a few CardKeywords
     * const { count } = await prisma.cardKeyword.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CardKeywordDeleteManyArgs>(args?: SelectSubset<T, CardKeywordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CardKeywords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardKeywordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CardKeywords
     * const cardKeyword = await prisma.cardKeyword.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CardKeywordUpdateManyArgs>(args: SelectSubset<T, CardKeywordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CardKeyword.
     * @param {CardKeywordUpsertArgs} args - Arguments to update or create a CardKeyword.
     * @example
     * // Update or create a CardKeyword
     * const cardKeyword = await prisma.cardKeyword.upsert({
     *   create: {
     *     // ... data to create a CardKeyword
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CardKeyword we want to update
     *   }
     * })
     */
    upsert<T extends CardKeywordUpsertArgs>(args: SelectSubset<T, CardKeywordUpsertArgs<ExtArgs>>): Prisma__CardKeywordClient<$Result.GetResult<Prisma.$CardKeywordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CardKeywords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardKeywordCountArgs} args - Arguments to filter CardKeywords to count.
     * @example
     * // Count the number of CardKeywords
     * const count = await prisma.cardKeyword.count({
     *   where: {
     *     // ... the filter for the CardKeywords we want to count
     *   }
     * })
    **/
    count<T extends CardKeywordCountArgs>(
      args?: Subset<T, CardKeywordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CardKeywordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CardKeyword.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardKeywordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CardKeywordAggregateArgs>(args: Subset<T, CardKeywordAggregateArgs>): Prisma.PrismaPromise<GetCardKeywordAggregateType<T>>

    /**
     * Group by CardKeyword.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardKeywordGroupByArgs} args - Group by arguments.
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
      T extends CardKeywordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CardKeywordGroupByArgs['orderBy'] }
        : { orderBy?: CardKeywordGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CardKeywordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCardKeywordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CardKeyword model
   */
  readonly fields: CardKeywordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CardKeyword.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CardKeywordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    card<T extends CardDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CardDefaultArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    keyword<T extends KeywordDefaultArgs<ExtArgs> = {}>(args?: Subset<T, KeywordDefaultArgs<ExtArgs>>): Prisma__KeywordClient<$Result.GetResult<Prisma.$KeywordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CardKeyword model
   */
  interface CardKeywordFieldRefs {
    readonly cardId: FieldRef<"CardKeyword", 'String'>
    readonly keywordId: FieldRef<"CardKeyword", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * CardKeyword findUnique
   */
  export type CardKeywordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardKeyword
     */
    select?: CardKeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardKeyword
     */
    omit?: CardKeywordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardKeywordInclude<ExtArgs> | null
    /**
     * Filter, which CardKeyword to fetch.
     */
    where: CardKeywordWhereUniqueInput
  }

  /**
   * CardKeyword findUniqueOrThrow
   */
  export type CardKeywordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardKeyword
     */
    select?: CardKeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardKeyword
     */
    omit?: CardKeywordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardKeywordInclude<ExtArgs> | null
    /**
     * Filter, which CardKeyword to fetch.
     */
    where: CardKeywordWhereUniqueInput
  }

  /**
   * CardKeyword findFirst
   */
  export type CardKeywordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardKeyword
     */
    select?: CardKeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardKeyword
     */
    omit?: CardKeywordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardKeywordInclude<ExtArgs> | null
    /**
     * Filter, which CardKeyword to fetch.
     */
    where?: CardKeywordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CardKeywords to fetch.
     */
    orderBy?: CardKeywordOrderByWithRelationInput | CardKeywordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CardKeywords.
     */
    cursor?: CardKeywordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CardKeywords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CardKeywords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CardKeywords.
     */
    distinct?: CardKeywordScalarFieldEnum | CardKeywordScalarFieldEnum[]
  }

  /**
   * CardKeyword findFirstOrThrow
   */
  export type CardKeywordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardKeyword
     */
    select?: CardKeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardKeyword
     */
    omit?: CardKeywordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardKeywordInclude<ExtArgs> | null
    /**
     * Filter, which CardKeyword to fetch.
     */
    where?: CardKeywordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CardKeywords to fetch.
     */
    orderBy?: CardKeywordOrderByWithRelationInput | CardKeywordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CardKeywords.
     */
    cursor?: CardKeywordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CardKeywords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CardKeywords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CardKeywords.
     */
    distinct?: CardKeywordScalarFieldEnum | CardKeywordScalarFieldEnum[]
  }

  /**
   * CardKeyword findMany
   */
  export type CardKeywordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardKeyword
     */
    select?: CardKeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardKeyword
     */
    omit?: CardKeywordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardKeywordInclude<ExtArgs> | null
    /**
     * Filter, which CardKeywords to fetch.
     */
    where?: CardKeywordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CardKeywords to fetch.
     */
    orderBy?: CardKeywordOrderByWithRelationInput | CardKeywordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CardKeywords.
     */
    cursor?: CardKeywordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CardKeywords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CardKeywords.
     */
    skip?: number
    distinct?: CardKeywordScalarFieldEnum | CardKeywordScalarFieldEnum[]
  }

  /**
   * CardKeyword create
   */
  export type CardKeywordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardKeyword
     */
    select?: CardKeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardKeyword
     */
    omit?: CardKeywordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardKeywordInclude<ExtArgs> | null
    /**
     * The data needed to create a CardKeyword.
     */
    data: XOR<CardKeywordCreateInput, CardKeywordUncheckedCreateInput>
  }

  /**
   * CardKeyword createMany
   */
  export type CardKeywordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CardKeywords.
     */
    data: CardKeywordCreateManyInput | CardKeywordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CardKeyword update
   */
  export type CardKeywordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardKeyword
     */
    select?: CardKeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardKeyword
     */
    omit?: CardKeywordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardKeywordInclude<ExtArgs> | null
    /**
     * The data needed to update a CardKeyword.
     */
    data: XOR<CardKeywordUpdateInput, CardKeywordUncheckedUpdateInput>
    /**
     * Choose, which CardKeyword to update.
     */
    where: CardKeywordWhereUniqueInput
  }

  /**
   * CardKeyword updateMany
   */
  export type CardKeywordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CardKeywords.
     */
    data: XOR<CardKeywordUpdateManyMutationInput, CardKeywordUncheckedUpdateManyInput>
    /**
     * Filter which CardKeywords to update
     */
    where?: CardKeywordWhereInput
    /**
     * Limit how many CardKeywords to update.
     */
    limit?: number
  }

  /**
   * CardKeyword upsert
   */
  export type CardKeywordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardKeyword
     */
    select?: CardKeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardKeyword
     */
    omit?: CardKeywordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardKeywordInclude<ExtArgs> | null
    /**
     * The filter to search for the CardKeyword to update in case it exists.
     */
    where: CardKeywordWhereUniqueInput
    /**
     * In case the CardKeyword found by the `where` argument doesn't exist, create a new CardKeyword with this data.
     */
    create: XOR<CardKeywordCreateInput, CardKeywordUncheckedCreateInput>
    /**
     * In case the CardKeyword was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CardKeywordUpdateInput, CardKeywordUncheckedUpdateInput>
  }

  /**
   * CardKeyword delete
   */
  export type CardKeywordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardKeyword
     */
    select?: CardKeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardKeyword
     */
    omit?: CardKeywordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardKeywordInclude<ExtArgs> | null
    /**
     * Filter which CardKeyword to delete.
     */
    where: CardKeywordWhereUniqueInput
  }

  /**
   * CardKeyword deleteMany
   */
  export type CardKeywordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CardKeywords to delete
     */
    where?: CardKeywordWhereInput
    /**
     * Limit how many CardKeywords to delete.
     */
    limit?: number
  }

  /**
   * CardKeyword without action
   */
  export type CardKeywordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardKeyword
     */
    select?: CardKeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardKeyword
     */
    omit?: CardKeywordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardKeywordInclude<ExtArgs> | null
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


  export const CardScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    color: 'color',
    subtype: 'subtype',
    attack: 'attack',
    defense: 'defense',
    cost: 'cost',
    rarity: 'rarity',
    effectName: 'effectName',
    effectType: 'effectType',
    effectText: 'effectText'
  };

  export type CardScalarFieldEnum = (typeof CardScalarFieldEnum)[keyof typeof CardScalarFieldEnum]


  export const KeywordScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type KeywordScalarFieldEnum = (typeof KeywordScalarFieldEnum)[keyof typeof KeywordScalarFieldEnum]


  export const CardKeywordScalarFieldEnum: {
    cardId: 'cardId',
    keywordId: 'keywordId'
  };

  export type CardKeywordScalarFieldEnum = (typeof CardKeywordScalarFieldEnum)[keyof typeof CardKeywordScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const CardOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    effectName: 'effectName',
    effectType: 'effectType',
    effectText: 'effectText'
  };

  export type CardOrderByRelevanceFieldEnum = (typeof CardOrderByRelevanceFieldEnum)[keyof typeof CardOrderByRelevanceFieldEnum]


  export const KeywordOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type KeywordOrderByRelevanceFieldEnum = (typeof KeywordOrderByRelevanceFieldEnum)[keyof typeof KeywordOrderByRelevanceFieldEnum]


  export const CardKeywordOrderByRelevanceFieldEnum: {
    cardId: 'cardId'
  };

  export type CardKeywordOrderByRelevanceFieldEnum = (typeof CardKeywordOrderByRelevanceFieldEnum)[keyof typeof CardKeywordOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Type'
   */
  export type EnumTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Type'>
    


  /**
   * Reference to a field of type 'Color'
   */
  export type EnumColorFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Color'>
    


  /**
   * Reference to a field of type 'SubType'
   */
  export type EnumSubTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubType'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Rarity'
   */
  export type EnumRarityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Rarity'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type CardWhereInput = {
    AND?: CardWhereInput | CardWhereInput[]
    OR?: CardWhereInput[]
    NOT?: CardWhereInput | CardWhereInput[]
    id?: StringFilter<"Card"> | string
    name?: StringFilter<"Card"> | string
    type?: EnumTypeFilter<"Card"> | $Enums.Type
    color?: EnumColorFilter<"Card"> | $Enums.Color
    subtype?: EnumSubTypeNullableFilter<"Card"> | $Enums.SubType | null
    attack?: IntNullableFilter<"Card"> | number | null
    defense?: IntNullableFilter<"Card"> | number | null
    cost?: IntFilter<"Card"> | number
    rarity?: EnumRarityFilter<"Card"> | $Enums.Rarity
    effectName?: StringNullableFilter<"Card"> | string | null
    effectType?: StringNullableFilter<"Card"> | string | null
    effectText?: StringNullableFilter<"Card"> | string | null
    cardKeywords?: CardKeywordListRelationFilter
  }

  export type CardOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    color?: SortOrder
    subtype?: SortOrderInput | SortOrder
    attack?: SortOrderInput | SortOrder
    defense?: SortOrderInput | SortOrder
    cost?: SortOrder
    rarity?: SortOrder
    effectName?: SortOrderInput | SortOrder
    effectType?: SortOrderInput | SortOrder
    effectText?: SortOrderInput | SortOrder
    cardKeywords?: CardKeywordOrderByRelationAggregateInput
    _relevance?: CardOrderByRelevanceInput
  }

  export type CardWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: CardWhereInput | CardWhereInput[]
    OR?: CardWhereInput[]
    NOT?: CardWhereInput | CardWhereInput[]
    type?: EnumTypeFilter<"Card"> | $Enums.Type
    color?: EnumColorFilter<"Card"> | $Enums.Color
    subtype?: EnumSubTypeNullableFilter<"Card"> | $Enums.SubType | null
    attack?: IntNullableFilter<"Card"> | number | null
    defense?: IntNullableFilter<"Card"> | number | null
    cost?: IntFilter<"Card"> | number
    rarity?: EnumRarityFilter<"Card"> | $Enums.Rarity
    effectName?: StringNullableFilter<"Card"> | string | null
    effectType?: StringNullableFilter<"Card"> | string | null
    effectText?: StringNullableFilter<"Card"> | string | null
    cardKeywords?: CardKeywordListRelationFilter
  }, "id" | "name">

  export type CardOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    color?: SortOrder
    subtype?: SortOrderInput | SortOrder
    attack?: SortOrderInput | SortOrder
    defense?: SortOrderInput | SortOrder
    cost?: SortOrder
    rarity?: SortOrder
    effectName?: SortOrderInput | SortOrder
    effectType?: SortOrderInput | SortOrder
    effectText?: SortOrderInput | SortOrder
    _count?: CardCountOrderByAggregateInput
    _avg?: CardAvgOrderByAggregateInput
    _max?: CardMaxOrderByAggregateInput
    _min?: CardMinOrderByAggregateInput
    _sum?: CardSumOrderByAggregateInput
  }

  export type CardScalarWhereWithAggregatesInput = {
    AND?: CardScalarWhereWithAggregatesInput | CardScalarWhereWithAggregatesInput[]
    OR?: CardScalarWhereWithAggregatesInput[]
    NOT?: CardScalarWhereWithAggregatesInput | CardScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Card"> | string
    name?: StringWithAggregatesFilter<"Card"> | string
    type?: EnumTypeWithAggregatesFilter<"Card"> | $Enums.Type
    color?: EnumColorWithAggregatesFilter<"Card"> | $Enums.Color
    subtype?: EnumSubTypeNullableWithAggregatesFilter<"Card"> | $Enums.SubType | null
    attack?: IntNullableWithAggregatesFilter<"Card"> | number | null
    defense?: IntNullableWithAggregatesFilter<"Card"> | number | null
    cost?: IntWithAggregatesFilter<"Card"> | number
    rarity?: EnumRarityWithAggregatesFilter<"Card"> | $Enums.Rarity
    effectName?: StringNullableWithAggregatesFilter<"Card"> | string | null
    effectType?: StringNullableWithAggregatesFilter<"Card"> | string | null
    effectText?: StringNullableWithAggregatesFilter<"Card"> | string | null
  }

  export type KeywordWhereInput = {
    AND?: KeywordWhereInput | KeywordWhereInput[]
    OR?: KeywordWhereInput[]
    NOT?: KeywordWhereInput | KeywordWhereInput[]
    id?: IntFilter<"Keyword"> | number
    name?: StringFilter<"Keyword"> | string
    cardKeywords?: CardKeywordListRelationFilter
  }

  export type KeywordOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    cardKeywords?: CardKeywordOrderByRelationAggregateInput
    _relevance?: KeywordOrderByRelevanceInput
  }

  export type KeywordWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: KeywordWhereInput | KeywordWhereInput[]
    OR?: KeywordWhereInput[]
    NOT?: KeywordWhereInput | KeywordWhereInput[]
    cardKeywords?: CardKeywordListRelationFilter
  }, "id" | "name">

  export type KeywordOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: KeywordCountOrderByAggregateInput
    _avg?: KeywordAvgOrderByAggregateInput
    _max?: KeywordMaxOrderByAggregateInput
    _min?: KeywordMinOrderByAggregateInput
    _sum?: KeywordSumOrderByAggregateInput
  }

  export type KeywordScalarWhereWithAggregatesInput = {
    AND?: KeywordScalarWhereWithAggregatesInput | KeywordScalarWhereWithAggregatesInput[]
    OR?: KeywordScalarWhereWithAggregatesInput[]
    NOT?: KeywordScalarWhereWithAggregatesInput | KeywordScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Keyword"> | number
    name?: StringWithAggregatesFilter<"Keyword"> | string
  }

  export type CardKeywordWhereInput = {
    AND?: CardKeywordWhereInput | CardKeywordWhereInput[]
    OR?: CardKeywordWhereInput[]
    NOT?: CardKeywordWhereInput | CardKeywordWhereInput[]
    cardId?: StringFilter<"CardKeyword"> | string
    keywordId?: IntFilter<"CardKeyword"> | number
    card?: XOR<CardScalarRelationFilter, CardWhereInput>
    keyword?: XOR<KeywordScalarRelationFilter, KeywordWhereInput>
  }

  export type CardKeywordOrderByWithRelationInput = {
    cardId?: SortOrder
    keywordId?: SortOrder
    card?: CardOrderByWithRelationInput
    keyword?: KeywordOrderByWithRelationInput
    _relevance?: CardKeywordOrderByRelevanceInput
  }

  export type CardKeywordWhereUniqueInput = Prisma.AtLeast<{
    cardId_keywordId?: CardKeywordCardIdKeywordIdCompoundUniqueInput
    AND?: CardKeywordWhereInput | CardKeywordWhereInput[]
    OR?: CardKeywordWhereInput[]
    NOT?: CardKeywordWhereInput | CardKeywordWhereInput[]
    cardId?: StringFilter<"CardKeyword"> | string
    keywordId?: IntFilter<"CardKeyword"> | number
    card?: XOR<CardScalarRelationFilter, CardWhereInput>
    keyword?: XOR<KeywordScalarRelationFilter, KeywordWhereInput>
  }, "cardId_keywordId">

  export type CardKeywordOrderByWithAggregationInput = {
    cardId?: SortOrder
    keywordId?: SortOrder
    _count?: CardKeywordCountOrderByAggregateInput
    _avg?: CardKeywordAvgOrderByAggregateInput
    _max?: CardKeywordMaxOrderByAggregateInput
    _min?: CardKeywordMinOrderByAggregateInput
    _sum?: CardKeywordSumOrderByAggregateInput
  }

  export type CardKeywordScalarWhereWithAggregatesInput = {
    AND?: CardKeywordScalarWhereWithAggregatesInput | CardKeywordScalarWhereWithAggregatesInput[]
    OR?: CardKeywordScalarWhereWithAggregatesInput[]
    NOT?: CardKeywordScalarWhereWithAggregatesInput | CardKeywordScalarWhereWithAggregatesInput[]
    cardId?: StringWithAggregatesFilter<"CardKeyword"> | string
    keywordId?: IntWithAggregatesFilter<"CardKeyword"> | number
  }

  export type CardCreateInput = {
    id?: string
    name: string
    type?: $Enums.Type
    color?: $Enums.Color
    subtype?: $Enums.SubType | null
    attack?: number | null
    defense?: number | null
    cost: number
    rarity: $Enums.Rarity
    effectName?: string | null
    effectType?: string | null
    effectText?: string | null
    cardKeywords?: CardKeywordCreateNestedManyWithoutCardInput
  }

  export type CardUncheckedCreateInput = {
    id?: string
    name: string
    type?: $Enums.Type
    color?: $Enums.Color
    subtype?: $Enums.SubType | null
    attack?: number | null
    defense?: number | null
    cost: number
    rarity: $Enums.Rarity
    effectName?: string | null
    effectType?: string | null
    effectText?: string | null
    cardKeywords?: CardKeywordUncheckedCreateNestedManyWithoutCardInput
  }

  export type CardUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    color?: EnumColorFieldUpdateOperationsInput | $Enums.Color
    subtype?: NullableEnumSubTypeFieldUpdateOperationsInput | $Enums.SubType | null
    attack?: NullableIntFieldUpdateOperationsInput | number | null
    defense?: NullableIntFieldUpdateOperationsInput | number | null
    cost?: IntFieldUpdateOperationsInput | number
    rarity?: EnumRarityFieldUpdateOperationsInput | $Enums.Rarity
    effectName?: NullableStringFieldUpdateOperationsInput | string | null
    effectType?: NullableStringFieldUpdateOperationsInput | string | null
    effectText?: NullableStringFieldUpdateOperationsInput | string | null
    cardKeywords?: CardKeywordUpdateManyWithoutCardNestedInput
  }

  export type CardUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    color?: EnumColorFieldUpdateOperationsInput | $Enums.Color
    subtype?: NullableEnumSubTypeFieldUpdateOperationsInput | $Enums.SubType | null
    attack?: NullableIntFieldUpdateOperationsInput | number | null
    defense?: NullableIntFieldUpdateOperationsInput | number | null
    cost?: IntFieldUpdateOperationsInput | number
    rarity?: EnumRarityFieldUpdateOperationsInput | $Enums.Rarity
    effectName?: NullableStringFieldUpdateOperationsInput | string | null
    effectType?: NullableStringFieldUpdateOperationsInput | string | null
    effectText?: NullableStringFieldUpdateOperationsInput | string | null
    cardKeywords?: CardKeywordUncheckedUpdateManyWithoutCardNestedInput
  }

  export type CardCreateManyInput = {
    id?: string
    name: string
    type?: $Enums.Type
    color?: $Enums.Color
    subtype?: $Enums.SubType | null
    attack?: number | null
    defense?: number | null
    cost: number
    rarity: $Enums.Rarity
    effectName?: string | null
    effectType?: string | null
    effectText?: string | null
  }

  export type CardUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    color?: EnumColorFieldUpdateOperationsInput | $Enums.Color
    subtype?: NullableEnumSubTypeFieldUpdateOperationsInput | $Enums.SubType | null
    attack?: NullableIntFieldUpdateOperationsInput | number | null
    defense?: NullableIntFieldUpdateOperationsInput | number | null
    cost?: IntFieldUpdateOperationsInput | number
    rarity?: EnumRarityFieldUpdateOperationsInput | $Enums.Rarity
    effectName?: NullableStringFieldUpdateOperationsInput | string | null
    effectType?: NullableStringFieldUpdateOperationsInput | string | null
    effectText?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CardUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    color?: EnumColorFieldUpdateOperationsInput | $Enums.Color
    subtype?: NullableEnumSubTypeFieldUpdateOperationsInput | $Enums.SubType | null
    attack?: NullableIntFieldUpdateOperationsInput | number | null
    defense?: NullableIntFieldUpdateOperationsInput | number | null
    cost?: IntFieldUpdateOperationsInput | number
    rarity?: EnumRarityFieldUpdateOperationsInput | $Enums.Rarity
    effectName?: NullableStringFieldUpdateOperationsInput | string | null
    effectType?: NullableStringFieldUpdateOperationsInput | string | null
    effectText?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type KeywordCreateInput = {
    name: string
    cardKeywords?: CardKeywordCreateNestedManyWithoutKeywordInput
  }

  export type KeywordUncheckedCreateInput = {
    id?: number
    name: string
    cardKeywords?: CardKeywordUncheckedCreateNestedManyWithoutKeywordInput
  }

  export type KeywordUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    cardKeywords?: CardKeywordUpdateManyWithoutKeywordNestedInput
  }

  export type KeywordUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    cardKeywords?: CardKeywordUncheckedUpdateManyWithoutKeywordNestedInput
  }

  export type KeywordCreateManyInput = {
    id?: number
    name: string
  }

  export type KeywordUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type KeywordUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CardKeywordCreateInput = {
    card: CardCreateNestedOneWithoutCardKeywordsInput
    keyword: KeywordCreateNestedOneWithoutCardKeywordsInput
  }

  export type CardKeywordUncheckedCreateInput = {
    cardId: string
    keywordId: number
  }

  export type CardKeywordUpdateInput = {
    card?: CardUpdateOneRequiredWithoutCardKeywordsNestedInput
    keyword?: KeywordUpdateOneRequiredWithoutCardKeywordsNestedInput
  }

  export type CardKeywordUncheckedUpdateInput = {
    cardId?: StringFieldUpdateOperationsInput | string
    keywordId?: IntFieldUpdateOperationsInput | number
  }

  export type CardKeywordCreateManyInput = {
    cardId: string
    keywordId: number
  }

  export type CardKeywordUpdateManyMutationInput = {

  }

  export type CardKeywordUncheckedUpdateManyInput = {
    cardId?: StringFieldUpdateOperationsInput | string
    keywordId?: IntFieldUpdateOperationsInput | number
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

  export type EnumTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.Type | EnumTypeFieldRefInput<$PrismaModel>
    in?: $Enums.Type[]
    notIn?: $Enums.Type[]
    not?: NestedEnumTypeFilter<$PrismaModel> | $Enums.Type
  }

  export type EnumColorFilter<$PrismaModel = never> = {
    equals?: $Enums.Color | EnumColorFieldRefInput<$PrismaModel>
    in?: $Enums.Color[]
    notIn?: $Enums.Color[]
    not?: NestedEnumColorFilter<$PrismaModel> | $Enums.Color
  }

  export type EnumSubTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.SubType | EnumSubTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.SubType[] | null
    notIn?: $Enums.SubType[] | null
    not?: NestedEnumSubTypeNullableFilter<$PrismaModel> | $Enums.SubType | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
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

  export type EnumRarityFilter<$PrismaModel = never> = {
    equals?: $Enums.Rarity | EnumRarityFieldRefInput<$PrismaModel>
    in?: $Enums.Rarity[]
    notIn?: $Enums.Rarity[]
    not?: NestedEnumRarityFilter<$PrismaModel> | $Enums.Rarity
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type CardKeywordListRelationFilter = {
    every?: CardKeywordWhereInput
    some?: CardKeywordWhereInput
    none?: CardKeywordWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CardKeywordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CardOrderByRelevanceInput = {
    fields: CardOrderByRelevanceFieldEnum | CardOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CardCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    color?: SortOrder
    subtype?: SortOrder
    attack?: SortOrder
    defense?: SortOrder
    cost?: SortOrder
    rarity?: SortOrder
    effectName?: SortOrder
    effectType?: SortOrder
    effectText?: SortOrder
  }

  export type CardAvgOrderByAggregateInput = {
    attack?: SortOrder
    defense?: SortOrder
    cost?: SortOrder
  }

  export type CardMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    color?: SortOrder
    subtype?: SortOrder
    attack?: SortOrder
    defense?: SortOrder
    cost?: SortOrder
    rarity?: SortOrder
    effectName?: SortOrder
    effectType?: SortOrder
    effectText?: SortOrder
  }

  export type CardMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    color?: SortOrder
    subtype?: SortOrder
    attack?: SortOrder
    defense?: SortOrder
    cost?: SortOrder
    rarity?: SortOrder
    effectName?: SortOrder
    effectType?: SortOrder
    effectText?: SortOrder
  }

  export type CardSumOrderByAggregateInput = {
    attack?: SortOrder
    defense?: SortOrder
    cost?: SortOrder
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

  export type EnumTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Type | EnumTypeFieldRefInput<$PrismaModel>
    in?: $Enums.Type[]
    notIn?: $Enums.Type[]
    not?: NestedEnumTypeWithAggregatesFilter<$PrismaModel> | $Enums.Type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTypeFilter<$PrismaModel>
    _max?: NestedEnumTypeFilter<$PrismaModel>
  }

  export type EnumColorWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Color | EnumColorFieldRefInput<$PrismaModel>
    in?: $Enums.Color[]
    notIn?: $Enums.Color[]
    not?: NestedEnumColorWithAggregatesFilter<$PrismaModel> | $Enums.Color
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumColorFilter<$PrismaModel>
    _max?: NestedEnumColorFilter<$PrismaModel>
  }

  export type EnumSubTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubType | EnumSubTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.SubType[] | null
    notIn?: $Enums.SubType[] | null
    not?: NestedEnumSubTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.SubType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumSubTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumSubTypeNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type EnumRarityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Rarity | EnumRarityFieldRefInput<$PrismaModel>
    in?: $Enums.Rarity[]
    notIn?: $Enums.Rarity[]
    not?: NestedEnumRarityWithAggregatesFilter<$PrismaModel> | $Enums.Rarity
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRarityFilter<$PrismaModel>
    _max?: NestedEnumRarityFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type KeywordOrderByRelevanceInput = {
    fields: KeywordOrderByRelevanceFieldEnum | KeywordOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type KeywordCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type KeywordAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type KeywordMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type KeywordMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type KeywordSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CardScalarRelationFilter = {
    is?: CardWhereInput
    isNot?: CardWhereInput
  }

  export type KeywordScalarRelationFilter = {
    is?: KeywordWhereInput
    isNot?: KeywordWhereInput
  }

  export type CardKeywordOrderByRelevanceInput = {
    fields: CardKeywordOrderByRelevanceFieldEnum | CardKeywordOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CardKeywordCardIdKeywordIdCompoundUniqueInput = {
    cardId: string
    keywordId: number
  }

  export type CardKeywordCountOrderByAggregateInput = {
    cardId?: SortOrder
    keywordId?: SortOrder
  }

  export type CardKeywordAvgOrderByAggregateInput = {
    keywordId?: SortOrder
  }

  export type CardKeywordMaxOrderByAggregateInput = {
    cardId?: SortOrder
    keywordId?: SortOrder
  }

  export type CardKeywordMinOrderByAggregateInput = {
    cardId?: SortOrder
    keywordId?: SortOrder
  }

  export type CardKeywordSumOrderByAggregateInput = {
    keywordId?: SortOrder
  }

  export type CardKeywordCreateNestedManyWithoutCardInput = {
    create?: XOR<CardKeywordCreateWithoutCardInput, CardKeywordUncheckedCreateWithoutCardInput> | CardKeywordCreateWithoutCardInput[] | CardKeywordUncheckedCreateWithoutCardInput[]
    connectOrCreate?: CardKeywordCreateOrConnectWithoutCardInput | CardKeywordCreateOrConnectWithoutCardInput[]
    createMany?: CardKeywordCreateManyCardInputEnvelope
    connect?: CardKeywordWhereUniqueInput | CardKeywordWhereUniqueInput[]
  }

  export type CardKeywordUncheckedCreateNestedManyWithoutCardInput = {
    create?: XOR<CardKeywordCreateWithoutCardInput, CardKeywordUncheckedCreateWithoutCardInput> | CardKeywordCreateWithoutCardInput[] | CardKeywordUncheckedCreateWithoutCardInput[]
    connectOrCreate?: CardKeywordCreateOrConnectWithoutCardInput | CardKeywordCreateOrConnectWithoutCardInput[]
    createMany?: CardKeywordCreateManyCardInputEnvelope
    connect?: CardKeywordWhereUniqueInput | CardKeywordWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumTypeFieldUpdateOperationsInput = {
    set?: $Enums.Type
  }

  export type EnumColorFieldUpdateOperationsInput = {
    set?: $Enums.Color
  }

  export type NullableEnumSubTypeFieldUpdateOperationsInput = {
    set?: $Enums.SubType | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumRarityFieldUpdateOperationsInput = {
    set?: $Enums.Rarity
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type CardKeywordUpdateManyWithoutCardNestedInput = {
    create?: XOR<CardKeywordCreateWithoutCardInput, CardKeywordUncheckedCreateWithoutCardInput> | CardKeywordCreateWithoutCardInput[] | CardKeywordUncheckedCreateWithoutCardInput[]
    connectOrCreate?: CardKeywordCreateOrConnectWithoutCardInput | CardKeywordCreateOrConnectWithoutCardInput[]
    upsert?: CardKeywordUpsertWithWhereUniqueWithoutCardInput | CardKeywordUpsertWithWhereUniqueWithoutCardInput[]
    createMany?: CardKeywordCreateManyCardInputEnvelope
    set?: CardKeywordWhereUniqueInput | CardKeywordWhereUniqueInput[]
    disconnect?: CardKeywordWhereUniqueInput | CardKeywordWhereUniqueInput[]
    delete?: CardKeywordWhereUniqueInput | CardKeywordWhereUniqueInput[]
    connect?: CardKeywordWhereUniqueInput | CardKeywordWhereUniqueInput[]
    update?: CardKeywordUpdateWithWhereUniqueWithoutCardInput | CardKeywordUpdateWithWhereUniqueWithoutCardInput[]
    updateMany?: CardKeywordUpdateManyWithWhereWithoutCardInput | CardKeywordUpdateManyWithWhereWithoutCardInput[]
    deleteMany?: CardKeywordScalarWhereInput | CardKeywordScalarWhereInput[]
  }

  export type CardKeywordUncheckedUpdateManyWithoutCardNestedInput = {
    create?: XOR<CardKeywordCreateWithoutCardInput, CardKeywordUncheckedCreateWithoutCardInput> | CardKeywordCreateWithoutCardInput[] | CardKeywordUncheckedCreateWithoutCardInput[]
    connectOrCreate?: CardKeywordCreateOrConnectWithoutCardInput | CardKeywordCreateOrConnectWithoutCardInput[]
    upsert?: CardKeywordUpsertWithWhereUniqueWithoutCardInput | CardKeywordUpsertWithWhereUniqueWithoutCardInput[]
    createMany?: CardKeywordCreateManyCardInputEnvelope
    set?: CardKeywordWhereUniqueInput | CardKeywordWhereUniqueInput[]
    disconnect?: CardKeywordWhereUniqueInput | CardKeywordWhereUniqueInput[]
    delete?: CardKeywordWhereUniqueInput | CardKeywordWhereUniqueInput[]
    connect?: CardKeywordWhereUniqueInput | CardKeywordWhereUniqueInput[]
    update?: CardKeywordUpdateWithWhereUniqueWithoutCardInput | CardKeywordUpdateWithWhereUniqueWithoutCardInput[]
    updateMany?: CardKeywordUpdateManyWithWhereWithoutCardInput | CardKeywordUpdateManyWithWhereWithoutCardInput[]
    deleteMany?: CardKeywordScalarWhereInput | CardKeywordScalarWhereInput[]
  }

  export type CardKeywordCreateNestedManyWithoutKeywordInput = {
    create?: XOR<CardKeywordCreateWithoutKeywordInput, CardKeywordUncheckedCreateWithoutKeywordInput> | CardKeywordCreateWithoutKeywordInput[] | CardKeywordUncheckedCreateWithoutKeywordInput[]
    connectOrCreate?: CardKeywordCreateOrConnectWithoutKeywordInput | CardKeywordCreateOrConnectWithoutKeywordInput[]
    createMany?: CardKeywordCreateManyKeywordInputEnvelope
    connect?: CardKeywordWhereUniqueInput | CardKeywordWhereUniqueInput[]
  }

  export type CardKeywordUncheckedCreateNestedManyWithoutKeywordInput = {
    create?: XOR<CardKeywordCreateWithoutKeywordInput, CardKeywordUncheckedCreateWithoutKeywordInput> | CardKeywordCreateWithoutKeywordInput[] | CardKeywordUncheckedCreateWithoutKeywordInput[]
    connectOrCreate?: CardKeywordCreateOrConnectWithoutKeywordInput | CardKeywordCreateOrConnectWithoutKeywordInput[]
    createMany?: CardKeywordCreateManyKeywordInputEnvelope
    connect?: CardKeywordWhereUniqueInput | CardKeywordWhereUniqueInput[]
  }

  export type CardKeywordUpdateManyWithoutKeywordNestedInput = {
    create?: XOR<CardKeywordCreateWithoutKeywordInput, CardKeywordUncheckedCreateWithoutKeywordInput> | CardKeywordCreateWithoutKeywordInput[] | CardKeywordUncheckedCreateWithoutKeywordInput[]
    connectOrCreate?: CardKeywordCreateOrConnectWithoutKeywordInput | CardKeywordCreateOrConnectWithoutKeywordInput[]
    upsert?: CardKeywordUpsertWithWhereUniqueWithoutKeywordInput | CardKeywordUpsertWithWhereUniqueWithoutKeywordInput[]
    createMany?: CardKeywordCreateManyKeywordInputEnvelope
    set?: CardKeywordWhereUniqueInput | CardKeywordWhereUniqueInput[]
    disconnect?: CardKeywordWhereUniqueInput | CardKeywordWhereUniqueInput[]
    delete?: CardKeywordWhereUniqueInput | CardKeywordWhereUniqueInput[]
    connect?: CardKeywordWhereUniqueInput | CardKeywordWhereUniqueInput[]
    update?: CardKeywordUpdateWithWhereUniqueWithoutKeywordInput | CardKeywordUpdateWithWhereUniqueWithoutKeywordInput[]
    updateMany?: CardKeywordUpdateManyWithWhereWithoutKeywordInput | CardKeywordUpdateManyWithWhereWithoutKeywordInput[]
    deleteMany?: CardKeywordScalarWhereInput | CardKeywordScalarWhereInput[]
  }

  export type CardKeywordUncheckedUpdateManyWithoutKeywordNestedInput = {
    create?: XOR<CardKeywordCreateWithoutKeywordInput, CardKeywordUncheckedCreateWithoutKeywordInput> | CardKeywordCreateWithoutKeywordInput[] | CardKeywordUncheckedCreateWithoutKeywordInput[]
    connectOrCreate?: CardKeywordCreateOrConnectWithoutKeywordInput | CardKeywordCreateOrConnectWithoutKeywordInput[]
    upsert?: CardKeywordUpsertWithWhereUniqueWithoutKeywordInput | CardKeywordUpsertWithWhereUniqueWithoutKeywordInput[]
    createMany?: CardKeywordCreateManyKeywordInputEnvelope
    set?: CardKeywordWhereUniqueInput | CardKeywordWhereUniqueInput[]
    disconnect?: CardKeywordWhereUniqueInput | CardKeywordWhereUniqueInput[]
    delete?: CardKeywordWhereUniqueInput | CardKeywordWhereUniqueInput[]
    connect?: CardKeywordWhereUniqueInput | CardKeywordWhereUniqueInput[]
    update?: CardKeywordUpdateWithWhereUniqueWithoutKeywordInput | CardKeywordUpdateWithWhereUniqueWithoutKeywordInput[]
    updateMany?: CardKeywordUpdateManyWithWhereWithoutKeywordInput | CardKeywordUpdateManyWithWhereWithoutKeywordInput[]
    deleteMany?: CardKeywordScalarWhereInput | CardKeywordScalarWhereInput[]
  }

  export type CardCreateNestedOneWithoutCardKeywordsInput = {
    create?: XOR<CardCreateWithoutCardKeywordsInput, CardUncheckedCreateWithoutCardKeywordsInput>
    connectOrCreate?: CardCreateOrConnectWithoutCardKeywordsInput
    connect?: CardWhereUniqueInput
  }

  export type KeywordCreateNestedOneWithoutCardKeywordsInput = {
    create?: XOR<KeywordCreateWithoutCardKeywordsInput, KeywordUncheckedCreateWithoutCardKeywordsInput>
    connectOrCreate?: KeywordCreateOrConnectWithoutCardKeywordsInput
    connect?: KeywordWhereUniqueInput
  }

  export type CardUpdateOneRequiredWithoutCardKeywordsNestedInput = {
    create?: XOR<CardCreateWithoutCardKeywordsInput, CardUncheckedCreateWithoutCardKeywordsInput>
    connectOrCreate?: CardCreateOrConnectWithoutCardKeywordsInput
    upsert?: CardUpsertWithoutCardKeywordsInput
    connect?: CardWhereUniqueInput
    update?: XOR<XOR<CardUpdateToOneWithWhereWithoutCardKeywordsInput, CardUpdateWithoutCardKeywordsInput>, CardUncheckedUpdateWithoutCardKeywordsInput>
  }

  export type KeywordUpdateOneRequiredWithoutCardKeywordsNestedInput = {
    create?: XOR<KeywordCreateWithoutCardKeywordsInput, KeywordUncheckedCreateWithoutCardKeywordsInput>
    connectOrCreate?: KeywordCreateOrConnectWithoutCardKeywordsInput
    upsert?: KeywordUpsertWithoutCardKeywordsInput
    connect?: KeywordWhereUniqueInput
    update?: XOR<XOR<KeywordUpdateToOneWithWhereWithoutCardKeywordsInput, KeywordUpdateWithoutCardKeywordsInput>, KeywordUncheckedUpdateWithoutCardKeywordsInput>
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

  export type NestedEnumTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.Type | EnumTypeFieldRefInput<$PrismaModel>
    in?: $Enums.Type[]
    notIn?: $Enums.Type[]
    not?: NestedEnumTypeFilter<$PrismaModel> | $Enums.Type
  }

  export type NestedEnumColorFilter<$PrismaModel = never> = {
    equals?: $Enums.Color | EnumColorFieldRefInput<$PrismaModel>
    in?: $Enums.Color[]
    notIn?: $Enums.Color[]
    not?: NestedEnumColorFilter<$PrismaModel> | $Enums.Color
  }

  export type NestedEnumSubTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.SubType | EnumSubTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.SubType[] | null
    notIn?: $Enums.SubType[] | null
    not?: NestedEnumSubTypeNullableFilter<$PrismaModel> | $Enums.SubType | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
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

  export type NestedEnumRarityFilter<$PrismaModel = never> = {
    equals?: $Enums.Rarity | EnumRarityFieldRefInput<$PrismaModel>
    in?: $Enums.Rarity[]
    notIn?: $Enums.Rarity[]
    not?: NestedEnumRarityFilter<$PrismaModel> | $Enums.Rarity
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type NestedEnumTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Type | EnumTypeFieldRefInput<$PrismaModel>
    in?: $Enums.Type[]
    notIn?: $Enums.Type[]
    not?: NestedEnumTypeWithAggregatesFilter<$PrismaModel> | $Enums.Type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTypeFilter<$PrismaModel>
    _max?: NestedEnumTypeFilter<$PrismaModel>
  }

  export type NestedEnumColorWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Color | EnumColorFieldRefInput<$PrismaModel>
    in?: $Enums.Color[]
    notIn?: $Enums.Color[]
    not?: NestedEnumColorWithAggregatesFilter<$PrismaModel> | $Enums.Color
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumColorFilter<$PrismaModel>
    _max?: NestedEnumColorFilter<$PrismaModel>
  }

  export type NestedEnumSubTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubType | EnumSubTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.SubType[] | null
    notIn?: $Enums.SubType[] | null
    not?: NestedEnumSubTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.SubType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumSubTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumSubTypeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type NestedEnumRarityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Rarity | EnumRarityFieldRefInput<$PrismaModel>
    in?: $Enums.Rarity[]
    notIn?: $Enums.Rarity[]
    not?: NestedEnumRarityWithAggregatesFilter<$PrismaModel> | $Enums.Rarity
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRarityFilter<$PrismaModel>
    _max?: NestedEnumRarityFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type CardKeywordCreateWithoutCardInput = {
    keyword: KeywordCreateNestedOneWithoutCardKeywordsInput
  }

  export type CardKeywordUncheckedCreateWithoutCardInput = {
    keywordId: number
  }

  export type CardKeywordCreateOrConnectWithoutCardInput = {
    where: CardKeywordWhereUniqueInput
    create: XOR<CardKeywordCreateWithoutCardInput, CardKeywordUncheckedCreateWithoutCardInput>
  }

  export type CardKeywordCreateManyCardInputEnvelope = {
    data: CardKeywordCreateManyCardInput | CardKeywordCreateManyCardInput[]
    skipDuplicates?: boolean
  }

  export type CardKeywordUpsertWithWhereUniqueWithoutCardInput = {
    where: CardKeywordWhereUniqueInput
    update: XOR<CardKeywordUpdateWithoutCardInput, CardKeywordUncheckedUpdateWithoutCardInput>
    create: XOR<CardKeywordCreateWithoutCardInput, CardKeywordUncheckedCreateWithoutCardInput>
  }

  export type CardKeywordUpdateWithWhereUniqueWithoutCardInput = {
    where: CardKeywordWhereUniqueInput
    data: XOR<CardKeywordUpdateWithoutCardInput, CardKeywordUncheckedUpdateWithoutCardInput>
  }

  export type CardKeywordUpdateManyWithWhereWithoutCardInput = {
    where: CardKeywordScalarWhereInput
    data: XOR<CardKeywordUpdateManyMutationInput, CardKeywordUncheckedUpdateManyWithoutCardInput>
  }

  export type CardKeywordScalarWhereInput = {
    AND?: CardKeywordScalarWhereInput | CardKeywordScalarWhereInput[]
    OR?: CardKeywordScalarWhereInput[]
    NOT?: CardKeywordScalarWhereInput | CardKeywordScalarWhereInput[]
    cardId?: StringFilter<"CardKeyword"> | string
    keywordId?: IntFilter<"CardKeyword"> | number
  }

  export type CardKeywordCreateWithoutKeywordInput = {
    card: CardCreateNestedOneWithoutCardKeywordsInput
  }

  export type CardKeywordUncheckedCreateWithoutKeywordInput = {
    cardId: string
  }

  export type CardKeywordCreateOrConnectWithoutKeywordInput = {
    where: CardKeywordWhereUniqueInput
    create: XOR<CardKeywordCreateWithoutKeywordInput, CardKeywordUncheckedCreateWithoutKeywordInput>
  }

  export type CardKeywordCreateManyKeywordInputEnvelope = {
    data: CardKeywordCreateManyKeywordInput | CardKeywordCreateManyKeywordInput[]
    skipDuplicates?: boolean
  }

  export type CardKeywordUpsertWithWhereUniqueWithoutKeywordInput = {
    where: CardKeywordWhereUniqueInput
    update: XOR<CardKeywordUpdateWithoutKeywordInput, CardKeywordUncheckedUpdateWithoutKeywordInput>
    create: XOR<CardKeywordCreateWithoutKeywordInput, CardKeywordUncheckedCreateWithoutKeywordInput>
  }

  export type CardKeywordUpdateWithWhereUniqueWithoutKeywordInput = {
    where: CardKeywordWhereUniqueInput
    data: XOR<CardKeywordUpdateWithoutKeywordInput, CardKeywordUncheckedUpdateWithoutKeywordInput>
  }

  export type CardKeywordUpdateManyWithWhereWithoutKeywordInput = {
    where: CardKeywordScalarWhereInput
    data: XOR<CardKeywordUpdateManyMutationInput, CardKeywordUncheckedUpdateManyWithoutKeywordInput>
  }

  export type CardCreateWithoutCardKeywordsInput = {
    id?: string
    name: string
    type?: $Enums.Type
    color?: $Enums.Color
    subtype?: $Enums.SubType | null
    attack?: number | null
    defense?: number | null
    cost: number
    rarity: $Enums.Rarity
    effectName?: string | null
    effectType?: string | null
    effectText?: string | null
  }

  export type CardUncheckedCreateWithoutCardKeywordsInput = {
    id?: string
    name: string
    type?: $Enums.Type
    color?: $Enums.Color
    subtype?: $Enums.SubType | null
    attack?: number | null
    defense?: number | null
    cost: number
    rarity: $Enums.Rarity
    effectName?: string | null
    effectType?: string | null
    effectText?: string | null
  }

  export type CardCreateOrConnectWithoutCardKeywordsInput = {
    where: CardWhereUniqueInput
    create: XOR<CardCreateWithoutCardKeywordsInput, CardUncheckedCreateWithoutCardKeywordsInput>
  }

  export type KeywordCreateWithoutCardKeywordsInput = {
    name: string
  }

  export type KeywordUncheckedCreateWithoutCardKeywordsInput = {
    id?: number
    name: string
  }

  export type KeywordCreateOrConnectWithoutCardKeywordsInput = {
    where: KeywordWhereUniqueInput
    create: XOR<KeywordCreateWithoutCardKeywordsInput, KeywordUncheckedCreateWithoutCardKeywordsInput>
  }

  export type CardUpsertWithoutCardKeywordsInput = {
    update: XOR<CardUpdateWithoutCardKeywordsInput, CardUncheckedUpdateWithoutCardKeywordsInput>
    create: XOR<CardCreateWithoutCardKeywordsInput, CardUncheckedCreateWithoutCardKeywordsInput>
    where?: CardWhereInput
  }

  export type CardUpdateToOneWithWhereWithoutCardKeywordsInput = {
    where?: CardWhereInput
    data: XOR<CardUpdateWithoutCardKeywordsInput, CardUncheckedUpdateWithoutCardKeywordsInput>
  }

  export type CardUpdateWithoutCardKeywordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    color?: EnumColorFieldUpdateOperationsInput | $Enums.Color
    subtype?: NullableEnumSubTypeFieldUpdateOperationsInput | $Enums.SubType | null
    attack?: NullableIntFieldUpdateOperationsInput | number | null
    defense?: NullableIntFieldUpdateOperationsInput | number | null
    cost?: IntFieldUpdateOperationsInput | number
    rarity?: EnumRarityFieldUpdateOperationsInput | $Enums.Rarity
    effectName?: NullableStringFieldUpdateOperationsInput | string | null
    effectType?: NullableStringFieldUpdateOperationsInput | string | null
    effectText?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CardUncheckedUpdateWithoutCardKeywordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    color?: EnumColorFieldUpdateOperationsInput | $Enums.Color
    subtype?: NullableEnumSubTypeFieldUpdateOperationsInput | $Enums.SubType | null
    attack?: NullableIntFieldUpdateOperationsInput | number | null
    defense?: NullableIntFieldUpdateOperationsInput | number | null
    cost?: IntFieldUpdateOperationsInput | number
    rarity?: EnumRarityFieldUpdateOperationsInput | $Enums.Rarity
    effectName?: NullableStringFieldUpdateOperationsInput | string | null
    effectType?: NullableStringFieldUpdateOperationsInput | string | null
    effectText?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type KeywordUpsertWithoutCardKeywordsInput = {
    update: XOR<KeywordUpdateWithoutCardKeywordsInput, KeywordUncheckedUpdateWithoutCardKeywordsInput>
    create: XOR<KeywordCreateWithoutCardKeywordsInput, KeywordUncheckedCreateWithoutCardKeywordsInput>
    where?: KeywordWhereInput
  }

  export type KeywordUpdateToOneWithWhereWithoutCardKeywordsInput = {
    where?: KeywordWhereInput
    data: XOR<KeywordUpdateWithoutCardKeywordsInput, KeywordUncheckedUpdateWithoutCardKeywordsInput>
  }

  export type KeywordUpdateWithoutCardKeywordsInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type KeywordUncheckedUpdateWithoutCardKeywordsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CardKeywordCreateManyCardInput = {
    keywordId: number
  }

  export type CardKeywordUpdateWithoutCardInput = {
    keyword?: KeywordUpdateOneRequiredWithoutCardKeywordsNestedInput
  }

  export type CardKeywordUncheckedUpdateWithoutCardInput = {
    keywordId?: IntFieldUpdateOperationsInput | number
  }

  export type CardKeywordUncheckedUpdateManyWithoutCardInput = {
    keywordId?: IntFieldUpdateOperationsInput | number
  }

  export type CardKeywordCreateManyKeywordInput = {
    cardId: string
  }

  export type CardKeywordUpdateWithoutKeywordInput = {
    card?: CardUpdateOneRequiredWithoutCardKeywordsNestedInput
  }

  export type CardKeywordUncheckedUpdateWithoutKeywordInput = {
    cardId?: StringFieldUpdateOperationsInput | string
  }

  export type CardKeywordUncheckedUpdateManyWithoutKeywordInput = {
    cardId?: StringFieldUpdateOperationsInput | string
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