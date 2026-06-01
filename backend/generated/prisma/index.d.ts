
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Chapter
 * 
 */
export type Chapter = $Result.DefaultSelection<Prisma.$ChapterPayload>
/**
 * Model SubChapter
 * 
 */
export type SubChapter = $Result.DefaultSelection<Prisma.$SubChapterPayload>
/**
 * Model ChapterTaken
 * 
 */
export type ChapterTaken = $Result.DefaultSelection<Prisma.$ChapterTakenPayload>
/**
 * Model Assessment
 * 
 */
export type Assessment = $Result.DefaultSelection<Prisma.$AssessmentPayload>
/**
 * Model AiReport
 * 
 */
export type AiReport = $Result.DefaultSelection<Prisma.$AiReportPayload>
/**
 * Model Prerequisite
 * 
 */
export type Prerequisite = $Result.DefaultSelection<Prisma.$PrerequisitePayload>
/**
 * Model Question
 * 
 */
export type Question = $Result.DefaultSelection<Prisma.$QuestionPayload>
/**
 * Model UserAttempt
 * 
 */
export type UserAttempt = $Result.DefaultSelection<Prisma.$UserAttemptPayload>
/**
 * Model UserProgres
 * 
 */
export type UserProgres = $Result.DefaultSelection<Prisma.$UserProgresPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  admin: 'admin',
  student: 'student'
};

export type Role = (typeof Role)[keyof typeof Role]


export const AssessmentType: {
  beginner: 'beginner',
  intermediate: 'intermediate',
  advanced: 'advanced'
};

export type AssessmentType = (typeof AssessmentType)[keyof typeof AssessmentType]


export const DifficultyLevel: {
  easy: 'easy',
  medium: 'medium',
  hard: 'hard',
  empty: 'empty'
};

export type DifficultyLevel = (typeof DifficultyLevel)[keyof typeof DifficultyLevel]


export const CurrentLevel: {
  beginner: 'beginner',
  intermediate: 'intermediate',
  advanced: 'advanced'
};

export type CurrentLevel = (typeof CurrentLevel)[keyof typeof CurrentLevel]


export const ProgressStatus: {
  not_started: 'not_started',
  in_progres: 'in_progres',
  done: 'done',
  empty: 'empty'
};

export type ProgressStatus = (typeof ProgressStatus)[keyof typeof ProgressStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type AssessmentType = $Enums.AssessmentType

export const AssessmentType: typeof $Enums.AssessmentType

export type DifficultyLevel = $Enums.DifficultyLevel

export const DifficultyLevel: typeof $Enums.DifficultyLevel

export type CurrentLevel = $Enums.CurrentLevel

export const CurrentLevel: typeof $Enums.CurrentLevel

export type ProgressStatus = $Enums.ProgressStatus

export const ProgressStatus: typeof $Enums.ProgressStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chapter`: Exposes CRUD operations for the **Chapter** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chapters
    * const chapters = await prisma.chapter.findMany()
    * ```
    */
  get chapter(): Prisma.ChapterDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subChapter`: Exposes CRUD operations for the **SubChapter** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SubChapters
    * const subChapters = await prisma.subChapter.findMany()
    * ```
    */
  get subChapter(): Prisma.SubChapterDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chapterTaken`: Exposes CRUD operations for the **ChapterTaken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChapterTakens
    * const chapterTakens = await prisma.chapterTaken.findMany()
    * ```
    */
  get chapterTaken(): Prisma.ChapterTakenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.assessment`: Exposes CRUD operations for the **Assessment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Assessments
    * const assessments = await prisma.assessment.findMany()
    * ```
    */
  get assessment(): Prisma.AssessmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.aiReport`: Exposes CRUD operations for the **AiReport** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AiReports
    * const aiReports = await prisma.aiReport.findMany()
    * ```
    */
  get aiReport(): Prisma.AiReportDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.prerequisite`: Exposes CRUD operations for the **Prerequisite** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Prerequisites
    * const prerequisites = await prisma.prerequisite.findMany()
    * ```
    */
  get prerequisite(): Prisma.PrerequisiteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.question`: Exposes CRUD operations for the **Question** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Questions
    * const questions = await prisma.question.findMany()
    * ```
    */
  get question(): Prisma.QuestionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userAttempt`: Exposes CRUD operations for the **UserAttempt** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserAttempts
    * const userAttempts = await prisma.userAttempt.findMany()
    * ```
    */
  get userAttempt(): Prisma.UserAttemptDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userProgres`: Exposes CRUD operations for the **UserProgres** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserProgres
    * const userProgres = await prisma.userProgres.findMany()
    * ```
    */
  get userProgres(): Prisma.UserProgresDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    User: 'User',
    Chapter: 'Chapter',
    SubChapter: 'SubChapter',
    ChapterTaken: 'ChapterTaken',
    Assessment: 'Assessment',
    AiReport: 'AiReport',
    Prerequisite: 'Prerequisite',
    Question: 'Question',
    UserAttempt: 'UserAttempt',
    UserProgres: 'UserProgres'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "chapter" | "subChapter" | "chapterTaken" | "assessment" | "aiReport" | "prerequisite" | "question" | "userAttempt" | "userProgres"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Chapter: {
        payload: Prisma.$ChapterPayload<ExtArgs>
        fields: Prisma.ChapterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChapterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChapterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload>
          }
          findFirst: {
            args: Prisma.ChapterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChapterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload>
          }
          findMany: {
            args: Prisma.ChapterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload>[]
          }
          create: {
            args: Prisma.ChapterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload>
          }
          createMany: {
            args: Prisma.ChapterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ChapterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload>
          }
          update: {
            args: Prisma.ChapterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload>
          }
          deleteMany: {
            args: Prisma.ChapterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChapterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ChapterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload>
          }
          aggregate: {
            args: Prisma.ChapterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChapter>
          }
          groupBy: {
            args: Prisma.ChapterGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChapterGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChapterCountArgs<ExtArgs>
            result: $Utils.Optional<ChapterCountAggregateOutputType> | number
          }
        }
      }
      SubChapter: {
        payload: Prisma.$SubChapterPayload<ExtArgs>
        fields: Prisma.SubChapterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubChapterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubChapterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubChapterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubChapterPayload>
          }
          findFirst: {
            args: Prisma.SubChapterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubChapterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubChapterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubChapterPayload>
          }
          findMany: {
            args: Prisma.SubChapterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubChapterPayload>[]
          }
          create: {
            args: Prisma.SubChapterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubChapterPayload>
          }
          createMany: {
            args: Prisma.SubChapterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SubChapterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubChapterPayload>
          }
          update: {
            args: Prisma.SubChapterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubChapterPayload>
          }
          deleteMany: {
            args: Prisma.SubChapterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubChapterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SubChapterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubChapterPayload>
          }
          aggregate: {
            args: Prisma.SubChapterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubChapter>
          }
          groupBy: {
            args: Prisma.SubChapterGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubChapterGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubChapterCountArgs<ExtArgs>
            result: $Utils.Optional<SubChapterCountAggregateOutputType> | number
          }
        }
      }
      ChapterTaken: {
        payload: Prisma.$ChapterTakenPayload<ExtArgs>
        fields: Prisma.ChapterTakenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChapterTakenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterTakenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChapterTakenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterTakenPayload>
          }
          findFirst: {
            args: Prisma.ChapterTakenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterTakenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChapterTakenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterTakenPayload>
          }
          findMany: {
            args: Prisma.ChapterTakenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterTakenPayload>[]
          }
          create: {
            args: Prisma.ChapterTakenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterTakenPayload>
          }
          createMany: {
            args: Prisma.ChapterTakenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ChapterTakenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterTakenPayload>
          }
          update: {
            args: Prisma.ChapterTakenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterTakenPayload>
          }
          deleteMany: {
            args: Prisma.ChapterTakenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChapterTakenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ChapterTakenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterTakenPayload>
          }
          aggregate: {
            args: Prisma.ChapterTakenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChapterTaken>
          }
          groupBy: {
            args: Prisma.ChapterTakenGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChapterTakenGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChapterTakenCountArgs<ExtArgs>
            result: $Utils.Optional<ChapterTakenCountAggregateOutputType> | number
          }
        }
      }
      Assessment: {
        payload: Prisma.$AssessmentPayload<ExtArgs>
        fields: Prisma.AssessmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AssessmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AssessmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentPayload>
          }
          findFirst: {
            args: Prisma.AssessmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AssessmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentPayload>
          }
          findMany: {
            args: Prisma.AssessmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentPayload>[]
          }
          create: {
            args: Prisma.AssessmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentPayload>
          }
          createMany: {
            args: Prisma.AssessmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AssessmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentPayload>
          }
          update: {
            args: Prisma.AssessmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentPayload>
          }
          deleteMany: {
            args: Prisma.AssessmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AssessmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AssessmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentPayload>
          }
          aggregate: {
            args: Prisma.AssessmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAssessment>
          }
          groupBy: {
            args: Prisma.AssessmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AssessmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AssessmentCountArgs<ExtArgs>
            result: $Utils.Optional<AssessmentCountAggregateOutputType> | number
          }
        }
      }
      AiReport: {
        payload: Prisma.$AiReportPayload<ExtArgs>
        fields: Prisma.AiReportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AiReportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiReportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AiReportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiReportPayload>
          }
          findFirst: {
            args: Prisma.AiReportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiReportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AiReportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiReportPayload>
          }
          findMany: {
            args: Prisma.AiReportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiReportPayload>[]
          }
          create: {
            args: Prisma.AiReportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiReportPayload>
          }
          createMany: {
            args: Prisma.AiReportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AiReportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiReportPayload>
          }
          update: {
            args: Prisma.AiReportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiReportPayload>
          }
          deleteMany: {
            args: Prisma.AiReportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AiReportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AiReportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiReportPayload>
          }
          aggregate: {
            args: Prisma.AiReportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAiReport>
          }
          groupBy: {
            args: Prisma.AiReportGroupByArgs<ExtArgs>
            result: $Utils.Optional<AiReportGroupByOutputType>[]
          }
          count: {
            args: Prisma.AiReportCountArgs<ExtArgs>
            result: $Utils.Optional<AiReportCountAggregateOutputType> | number
          }
        }
      }
      Prerequisite: {
        payload: Prisma.$PrerequisitePayload<ExtArgs>
        fields: Prisma.PrerequisiteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PrerequisiteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrerequisitePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PrerequisiteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrerequisitePayload>
          }
          findFirst: {
            args: Prisma.PrerequisiteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrerequisitePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PrerequisiteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrerequisitePayload>
          }
          findMany: {
            args: Prisma.PrerequisiteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrerequisitePayload>[]
          }
          create: {
            args: Prisma.PrerequisiteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrerequisitePayload>
          }
          createMany: {
            args: Prisma.PrerequisiteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PrerequisiteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrerequisitePayload>
          }
          update: {
            args: Prisma.PrerequisiteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrerequisitePayload>
          }
          deleteMany: {
            args: Prisma.PrerequisiteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PrerequisiteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PrerequisiteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrerequisitePayload>
          }
          aggregate: {
            args: Prisma.PrerequisiteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePrerequisite>
          }
          groupBy: {
            args: Prisma.PrerequisiteGroupByArgs<ExtArgs>
            result: $Utils.Optional<PrerequisiteGroupByOutputType>[]
          }
          count: {
            args: Prisma.PrerequisiteCountArgs<ExtArgs>
            result: $Utils.Optional<PrerequisiteCountAggregateOutputType> | number
          }
        }
      }
      Question: {
        payload: Prisma.$QuestionPayload<ExtArgs>
        fields: Prisma.QuestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuestionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuestionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findFirst: {
            args: Prisma.QuestionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuestionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findMany: {
            args: Prisma.QuestionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          create: {
            args: Prisma.QuestionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          createMany: {
            args: Prisma.QuestionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.QuestionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          update: {
            args: Prisma.QuestionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          deleteMany: {
            args: Prisma.QuestionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuestionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.QuestionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          aggregate: {
            args: Prisma.QuestionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuestion>
          }
          groupBy: {
            args: Prisma.QuestionGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestionGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuestionCountArgs<ExtArgs>
            result: $Utils.Optional<QuestionCountAggregateOutputType> | number
          }
        }
      }
      UserAttempt: {
        payload: Prisma.$UserAttemptPayload<ExtArgs>
        fields: Prisma.UserAttemptFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserAttemptFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAttemptPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserAttemptFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAttemptPayload>
          }
          findFirst: {
            args: Prisma.UserAttemptFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAttemptPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserAttemptFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAttemptPayload>
          }
          findMany: {
            args: Prisma.UserAttemptFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAttemptPayload>[]
          }
          create: {
            args: Prisma.UserAttemptCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAttemptPayload>
          }
          createMany: {
            args: Prisma.UserAttemptCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserAttemptDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAttemptPayload>
          }
          update: {
            args: Prisma.UserAttemptUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAttemptPayload>
          }
          deleteMany: {
            args: Prisma.UserAttemptDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserAttemptUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserAttemptUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAttemptPayload>
          }
          aggregate: {
            args: Prisma.UserAttemptAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserAttempt>
          }
          groupBy: {
            args: Prisma.UserAttemptGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserAttemptGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserAttemptCountArgs<ExtArgs>
            result: $Utils.Optional<UserAttemptCountAggregateOutputType> | number
          }
        }
      }
      UserProgres: {
        payload: Prisma.$UserProgresPayload<ExtArgs>
        fields: Prisma.UserProgresFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserProgresFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProgresPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserProgresFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProgresPayload>
          }
          findFirst: {
            args: Prisma.UserProgresFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProgresPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserProgresFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProgresPayload>
          }
          findMany: {
            args: Prisma.UserProgresFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProgresPayload>[]
          }
          create: {
            args: Prisma.UserProgresCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProgresPayload>
          }
          createMany: {
            args: Prisma.UserProgresCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserProgresDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProgresPayload>
          }
          update: {
            args: Prisma.UserProgresUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProgresPayload>
          }
          deleteMany: {
            args: Prisma.UserProgresDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserProgresUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserProgresUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProgresPayload>
          }
          aggregate: {
            args: Prisma.UserProgresAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserProgres>
          }
          groupBy: {
            args: Prisma.UserProgresGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserProgresGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserProgresCountArgs<ExtArgs>
            result: $Utils.Optional<UserProgresCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    chapter?: ChapterOmit
    subChapter?: SubChapterOmit
    chapterTaken?: ChapterTakenOmit
    assessment?: AssessmentOmit
    aiReport?: AiReportOmit
    prerequisite?: PrerequisiteOmit
    question?: QuestionOmit
    userAttempt?: UserAttemptOmit
    userProgres?: UserProgresOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    ai_reports: number
    chapter_taken: number
    user_attempts: number
    user_progres: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ai_reports?: boolean | UserCountOutputTypeCountAi_reportsArgs
    chapter_taken?: boolean | UserCountOutputTypeCountChapter_takenArgs
    user_attempts?: boolean | UserCountOutputTypeCountUser_attemptsArgs
    user_progres?: boolean | UserCountOutputTypeCountUser_progresArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAi_reportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AiReportWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChapter_takenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChapterTakenWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUser_attemptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserAttemptWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUser_progresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserProgresWhereInput
  }


  /**
   * Count Type ChapterCountOutputType
   */

  export type ChapterCountOutputType = {
    chapter_taken: number
    prerequisites_base: number
    prerequisites_requirement: number
    sub_chapters: number
  }

  export type ChapterCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chapter_taken?: boolean | ChapterCountOutputTypeCountChapter_takenArgs
    prerequisites_base?: boolean | ChapterCountOutputTypeCountPrerequisites_baseArgs
    prerequisites_requirement?: boolean | ChapterCountOutputTypeCountPrerequisites_requirementArgs
    sub_chapters?: boolean | ChapterCountOutputTypeCountSub_chaptersArgs
  }

  // Custom InputTypes
  /**
   * ChapterCountOutputType without action
   */
  export type ChapterCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChapterCountOutputType
     */
    select?: ChapterCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChapterCountOutputType without action
   */
  export type ChapterCountOutputTypeCountChapter_takenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChapterTakenWhereInput
  }

  /**
   * ChapterCountOutputType without action
   */
  export type ChapterCountOutputTypeCountPrerequisites_baseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrerequisiteWhereInput
  }

  /**
   * ChapterCountOutputType without action
   */
  export type ChapterCountOutputTypeCountPrerequisites_requirementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrerequisiteWhereInput
  }

  /**
   * ChapterCountOutputType without action
   */
  export type ChapterCountOutputTypeCountSub_chaptersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubChapterWhereInput
  }


  /**
   * Count Type SubChapterCountOutputType
   */

  export type SubChapterCountOutputType = {
    assessments: number
    user_progres: number
  }

  export type SubChapterCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assessments?: boolean | SubChapterCountOutputTypeCountAssessmentsArgs
    user_progres?: boolean | SubChapterCountOutputTypeCountUser_progresArgs
  }

  // Custom InputTypes
  /**
   * SubChapterCountOutputType without action
   */
  export type SubChapterCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubChapterCountOutputType
     */
    select?: SubChapterCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubChapterCountOutputType without action
   */
  export type SubChapterCountOutputTypeCountAssessmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssessmentWhereInput
  }

  /**
   * SubChapterCountOutputType without action
   */
  export type SubChapterCountOutputTypeCountUser_progresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserProgresWhereInput
  }


  /**
   * Count Type ChapterTakenCountOutputType
   */

  export type ChapterTakenCountOutputType = {
    ai_reports: number
    assessments: number
    user_progres: number
  }

  export type ChapterTakenCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ai_reports?: boolean | ChapterTakenCountOutputTypeCountAi_reportsArgs
    assessments?: boolean | ChapterTakenCountOutputTypeCountAssessmentsArgs
    user_progres?: boolean | ChapterTakenCountOutputTypeCountUser_progresArgs
  }

  // Custom InputTypes
  /**
   * ChapterTakenCountOutputType without action
   */
  export type ChapterTakenCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChapterTakenCountOutputType
     */
    select?: ChapterTakenCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChapterTakenCountOutputType without action
   */
  export type ChapterTakenCountOutputTypeCountAi_reportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AiReportWhereInput
  }

  /**
   * ChapterTakenCountOutputType without action
   */
  export type ChapterTakenCountOutputTypeCountAssessmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssessmentWhereInput
  }

  /**
   * ChapterTakenCountOutputType without action
   */
  export type ChapterTakenCountOutputTypeCountUser_progresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserProgresWhereInput
  }


  /**
   * Count Type AssessmentCountOutputType
   */

  export type AssessmentCountOutputType = {
    questions: number
    user_attempts: number
  }

  export type AssessmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questions?: boolean | AssessmentCountOutputTypeCountQuestionsArgs
    user_attempts?: boolean | AssessmentCountOutputTypeCountUser_attemptsArgs
  }

  // Custom InputTypes
  /**
   * AssessmentCountOutputType without action
   */
  export type AssessmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentCountOutputType
     */
    select?: AssessmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AssessmentCountOutputType without action
   */
  export type AssessmentCountOutputTypeCountQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
  }

  /**
   * AssessmentCountOutputType without action
   */
  export type AssessmentCountOutputTypeCountUser_attemptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserAttemptWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    role: $Enums.Role | null
    gmail: string | null
    password: string | null
    birth_date: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    role: $Enums.Role | null
    gmail: string | null
    password: string | null
    birth_date: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    role: number
    gmail: number
    password: number
    birth_date: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    role?: true
    gmail?: true
    password?: true
    birth_date?: true
    created_at?: true
    updated_at?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    role?: true
    gmail?: true
    password?: true
    birth_date?: true
    created_at?: true
    updated_at?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    role?: true
    gmail?: true
    password?: true
    birth_date?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    role: $Enums.Role
    gmail: string
    password: string
    birth_date: Date
    created_at: Date
    updated_at: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    role?: boolean
    gmail?: boolean
    password?: boolean
    birth_date?: boolean
    created_at?: boolean
    updated_at?: boolean
    ai_reports?: boolean | User$ai_reportsArgs<ExtArgs>
    chapter_taken?: boolean | User$chapter_takenArgs<ExtArgs>
    user_attempts?: boolean | User$user_attemptsArgs<ExtArgs>
    user_progres?: boolean | User$user_progresArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    role?: boolean
    gmail?: boolean
    password?: boolean
    birth_date?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "role" | "gmail" | "password" | "birth_date" | "created_at" | "updated_at", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ai_reports?: boolean | User$ai_reportsArgs<ExtArgs>
    chapter_taken?: boolean | User$chapter_takenArgs<ExtArgs>
    user_attempts?: boolean | User$user_attemptsArgs<ExtArgs>
    user_progres?: boolean | User$user_progresArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      ai_reports: Prisma.$AiReportPayload<ExtArgs>[]
      chapter_taken: Prisma.$ChapterTakenPayload<ExtArgs>[]
      user_attempts: Prisma.$UserAttemptPayload<ExtArgs>[]
      user_progres: Prisma.$UserProgresPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      role: $Enums.Role
      gmail: string
      password: string
      birth_date: Date
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ai_reports<T extends User$ai_reportsArgs<ExtArgs> = {}>(args?: Subset<T, User$ai_reportsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AiReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    chapter_taken<T extends User$chapter_takenArgs<ExtArgs> = {}>(args?: Subset<T, User$chapter_takenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChapterTakenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user_attempts<T extends User$user_attemptsArgs<ExtArgs> = {}>(args?: Subset<T, User$user_attemptsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAttemptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user_progres<T extends User$user_progresArgs<ExtArgs> = {}>(args?: Subset<T, User$user_progresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProgresPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly gmail: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly birth_date: FieldRef<"User", 'DateTime'>
    readonly created_at: FieldRef<"User", 'DateTime'>
    readonly updated_at: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.ai_reports
   */
  export type User$ai_reportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiReport
     */
    select?: AiReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiReport
     */
    omit?: AiReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiReportInclude<ExtArgs> | null
    where?: AiReportWhereInput
    orderBy?: AiReportOrderByWithRelationInput | AiReportOrderByWithRelationInput[]
    cursor?: AiReportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AiReportScalarFieldEnum | AiReportScalarFieldEnum[]
  }

  /**
   * User.chapter_taken
   */
  export type User$chapter_takenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChapterTaken
     */
    select?: ChapterTakenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChapterTaken
     */
    omit?: ChapterTakenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterTakenInclude<ExtArgs> | null
    where?: ChapterTakenWhereInput
    orderBy?: ChapterTakenOrderByWithRelationInput | ChapterTakenOrderByWithRelationInput[]
    cursor?: ChapterTakenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChapterTakenScalarFieldEnum | ChapterTakenScalarFieldEnum[]
  }

  /**
   * User.user_attempts
   */
  export type User$user_attemptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAttempt
     */
    select?: UserAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAttempt
     */
    omit?: UserAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAttemptInclude<ExtArgs> | null
    where?: UserAttemptWhereInput
    orderBy?: UserAttemptOrderByWithRelationInput | UserAttemptOrderByWithRelationInput[]
    cursor?: UserAttemptWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserAttemptScalarFieldEnum | UserAttemptScalarFieldEnum[]
  }

  /**
   * User.user_progres
   */
  export type User$user_progresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProgres
     */
    select?: UserProgresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProgres
     */
    omit?: UserProgresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProgresInclude<ExtArgs> | null
    where?: UserProgresWhereInput
    orderBy?: UserProgresOrderByWithRelationInput | UserProgresOrderByWithRelationInput[]
    cursor?: UserProgresWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserProgresScalarFieldEnum | UserProgresScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Chapter
   */

  export type AggregateChapter = {
    _count: ChapterCountAggregateOutputType | null
    _avg: ChapterAvgAggregateOutputType | null
    _sum: ChapterSumAggregateOutputType | null
    _min: ChapterMinAggregateOutputType | null
    _max: ChapterMaxAggregateOutputType | null
  }

  export type ChapterAvgAggregateOutputType = {
    total_sub_chapter: number | null
  }

  export type ChapterSumAggregateOutputType = {
    total_sub_chapter: number | null
  }

  export type ChapterMinAggregateOutputType = {
    id: string | null
    name: string | null
    total_sub_chapter: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ChapterMaxAggregateOutputType = {
    id: string | null
    name: string | null
    total_sub_chapter: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ChapterCountAggregateOutputType = {
    id: number
    name: number
    total_sub_chapter: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ChapterAvgAggregateInputType = {
    total_sub_chapter?: true
  }

  export type ChapterSumAggregateInputType = {
    total_sub_chapter?: true
  }

  export type ChapterMinAggregateInputType = {
    id?: true
    name?: true
    total_sub_chapter?: true
    created_at?: true
    updated_at?: true
  }

  export type ChapterMaxAggregateInputType = {
    id?: true
    name?: true
    total_sub_chapter?: true
    created_at?: true
    updated_at?: true
  }

  export type ChapterCountAggregateInputType = {
    id?: true
    name?: true
    total_sub_chapter?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ChapterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chapter to aggregate.
     */
    where?: ChapterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chapters to fetch.
     */
    orderBy?: ChapterOrderByWithRelationInput | ChapterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChapterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chapters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chapters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Chapters
    **/
    _count?: true | ChapterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChapterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChapterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChapterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChapterMaxAggregateInputType
  }

  export type GetChapterAggregateType<T extends ChapterAggregateArgs> = {
        [P in keyof T & keyof AggregateChapter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChapter[P]>
      : GetScalarType<T[P], AggregateChapter[P]>
  }




  export type ChapterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChapterWhereInput
    orderBy?: ChapterOrderByWithAggregationInput | ChapterOrderByWithAggregationInput[]
    by: ChapterScalarFieldEnum[] | ChapterScalarFieldEnum
    having?: ChapterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChapterCountAggregateInputType | true
    _avg?: ChapterAvgAggregateInputType
    _sum?: ChapterSumAggregateInputType
    _min?: ChapterMinAggregateInputType
    _max?: ChapterMaxAggregateInputType
  }

  export type ChapterGroupByOutputType = {
    id: string
    name: string
    total_sub_chapter: number
    created_at: Date
    updated_at: Date
    _count: ChapterCountAggregateOutputType | null
    _avg: ChapterAvgAggregateOutputType | null
    _sum: ChapterSumAggregateOutputType | null
    _min: ChapterMinAggregateOutputType | null
    _max: ChapterMaxAggregateOutputType | null
  }

  type GetChapterGroupByPayload<T extends ChapterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChapterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChapterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChapterGroupByOutputType[P]>
            : GetScalarType<T[P], ChapterGroupByOutputType[P]>
        }
      >
    >


  export type ChapterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    total_sub_chapter?: boolean
    created_at?: boolean
    updated_at?: boolean
    chapter_taken?: boolean | Chapter$chapter_takenArgs<ExtArgs>
    prerequisites_base?: boolean | Chapter$prerequisites_baseArgs<ExtArgs>
    prerequisites_requirement?: boolean | Chapter$prerequisites_requirementArgs<ExtArgs>
    sub_chapters?: boolean | Chapter$sub_chaptersArgs<ExtArgs>
    _count?: boolean | ChapterCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chapter"]>



  export type ChapterSelectScalar = {
    id?: boolean
    name?: boolean
    total_sub_chapter?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type ChapterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "total_sub_chapter" | "created_at" | "updated_at", ExtArgs["result"]["chapter"]>
  export type ChapterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chapter_taken?: boolean | Chapter$chapter_takenArgs<ExtArgs>
    prerequisites_base?: boolean | Chapter$prerequisites_baseArgs<ExtArgs>
    prerequisites_requirement?: boolean | Chapter$prerequisites_requirementArgs<ExtArgs>
    sub_chapters?: boolean | Chapter$sub_chaptersArgs<ExtArgs>
    _count?: boolean | ChapterCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ChapterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Chapter"
    objects: {
      chapter_taken: Prisma.$ChapterTakenPayload<ExtArgs>[]
      prerequisites_base: Prisma.$PrerequisitePayload<ExtArgs>[]
      prerequisites_requirement: Prisma.$PrerequisitePayload<ExtArgs>[]
      sub_chapters: Prisma.$SubChapterPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      total_sub_chapter: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["chapter"]>
    composites: {}
  }

  type ChapterGetPayload<S extends boolean | null | undefined | ChapterDefaultArgs> = $Result.GetResult<Prisma.$ChapterPayload, S>

  type ChapterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChapterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChapterCountAggregateInputType | true
    }

  export interface ChapterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Chapter'], meta: { name: 'Chapter' } }
    /**
     * Find zero or one Chapter that matches the filter.
     * @param {ChapterFindUniqueArgs} args - Arguments to find a Chapter
     * @example
     * // Get one Chapter
     * const chapter = await prisma.chapter.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChapterFindUniqueArgs>(args: SelectSubset<T, ChapterFindUniqueArgs<ExtArgs>>): Prisma__ChapterClient<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Chapter that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChapterFindUniqueOrThrowArgs} args - Arguments to find a Chapter
     * @example
     * // Get one Chapter
     * const chapter = await prisma.chapter.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChapterFindUniqueOrThrowArgs>(args: SelectSubset<T, ChapterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChapterClient<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chapter that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterFindFirstArgs} args - Arguments to find a Chapter
     * @example
     * // Get one Chapter
     * const chapter = await prisma.chapter.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChapterFindFirstArgs>(args?: SelectSubset<T, ChapterFindFirstArgs<ExtArgs>>): Prisma__ChapterClient<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chapter that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterFindFirstOrThrowArgs} args - Arguments to find a Chapter
     * @example
     * // Get one Chapter
     * const chapter = await prisma.chapter.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChapterFindFirstOrThrowArgs>(args?: SelectSubset<T, ChapterFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChapterClient<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Chapters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chapters
     * const chapters = await prisma.chapter.findMany()
     * 
     * // Get first 10 Chapters
     * const chapters = await prisma.chapter.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chapterWithIdOnly = await prisma.chapter.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChapterFindManyArgs>(args?: SelectSubset<T, ChapterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Chapter.
     * @param {ChapterCreateArgs} args - Arguments to create a Chapter.
     * @example
     * // Create one Chapter
     * const Chapter = await prisma.chapter.create({
     *   data: {
     *     // ... data to create a Chapter
     *   }
     * })
     * 
     */
    create<T extends ChapterCreateArgs>(args: SelectSubset<T, ChapterCreateArgs<ExtArgs>>): Prisma__ChapterClient<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Chapters.
     * @param {ChapterCreateManyArgs} args - Arguments to create many Chapters.
     * @example
     * // Create many Chapters
     * const chapter = await prisma.chapter.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChapterCreateManyArgs>(args?: SelectSubset<T, ChapterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Chapter.
     * @param {ChapterDeleteArgs} args - Arguments to delete one Chapter.
     * @example
     * // Delete one Chapter
     * const Chapter = await prisma.chapter.delete({
     *   where: {
     *     // ... filter to delete one Chapter
     *   }
     * })
     * 
     */
    delete<T extends ChapterDeleteArgs>(args: SelectSubset<T, ChapterDeleteArgs<ExtArgs>>): Prisma__ChapterClient<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Chapter.
     * @param {ChapterUpdateArgs} args - Arguments to update one Chapter.
     * @example
     * // Update one Chapter
     * const chapter = await prisma.chapter.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChapterUpdateArgs>(args: SelectSubset<T, ChapterUpdateArgs<ExtArgs>>): Prisma__ChapterClient<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Chapters.
     * @param {ChapterDeleteManyArgs} args - Arguments to filter Chapters to delete.
     * @example
     * // Delete a few Chapters
     * const { count } = await prisma.chapter.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChapterDeleteManyArgs>(args?: SelectSubset<T, ChapterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chapters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chapters
     * const chapter = await prisma.chapter.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChapterUpdateManyArgs>(args: SelectSubset<T, ChapterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Chapter.
     * @param {ChapterUpsertArgs} args - Arguments to update or create a Chapter.
     * @example
     * // Update or create a Chapter
     * const chapter = await prisma.chapter.upsert({
     *   create: {
     *     // ... data to create a Chapter
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chapter we want to update
     *   }
     * })
     */
    upsert<T extends ChapterUpsertArgs>(args: SelectSubset<T, ChapterUpsertArgs<ExtArgs>>): Prisma__ChapterClient<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Chapters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterCountArgs} args - Arguments to filter Chapters to count.
     * @example
     * // Count the number of Chapters
     * const count = await prisma.chapter.count({
     *   where: {
     *     // ... the filter for the Chapters we want to count
     *   }
     * })
    **/
    count<T extends ChapterCountArgs>(
      args?: Subset<T, ChapterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChapterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chapter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChapterAggregateArgs>(args: Subset<T, ChapterAggregateArgs>): Prisma.PrismaPromise<GetChapterAggregateType<T>>

    /**
     * Group by Chapter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterGroupByArgs} args - Group by arguments.
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
      T extends ChapterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChapterGroupByArgs['orderBy'] }
        : { orderBy?: ChapterGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChapterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChapterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Chapter model
   */
  readonly fields: ChapterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Chapter.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChapterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chapter_taken<T extends Chapter$chapter_takenArgs<ExtArgs> = {}>(args?: Subset<T, Chapter$chapter_takenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChapterTakenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    prerequisites_base<T extends Chapter$prerequisites_baseArgs<ExtArgs> = {}>(args?: Subset<T, Chapter$prerequisites_baseArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrerequisitePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    prerequisites_requirement<T extends Chapter$prerequisites_requirementArgs<ExtArgs> = {}>(args?: Subset<T, Chapter$prerequisites_requirementArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrerequisitePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sub_chapters<T extends Chapter$sub_chaptersArgs<ExtArgs> = {}>(args?: Subset<T, Chapter$sub_chaptersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubChapterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Chapter model
   */
  interface ChapterFieldRefs {
    readonly id: FieldRef<"Chapter", 'String'>
    readonly name: FieldRef<"Chapter", 'String'>
    readonly total_sub_chapter: FieldRef<"Chapter", 'Int'>
    readonly created_at: FieldRef<"Chapter", 'DateTime'>
    readonly updated_at: FieldRef<"Chapter", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Chapter findUnique
   */
  export type ChapterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
    /**
     * Filter, which Chapter to fetch.
     */
    where: ChapterWhereUniqueInput
  }

  /**
   * Chapter findUniqueOrThrow
   */
  export type ChapterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
    /**
     * Filter, which Chapter to fetch.
     */
    where: ChapterWhereUniqueInput
  }

  /**
   * Chapter findFirst
   */
  export type ChapterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
    /**
     * Filter, which Chapter to fetch.
     */
    where?: ChapterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chapters to fetch.
     */
    orderBy?: ChapterOrderByWithRelationInput | ChapterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chapters.
     */
    cursor?: ChapterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chapters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chapters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chapters.
     */
    distinct?: ChapterScalarFieldEnum | ChapterScalarFieldEnum[]
  }

  /**
   * Chapter findFirstOrThrow
   */
  export type ChapterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
    /**
     * Filter, which Chapter to fetch.
     */
    where?: ChapterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chapters to fetch.
     */
    orderBy?: ChapterOrderByWithRelationInput | ChapterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chapters.
     */
    cursor?: ChapterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chapters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chapters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chapters.
     */
    distinct?: ChapterScalarFieldEnum | ChapterScalarFieldEnum[]
  }

  /**
   * Chapter findMany
   */
  export type ChapterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
    /**
     * Filter, which Chapters to fetch.
     */
    where?: ChapterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chapters to fetch.
     */
    orderBy?: ChapterOrderByWithRelationInput | ChapterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Chapters.
     */
    cursor?: ChapterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chapters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chapters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chapters.
     */
    distinct?: ChapterScalarFieldEnum | ChapterScalarFieldEnum[]
  }

  /**
   * Chapter create
   */
  export type ChapterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
    /**
     * The data needed to create a Chapter.
     */
    data: XOR<ChapterCreateInput, ChapterUncheckedCreateInput>
  }

  /**
   * Chapter createMany
   */
  export type ChapterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Chapters.
     */
    data: ChapterCreateManyInput | ChapterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Chapter update
   */
  export type ChapterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
    /**
     * The data needed to update a Chapter.
     */
    data: XOR<ChapterUpdateInput, ChapterUncheckedUpdateInput>
    /**
     * Choose, which Chapter to update.
     */
    where: ChapterWhereUniqueInput
  }

  /**
   * Chapter updateMany
   */
  export type ChapterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Chapters.
     */
    data: XOR<ChapterUpdateManyMutationInput, ChapterUncheckedUpdateManyInput>
    /**
     * Filter which Chapters to update
     */
    where?: ChapterWhereInput
    /**
     * Limit how many Chapters to update.
     */
    limit?: number
  }

  /**
   * Chapter upsert
   */
  export type ChapterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
    /**
     * The filter to search for the Chapter to update in case it exists.
     */
    where: ChapterWhereUniqueInput
    /**
     * In case the Chapter found by the `where` argument doesn't exist, create a new Chapter with this data.
     */
    create: XOR<ChapterCreateInput, ChapterUncheckedCreateInput>
    /**
     * In case the Chapter was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChapterUpdateInput, ChapterUncheckedUpdateInput>
  }

  /**
   * Chapter delete
   */
  export type ChapterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
    /**
     * Filter which Chapter to delete.
     */
    where: ChapterWhereUniqueInput
  }

  /**
   * Chapter deleteMany
   */
  export type ChapterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chapters to delete
     */
    where?: ChapterWhereInput
    /**
     * Limit how many Chapters to delete.
     */
    limit?: number
  }

  /**
   * Chapter.chapter_taken
   */
  export type Chapter$chapter_takenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChapterTaken
     */
    select?: ChapterTakenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChapterTaken
     */
    omit?: ChapterTakenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterTakenInclude<ExtArgs> | null
    where?: ChapterTakenWhereInput
    orderBy?: ChapterTakenOrderByWithRelationInput | ChapterTakenOrderByWithRelationInput[]
    cursor?: ChapterTakenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChapterTakenScalarFieldEnum | ChapterTakenScalarFieldEnum[]
  }

  /**
   * Chapter.prerequisites_base
   */
  export type Chapter$prerequisites_baseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prerequisite
     */
    select?: PrerequisiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prerequisite
     */
    omit?: PrerequisiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrerequisiteInclude<ExtArgs> | null
    where?: PrerequisiteWhereInput
    orderBy?: PrerequisiteOrderByWithRelationInput | PrerequisiteOrderByWithRelationInput[]
    cursor?: PrerequisiteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PrerequisiteScalarFieldEnum | PrerequisiteScalarFieldEnum[]
  }

  /**
   * Chapter.prerequisites_requirement
   */
  export type Chapter$prerequisites_requirementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prerequisite
     */
    select?: PrerequisiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prerequisite
     */
    omit?: PrerequisiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrerequisiteInclude<ExtArgs> | null
    where?: PrerequisiteWhereInput
    orderBy?: PrerequisiteOrderByWithRelationInput | PrerequisiteOrderByWithRelationInput[]
    cursor?: PrerequisiteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PrerequisiteScalarFieldEnum | PrerequisiteScalarFieldEnum[]
  }

  /**
   * Chapter.sub_chapters
   */
  export type Chapter$sub_chaptersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubChapter
     */
    select?: SubChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubChapter
     */
    omit?: SubChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubChapterInclude<ExtArgs> | null
    where?: SubChapterWhereInput
    orderBy?: SubChapterOrderByWithRelationInput | SubChapterOrderByWithRelationInput[]
    cursor?: SubChapterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubChapterScalarFieldEnum | SubChapterScalarFieldEnum[]
  }

  /**
   * Chapter without action
   */
  export type ChapterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
  }


  /**
   * Model SubChapter
   */

  export type AggregateSubChapter = {
    _count: SubChapterCountAggregateOutputType | null
    _min: SubChapterMinAggregateOutputType | null
    _max: SubChapterMaxAggregateOutputType | null
  }

  export type SubChapterMinAggregateOutputType = {
    id: string | null
    chapter_id: string | null
    name: string | null
    content: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type SubChapterMaxAggregateOutputType = {
    id: string | null
    chapter_id: string | null
    name: string | null
    content: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type SubChapterCountAggregateOutputType = {
    id: number
    chapter_id: number
    name: number
    content: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type SubChapterMinAggregateInputType = {
    id?: true
    chapter_id?: true
    name?: true
    content?: true
    created_at?: true
    updated_at?: true
  }

  export type SubChapterMaxAggregateInputType = {
    id?: true
    chapter_id?: true
    name?: true
    content?: true
    created_at?: true
    updated_at?: true
  }

  export type SubChapterCountAggregateInputType = {
    id?: true
    chapter_id?: true
    name?: true
    content?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type SubChapterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubChapter to aggregate.
     */
    where?: SubChapterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubChapters to fetch.
     */
    orderBy?: SubChapterOrderByWithRelationInput | SubChapterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubChapterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubChapters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubChapters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SubChapters
    **/
    _count?: true | SubChapterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubChapterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubChapterMaxAggregateInputType
  }

  export type GetSubChapterAggregateType<T extends SubChapterAggregateArgs> = {
        [P in keyof T & keyof AggregateSubChapter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubChapter[P]>
      : GetScalarType<T[P], AggregateSubChapter[P]>
  }




  export type SubChapterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubChapterWhereInput
    orderBy?: SubChapterOrderByWithAggregationInput | SubChapterOrderByWithAggregationInput[]
    by: SubChapterScalarFieldEnum[] | SubChapterScalarFieldEnum
    having?: SubChapterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubChapterCountAggregateInputType | true
    _min?: SubChapterMinAggregateInputType
    _max?: SubChapterMaxAggregateInputType
  }

  export type SubChapterGroupByOutputType = {
    id: string
    chapter_id: string
    name: string
    content: string
    created_at: Date
    updated_at: Date
    _count: SubChapterCountAggregateOutputType | null
    _min: SubChapterMinAggregateOutputType | null
    _max: SubChapterMaxAggregateOutputType | null
  }

  type GetSubChapterGroupByPayload<T extends SubChapterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubChapterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubChapterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubChapterGroupByOutputType[P]>
            : GetScalarType<T[P], SubChapterGroupByOutputType[P]>
        }
      >
    >


  export type SubChapterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chapter_id?: boolean
    name?: boolean
    content?: boolean
    created_at?: boolean
    updated_at?: boolean
    chapter?: boolean | ChapterDefaultArgs<ExtArgs>
    assessments?: boolean | SubChapter$assessmentsArgs<ExtArgs>
    user_progres?: boolean | SubChapter$user_progresArgs<ExtArgs>
    _count?: boolean | SubChapterCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subChapter"]>



  export type SubChapterSelectScalar = {
    id?: boolean
    chapter_id?: boolean
    name?: boolean
    content?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type SubChapterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "chapter_id" | "name" | "content" | "created_at" | "updated_at", ExtArgs["result"]["subChapter"]>
  export type SubChapterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chapter?: boolean | ChapterDefaultArgs<ExtArgs>
    assessments?: boolean | SubChapter$assessmentsArgs<ExtArgs>
    user_progres?: boolean | SubChapter$user_progresArgs<ExtArgs>
    _count?: boolean | SubChapterCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $SubChapterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SubChapter"
    objects: {
      chapter: Prisma.$ChapterPayload<ExtArgs>
      assessments: Prisma.$AssessmentPayload<ExtArgs>[]
      user_progres: Prisma.$UserProgresPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      chapter_id: string
      name: string
      content: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["subChapter"]>
    composites: {}
  }

  type SubChapterGetPayload<S extends boolean | null | undefined | SubChapterDefaultArgs> = $Result.GetResult<Prisma.$SubChapterPayload, S>

  type SubChapterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubChapterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubChapterCountAggregateInputType | true
    }

  export interface SubChapterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SubChapter'], meta: { name: 'SubChapter' } }
    /**
     * Find zero or one SubChapter that matches the filter.
     * @param {SubChapterFindUniqueArgs} args - Arguments to find a SubChapter
     * @example
     * // Get one SubChapter
     * const subChapter = await prisma.subChapter.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubChapterFindUniqueArgs>(args: SelectSubset<T, SubChapterFindUniqueArgs<ExtArgs>>): Prisma__SubChapterClient<$Result.GetResult<Prisma.$SubChapterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SubChapter that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubChapterFindUniqueOrThrowArgs} args - Arguments to find a SubChapter
     * @example
     * // Get one SubChapter
     * const subChapter = await prisma.subChapter.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubChapterFindUniqueOrThrowArgs>(args: SelectSubset<T, SubChapterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubChapterClient<$Result.GetResult<Prisma.$SubChapterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubChapter that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubChapterFindFirstArgs} args - Arguments to find a SubChapter
     * @example
     * // Get one SubChapter
     * const subChapter = await prisma.subChapter.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubChapterFindFirstArgs>(args?: SelectSubset<T, SubChapterFindFirstArgs<ExtArgs>>): Prisma__SubChapterClient<$Result.GetResult<Prisma.$SubChapterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubChapter that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubChapterFindFirstOrThrowArgs} args - Arguments to find a SubChapter
     * @example
     * // Get one SubChapter
     * const subChapter = await prisma.subChapter.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubChapterFindFirstOrThrowArgs>(args?: SelectSubset<T, SubChapterFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubChapterClient<$Result.GetResult<Prisma.$SubChapterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SubChapters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubChapterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SubChapters
     * const subChapters = await prisma.subChapter.findMany()
     * 
     * // Get first 10 SubChapters
     * const subChapters = await prisma.subChapter.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subChapterWithIdOnly = await prisma.subChapter.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubChapterFindManyArgs>(args?: SelectSubset<T, SubChapterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubChapterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SubChapter.
     * @param {SubChapterCreateArgs} args - Arguments to create a SubChapter.
     * @example
     * // Create one SubChapter
     * const SubChapter = await prisma.subChapter.create({
     *   data: {
     *     // ... data to create a SubChapter
     *   }
     * })
     * 
     */
    create<T extends SubChapterCreateArgs>(args: SelectSubset<T, SubChapterCreateArgs<ExtArgs>>): Prisma__SubChapterClient<$Result.GetResult<Prisma.$SubChapterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SubChapters.
     * @param {SubChapterCreateManyArgs} args - Arguments to create many SubChapters.
     * @example
     * // Create many SubChapters
     * const subChapter = await prisma.subChapter.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubChapterCreateManyArgs>(args?: SelectSubset<T, SubChapterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SubChapter.
     * @param {SubChapterDeleteArgs} args - Arguments to delete one SubChapter.
     * @example
     * // Delete one SubChapter
     * const SubChapter = await prisma.subChapter.delete({
     *   where: {
     *     // ... filter to delete one SubChapter
     *   }
     * })
     * 
     */
    delete<T extends SubChapterDeleteArgs>(args: SelectSubset<T, SubChapterDeleteArgs<ExtArgs>>): Prisma__SubChapterClient<$Result.GetResult<Prisma.$SubChapterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SubChapter.
     * @param {SubChapterUpdateArgs} args - Arguments to update one SubChapter.
     * @example
     * // Update one SubChapter
     * const subChapter = await prisma.subChapter.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubChapterUpdateArgs>(args: SelectSubset<T, SubChapterUpdateArgs<ExtArgs>>): Prisma__SubChapterClient<$Result.GetResult<Prisma.$SubChapterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SubChapters.
     * @param {SubChapterDeleteManyArgs} args - Arguments to filter SubChapters to delete.
     * @example
     * // Delete a few SubChapters
     * const { count } = await prisma.subChapter.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubChapterDeleteManyArgs>(args?: SelectSubset<T, SubChapterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubChapters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubChapterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SubChapters
     * const subChapter = await prisma.subChapter.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubChapterUpdateManyArgs>(args: SelectSubset<T, SubChapterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SubChapter.
     * @param {SubChapterUpsertArgs} args - Arguments to update or create a SubChapter.
     * @example
     * // Update or create a SubChapter
     * const subChapter = await prisma.subChapter.upsert({
     *   create: {
     *     // ... data to create a SubChapter
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SubChapter we want to update
     *   }
     * })
     */
    upsert<T extends SubChapterUpsertArgs>(args: SelectSubset<T, SubChapterUpsertArgs<ExtArgs>>): Prisma__SubChapterClient<$Result.GetResult<Prisma.$SubChapterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SubChapters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubChapterCountArgs} args - Arguments to filter SubChapters to count.
     * @example
     * // Count the number of SubChapters
     * const count = await prisma.subChapter.count({
     *   where: {
     *     // ... the filter for the SubChapters we want to count
     *   }
     * })
    **/
    count<T extends SubChapterCountArgs>(
      args?: Subset<T, SubChapterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubChapterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SubChapter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubChapterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubChapterAggregateArgs>(args: Subset<T, SubChapterAggregateArgs>): Prisma.PrismaPromise<GetSubChapterAggregateType<T>>

    /**
     * Group by SubChapter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubChapterGroupByArgs} args - Group by arguments.
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
      T extends SubChapterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubChapterGroupByArgs['orderBy'] }
        : { orderBy?: SubChapterGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubChapterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubChapterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SubChapter model
   */
  readonly fields: SubChapterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SubChapter.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubChapterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chapter<T extends ChapterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChapterDefaultArgs<ExtArgs>>): Prisma__ChapterClient<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    assessments<T extends SubChapter$assessmentsArgs<ExtArgs> = {}>(args?: Subset<T, SubChapter$assessmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user_progres<T extends SubChapter$user_progresArgs<ExtArgs> = {}>(args?: Subset<T, SubChapter$user_progresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProgresPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the SubChapter model
   */
  interface SubChapterFieldRefs {
    readonly id: FieldRef<"SubChapter", 'String'>
    readonly chapter_id: FieldRef<"SubChapter", 'String'>
    readonly name: FieldRef<"SubChapter", 'String'>
    readonly content: FieldRef<"SubChapter", 'String'>
    readonly created_at: FieldRef<"SubChapter", 'DateTime'>
    readonly updated_at: FieldRef<"SubChapter", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SubChapter findUnique
   */
  export type SubChapterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubChapter
     */
    select?: SubChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubChapter
     */
    omit?: SubChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubChapterInclude<ExtArgs> | null
    /**
     * Filter, which SubChapter to fetch.
     */
    where: SubChapterWhereUniqueInput
  }

  /**
   * SubChapter findUniqueOrThrow
   */
  export type SubChapterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubChapter
     */
    select?: SubChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubChapter
     */
    omit?: SubChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubChapterInclude<ExtArgs> | null
    /**
     * Filter, which SubChapter to fetch.
     */
    where: SubChapterWhereUniqueInput
  }

  /**
   * SubChapter findFirst
   */
  export type SubChapterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubChapter
     */
    select?: SubChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubChapter
     */
    omit?: SubChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubChapterInclude<ExtArgs> | null
    /**
     * Filter, which SubChapter to fetch.
     */
    where?: SubChapterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubChapters to fetch.
     */
    orderBy?: SubChapterOrderByWithRelationInput | SubChapterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubChapters.
     */
    cursor?: SubChapterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubChapters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubChapters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubChapters.
     */
    distinct?: SubChapterScalarFieldEnum | SubChapterScalarFieldEnum[]
  }

  /**
   * SubChapter findFirstOrThrow
   */
  export type SubChapterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubChapter
     */
    select?: SubChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubChapter
     */
    omit?: SubChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubChapterInclude<ExtArgs> | null
    /**
     * Filter, which SubChapter to fetch.
     */
    where?: SubChapterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubChapters to fetch.
     */
    orderBy?: SubChapterOrderByWithRelationInput | SubChapterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubChapters.
     */
    cursor?: SubChapterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubChapters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubChapters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubChapters.
     */
    distinct?: SubChapterScalarFieldEnum | SubChapterScalarFieldEnum[]
  }

  /**
   * SubChapter findMany
   */
  export type SubChapterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubChapter
     */
    select?: SubChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubChapter
     */
    omit?: SubChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubChapterInclude<ExtArgs> | null
    /**
     * Filter, which SubChapters to fetch.
     */
    where?: SubChapterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubChapters to fetch.
     */
    orderBy?: SubChapterOrderByWithRelationInput | SubChapterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SubChapters.
     */
    cursor?: SubChapterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubChapters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubChapters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubChapters.
     */
    distinct?: SubChapterScalarFieldEnum | SubChapterScalarFieldEnum[]
  }

  /**
   * SubChapter create
   */
  export type SubChapterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubChapter
     */
    select?: SubChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubChapter
     */
    omit?: SubChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubChapterInclude<ExtArgs> | null
    /**
     * The data needed to create a SubChapter.
     */
    data: XOR<SubChapterCreateInput, SubChapterUncheckedCreateInput>
  }

  /**
   * SubChapter createMany
   */
  export type SubChapterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SubChapters.
     */
    data: SubChapterCreateManyInput | SubChapterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SubChapter update
   */
  export type SubChapterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubChapter
     */
    select?: SubChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubChapter
     */
    omit?: SubChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubChapterInclude<ExtArgs> | null
    /**
     * The data needed to update a SubChapter.
     */
    data: XOR<SubChapterUpdateInput, SubChapterUncheckedUpdateInput>
    /**
     * Choose, which SubChapter to update.
     */
    where: SubChapterWhereUniqueInput
  }

  /**
   * SubChapter updateMany
   */
  export type SubChapterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SubChapters.
     */
    data: XOR<SubChapterUpdateManyMutationInput, SubChapterUncheckedUpdateManyInput>
    /**
     * Filter which SubChapters to update
     */
    where?: SubChapterWhereInput
    /**
     * Limit how many SubChapters to update.
     */
    limit?: number
  }

  /**
   * SubChapter upsert
   */
  export type SubChapterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubChapter
     */
    select?: SubChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubChapter
     */
    omit?: SubChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubChapterInclude<ExtArgs> | null
    /**
     * The filter to search for the SubChapter to update in case it exists.
     */
    where: SubChapterWhereUniqueInput
    /**
     * In case the SubChapter found by the `where` argument doesn't exist, create a new SubChapter with this data.
     */
    create: XOR<SubChapterCreateInput, SubChapterUncheckedCreateInput>
    /**
     * In case the SubChapter was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubChapterUpdateInput, SubChapterUncheckedUpdateInput>
  }

  /**
   * SubChapter delete
   */
  export type SubChapterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubChapter
     */
    select?: SubChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubChapter
     */
    omit?: SubChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubChapterInclude<ExtArgs> | null
    /**
     * Filter which SubChapter to delete.
     */
    where: SubChapterWhereUniqueInput
  }

  /**
   * SubChapter deleteMany
   */
  export type SubChapterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubChapters to delete
     */
    where?: SubChapterWhereInput
    /**
     * Limit how many SubChapters to delete.
     */
    limit?: number
  }

  /**
   * SubChapter.assessments
   */
  export type SubChapter$assessmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assessment
     */
    omit?: AssessmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentInclude<ExtArgs> | null
    where?: AssessmentWhereInput
    orderBy?: AssessmentOrderByWithRelationInput | AssessmentOrderByWithRelationInput[]
    cursor?: AssessmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssessmentScalarFieldEnum | AssessmentScalarFieldEnum[]
  }

  /**
   * SubChapter.user_progres
   */
  export type SubChapter$user_progresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProgres
     */
    select?: UserProgresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProgres
     */
    omit?: UserProgresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProgresInclude<ExtArgs> | null
    where?: UserProgresWhereInput
    orderBy?: UserProgresOrderByWithRelationInput | UserProgresOrderByWithRelationInput[]
    cursor?: UserProgresWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserProgresScalarFieldEnum | UserProgresScalarFieldEnum[]
  }

  /**
   * SubChapter without action
   */
  export type SubChapterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubChapter
     */
    select?: SubChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubChapter
     */
    omit?: SubChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubChapterInclude<ExtArgs> | null
  }


  /**
   * Model ChapterTaken
   */

  export type AggregateChapterTaken = {
    _count: ChapterTakenCountAggregateOutputType | null
    _min: ChapterTakenMinAggregateOutputType | null
    _max: ChapterTakenMaxAggregateOutputType | null
  }

  export type ChapterTakenMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    chapter_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ChapterTakenMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    chapter_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ChapterTakenCountAggregateOutputType = {
    id: number
    user_id: number
    chapter_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ChapterTakenMinAggregateInputType = {
    id?: true
    user_id?: true
    chapter_id?: true
    created_at?: true
    updated_at?: true
  }

  export type ChapterTakenMaxAggregateInputType = {
    id?: true
    user_id?: true
    chapter_id?: true
    created_at?: true
    updated_at?: true
  }

  export type ChapterTakenCountAggregateInputType = {
    id?: true
    user_id?: true
    chapter_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ChapterTakenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChapterTaken to aggregate.
     */
    where?: ChapterTakenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChapterTakens to fetch.
     */
    orderBy?: ChapterTakenOrderByWithRelationInput | ChapterTakenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChapterTakenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChapterTakens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChapterTakens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChapterTakens
    **/
    _count?: true | ChapterTakenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChapterTakenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChapterTakenMaxAggregateInputType
  }

  export type GetChapterTakenAggregateType<T extends ChapterTakenAggregateArgs> = {
        [P in keyof T & keyof AggregateChapterTaken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChapterTaken[P]>
      : GetScalarType<T[P], AggregateChapterTaken[P]>
  }




  export type ChapterTakenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChapterTakenWhereInput
    orderBy?: ChapterTakenOrderByWithAggregationInput | ChapterTakenOrderByWithAggregationInput[]
    by: ChapterTakenScalarFieldEnum[] | ChapterTakenScalarFieldEnum
    having?: ChapterTakenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChapterTakenCountAggregateInputType | true
    _min?: ChapterTakenMinAggregateInputType
    _max?: ChapterTakenMaxAggregateInputType
  }

  export type ChapterTakenGroupByOutputType = {
    id: string
    user_id: string
    chapter_id: string
    created_at: Date
    updated_at: Date
    _count: ChapterTakenCountAggregateOutputType | null
    _min: ChapterTakenMinAggregateOutputType | null
    _max: ChapterTakenMaxAggregateOutputType | null
  }

  type GetChapterTakenGroupByPayload<T extends ChapterTakenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChapterTakenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChapterTakenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChapterTakenGroupByOutputType[P]>
            : GetScalarType<T[P], ChapterTakenGroupByOutputType[P]>
        }
      >
    >


  export type ChapterTakenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    chapter_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    chapter?: boolean | ChapterDefaultArgs<ExtArgs>
    ai_reports?: boolean | ChapterTaken$ai_reportsArgs<ExtArgs>
    assessments?: boolean | ChapterTaken$assessmentsArgs<ExtArgs>
    user_progres?: boolean | ChapterTaken$user_progresArgs<ExtArgs>
    _count?: boolean | ChapterTakenCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chapterTaken"]>



  export type ChapterTakenSelectScalar = {
    id?: boolean
    user_id?: boolean
    chapter_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type ChapterTakenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "chapter_id" | "created_at" | "updated_at", ExtArgs["result"]["chapterTaken"]>
  export type ChapterTakenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    chapter?: boolean | ChapterDefaultArgs<ExtArgs>
    ai_reports?: boolean | ChapterTaken$ai_reportsArgs<ExtArgs>
    assessments?: boolean | ChapterTaken$assessmentsArgs<ExtArgs>
    user_progres?: boolean | ChapterTaken$user_progresArgs<ExtArgs>
    _count?: boolean | ChapterTakenCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ChapterTakenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChapterTaken"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      chapter: Prisma.$ChapterPayload<ExtArgs>
      ai_reports: Prisma.$AiReportPayload<ExtArgs>[]
      assessments: Prisma.$AssessmentPayload<ExtArgs>[]
      user_progres: Prisma.$UserProgresPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      chapter_id: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["chapterTaken"]>
    composites: {}
  }

  type ChapterTakenGetPayload<S extends boolean | null | undefined | ChapterTakenDefaultArgs> = $Result.GetResult<Prisma.$ChapterTakenPayload, S>

  type ChapterTakenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChapterTakenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChapterTakenCountAggregateInputType | true
    }

  export interface ChapterTakenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChapterTaken'], meta: { name: 'ChapterTaken' } }
    /**
     * Find zero or one ChapterTaken that matches the filter.
     * @param {ChapterTakenFindUniqueArgs} args - Arguments to find a ChapterTaken
     * @example
     * // Get one ChapterTaken
     * const chapterTaken = await prisma.chapterTaken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChapterTakenFindUniqueArgs>(args: SelectSubset<T, ChapterTakenFindUniqueArgs<ExtArgs>>): Prisma__ChapterTakenClient<$Result.GetResult<Prisma.$ChapterTakenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChapterTaken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChapterTakenFindUniqueOrThrowArgs} args - Arguments to find a ChapterTaken
     * @example
     * // Get one ChapterTaken
     * const chapterTaken = await prisma.chapterTaken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChapterTakenFindUniqueOrThrowArgs>(args: SelectSubset<T, ChapterTakenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChapterTakenClient<$Result.GetResult<Prisma.$ChapterTakenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChapterTaken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterTakenFindFirstArgs} args - Arguments to find a ChapterTaken
     * @example
     * // Get one ChapterTaken
     * const chapterTaken = await prisma.chapterTaken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChapterTakenFindFirstArgs>(args?: SelectSubset<T, ChapterTakenFindFirstArgs<ExtArgs>>): Prisma__ChapterTakenClient<$Result.GetResult<Prisma.$ChapterTakenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChapterTaken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterTakenFindFirstOrThrowArgs} args - Arguments to find a ChapterTaken
     * @example
     * // Get one ChapterTaken
     * const chapterTaken = await prisma.chapterTaken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChapterTakenFindFirstOrThrowArgs>(args?: SelectSubset<T, ChapterTakenFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChapterTakenClient<$Result.GetResult<Prisma.$ChapterTakenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChapterTakens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterTakenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChapterTakens
     * const chapterTakens = await prisma.chapterTaken.findMany()
     * 
     * // Get first 10 ChapterTakens
     * const chapterTakens = await prisma.chapterTaken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chapterTakenWithIdOnly = await prisma.chapterTaken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChapterTakenFindManyArgs>(args?: SelectSubset<T, ChapterTakenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChapterTakenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChapterTaken.
     * @param {ChapterTakenCreateArgs} args - Arguments to create a ChapterTaken.
     * @example
     * // Create one ChapterTaken
     * const ChapterTaken = await prisma.chapterTaken.create({
     *   data: {
     *     // ... data to create a ChapterTaken
     *   }
     * })
     * 
     */
    create<T extends ChapterTakenCreateArgs>(args: SelectSubset<T, ChapterTakenCreateArgs<ExtArgs>>): Prisma__ChapterTakenClient<$Result.GetResult<Prisma.$ChapterTakenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChapterTakens.
     * @param {ChapterTakenCreateManyArgs} args - Arguments to create many ChapterTakens.
     * @example
     * // Create many ChapterTakens
     * const chapterTaken = await prisma.chapterTaken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChapterTakenCreateManyArgs>(args?: SelectSubset<T, ChapterTakenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ChapterTaken.
     * @param {ChapterTakenDeleteArgs} args - Arguments to delete one ChapterTaken.
     * @example
     * // Delete one ChapterTaken
     * const ChapterTaken = await prisma.chapterTaken.delete({
     *   where: {
     *     // ... filter to delete one ChapterTaken
     *   }
     * })
     * 
     */
    delete<T extends ChapterTakenDeleteArgs>(args: SelectSubset<T, ChapterTakenDeleteArgs<ExtArgs>>): Prisma__ChapterTakenClient<$Result.GetResult<Prisma.$ChapterTakenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChapterTaken.
     * @param {ChapterTakenUpdateArgs} args - Arguments to update one ChapterTaken.
     * @example
     * // Update one ChapterTaken
     * const chapterTaken = await prisma.chapterTaken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChapterTakenUpdateArgs>(args: SelectSubset<T, ChapterTakenUpdateArgs<ExtArgs>>): Prisma__ChapterTakenClient<$Result.GetResult<Prisma.$ChapterTakenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChapterTakens.
     * @param {ChapterTakenDeleteManyArgs} args - Arguments to filter ChapterTakens to delete.
     * @example
     * // Delete a few ChapterTakens
     * const { count } = await prisma.chapterTaken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChapterTakenDeleteManyArgs>(args?: SelectSubset<T, ChapterTakenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChapterTakens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterTakenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChapterTakens
     * const chapterTaken = await prisma.chapterTaken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChapterTakenUpdateManyArgs>(args: SelectSubset<T, ChapterTakenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ChapterTaken.
     * @param {ChapterTakenUpsertArgs} args - Arguments to update or create a ChapterTaken.
     * @example
     * // Update or create a ChapterTaken
     * const chapterTaken = await prisma.chapterTaken.upsert({
     *   create: {
     *     // ... data to create a ChapterTaken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChapterTaken we want to update
     *   }
     * })
     */
    upsert<T extends ChapterTakenUpsertArgs>(args: SelectSubset<T, ChapterTakenUpsertArgs<ExtArgs>>): Prisma__ChapterTakenClient<$Result.GetResult<Prisma.$ChapterTakenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChapterTakens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterTakenCountArgs} args - Arguments to filter ChapterTakens to count.
     * @example
     * // Count the number of ChapterTakens
     * const count = await prisma.chapterTaken.count({
     *   where: {
     *     // ... the filter for the ChapterTakens we want to count
     *   }
     * })
    **/
    count<T extends ChapterTakenCountArgs>(
      args?: Subset<T, ChapterTakenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChapterTakenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChapterTaken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterTakenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChapterTakenAggregateArgs>(args: Subset<T, ChapterTakenAggregateArgs>): Prisma.PrismaPromise<GetChapterTakenAggregateType<T>>

    /**
     * Group by ChapterTaken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterTakenGroupByArgs} args - Group by arguments.
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
      T extends ChapterTakenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChapterTakenGroupByArgs['orderBy'] }
        : { orderBy?: ChapterTakenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChapterTakenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChapterTakenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChapterTaken model
   */
  readonly fields: ChapterTakenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChapterTaken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChapterTakenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    chapter<T extends ChapterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChapterDefaultArgs<ExtArgs>>): Prisma__ChapterClient<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ai_reports<T extends ChapterTaken$ai_reportsArgs<ExtArgs> = {}>(args?: Subset<T, ChapterTaken$ai_reportsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AiReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    assessments<T extends ChapterTaken$assessmentsArgs<ExtArgs> = {}>(args?: Subset<T, ChapterTaken$assessmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user_progres<T extends ChapterTaken$user_progresArgs<ExtArgs> = {}>(args?: Subset<T, ChapterTaken$user_progresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProgresPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ChapterTaken model
   */
  interface ChapterTakenFieldRefs {
    readonly id: FieldRef<"ChapterTaken", 'String'>
    readonly user_id: FieldRef<"ChapterTaken", 'String'>
    readonly chapter_id: FieldRef<"ChapterTaken", 'String'>
    readonly created_at: FieldRef<"ChapterTaken", 'DateTime'>
    readonly updated_at: FieldRef<"ChapterTaken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ChapterTaken findUnique
   */
  export type ChapterTakenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChapterTaken
     */
    select?: ChapterTakenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChapterTaken
     */
    omit?: ChapterTakenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterTakenInclude<ExtArgs> | null
    /**
     * Filter, which ChapterTaken to fetch.
     */
    where: ChapterTakenWhereUniqueInput
  }

  /**
   * ChapterTaken findUniqueOrThrow
   */
  export type ChapterTakenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChapterTaken
     */
    select?: ChapterTakenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChapterTaken
     */
    omit?: ChapterTakenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterTakenInclude<ExtArgs> | null
    /**
     * Filter, which ChapterTaken to fetch.
     */
    where: ChapterTakenWhereUniqueInput
  }

  /**
   * ChapterTaken findFirst
   */
  export type ChapterTakenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChapterTaken
     */
    select?: ChapterTakenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChapterTaken
     */
    omit?: ChapterTakenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterTakenInclude<ExtArgs> | null
    /**
     * Filter, which ChapterTaken to fetch.
     */
    where?: ChapterTakenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChapterTakens to fetch.
     */
    orderBy?: ChapterTakenOrderByWithRelationInput | ChapterTakenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChapterTakens.
     */
    cursor?: ChapterTakenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChapterTakens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChapterTakens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChapterTakens.
     */
    distinct?: ChapterTakenScalarFieldEnum | ChapterTakenScalarFieldEnum[]
  }

  /**
   * ChapterTaken findFirstOrThrow
   */
  export type ChapterTakenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChapterTaken
     */
    select?: ChapterTakenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChapterTaken
     */
    omit?: ChapterTakenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterTakenInclude<ExtArgs> | null
    /**
     * Filter, which ChapterTaken to fetch.
     */
    where?: ChapterTakenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChapterTakens to fetch.
     */
    orderBy?: ChapterTakenOrderByWithRelationInput | ChapterTakenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChapterTakens.
     */
    cursor?: ChapterTakenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChapterTakens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChapterTakens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChapterTakens.
     */
    distinct?: ChapterTakenScalarFieldEnum | ChapterTakenScalarFieldEnum[]
  }

  /**
   * ChapterTaken findMany
   */
  export type ChapterTakenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChapterTaken
     */
    select?: ChapterTakenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChapterTaken
     */
    omit?: ChapterTakenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterTakenInclude<ExtArgs> | null
    /**
     * Filter, which ChapterTakens to fetch.
     */
    where?: ChapterTakenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChapterTakens to fetch.
     */
    orderBy?: ChapterTakenOrderByWithRelationInput | ChapterTakenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChapterTakens.
     */
    cursor?: ChapterTakenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChapterTakens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChapterTakens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChapterTakens.
     */
    distinct?: ChapterTakenScalarFieldEnum | ChapterTakenScalarFieldEnum[]
  }

  /**
   * ChapterTaken create
   */
  export type ChapterTakenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChapterTaken
     */
    select?: ChapterTakenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChapterTaken
     */
    omit?: ChapterTakenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterTakenInclude<ExtArgs> | null
    /**
     * The data needed to create a ChapterTaken.
     */
    data: XOR<ChapterTakenCreateInput, ChapterTakenUncheckedCreateInput>
  }

  /**
   * ChapterTaken createMany
   */
  export type ChapterTakenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChapterTakens.
     */
    data: ChapterTakenCreateManyInput | ChapterTakenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChapterTaken update
   */
  export type ChapterTakenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChapterTaken
     */
    select?: ChapterTakenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChapterTaken
     */
    omit?: ChapterTakenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterTakenInclude<ExtArgs> | null
    /**
     * The data needed to update a ChapterTaken.
     */
    data: XOR<ChapterTakenUpdateInput, ChapterTakenUncheckedUpdateInput>
    /**
     * Choose, which ChapterTaken to update.
     */
    where: ChapterTakenWhereUniqueInput
  }

  /**
   * ChapterTaken updateMany
   */
  export type ChapterTakenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChapterTakens.
     */
    data: XOR<ChapterTakenUpdateManyMutationInput, ChapterTakenUncheckedUpdateManyInput>
    /**
     * Filter which ChapterTakens to update
     */
    where?: ChapterTakenWhereInput
    /**
     * Limit how many ChapterTakens to update.
     */
    limit?: number
  }

  /**
   * ChapterTaken upsert
   */
  export type ChapterTakenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChapterTaken
     */
    select?: ChapterTakenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChapterTaken
     */
    omit?: ChapterTakenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterTakenInclude<ExtArgs> | null
    /**
     * The filter to search for the ChapterTaken to update in case it exists.
     */
    where: ChapterTakenWhereUniqueInput
    /**
     * In case the ChapterTaken found by the `where` argument doesn't exist, create a new ChapterTaken with this data.
     */
    create: XOR<ChapterTakenCreateInput, ChapterTakenUncheckedCreateInput>
    /**
     * In case the ChapterTaken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChapterTakenUpdateInput, ChapterTakenUncheckedUpdateInput>
  }

  /**
   * ChapterTaken delete
   */
  export type ChapterTakenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChapterTaken
     */
    select?: ChapterTakenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChapterTaken
     */
    omit?: ChapterTakenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterTakenInclude<ExtArgs> | null
    /**
     * Filter which ChapterTaken to delete.
     */
    where: ChapterTakenWhereUniqueInput
  }

  /**
   * ChapterTaken deleteMany
   */
  export type ChapterTakenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChapterTakens to delete
     */
    where?: ChapterTakenWhereInput
    /**
     * Limit how many ChapterTakens to delete.
     */
    limit?: number
  }

  /**
   * ChapterTaken.ai_reports
   */
  export type ChapterTaken$ai_reportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiReport
     */
    select?: AiReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiReport
     */
    omit?: AiReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiReportInclude<ExtArgs> | null
    where?: AiReportWhereInput
    orderBy?: AiReportOrderByWithRelationInput | AiReportOrderByWithRelationInput[]
    cursor?: AiReportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AiReportScalarFieldEnum | AiReportScalarFieldEnum[]
  }

  /**
   * ChapterTaken.assessments
   */
  export type ChapterTaken$assessmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assessment
     */
    omit?: AssessmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentInclude<ExtArgs> | null
    where?: AssessmentWhereInput
    orderBy?: AssessmentOrderByWithRelationInput | AssessmentOrderByWithRelationInput[]
    cursor?: AssessmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssessmentScalarFieldEnum | AssessmentScalarFieldEnum[]
  }

  /**
   * ChapterTaken.user_progres
   */
  export type ChapterTaken$user_progresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProgres
     */
    select?: UserProgresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProgres
     */
    omit?: UserProgresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProgresInclude<ExtArgs> | null
    where?: UserProgresWhereInput
    orderBy?: UserProgresOrderByWithRelationInput | UserProgresOrderByWithRelationInput[]
    cursor?: UserProgresWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserProgresScalarFieldEnum | UserProgresScalarFieldEnum[]
  }

  /**
   * ChapterTaken without action
   */
  export type ChapterTakenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChapterTaken
     */
    select?: ChapterTakenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChapterTaken
     */
    omit?: ChapterTakenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterTakenInclude<ExtArgs> | null
  }


  /**
   * Model Assessment
   */

  export type AggregateAssessment = {
    _count: AssessmentCountAggregateOutputType | null
    _avg: AssessmentAvgAggregateOutputType | null
    _sum: AssessmentSumAggregateOutputType | null
    _min: AssessmentMinAggregateOutputType | null
    _max: AssessmentMaxAggregateOutputType | null
  }

  export type AssessmentAvgAggregateOutputType = {
    correct_answer: number | null
  }

  export type AssessmentSumAggregateOutputType = {
    correct_answer: number | null
  }

  export type AssessmentMinAggregateOutputType = {
    id: string | null
    chapter_taken_id: string | null
    sub_chapter_id: string | null
    title: string | null
    type: $Enums.AssessmentType | null
    correct_answer: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type AssessmentMaxAggregateOutputType = {
    id: string | null
    chapter_taken_id: string | null
    sub_chapter_id: string | null
    title: string | null
    type: $Enums.AssessmentType | null
    correct_answer: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type AssessmentCountAggregateOutputType = {
    id: number
    chapter_taken_id: number
    sub_chapter_id: number
    title: number
    type: number
    correct_answer: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type AssessmentAvgAggregateInputType = {
    correct_answer?: true
  }

  export type AssessmentSumAggregateInputType = {
    correct_answer?: true
  }

  export type AssessmentMinAggregateInputType = {
    id?: true
    chapter_taken_id?: true
    sub_chapter_id?: true
    title?: true
    type?: true
    correct_answer?: true
    created_at?: true
    updated_at?: true
  }

  export type AssessmentMaxAggregateInputType = {
    id?: true
    chapter_taken_id?: true
    sub_chapter_id?: true
    title?: true
    type?: true
    correct_answer?: true
    created_at?: true
    updated_at?: true
  }

  export type AssessmentCountAggregateInputType = {
    id?: true
    chapter_taken_id?: true
    sub_chapter_id?: true
    title?: true
    type?: true
    correct_answer?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type AssessmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Assessment to aggregate.
     */
    where?: AssessmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assessments to fetch.
     */
    orderBy?: AssessmentOrderByWithRelationInput | AssessmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AssessmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assessments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assessments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Assessments
    **/
    _count?: true | AssessmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AssessmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AssessmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AssessmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AssessmentMaxAggregateInputType
  }

  export type GetAssessmentAggregateType<T extends AssessmentAggregateArgs> = {
        [P in keyof T & keyof AggregateAssessment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAssessment[P]>
      : GetScalarType<T[P], AggregateAssessment[P]>
  }




  export type AssessmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssessmentWhereInput
    orderBy?: AssessmentOrderByWithAggregationInput | AssessmentOrderByWithAggregationInput[]
    by: AssessmentScalarFieldEnum[] | AssessmentScalarFieldEnum
    having?: AssessmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AssessmentCountAggregateInputType | true
    _avg?: AssessmentAvgAggregateInputType
    _sum?: AssessmentSumAggregateInputType
    _min?: AssessmentMinAggregateInputType
    _max?: AssessmentMaxAggregateInputType
  }

  export type AssessmentGroupByOutputType = {
    id: string
    chapter_taken_id: string
    sub_chapter_id: string
    title: string
    type: $Enums.AssessmentType
    correct_answer: number
    created_at: Date
    updated_at: Date
    _count: AssessmentCountAggregateOutputType | null
    _avg: AssessmentAvgAggregateOutputType | null
    _sum: AssessmentSumAggregateOutputType | null
    _min: AssessmentMinAggregateOutputType | null
    _max: AssessmentMaxAggregateOutputType | null
  }

  type GetAssessmentGroupByPayload<T extends AssessmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AssessmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AssessmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AssessmentGroupByOutputType[P]>
            : GetScalarType<T[P], AssessmentGroupByOutputType[P]>
        }
      >
    >


  export type AssessmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chapter_taken_id?: boolean
    sub_chapter_id?: boolean
    title?: boolean
    type?: boolean
    correct_answer?: boolean
    created_at?: boolean
    updated_at?: boolean
    chapter_taken?: boolean | ChapterTakenDefaultArgs<ExtArgs>
    sub_chapter?: boolean | SubChapterDefaultArgs<ExtArgs>
    questions?: boolean | Assessment$questionsArgs<ExtArgs>
    user_attempts?: boolean | Assessment$user_attemptsArgs<ExtArgs>
    _count?: boolean | AssessmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assessment"]>



  export type AssessmentSelectScalar = {
    id?: boolean
    chapter_taken_id?: boolean
    sub_chapter_id?: boolean
    title?: boolean
    type?: boolean
    correct_answer?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type AssessmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "chapter_taken_id" | "sub_chapter_id" | "title" | "type" | "correct_answer" | "created_at" | "updated_at", ExtArgs["result"]["assessment"]>
  export type AssessmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chapter_taken?: boolean | ChapterTakenDefaultArgs<ExtArgs>
    sub_chapter?: boolean | SubChapterDefaultArgs<ExtArgs>
    questions?: boolean | Assessment$questionsArgs<ExtArgs>
    user_attempts?: boolean | Assessment$user_attemptsArgs<ExtArgs>
    _count?: boolean | AssessmentCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $AssessmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Assessment"
    objects: {
      chapter_taken: Prisma.$ChapterTakenPayload<ExtArgs>
      sub_chapter: Prisma.$SubChapterPayload<ExtArgs>
      questions: Prisma.$QuestionPayload<ExtArgs>[]
      user_attempts: Prisma.$UserAttemptPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      chapter_taken_id: string
      sub_chapter_id: string
      title: string
      type: $Enums.AssessmentType
      correct_answer: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["assessment"]>
    composites: {}
  }

  type AssessmentGetPayload<S extends boolean | null | undefined | AssessmentDefaultArgs> = $Result.GetResult<Prisma.$AssessmentPayload, S>

  type AssessmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AssessmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AssessmentCountAggregateInputType | true
    }

  export interface AssessmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Assessment'], meta: { name: 'Assessment' } }
    /**
     * Find zero or one Assessment that matches the filter.
     * @param {AssessmentFindUniqueArgs} args - Arguments to find a Assessment
     * @example
     * // Get one Assessment
     * const assessment = await prisma.assessment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AssessmentFindUniqueArgs>(args: SelectSubset<T, AssessmentFindUniqueArgs<ExtArgs>>): Prisma__AssessmentClient<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Assessment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AssessmentFindUniqueOrThrowArgs} args - Arguments to find a Assessment
     * @example
     * // Get one Assessment
     * const assessment = await prisma.assessment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AssessmentFindUniqueOrThrowArgs>(args: SelectSubset<T, AssessmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AssessmentClient<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Assessment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentFindFirstArgs} args - Arguments to find a Assessment
     * @example
     * // Get one Assessment
     * const assessment = await prisma.assessment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AssessmentFindFirstArgs>(args?: SelectSubset<T, AssessmentFindFirstArgs<ExtArgs>>): Prisma__AssessmentClient<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Assessment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentFindFirstOrThrowArgs} args - Arguments to find a Assessment
     * @example
     * // Get one Assessment
     * const assessment = await prisma.assessment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AssessmentFindFirstOrThrowArgs>(args?: SelectSubset<T, AssessmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AssessmentClient<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Assessments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Assessments
     * const assessments = await prisma.assessment.findMany()
     * 
     * // Get first 10 Assessments
     * const assessments = await prisma.assessment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const assessmentWithIdOnly = await prisma.assessment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AssessmentFindManyArgs>(args?: SelectSubset<T, AssessmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Assessment.
     * @param {AssessmentCreateArgs} args - Arguments to create a Assessment.
     * @example
     * // Create one Assessment
     * const Assessment = await prisma.assessment.create({
     *   data: {
     *     // ... data to create a Assessment
     *   }
     * })
     * 
     */
    create<T extends AssessmentCreateArgs>(args: SelectSubset<T, AssessmentCreateArgs<ExtArgs>>): Prisma__AssessmentClient<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Assessments.
     * @param {AssessmentCreateManyArgs} args - Arguments to create many Assessments.
     * @example
     * // Create many Assessments
     * const assessment = await prisma.assessment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AssessmentCreateManyArgs>(args?: SelectSubset<T, AssessmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Assessment.
     * @param {AssessmentDeleteArgs} args - Arguments to delete one Assessment.
     * @example
     * // Delete one Assessment
     * const Assessment = await prisma.assessment.delete({
     *   where: {
     *     // ... filter to delete one Assessment
     *   }
     * })
     * 
     */
    delete<T extends AssessmentDeleteArgs>(args: SelectSubset<T, AssessmentDeleteArgs<ExtArgs>>): Prisma__AssessmentClient<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Assessment.
     * @param {AssessmentUpdateArgs} args - Arguments to update one Assessment.
     * @example
     * // Update one Assessment
     * const assessment = await prisma.assessment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AssessmentUpdateArgs>(args: SelectSubset<T, AssessmentUpdateArgs<ExtArgs>>): Prisma__AssessmentClient<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Assessments.
     * @param {AssessmentDeleteManyArgs} args - Arguments to filter Assessments to delete.
     * @example
     * // Delete a few Assessments
     * const { count } = await prisma.assessment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AssessmentDeleteManyArgs>(args?: SelectSubset<T, AssessmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Assessments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Assessments
     * const assessment = await prisma.assessment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AssessmentUpdateManyArgs>(args: SelectSubset<T, AssessmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Assessment.
     * @param {AssessmentUpsertArgs} args - Arguments to update or create a Assessment.
     * @example
     * // Update or create a Assessment
     * const assessment = await prisma.assessment.upsert({
     *   create: {
     *     // ... data to create a Assessment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Assessment we want to update
     *   }
     * })
     */
    upsert<T extends AssessmentUpsertArgs>(args: SelectSubset<T, AssessmentUpsertArgs<ExtArgs>>): Prisma__AssessmentClient<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Assessments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentCountArgs} args - Arguments to filter Assessments to count.
     * @example
     * // Count the number of Assessments
     * const count = await prisma.assessment.count({
     *   where: {
     *     // ... the filter for the Assessments we want to count
     *   }
     * })
    **/
    count<T extends AssessmentCountArgs>(
      args?: Subset<T, AssessmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AssessmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Assessment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AssessmentAggregateArgs>(args: Subset<T, AssessmentAggregateArgs>): Prisma.PrismaPromise<GetAssessmentAggregateType<T>>

    /**
     * Group by Assessment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentGroupByArgs} args - Group by arguments.
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
      T extends AssessmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AssessmentGroupByArgs['orderBy'] }
        : { orderBy?: AssessmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AssessmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssessmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Assessment model
   */
  readonly fields: AssessmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Assessment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AssessmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chapter_taken<T extends ChapterTakenDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChapterTakenDefaultArgs<ExtArgs>>): Prisma__ChapterTakenClient<$Result.GetResult<Prisma.$ChapterTakenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sub_chapter<T extends SubChapterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubChapterDefaultArgs<ExtArgs>>): Prisma__SubChapterClient<$Result.GetResult<Prisma.$SubChapterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    questions<T extends Assessment$questionsArgs<ExtArgs> = {}>(args?: Subset<T, Assessment$questionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user_attempts<T extends Assessment$user_attemptsArgs<ExtArgs> = {}>(args?: Subset<T, Assessment$user_attemptsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAttemptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Assessment model
   */
  interface AssessmentFieldRefs {
    readonly id: FieldRef<"Assessment", 'String'>
    readonly chapter_taken_id: FieldRef<"Assessment", 'String'>
    readonly sub_chapter_id: FieldRef<"Assessment", 'String'>
    readonly title: FieldRef<"Assessment", 'String'>
    readonly type: FieldRef<"Assessment", 'AssessmentType'>
    readonly correct_answer: FieldRef<"Assessment", 'Int'>
    readonly created_at: FieldRef<"Assessment", 'DateTime'>
    readonly updated_at: FieldRef<"Assessment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Assessment findUnique
   */
  export type AssessmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assessment
     */
    omit?: AssessmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentInclude<ExtArgs> | null
    /**
     * Filter, which Assessment to fetch.
     */
    where: AssessmentWhereUniqueInput
  }

  /**
   * Assessment findUniqueOrThrow
   */
  export type AssessmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assessment
     */
    omit?: AssessmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentInclude<ExtArgs> | null
    /**
     * Filter, which Assessment to fetch.
     */
    where: AssessmentWhereUniqueInput
  }

  /**
   * Assessment findFirst
   */
  export type AssessmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assessment
     */
    omit?: AssessmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentInclude<ExtArgs> | null
    /**
     * Filter, which Assessment to fetch.
     */
    where?: AssessmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assessments to fetch.
     */
    orderBy?: AssessmentOrderByWithRelationInput | AssessmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Assessments.
     */
    cursor?: AssessmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assessments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assessments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assessments.
     */
    distinct?: AssessmentScalarFieldEnum | AssessmentScalarFieldEnum[]
  }

  /**
   * Assessment findFirstOrThrow
   */
  export type AssessmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assessment
     */
    omit?: AssessmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentInclude<ExtArgs> | null
    /**
     * Filter, which Assessment to fetch.
     */
    where?: AssessmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assessments to fetch.
     */
    orderBy?: AssessmentOrderByWithRelationInput | AssessmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Assessments.
     */
    cursor?: AssessmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assessments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assessments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assessments.
     */
    distinct?: AssessmentScalarFieldEnum | AssessmentScalarFieldEnum[]
  }

  /**
   * Assessment findMany
   */
  export type AssessmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assessment
     */
    omit?: AssessmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentInclude<ExtArgs> | null
    /**
     * Filter, which Assessments to fetch.
     */
    where?: AssessmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assessments to fetch.
     */
    orderBy?: AssessmentOrderByWithRelationInput | AssessmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Assessments.
     */
    cursor?: AssessmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assessments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assessments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assessments.
     */
    distinct?: AssessmentScalarFieldEnum | AssessmentScalarFieldEnum[]
  }

  /**
   * Assessment create
   */
  export type AssessmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assessment
     */
    omit?: AssessmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Assessment.
     */
    data: XOR<AssessmentCreateInput, AssessmentUncheckedCreateInput>
  }

  /**
   * Assessment createMany
   */
  export type AssessmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Assessments.
     */
    data: AssessmentCreateManyInput | AssessmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Assessment update
   */
  export type AssessmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assessment
     */
    omit?: AssessmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Assessment.
     */
    data: XOR<AssessmentUpdateInput, AssessmentUncheckedUpdateInput>
    /**
     * Choose, which Assessment to update.
     */
    where: AssessmentWhereUniqueInput
  }

  /**
   * Assessment updateMany
   */
  export type AssessmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Assessments.
     */
    data: XOR<AssessmentUpdateManyMutationInput, AssessmentUncheckedUpdateManyInput>
    /**
     * Filter which Assessments to update
     */
    where?: AssessmentWhereInput
    /**
     * Limit how many Assessments to update.
     */
    limit?: number
  }

  /**
   * Assessment upsert
   */
  export type AssessmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assessment
     */
    omit?: AssessmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Assessment to update in case it exists.
     */
    where: AssessmentWhereUniqueInput
    /**
     * In case the Assessment found by the `where` argument doesn't exist, create a new Assessment with this data.
     */
    create: XOR<AssessmentCreateInput, AssessmentUncheckedCreateInput>
    /**
     * In case the Assessment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AssessmentUpdateInput, AssessmentUncheckedUpdateInput>
  }

  /**
   * Assessment delete
   */
  export type AssessmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assessment
     */
    omit?: AssessmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentInclude<ExtArgs> | null
    /**
     * Filter which Assessment to delete.
     */
    where: AssessmentWhereUniqueInput
  }

  /**
   * Assessment deleteMany
   */
  export type AssessmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Assessments to delete
     */
    where?: AssessmentWhereInput
    /**
     * Limit how many Assessments to delete.
     */
    limit?: number
  }

  /**
   * Assessment.questions
   */
  export type Assessment$questionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    cursor?: QuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Assessment.user_attempts
   */
  export type Assessment$user_attemptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAttempt
     */
    select?: UserAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAttempt
     */
    omit?: UserAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAttemptInclude<ExtArgs> | null
    where?: UserAttemptWhereInput
    orderBy?: UserAttemptOrderByWithRelationInput | UserAttemptOrderByWithRelationInput[]
    cursor?: UserAttemptWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserAttemptScalarFieldEnum | UserAttemptScalarFieldEnum[]
  }

  /**
   * Assessment without action
   */
  export type AssessmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assessment
     */
    omit?: AssessmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentInclude<ExtArgs> | null
  }


  /**
   * Model AiReport
   */

  export type AggregateAiReport = {
    _count: AiReportCountAggregateOutputType | null
    _min: AiReportMinAggregateOutputType | null
    _max: AiReportMaxAggregateOutputType | null
  }

  export type AiReportMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    chapter_taken_id: string | null
    evaluation_text: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type AiReportMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    chapter_taken_id: string | null
    evaluation_text: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type AiReportCountAggregateOutputType = {
    id: number
    user_id: number
    chapter_taken_id: number
    evaluation_text: number
    recomendation_list: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type AiReportMinAggregateInputType = {
    id?: true
    user_id?: true
    chapter_taken_id?: true
    evaluation_text?: true
    created_at?: true
    updated_at?: true
  }

  export type AiReportMaxAggregateInputType = {
    id?: true
    user_id?: true
    chapter_taken_id?: true
    evaluation_text?: true
    created_at?: true
    updated_at?: true
  }

  export type AiReportCountAggregateInputType = {
    id?: true
    user_id?: true
    chapter_taken_id?: true
    evaluation_text?: true
    recomendation_list?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type AiReportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AiReport to aggregate.
     */
    where?: AiReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AiReports to fetch.
     */
    orderBy?: AiReportOrderByWithRelationInput | AiReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AiReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AiReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AiReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AiReports
    **/
    _count?: true | AiReportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AiReportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AiReportMaxAggregateInputType
  }

  export type GetAiReportAggregateType<T extends AiReportAggregateArgs> = {
        [P in keyof T & keyof AggregateAiReport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAiReport[P]>
      : GetScalarType<T[P], AggregateAiReport[P]>
  }




  export type AiReportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AiReportWhereInput
    orderBy?: AiReportOrderByWithAggregationInput | AiReportOrderByWithAggregationInput[]
    by: AiReportScalarFieldEnum[] | AiReportScalarFieldEnum
    having?: AiReportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AiReportCountAggregateInputType | true
    _min?: AiReportMinAggregateInputType
    _max?: AiReportMaxAggregateInputType
  }

  export type AiReportGroupByOutputType = {
    id: string
    user_id: string
    chapter_taken_id: string
    evaluation_text: string
    recomendation_list: JsonValue
    created_at: Date
    updated_at: Date
    _count: AiReportCountAggregateOutputType | null
    _min: AiReportMinAggregateOutputType | null
    _max: AiReportMaxAggregateOutputType | null
  }

  type GetAiReportGroupByPayload<T extends AiReportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AiReportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AiReportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AiReportGroupByOutputType[P]>
            : GetScalarType<T[P], AiReportGroupByOutputType[P]>
        }
      >
    >


  export type AiReportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    chapter_taken_id?: boolean
    evaluation_text?: boolean
    recomendation_list?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    chapter_taken?: boolean | ChapterTakenDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aiReport"]>



  export type AiReportSelectScalar = {
    id?: boolean
    user_id?: boolean
    chapter_taken_id?: boolean
    evaluation_text?: boolean
    recomendation_list?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type AiReportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "chapter_taken_id" | "evaluation_text" | "recomendation_list" | "created_at" | "updated_at", ExtArgs["result"]["aiReport"]>
  export type AiReportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    chapter_taken?: boolean | ChapterTakenDefaultArgs<ExtArgs>
  }

  export type $AiReportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AiReport"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      chapter_taken: Prisma.$ChapterTakenPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      chapter_taken_id: string
      evaluation_text: string
      recomendation_list: Prisma.JsonValue
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["aiReport"]>
    composites: {}
  }

  type AiReportGetPayload<S extends boolean | null | undefined | AiReportDefaultArgs> = $Result.GetResult<Prisma.$AiReportPayload, S>

  type AiReportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AiReportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AiReportCountAggregateInputType | true
    }

  export interface AiReportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AiReport'], meta: { name: 'AiReport' } }
    /**
     * Find zero or one AiReport that matches the filter.
     * @param {AiReportFindUniqueArgs} args - Arguments to find a AiReport
     * @example
     * // Get one AiReport
     * const aiReport = await prisma.aiReport.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AiReportFindUniqueArgs>(args: SelectSubset<T, AiReportFindUniqueArgs<ExtArgs>>): Prisma__AiReportClient<$Result.GetResult<Prisma.$AiReportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AiReport that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AiReportFindUniqueOrThrowArgs} args - Arguments to find a AiReport
     * @example
     * // Get one AiReport
     * const aiReport = await prisma.aiReport.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AiReportFindUniqueOrThrowArgs>(args: SelectSubset<T, AiReportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AiReportClient<$Result.GetResult<Prisma.$AiReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AiReport that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiReportFindFirstArgs} args - Arguments to find a AiReport
     * @example
     * // Get one AiReport
     * const aiReport = await prisma.aiReport.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AiReportFindFirstArgs>(args?: SelectSubset<T, AiReportFindFirstArgs<ExtArgs>>): Prisma__AiReportClient<$Result.GetResult<Prisma.$AiReportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AiReport that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiReportFindFirstOrThrowArgs} args - Arguments to find a AiReport
     * @example
     * // Get one AiReport
     * const aiReport = await prisma.aiReport.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AiReportFindFirstOrThrowArgs>(args?: SelectSubset<T, AiReportFindFirstOrThrowArgs<ExtArgs>>): Prisma__AiReportClient<$Result.GetResult<Prisma.$AiReportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AiReports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiReportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AiReports
     * const aiReports = await prisma.aiReport.findMany()
     * 
     * // Get first 10 AiReports
     * const aiReports = await prisma.aiReport.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aiReportWithIdOnly = await prisma.aiReport.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AiReportFindManyArgs>(args?: SelectSubset<T, AiReportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AiReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AiReport.
     * @param {AiReportCreateArgs} args - Arguments to create a AiReport.
     * @example
     * // Create one AiReport
     * const AiReport = await prisma.aiReport.create({
     *   data: {
     *     // ... data to create a AiReport
     *   }
     * })
     * 
     */
    create<T extends AiReportCreateArgs>(args: SelectSubset<T, AiReportCreateArgs<ExtArgs>>): Prisma__AiReportClient<$Result.GetResult<Prisma.$AiReportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AiReports.
     * @param {AiReportCreateManyArgs} args - Arguments to create many AiReports.
     * @example
     * // Create many AiReports
     * const aiReport = await prisma.aiReport.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AiReportCreateManyArgs>(args?: SelectSubset<T, AiReportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AiReport.
     * @param {AiReportDeleteArgs} args - Arguments to delete one AiReport.
     * @example
     * // Delete one AiReport
     * const AiReport = await prisma.aiReport.delete({
     *   where: {
     *     // ... filter to delete one AiReport
     *   }
     * })
     * 
     */
    delete<T extends AiReportDeleteArgs>(args: SelectSubset<T, AiReportDeleteArgs<ExtArgs>>): Prisma__AiReportClient<$Result.GetResult<Prisma.$AiReportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AiReport.
     * @param {AiReportUpdateArgs} args - Arguments to update one AiReport.
     * @example
     * // Update one AiReport
     * const aiReport = await prisma.aiReport.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AiReportUpdateArgs>(args: SelectSubset<T, AiReportUpdateArgs<ExtArgs>>): Prisma__AiReportClient<$Result.GetResult<Prisma.$AiReportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AiReports.
     * @param {AiReportDeleteManyArgs} args - Arguments to filter AiReports to delete.
     * @example
     * // Delete a few AiReports
     * const { count } = await prisma.aiReport.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AiReportDeleteManyArgs>(args?: SelectSubset<T, AiReportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AiReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiReportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AiReports
     * const aiReport = await prisma.aiReport.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AiReportUpdateManyArgs>(args: SelectSubset<T, AiReportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AiReport.
     * @param {AiReportUpsertArgs} args - Arguments to update or create a AiReport.
     * @example
     * // Update or create a AiReport
     * const aiReport = await prisma.aiReport.upsert({
     *   create: {
     *     // ... data to create a AiReport
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AiReport we want to update
     *   }
     * })
     */
    upsert<T extends AiReportUpsertArgs>(args: SelectSubset<T, AiReportUpsertArgs<ExtArgs>>): Prisma__AiReportClient<$Result.GetResult<Prisma.$AiReportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AiReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiReportCountArgs} args - Arguments to filter AiReports to count.
     * @example
     * // Count the number of AiReports
     * const count = await prisma.aiReport.count({
     *   where: {
     *     // ... the filter for the AiReports we want to count
     *   }
     * })
    **/
    count<T extends AiReportCountArgs>(
      args?: Subset<T, AiReportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AiReportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AiReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiReportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AiReportAggregateArgs>(args: Subset<T, AiReportAggregateArgs>): Prisma.PrismaPromise<GetAiReportAggregateType<T>>

    /**
     * Group by AiReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiReportGroupByArgs} args - Group by arguments.
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
      T extends AiReportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AiReportGroupByArgs['orderBy'] }
        : { orderBy?: AiReportGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AiReportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAiReportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AiReport model
   */
  readonly fields: AiReportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AiReport.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AiReportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    chapter_taken<T extends ChapterTakenDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChapterTakenDefaultArgs<ExtArgs>>): Prisma__ChapterTakenClient<$Result.GetResult<Prisma.$ChapterTakenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AiReport model
   */
  interface AiReportFieldRefs {
    readonly id: FieldRef<"AiReport", 'String'>
    readonly user_id: FieldRef<"AiReport", 'String'>
    readonly chapter_taken_id: FieldRef<"AiReport", 'String'>
    readonly evaluation_text: FieldRef<"AiReport", 'String'>
    readonly recomendation_list: FieldRef<"AiReport", 'Json'>
    readonly created_at: FieldRef<"AiReport", 'DateTime'>
    readonly updated_at: FieldRef<"AiReport", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AiReport findUnique
   */
  export type AiReportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiReport
     */
    select?: AiReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiReport
     */
    omit?: AiReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiReportInclude<ExtArgs> | null
    /**
     * Filter, which AiReport to fetch.
     */
    where: AiReportWhereUniqueInput
  }

  /**
   * AiReport findUniqueOrThrow
   */
  export type AiReportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiReport
     */
    select?: AiReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiReport
     */
    omit?: AiReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiReportInclude<ExtArgs> | null
    /**
     * Filter, which AiReport to fetch.
     */
    where: AiReportWhereUniqueInput
  }

  /**
   * AiReport findFirst
   */
  export type AiReportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiReport
     */
    select?: AiReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiReport
     */
    omit?: AiReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiReportInclude<ExtArgs> | null
    /**
     * Filter, which AiReport to fetch.
     */
    where?: AiReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AiReports to fetch.
     */
    orderBy?: AiReportOrderByWithRelationInput | AiReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AiReports.
     */
    cursor?: AiReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AiReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AiReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AiReports.
     */
    distinct?: AiReportScalarFieldEnum | AiReportScalarFieldEnum[]
  }

  /**
   * AiReport findFirstOrThrow
   */
  export type AiReportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiReport
     */
    select?: AiReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiReport
     */
    omit?: AiReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiReportInclude<ExtArgs> | null
    /**
     * Filter, which AiReport to fetch.
     */
    where?: AiReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AiReports to fetch.
     */
    orderBy?: AiReportOrderByWithRelationInput | AiReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AiReports.
     */
    cursor?: AiReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AiReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AiReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AiReports.
     */
    distinct?: AiReportScalarFieldEnum | AiReportScalarFieldEnum[]
  }

  /**
   * AiReport findMany
   */
  export type AiReportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiReport
     */
    select?: AiReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiReport
     */
    omit?: AiReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiReportInclude<ExtArgs> | null
    /**
     * Filter, which AiReports to fetch.
     */
    where?: AiReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AiReports to fetch.
     */
    orderBy?: AiReportOrderByWithRelationInput | AiReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AiReports.
     */
    cursor?: AiReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AiReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AiReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AiReports.
     */
    distinct?: AiReportScalarFieldEnum | AiReportScalarFieldEnum[]
  }

  /**
   * AiReport create
   */
  export type AiReportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiReport
     */
    select?: AiReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiReport
     */
    omit?: AiReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiReportInclude<ExtArgs> | null
    /**
     * The data needed to create a AiReport.
     */
    data: XOR<AiReportCreateInput, AiReportUncheckedCreateInput>
  }

  /**
   * AiReport createMany
   */
  export type AiReportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AiReports.
     */
    data: AiReportCreateManyInput | AiReportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AiReport update
   */
  export type AiReportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiReport
     */
    select?: AiReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiReport
     */
    omit?: AiReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiReportInclude<ExtArgs> | null
    /**
     * The data needed to update a AiReport.
     */
    data: XOR<AiReportUpdateInput, AiReportUncheckedUpdateInput>
    /**
     * Choose, which AiReport to update.
     */
    where: AiReportWhereUniqueInput
  }

  /**
   * AiReport updateMany
   */
  export type AiReportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AiReports.
     */
    data: XOR<AiReportUpdateManyMutationInput, AiReportUncheckedUpdateManyInput>
    /**
     * Filter which AiReports to update
     */
    where?: AiReportWhereInput
    /**
     * Limit how many AiReports to update.
     */
    limit?: number
  }

  /**
   * AiReport upsert
   */
  export type AiReportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiReport
     */
    select?: AiReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiReport
     */
    omit?: AiReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiReportInclude<ExtArgs> | null
    /**
     * The filter to search for the AiReport to update in case it exists.
     */
    where: AiReportWhereUniqueInput
    /**
     * In case the AiReport found by the `where` argument doesn't exist, create a new AiReport with this data.
     */
    create: XOR<AiReportCreateInput, AiReportUncheckedCreateInput>
    /**
     * In case the AiReport was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AiReportUpdateInput, AiReportUncheckedUpdateInput>
  }

  /**
   * AiReport delete
   */
  export type AiReportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiReport
     */
    select?: AiReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiReport
     */
    omit?: AiReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiReportInclude<ExtArgs> | null
    /**
     * Filter which AiReport to delete.
     */
    where: AiReportWhereUniqueInput
  }

  /**
   * AiReport deleteMany
   */
  export type AiReportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AiReports to delete
     */
    where?: AiReportWhereInput
    /**
     * Limit how many AiReports to delete.
     */
    limit?: number
  }

  /**
   * AiReport without action
   */
  export type AiReportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiReport
     */
    select?: AiReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiReport
     */
    omit?: AiReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiReportInclude<ExtArgs> | null
  }


  /**
   * Model Prerequisite
   */

  export type AggregatePrerequisite = {
    _count: PrerequisiteCountAggregateOutputType | null
    _min: PrerequisiteMinAggregateOutputType | null
    _max: PrerequisiteMaxAggregateOutputType | null
  }

  export type PrerequisiteMinAggregateOutputType = {
    id: string | null
    chapter_id: string | null
    prerequisite_chapter_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PrerequisiteMaxAggregateOutputType = {
    id: string | null
    chapter_id: string | null
    prerequisite_chapter_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PrerequisiteCountAggregateOutputType = {
    id: number
    chapter_id: number
    prerequisite_chapter_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type PrerequisiteMinAggregateInputType = {
    id?: true
    chapter_id?: true
    prerequisite_chapter_id?: true
    created_at?: true
    updated_at?: true
  }

  export type PrerequisiteMaxAggregateInputType = {
    id?: true
    chapter_id?: true
    prerequisite_chapter_id?: true
    created_at?: true
    updated_at?: true
  }

  export type PrerequisiteCountAggregateInputType = {
    id?: true
    chapter_id?: true
    prerequisite_chapter_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type PrerequisiteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Prerequisite to aggregate.
     */
    where?: PrerequisiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prerequisites to fetch.
     */
    orderBy?: PrerequisiteOrderByWithRelationInput | PrerequisiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PrerequisiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prerequisites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prerequisites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Prerequisites
    **/
    _count?: true | PrerequisiteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PrerequisiteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PrerequisiteMaxAggregateInputType
  }

  export type GetPrerequisiteAggregateType<T extends PrerequisiteAggregateArgs> = {
        [P in keyof T & keyof AggregatePrerequisite]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrerequisite[P]>
      : GetScalarType<T[P], AggregatePrerequisite[P]>
  }




  export type PrerequisiteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrerequisiteWhereInput
    orderBy?: PrerequisiteOrderByWithAggregationInput | PrerequisiteOrderByWithAggregationInput[]
    by: PrerequisiteScalarFieldEnum[] | PrerequisiteScalarFieldEnum
    having?: PrerequisiteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PrerequisiteCountAggregateInputType | true
    _min?: PrerequisiteMinAggregateInputType
    _max?: PrerequisiteMaxAggregateInputType
  }

  export type PrerequisiteGroupByOutputType = {
    id: string
    chapter_id: string
    prerequisite_chapter_id: string
    created_at: Date
    updated_at: Date
    _count: PrerequisiteCountAggregateOutputType | null
    _min: PrerequisiteMinAggregateOutputType | null
    _max: PrerequisiteMaxAggregateOutputType | null
  }

  type GetPrerequisiteGroupByPayload<T extends PrerequisiteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PrerequisiteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PrerequisiteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PrerequisiteGroupByOutputType[P]>
            : GetScalarType<T[P], PrerequisiteGroupByOutputType[P]>
        }
      >
    >


  export type PrerequisiteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chapter_id?: boolean
    prerequisite_chapter_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    chapter?: boolean | ChapterDefaultArgs<ExtArgs>
    prerequisite_chapter?: boolean | ChapterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prerequisite"]>



  export type PrerequisiteSelectScalar = {
    id?: boolean
    chapter_id?: boolean
    prerequisite_chapter_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type PrerequisiteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "chapter_id" | "prerequisite_chapter_id" | "created_at" | "updated_at", ExtArgs["result"]["prerequisite"]>
  export type PrerequisiteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chapter?: boolean | ChapterDefaultArgs<ExtArgs>
    prerequisite_chapter?: boolean | ChapterDefaultArgs<ExtArgs>
  }

  export type $PrerequisitePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Prerequisite"
    objects: {
      chapter: Prisma.$ChapterPayload<ExtArgs>
      prerequisite_chapter: Prisma.$ChapterPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      chapter_id: string
      prerequisite_chapter_id: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["prerequisite"]>
    composites: {}
  }

  type PrerequisiteGetPayload<S extends boolean | null | undefined | PrerequisiteDefaultArgs> = $Result.GetResult<Prisma.$PrerequisitePayload, S>

  type PrerequisiteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PrerequisiteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PrerequisiteCountAggregateInputType | true
    }

  export interface PrerequisiteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Prerequisite'], meta: { name: 'Prerequisite' } }
    /**
     * Find zero or one Prerequisite that matches the filter.
     * @param {PrerequisiteFindUniqueArgs} args - Arguments to find a Prerequisite
     * @example
     * // Get one Prerequisite
     * const prerequisite = await prisma.prerequisite.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PrerequisiteFindUniqueArgs>(args: SelectSubset<T, PrerequisiteFindUniqueArgs<ExtArgs>>): Prisma__PrerequisiteClient<$Result.GetResult<Prisma.$PrerequisitePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Prerequisite that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PrerequisiteFindUniqueOrThrowArgs} args - Arguments to find a Prerequisite
     * @example
     * // Get one Prerequisite
     * const prerequisite = await prisma.prerequisite.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PrerequisiteFindUniqueOrThrowArgs>(args: SelectSubset<T, PrerequisiteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PrerequisiteClient<$Result.GetResult<Prisma.$PrerequisitePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prerequisite that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrerequisiteFindFirstArgs} args - Arguments to find a Prerequisite
     * @example
     * // Get one Prerequisite
     * const prerequisite = await prisma.prerequisite.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PrerequisiteFindFirstArgs>(args?: SelectSubset<T, PrerequisiteFindFirstArgs<ExtArgs>>): Prisma__PrerequisiteClient<$Result.GetResult<Prisma.$PrerequisitePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prerequisite that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrerequisiteFindFirstOrThrowArgs} args - Arguments to find a Prerequisite
     * @example
     * // Get one Prerequisite
     * const prerequisite = await prisma.prerequisite.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PrerequisiteFindFirstOrThrowArgs>(args?: SelectSubset<T, PrerequisiteFindFirstOrThrowArgs<ExtArgs>>): Prisma__PrerequisiteClient<$Result.GetResult<Prisma.$PrerequisitePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Prerequisites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrerequisiteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Prerequisites
     * const prerequisites = await prisma.prerequisite.findMany()
     * 
     * // Get first 10 Prerequisites
     * const prerequisites = await prisma.prerequisite.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const prerequisiteWithIdOnly = await prisma.prerequisite.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PrerequisiteFindManyArgs>(args?: SelectSubset<T, PrerequisiteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrerequisitePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Prerequisite.
     * @param {PrerequisiteCreateArgs} args - Arguments to create a Prerequisite.
     * @example
     * // Create one Prerequisite
     * const Prerequisite = await prisma.prerequisite.create({
     *   data: {
     *     // ... data to create a Prerequisite
     *   }
     * })
     * 
     */
    create<T extends PrerequisiteCreateArgs>(args: SelectSubset<T, PrerequisiteCreateArgs<ExtArgs>>): Prisma__PrerequisiteClient<$Result.GetResult<Prisma.$PrerequisitePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Prerequisites.
     * @param {PrerequisiteCreateManyArgs} args - Arguments to create many Prerequisites.
     * @example
     * // Create many Prerequisites
     * const prerequisite = await prisma.prerequisite.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PrerequisiteCreateManyArgs>(args?: SelectSubset<T, PrerequisiteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Prerequisite.
     * @param {PrerequisiteDeleteArgs} args - Arguments to delete one Prerequisite.
     * @example
     * // Delete one Prerequisite
     * const Prerequisite = await prisma.prerequisite.delete({
     *   where: {
     *     // ... filter to delete one Prerequisite
     *   }
     * })
     * 
     */
    delete<T extends PrerequisiteDeleteArgs>(args: SelectSubset<T, PrerequisiteDeleteArgs<ExtArgs>>): Prisma__PrerequisiteClient<$Result.GetResult<Prisma.$PrerequisitePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Prerequisite.
     * @param {PrerequisiteUpdateArgs} args - Arguments to update one Prerequisite.
     * @example
     * // Update one Prerequisite
     * const prerequisite = await prisma.prerequisite.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PrerequisiteUpdateArgs>(args: SelectSubset<T, PrerequisiteUpdateArgs<ExtArgs>>): Prisma__PrerequisiteClient<$Result.GetResult<Prisma.$PrerequisitePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Prerequisites.
     * @param {PrerequisiteDeleteManyArgs} args - Arguments to filter Prerequisites to delete.
     * @example
     * // Delete a few Prerequisites
     * const { count } = await prisma.prerequisite.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PrerequisiteDeleteManyArgs>(args?: SelectSubset<T, PrerequisiteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prerequisites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrerequisiteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Prerequisites
     * const prerequisite = await prisma.prerequisite.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PrerequisiteUpdateManyArgs>(args: SelectSubset<T, PrerequisiteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Prerequisite.
     * @param {PrerequisiteUpsertArgs} args - Arguments to update or create a Prerequisite.
     * @example
     * // Update or create a Prerequisite
     * const prerequisite = await prisma.prerequisite.upsert({
     *   create: {
     *     // ... data to create a Prerequisite
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Prerequisite we want to update
     *   }
     * })
     */
    upsert<T extends PrerequisiteUpsertArgs>(args: SelectSubset<T, PrerequisiteUpsertArgs<ExtArgs>>): Prisma__PrerequisiteClient<$Result.GetResult<Prisma.$PrerequisitePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Prerequisites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrerequisiteCountArgs} args - Arguments to filter Prerequisites to count.
     * @example
     * // Count the number of Prerequisites
     * const count = await prisma.prerequisite.count({
     *   where: {
     *     // ... the filter for the Prerequisites we want to count
     *   }
     * })
    **/
    count<T extends PrerequisiteCountArgs>(
      args?: Subset<T, PrerequisiteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PrerequisiteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Prerequisite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrerequisiteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PrerequisiteAggregateArgs>(args: Subset<T, PrerequisiteAggregateArgs>): Prisma.PrismaPromise<GetPrerequisiteAggregateType<T>>

    /**
     * Group by Prerequisite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrerequisiteGroupByArgs} args - Group by arguments.
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
      T extends PrerequisiteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PrerequisiteGroupByArgs['orderBy'] }
        : { orderBy?: PrerequisiteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PrerequisiteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPrerequisiteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Prerequisite model
   */
  readonly fields: PrerequisiteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Prerequisite.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PrerequisiteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chapter<T extends ChapterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChapterDefaultArgs<ExtArgs>>): Prisma__ChapterClient<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    prerequisite_chapter<T extends ChapterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChapterDefaultArgs<ExtArgs>>): Prisma__ChapterClient<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Prerequisite model
   */
  interface PrerequisiteFieldRefs {
    readonly id: FieldRef<"Prerequisite", 'String'>
    readonly chapter_id: FieldRef<"Prerequisite", 'String'>
    readonly prerequisite_chapter_id: FieldRef<"Prerequisite", 'String'>
    readonly created_at: FieldRef<"Prerequisite", 'DateTime'>
    readonly updated_at: FieldRef<"Prerequisite", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Prerequisite findUnique
   */
  export type PrerequisiteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prerequisite
     */
    select?: PrerequisiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prerequisite
     */
    omit?: PrerequisiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrerequisiteInclude<ExtArgs> | null
    /**
     * Filter, which Prerequisite to fetch.
     */
    where: PrerequisiteWhereUniqueInput
  }

  /**
   * Prerequisite findUniqueOrThrow
   */
  export type PrerequisiteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prerequisite
     */
    select?: PrerequisiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prerequisite
     */
    omit?: PrerequisiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrerequisiteInclude<ExtArgs> | null
    /**
     * Filter, which Prerequisite to fetch.
     */
    where: PrerequisiteWhereUniqueInput
  }

  /**
   * Prerequisite findFirst
   */
  export type PrerequisiteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prerequisite
     */
    select?: PrerequisiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prerequisite
     */
    omit?: PrerequisiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrerequisiteInclude<ExtArgs> | null
    /**
     * Filter, which Prerequisite to fetch.
     */
    where?: PrerequisiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prerequisites to fetch.
     */
    orderBy?: PrerequisiteOrderByWithRelationInput | PrerequisiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prerequisites.
     */
    cursor?: PrerequisiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prerequisites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prerequisites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prerequisites.
     */
    distinct?: PrerequisiteScalarFieldEnum | PrerequisiteScalarFieldEnum[]
  }

  /**
   * Prerequisite findFirstOrThrow
   */
  export type PrerequisiteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prerequisite
     */
    select?: PrerequisiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prerequisite
     */
    omit?: PrerequisiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrerequisiteInclude<ExtArgs> | null
    /**
     * Filter, which Prerequisite to fetch.
     */
    where?: PrerequisiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prerequisites to fetch.
     */
    orderBy?: PrerequisiteOrderByWithRelationInput | PrerequisiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prerequisites.
     */
    cursor?: PrerequisiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prerequisites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prerequisites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prerequisites.
     */
    distinct?: PrerequisiteScalarFieldEnum | PrerequisiteScalarFieldEnum[]
  }

  /**
   * Prerequisite findMany
   */
  export type PrerequisiteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prerequisite
     */
    select?: PrerequisiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prerequisite
     */
    omit?: PrerequisiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrerequisiteInclude<ExtArgs> | null
    /**
     * Filter, which Prerequisites to fetch.
     */
    where?: PrerequisiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prerequisites to fetch.
     */
    orderBy?: PrerequisiteOrderByWithRelationInput | PrerequisiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Prerequisites.
     */
    cursor?: PrerequisiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prerequisites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prerequisites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prerequisites.
     */
    distinct?: PrerequisiteScalarFieldEnum | PrerequisiteScalarFieldEnum[]
  }

  /**
   * Prerequisite create
   */
  export type PrerequisiteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prerequisite
     */
    select?: PrerequisiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prerequisite
     */
    omit?: PrerequisiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrerequisiteInclude<ExtArgs> | null
    /**
     * The data needed to create a Prerequisite.
     */
    data: XOR<PrerequisiteCreateInput, PrerequisiteUncheckedCreateInput>
  }

  /**
   * Prerequisite createMany
   */
  export type PrerequisiteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Prerequisites.
     */
    data: PrerequisiteCreateManyInput | PrerequisiteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Prerequisite update
   */
  export type PrerequisiteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prerequisite
     */
    select?: PrerequisiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prerequisite
     */
    omit?: PrerequisiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrerequisiteInclude<ExtArgs> | null
    /**
     * The data needed to update a Prerequisite.
     */
    data: XOR<PrerequisiteUpdateInput, PrerequisiteUncheckedUpdateInput>
    /**
     * Choose, which Prerequisite to update.
     */
    where: PrerequisiteWhereUniqueInput
  }

  /**
   * Prerequisite updateMany
   */
  export type PrerequisiteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Prerequisites.
     */
    data: XOR<PrerequisiteUpdateManyMutationInput, PrerequisiteUncheckedUpdateManyInput>
    /**
     * Filter which Prerequisites to update
     */
    where?: PrerequisiteWhereInput
    /**
     * Limit how many Prerequisites to update.
     */
    limit?: number
  }

  /**
   * Prerequisite upsert
   */
  export type PrerequisiteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prerequisite
     */
    select?: PrerequisiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prerequisite
     */
    omit?: PrerequisiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrerequisiteInclude<ExtArgs> | null
    /**
     * The filter to search for the Prerequisite to update in case it exists.
     */
    where: PrerequisiteWhereUniqueInput
    /**
     * In case the Prerequisite found by the `where` argument doesn't exist, create a new Prerequisite with this data.
     */
    create: XOR<PrerequisiteCreateInput, PrerequisiteUncheckedCreateInput>
    /**
     * In case the Prerequisite was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PrerequisiteUpdateInput, PrerequisiteUncheckedUpdateInput>
  }

  /**
   * Prerequisite delete
   */
  export type PrerequisiteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prerequisite
     */
    select?: PrerequisiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prerequisite
     */
    omit?: PrerequisiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrerequisiteInclude<ExtArgs> | null
    /**
     * Filter which Prerequisite to delete.
     */
    where: PrerequisiteWhereUniqueInput
  }

  /**
   * Prerequisite deleteMany
   */
  export type PrerequisiteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Prerequisites to delete
     */
    where?: PrerequisiteWhereInput
    /**
     * Limit how many Prerequisites to delete.
     */
    limit?: number
  }

  /**
   * Prerequisite without action
   */
  export type PrerequisiteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prerequisite
     */
    select?: PrerequisiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prerequisite
     */
    omit?: PrerequisiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrerequisiteInclude<ExtArgs> | null
  }


  /**
   * Model Question
   */

  export type AggregateQuestion = {
    _count: QuestionCountAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  export type QuestionMinAggregateOutputType = {
    id: string | null
    assessment_id: string | null
    question: string | null
    topic: string | null
    difficulty_level: $Enums.DifficultyLevel | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type QuestionMaxAggregateOutputType = {
    id: string | null
    assessment_id: string | null
    question: string | null
    topic: string | null
    difficulty_level: $Enums.DifficultyLevel | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type QuestionCountAggregateOutputType = {
    id: number
    assessment_id: number
    question: number
    topic: number
    difficulty_level: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type QuestionMinAggregateInputType = {
    id?: true
    assessment_id?: true
    question?: true
    topic?: true
    difficulty_level?: true
    created_at?: true
    updated_at?: true
  }

  export type QuestionMaxAggregateInputType = {
    id?: true
    assessment_id?: true
    question?: true
    topic?: true
    difficulty_level?: true
    created_at?: true
    updated_at?: true
  }

  export type QuestionCountAggregateInputType = {
    id?: true
    assessment_id?: true
    question?: true
    topic?: true
    difficulty_level?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type QuestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Question to aggregate.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Questions
    **/
    _count?: true | QuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestionMaxAggregateInputType
  }

  export type GetQuestionAggregateType<T extends QuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestion[P]>
      : GetScalarType<T[P], AggregateQuestion[P]>
  }




  export type QuestionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithAggregationInput | QuestionOrderByWithAggregationInput[]
    by: QuestionScalarFieldEnum[] | QuestionScalarFieldEnum
    having?: QuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestionCountAggregateInputType | true
    _min?: QuestionMinAggregateInputType
    _max?: QuestionMaxAggregateInputType
  }

  export type QuestionGroupByOutputType = {
    id: string
    assessment_id: string
    question: string
    topic: string
    difficulty_level: $Enums.DifficultyLevel
    created_at: Date
    updated_at: Date
    _count: QuestionCountAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  type GetQuestionGroupByPayload<T extends QuestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionGroupByOutputType[P]>
        }
      >
    >


  export type QuestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    assessment_id?: boolean
    question?: boolean
    topic?: boolean
    difficulty_level?: boolean
    created_at?: boolean
    updated_at?: boolean
    assessment?: boolean | AssessmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>



  export type QuestionSelectScalar = {
    id?: boolean
    assessment_id?: boolean
    question?: boolean
    topic?: boolean
    difficulty_level?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type QuestionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "assessment_id" | "question" | "topic" | "difficulty_level" | "created_at" | "updated_at", ExtArgs["result"]["question"]>
  export type QuestionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assessment?: boolean | AssessmentDefaultArgs<ExtArgs>
  }

  export type $QuestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Question"
    objects: {
      assessment: Prisma.$AssessmentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      assessment_id: string
      question: string
      topic: string
      difficulty_level: $Enums.DifficultyLevel
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["question"]>
    composites: {}
  }

  type QuestionGetPayload<S extends boolean | null | undefined | QuestionDefaultArgs> = $Result.GetResult<Prisma.$QuestionPayload, S>

  type QuestionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuestionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuestionCountAggregateInputType | true
    }

  export interface QuestionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Question'], meta: { name: 'Question' } }
    /**
     * Find zero or one Question that matches the filter.
     * @param {QuestionFindUniqueArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuestionFindUniqueArgs>(args: SelectSubset<T, QuestionFindUniqueArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Question that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuestionFindUniqueOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuestionFindUniqueOrThrowArgs>(args: SelectSubset<T, QuestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuestionFindFirstArgs>(args?: SelectSubset<T, QuestionFindFirstArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuestionFindFirstOrThrowArgs>(args?: SelectSubset<T, QuestionFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Questions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Questions
     * const questions = await prisma.question.findMany()
     * 
     * // Get first 10 Questions
     * const questions = await prisma.question.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questionWithIdOnly = await prisma.question.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuestionFindManyArgs>(args?: SelectSubset<T, QuestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Question.
     * @param {QuestionCreateArgs} args - Arguments to create a Question.
     * @example
     * // Create one Question
     * const Question = await prisma.question.create({
     *   data: {
     *     // ... data to create a Question
     *   }
     * })
     * 
     */
    create<T extends QuestionCreateArgs>(args: SelectSubset<T, QuestionCreateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Questions.
     * @param {QuestionCreateManyArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const question = await prisma.question.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuestionCreateManyArgs>(args?: SelectSubset<T, QuestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Question.
     * @param {QuestionDeleteArgs} args - Arguments to delete one Question.
     * @example
     * // Delete one Question
     * const Question = await prisma.question.delete({
     *   where: {
     *     // ... filter to delete one Question
     *   }
     * })
     * 
     */
    delete<T extends QuestionDeleteArgs>(args: SelectSubset<T, QuestionDeleteArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Question.
     * @param {QuestionUpdateArgs} args - Arguments to update one Question.
     * @example
     * // Update one Question
     * const question = await prisma.question.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuestionUpdateArgs>(args: SelectSubset<T, QuestionUpdateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Questions.
     * @param {QuestionDeleteManyArgs} args - Arguments to filter Questions to delete.
     * @example
     * // Delete a few Questions
     * const { count } = await prisma.question.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuestionDeleteManyArgs>(args?: SelectSubset<T, QuestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Questions
     * const question = await prisma.question.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuestionUpdateManyArgs>(args: SelectSubset<T, QuestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Question.
     * @param {QuestionUpsertArgs} args - Arguments to update or create a Question.
     * @example
     * // Update or create a Question
     * const question = await prisma.question.upsert({
     *   create: {
     *     // ... data to create a Question
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Question we want to update
     *   }
     * })
     */
    upsert<T extends QuestionUpsertArgs>(args: SelectSubset<T, QuestionUpsertArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionCountArgs} args - Arguments to filter Questions to count.
     * @example
     * // Count the number of Questions
     * const count = await prisma.question.count({
     *   where: {
     *     // ... the filter for the Questions we want to count
     *   }
     * })
    **/
    count<T extends QuestionCountArgs>(
      args?: Subset<T, QuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuestionAggregateArgs>(args: Subset<T, QuestionAggregateArgs>): Prisma.PrismaPromise<GetQuestionAggregateType<T>>

    /**
     * Group by Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionGroupByArgs} args - Group by arguments.
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
      T extends QuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestionGroupByArgs['orderBy'] }
        : { orderBy?: QuestionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Question model
   */
  readonly fields: QuestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Question.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuestionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    assessment<T extends AssessmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AssessmentDefaultArgs<ExtArgs>>): Prisma__AssessmentClient<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Question model
   */
  interface QuestionFieldRefs {
    readonly id: FieldRef<"Question", 'String'>
    readonly assessment_id: FieldRef<"Question", 'String'>
    readonly question: FieldRef<"Question", 'String'>
    readonly topic: FieldRef<"Question", 'String'>
    readonly difficulty_level: FieldRef<"Question", 'DifficultyLevel'>
    readonly created_at: FieldRef<"Question", 'DateTime'>
    readonly updated_at: FieldRef<"Question", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Question findUnique
   */
  export type QuestionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findUniqueOrThrow
   */
  export type QuestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findFirst
   */
  export type QuestionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findFirstOrThrow
   */
  export type QuestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findMany
   */
  export type QuestionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Questions to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question create
   */
  export type QuestionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to create a Question.
     */
    data: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
  }

  /**
   * Question createMany
   */
  export type QuestionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Questions.
     */
    data: QuestionCreateManyInput | QuestionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Question update
   */
  export type QuestionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to update a Question.
     */
    data: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
    /**
     * Choose, which Question to update.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question updateMany
   */
  export type QuestionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Questions.
     */
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to update.
     */
    limit?: number
  }

  /**
   * Question upsert
   */
  export type QuestionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The filter to search for the Question to update in case it exists.
     */
    where: QuestionWhereUniqueInput
    /**
     * In case the Question found by the `where` argument doesn't exist, create a new Question with this data.
     */
    create: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
    /**
     * In case the Question was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
  }

  /**
   * Question delete
   */
  export type QuestionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter which Question to delete.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question deleteMany
   */
  export type QuestionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Questions to delete
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to delete.
     */
    limit?: number
  }

  /**
   * Question without action
   */
  export type QuestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
  }


  /**
   * Model UserAttempt
   */

  export type AggregateUserAttempt = {
    _count: UserAttemptCountAggregateOutputType | null
    _avg: UserAttemptAvgAggregateOutputType | null
    _sum: UserAttemptSumAggregateOutputType | null
    _min: UserAttemptMinAggregateOutputType | null
    _max: UserAttemptMaxAggregateOutputType | null
  }

  export type UserAttemptAvgAggregateOutputType = {
    score: number | null
  }

  export type UserAttemptSumAggregateOutputType = {
    score: number | null
  }

  export type UserAttemptMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    assessement_id: string | null
    score: number | null
    completed_at: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserAttemptMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    assessement_id: string | null
    score: number | null
    completed_at: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserAttemptCountAggregateOutputType = {
    id: number
    user_id: number
    assessement_id: number
    score: number
    completed_at: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UserAttemptAvgAggregateInputType = {
    score?: true
  }

  export type UserAttemptSumAggregateInputType = {
    score?: true
  }

  export type UserAttemptMinAggregateInputType = {
    id?: true
    user_id?: true
    assessement_id?: true
    score?: true
    completed_at?: true
    created_at?: true
    updated_at?: true
  }

  export type UserAttemptMaxAggregateInputType = {
    id?: true
    user_id?: true
    assessement_id?: true
    score?: true
    completed_at?: true
    created_at?: true
    updated_at?: true
  }

  export type UserAttemptCountAggregateInputType = {
    id?: true
    user_id?: true
    assessement_id?: true
    score?: true
    completed_at?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UserAttemptAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserAttempt to aggregate.
     */
    where?: UserAttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAttempts to fetch.
     */
    orderBy?: UserAttemptOrderByWithRelationInput | UserAttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserAttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAttempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAttempts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserAttempts
    **/
    _count?: true | UserAttemptCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAttemptAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserAttemptSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserAttemptMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserAttemptMaxAggregateInputType
  }

  export type GetUserAttemptAggregateType<T extends UserAttemptAggregateArgs> = {
        [P in keyof T & keyof AggregateUserAttempt]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserAttempt[P]>
      : GetScalarType<T[P], AggregateUserAttempt[P]>
  }




  export type UserAttemptGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserAttemptWhereInput
    orderBy?: UserAttemptOrderByWithAggregationInput | UserAttemptOrderByWithAggregationInput[]
    by: UserAttemptScalarFieldEnum[] | UserAttemptScalarFieldEnum
    having?: UserAttemptScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserAttemptCountAggregateInputType | true
    _avg?: UserAttemptAvgAggregateInputType
    _sum?: UserAttemptSumAggregateInputType
    _min?: UserAttemptMinAggregateInputType
    _max?: UserAttemptMaxAggregateInputType
  }

  export type UserAttemptGroupByOutputType = {
    id: string
    user_id: string
    assessement_id: string
    score: number
    completed_at: Date
    created_at: Date
    updated_at: Date
    _count: UserAttemptCountAggregateOutputType | null
    _avg: UserAttemptAvgAggregateOutputType | null
    _sum: UserAttemptSumAggregateOutputType | null
    _min: UserAttemptMinAggregateOutputType | null
    _max: UserAttemptMaxAggregateOutputType | null
  }

  type GetUserAttemptGroupByPayload<T extends UserAttemptGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserAttemptGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserAttemptGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserAttemptGroupByOutputType[P]>
            : GetScalarType<T[P], UserAttemptGroupByOutputType[P]>
        }
      >
    >


  export type UserAttemptSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    assessement_id?: boolean
    score?: boolean
    completed_at?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    assessment?: boolean | AssessmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userAttempt"]>



  export type UserAttemptSelectScalar = {
    id?: boolean
    user_id?: boolean
    assessement_id?: boolean
    score?: boolean
    completed_at?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type UserAttemptOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "assessement_id" | "score" | "completed_at" | "created_at" | "updated_at", ExtArgs["result"]["userAttempt"]>
  export type UserAttemptInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    assessment?: boolean | AssessmentDefaultArgs<ExtArgs>
  }

  export type $UserAttemptPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserAttempt"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      assessment: Prisma.$AssessmentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      assessement_id: string
      score: number
      completed_at: Date
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["userAttempt"]>
    composites: {}
  }

  type UserAttemptGetPayload<S extends boolean | null | undefined | UserAttemptDefaultArgs> = $Result.GetResult<Prisma.$UserAttemptPayload, S>

  type UserAttemptCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserAttemptFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserAttemptCountAggregateInputType | true
    }

  export interface UserAttemptDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserAttempt'], meta: { name: 'UserAttempt' } }
    /**
     * Find zero or one UserAttempt that matches the filter.
     * @param {UserAttemptFindUniqueArgs} args - Arguments to find a UserAttempt
     * @example
     * // Get one UserAttempt
     * const userAttempt = await prisma.userAttempt.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserAttemptFindUniqueArgs>(args: SelectSubset<T, UserAttemptFindUniqueArgs<ExtArgs>>): Prisma__UserAttemptClient<$Result.GetResult<Prisma.$UserAttemptPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserAttempt that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserAttemptFindUniqueOrThrowArgs} args - Arguments to find a UserAttempt
     * @example
     * // Get one UserAttempt
     * const userAttempt = await prisma.userAttempt.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserAttemptFindUniqueOrThrowArgs>(args: SelectSubset<T, UserAttemptFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserAttemptClient<$Result.GetResult<Prisma.$UserAttemptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserAttempt that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAttemptFindFirstArgs} args - Arguments to find a UserAttempt
     * @example
     * // Get one UserAttempt
     * const userAttempt = await prisma.userAttempt.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserAttemptFindFirstArgs>(args?: SelectSubset<T, UserAttemptFindFirstArgs<ExtArgs>>): Prisma__UserAttemptClient<$Result.GetResult<Prisma.$UserAttemptPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserAttempt that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAttemptFindFirstOrThrowArgs} args - Arguments to find a UserAttempt
     * @example
     * // Get one UserAttempt
     * const userAttempt = await prisma.userAttempt.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserAttemptFindFirstOrThrowArgs>(args?: SelectSubset<T, UserAttemptFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserAttemptClient<$Result.GetResult<Prisma.$UserAttemptPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserAttempts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAttemptFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserAttempts
     * const userAttempts = await prisma.userAttempt.findMany()
     * 
     * // Get first 10 UserAttempts
     * const userAttempts = await prisma.userAttempt.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userAttemptWithIdOnly = await prisma.userAttempt.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserAttemptFindManyArgs>(args?: SelectSubset<T, UserAttemptFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAttemptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserAttempt.
     * @param {UserAttemptCreateArgs} args - Arguments to create a UserAttempt.
     * @example
     * // Create one UserAttempt
     * const UserAttempt = await prisma.userAttempt.create({
     *   data: {
     *     // ... data to create a UserAttempt
     *   }
     * })
     * 
     */
    create<T extends UserAttemptCreateArgs>(args: SelectSubset<T, UserAttemptCreateArgs<ExtArgs>>): Prisma__UserAttemptClient<$Result.GetResult<Prisma.$UserAttemptPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserAttempts.
     * @param {UserAttemptCreateManyArgs} args - Arguments to create many UserAttempts.
     * @example
     * // Create many UserAttempts
     * const userAttempt = await prisma.userAttempt.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserAttemptCreateManyArgs>(args?: SelectSubset<T, UserAttemptCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserAttempt.
     * @param {UserAttemptDeleteArgs} args - Arguments to delete one UserAttempt.
     * @example
     * // Delete one UserAttempt
     * const UserAttempt = await prisma.userAttempt.delete({
     *   where: {
     *     // ... filter to delete one UserAttempt
     *   }
     * })
     * 
     */
    delete<T extends UserAttemptDeleteArgs>(args: SelectSubset<T, UserAttemptDeleteArgs<ExtArgs>>): Prisma__UserAttemptClient<$Result.GetResult<Prisma.$UserAttemptPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserAttempt.
     * @param {UserAttemptUpdateArgs} args - Arguments to update one UserAttempt.
     * @example
     * // Update one UserAttempt
     * const userAttempt = await prisma.userAttempt.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserAttemptUpdateArgs>(args: SelectSubset<T, UserAttemptUpdateArgs<ExtArgs>>): Prisma__UserAttemptClient<$Result.GetResult<Prisma.$UserAttemptPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserAttempts.
     * @param {UserAttemptDeleteManyArgs} args - Arguments to filter UserAttempts to delete.
     * @example
     * // Delete a few UserAttempts
     * const { count } = await prisma.userAttempt.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserAttemptDeleteManyArgs>(args?: SelectSubset<T, UserAttemptDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserAttempts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAttemptUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserAttempts
     * const userAttempt = await prisma.userAttempt.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserAttemptUpdateManyArgs>(args: SelectSubset<T, UserAttemptUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserAttempt.
     * @param {UserAttemptUpsertArgs} args - Arguments to update or create a UserAttempt.
     * @example
     * // Update or create a UserAttempt
     * const userAttempt = await prisma.userAttempt.upsert({
     *   create: {
     *     // ... data to create a UserAttempt
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserAttempt we want to update
     *   }
     * })
     */
    upsert<T extends UserAttemptUpsertArgs>(args: SelectSubset<T, UserAttemptUpsertArgs<ExtArgs>>): Prisma__UserAttemptClient<$Result.GetResult<Prisma.$UserAttemptPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserAttempts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAttemptCountArgs} args - Arguments to filter UserAttempts to count.
     * @example
     * // Count the number of UserAttempts
     * const count = await prisma.userAttempt.count({
     *   where: {
     *     // ... the filter for the UserAttempts we want to count
     *   }
     * })
    **/
    count<T extends UserAttemptCountArgs>(
      args?: Subset<T, UserAttemptCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserAttemptCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserAttempt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAttemptAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAttemptAggregateArgs>(args: Subset<T, UserAttemptAggregateArgs>): Prisma.PrismaPromise<GetUserAttemptAggregateType<T>>

    /**
     * Group by UserAttempt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAttemptGroupByArgs} args - Group by arguments.
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
      T extends UserAttemptGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserAttemptGroupByArgs['orderBy'] }
        : { orderBy?: UserAttemptGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserAttemptGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserAttemptGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserAttempt model
   */
  readonly fields: UserAttemptFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserAttempt.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserAttemptClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    assessment<T extends AssessmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AssessmentDefaultArgs<ExtArgs>>): Prisma__AssessmentClient<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserAttempt model
   */
  interface UserAttemptFieldRefs {
    readonly id: FieldRef<"UserAttempt", 'String'>
    readonly user_id: FieldRef<"UserAttempt", 'String'>
    readonly assessement_id: FieldRef<"UserAttempt", 'String'>
    readonly score: FieldRef<"UserAttempt", 'Float'>
    readonly completed_at: FieldRef<"UserAttempt", 'DateTime'>
    readonly created_at: FieldRef<"UserAttempt", 'DateTime'>
    readonly updated_at: FieldRef<"UserAttempt", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserAttempt findUnique
   */
  export type UserAttemptFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAttempt
     */
    select?: UserAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAttempt
     */
    omit?: UserAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAttemptInclude<ExtArgs> | null
    /**
     * Filter, which UserAttempt to fetch.
     */
    where: UserAttemptWhereUniqueInput
  }

  /**
   * UserAttempt findUniqueOrThrow
   */
  export type UserAttemptFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAttempt
     */
    select?: UserAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAttempt
     */
    omit?: UserAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAttemptInclude<ExtArgs> | null
    /**
     * Filter, which UserAttempt to fetch.
     */
    where: UserAttemptWhereUniqueInput
  }

  /**
   * UserAttempt findFirst
   */
  export type UserAttemptFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAttempt
     */
    select?: UserAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAttempt
     */
    omit?: UserAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAttemptInclude<ExtArgs> | null
    /**
     * Filter, which UserAttempt to fetch.
     */
    where?: UserAttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAttempts to fetch.
     */
    orderBy?: UserAttemptOrderByWithRelationInput | UserAttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserAttempts.
     */
    cursor?: UserAttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAttempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAttempts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserAttempts.
     */
    distinct?: UserAttemptScalarFieldEnum | UserAttemptScalarFieldEnum[]
  }

  /**
   * UserAttempt findFirstOrThrow
   */
  export type UserAttemptFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAttempt
     */
    select?: UserAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAttempt
     */
    omit?: UserAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAttemptInclude<ExtArgs> | null
    /**
     * Filter, which UserAttempt to fetch.
     */
    where?: UserAttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAttempts to fetch.
     */
    orderBy?: UserAttemptOrderByWithRelationInput | UserAttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserAttempts.
     */
    cursor?: UserAttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAttempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAttempts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserAttempts.
     */
    distinct?: UserAttemptScalarFieldEnum | UserAttemptScalarFieldEnum[]
  }

  /**
   * UserAttempt findMany
   */
  export type UserAttemptFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAttempt
     */
    select?: UserAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAttempt
     */
    omit?: UserAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAttemptInclude<ExtArgs> | null
    /**
     * Filter, which UserAttempts to fetch.
     */
    where?: UserAttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAttempts to fetch.
     */
    orderBy?: UserAttemptOrderByWithRelationInput | UserAttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserAttempts.
     */
    cursor?: UserAttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAttempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAttempts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserAttempts.
     */
    distinct?: UserAttemptScalarFieldEnum | UserAttemptScalarFieldEnum[]
  }

  /**
   * UserAttempt create
   */
  export type UserAttemptCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAttempt
     */
    select?: UserAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAttempt
     */
    omit?: UserAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAttemptInclude<ExtArgs> | null
    /**
     * The data needed to create a UserAttempt.
     */
    data: XOR<UserAttemptCreateInput, UserAttemptUncheckedCreateInput>
  }

  /**
   * UserAttempt createMany
   */
  export type UserAttemptCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserAttempts.
     */
    data: UserAttemptCreateManyInput | UserAttemptCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserAttempt update
   */
  export type UserAttemptUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAttempt
     */
    select?: UserAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAttempt
     */
    omit?: UserAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAttemptInclude<ExtArgs> | null
    /**
     * The data needed to update a UserAttempt.
     */
    data: XOR<UserAttemptUpdateInput, UserAttemptUncheckedUpdateInput>
    /**
     * Choose, which UserAttempt to update.
     */
    where: UserAttemptWhereUniqueInput
  }

  /**
   * UserAttempt updateMany
   */
  export type UserAttemptUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserAttempts.
     */
    data: XOR<UserAttemptUpdateManyMutationInput, UserAttemptUncheckedUpdateManyInput>
    /**
     * Filter which UserAttempts to update
     */
    where?: UserAttemptWhereInput
    /**
     * Limit how many UserAttempts to update.
     */
    limit?: number
  }

  /**
   * UserAttempt upsert
   */
  export type UserAttemptUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAttempt
     */
    select?: UserAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAttempt
     */
    omit?: UserAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAttemptInclude<ExtArgs> | null
    /**
     * The filter to search for the UserAttempt to update in case it exists.
     */
    where: UserAttemptWhereUniqueInput
    /**
     * In case the UserAttempt found by the `where` argument doesn't exist, create a new UserAttempt with this data.
     */
    create: XOR<UserAttemptCreateInput, UserAttemptUncheckedCreateInput>
    /**
     * In case the UserAttempt was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserAttemptUpdateInput, UserAttemptUncheckedUpdateInput>
  }

  /**
   * UserAttempt delete
   */
  export type UserAttemptDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAttempt
     */
    select?: UserAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAttempt
     */
    omit?: UserAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAttemptInclude<ExtArgs> | null
    /**
     * Filter which UserAttempt to delete.
     */
    where: UserAttemptWhereUniqueInput
  }

  /**
   * UserAttempt deleteMany
   */
  export type UserAttemptDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserAttempts to delete
     */
    where?: UserAttemptWhereInput
    /**
     * Limit how many UserAttempts to delete.
     */
    limit?: number
  }

  /**
   * UserAttempt without action
   */
  export type UserAttemptDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAttempt
     */
    select?: UserAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAttempt
     */
    omit?: UserAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAttemptInclude<ExtArgs> | null
  }


  /**
   * Model UserProgres
   */

  export type AggregateUserProgres = {
    _count: UserProgresCountAggregateOutputType | null
    _min: UserProgresMinAggregateOutputType | null
    _max: UserProgresMaxAggregateOutputType | null
  }

  export type UserProgresMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    sub_chapter_id: string | null
    chapter_taken_id: string | null
    current_level: $Enums.CurrentLevel | null
    status: $Enums.ProgressStatus | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserProgresMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    sub_chapter_id: string | null
    chapter_taken_id: string | null
    current_level: $Enums.CurrentLevel | null
    status: $Enums.ProgressStatus | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserProgresCountAggregateOutputType = {
    id: number
    user_id: number
    sub_chapter_id: number
    chapter_taken_id: number
    current_level: number
    status: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UserProgresMinAggregateInputType = {
    id?: true
    user_id?: true
    sub_chapter_id?: true
    chapter_taken_id?: true
    current_level?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type UserProgresMaxAggregateInputType = {
    id?: true
    user_id?: true
    sub_chapter_id?: true
    chapter_taken_id?: true
    current_level?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type UserProgresCountAggregateInputType = {
    id?: true
    user_id?: true
    sub_chapter_id?: true
    chapter_taken_id?: true
    current_level?: true
    status?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UserProgresAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProgres to aggregate.
     */
    where?: UserProgresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProgres to fetch.
     */
    orderBy?: UserProgresOrderByWithRelationInput | UserProgresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserProgresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProgres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProgres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserProgres
    **/
    _count?: true | UserProgresCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserProgresMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserProgresMaxAggregateInputType
  }

  export type GetUserProgresAggregateType<T extends UserProgresAggregateArgs> = {
        [P in keyof T & keyof AggregateUserProgres]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserProgres[P]>
      : GetScalarType<T[P], AggregateUserProgres[P]>
  }




  export type UserProgresGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserProgresWhereInput
    orderBy?: UserProgresOrderByWithAggregationInput | UserProgresOrderByWithAggregationInput[]
    by: UserProgresScalarFieldEnum[] | UserProgresScalarFieldEnum
    having?: UserProgresScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserProgresCountAggregateInputType | true
    _min?: UserProgresMinAggregateInputType
    _max?: UserProgresMaxAggregateInputType
  }

  export type UserProgresGroupByOutputType = {
    id: string
    user_id: string
    sub_chapter_id: string
    chapter_taken_id: string
    current_level: $Enums.CurrentLevel
    status: $Enums.ProgressStatus
    created_at: Date
    updated_at: Date
    _count: UserProgresCountAggregateOutputType | null
    _min: UserProgresMinAggregateOutputType | null
    _max: UserProgresMaxAggregateOutputType | null
  }

  type GetUserProgresGroupByPayload<T extends UserProgresGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserProgresGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserProgresGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserProgresGroupByOutputType[P]>
            : GetScalarType<T[P], UserProgresGroupByOutputType[P]>
        }
      >
    >


  export type UserProgresSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    sub_chapter_id?: boolean
    chapter_taken_id?: boolean
    current_level?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    sub_chapter?: boolean | SubChapterDefaultArgs<ExtArgs>
    chapter_taken?: boolean | ChapterTakenDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userProgres"]>



  export type UserProgresSelectScalar = {
    id?: boolean
    user_id?: boolean
    sub_chapter_id?: boolean
    chapter_taken_id?: boolean
    current_level?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type UserProgresOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "sub_chapter_id" | "chapter_taken_id" | "current_level" | "status" | "created_at" | "updated_at", ExtArgs["result"]["userProgres"]>
  export type UserProgresInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    sub_chapter?: boolean | SubChapterDefaultArgs<ExtArgs>
    chapter_taken?: boolean | ChapterTakenDefaultArgs<ExtArgs>
  }

  export type $UserProgresPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserProgres"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      sub_chapter: Prisma.$SubChapterPayload<ExtArgs>
      chapter_taken: Prisma.$ChapterTakenPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      sub_chapter_id: string
      chapter_taken_id: string
      current_level: $Enums.CurrentLevel
      status: $Enums.ProgressStatus
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["userProgres"]>
    composites: {}
  }

  type UserProgresGetPayload<S extends boolean | null | undefined | UserProgresDefaultArgs> = $Result.GetResult<Prisma.$UserProgresPayload, S>

  type UserProgresCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserProgresFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserProgresCountAggregateInputType | true
    }

  export interface UserProgresDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserProgres'], meta: { name: 'UserProgres' } }
    /**
     * Find zero or one UserProgres that matches the filter.
     * @param {UserProgresFindUniqueArgs} args - Arguments to find a UserProgres
     * @example
     * // Get one UserProgres
     * const userProgres = await prisma.userProgres.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserProgresFindUniqueArgs>(args: SelectSubset<T, UserProgresFindUniqueArgs<ExtArgs>>): Prisma__UserProgresClient<$Result.GetResult<Prisma.$UserProgresPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserProgres that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserProgresFindUniqueOrThrowArgs} args - Arguments to find a UserProgres
     * @example
     * // Get one UserProgres
     * const userProgres = await prisma.userProgres.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserProgresFindUniqueOrThrowArgs>(args: SelectSubset<T, UserProgresFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserProgresClient<$Result.GetResult<Prisma.$UserProgresPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserProgres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProgresFindFirstArgs} args - Arguments to find a UserProgres
     * @example
     * // Get one UserProgres
     * const userProgres = await prisma.userProgres.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserProgresFindFirstArgs>(args?: SelectSubset<T, UserProgresFindFirstArgs<ExtArgs>>): Prisma__UserProgresClient<$Result.GetResult<Prisma.$UserProgresPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserProgres that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProgresFindFirstOrThrowArgs} args - Arguments to find a UserProgres
     * @example
     * // Get one UserProgres
     * const userProgres = await prisma.userProgres.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserProgresFindFirstOrThrowArgs>(args?: SelectSubset<T, UserProgresFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserProgresClient<$Result.GetResult<Prisma.$UserProgresPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserProgres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProgresFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserProgres
     * const userProgres = await prisma.userProgres.findMany()
     * 
     * // Get first 10 UserProgres
     * const userProgres = await prisma.userProgres.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userProgresWithIdOnly = await prisma.userProgres.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserProgresFindManyArgs>(args?: SelectSubset<T, UserProgresFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProgresPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserProgres.
     * @param {UserProgresCreateArgs} args - Arguments to create a UserProgres.
     * @example
     * // Create one UserProgres
     * const UserProgres = await prisma.userProgres.create({
     *   data: {
     *     // ... data to create a UserProgres
     *   }
     * })
     * 
     */
    create<T extends UserProgresCreateArgs>(args: SelectSubset<T, UserProgresCreateArgs<ExtArgs>>): Prisma__UserProgresClient<$Result.GetResult<Prisma.$UserProgresPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserProgres.
     * @param {UserProgresCreateManyArgs} args - Arguments to create many UserProgres.
     * @example
     * // Create many UserProgres
     * const userProgres = await prisma.userProgres.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserProgresCreateManyArgs>(args?: SelectSubset<T, UserProgresCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserProgres.
     * @param {UserProgresDeleteArgs} args - Arguments to delete one UserProgres.
     * @example
     * // Delete one UserProgres
     * const UserProgres = await prisma.userProgres.delete({
     *   where: {
     *     // ... filter to delete one UserProgres
     *   }
     * })
     * 
     */
    delete<T extends UserProgresDeleteArgs>(args: SelectSubset<T, UserProgresDeleteArgs<ExtArgs>>): Prisma__UserProgresClient<$Result.GetResult<Prisma.$UserProgresPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserProgres.
     * @param {UserProgresUpdateArgs} args - Arguments to update one UserProgres.
     * @example
     * // Update one UserProgres
     * const userProgres = await prisma.userProgres.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserProgresUpdateArgs>(args: SelectSubset<T, UserProgresUpdateArgs<ExtArgs>>): Prisma__UserProgresClient<$Result.GetResult<Prisma.$UserProgresPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserProgres.
     * @param {UserProgresDeleteManyArgs} args - Arguments to filter UserProgres to delete.
     * @example
     * // Delete a few UserProgres
     * const { count } = await prisma.userProgres.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserProgresDeleteManyArgs>(args?: SelectSubset<T, UserProgresDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserProgres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProgresUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserProgres
     * const userProgres = await prisma.userProgres.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserProgresUpdateManyArgs>(args: SelectSubset<T, UserProgresUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserProgres.
     * @param {UserProgresUpsertArgs} args - Arguments to update or create a UserProgres.
     * @example
     * // Update or create a UserProgres
     * const userProgres = await prisma.userProgres.upsert({
     *   create: {
     *     // ... data to create a UserProgres
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserProgres we want to update
     *   }
     * })
     */
    upsert<T extends UserProgresUpsertArgs>(args: SelectSubset<T, UserProgresUpsertArgs<ExtArgs>>): Prisma__UserProgresClient<$Result.GetResult<Prisma.$UserProgresPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserProgres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProgresCountArgs} args - Arguments to filter UserProgres to count.
     * @example
     * // Count the number of UserProgres
     * const count = await prisma.userProgres.count({
     *   where: {
     *     // ... the filter for the UserProgres we want to count
     *   }
     * })
    **/
    count<T extends UserProgresCountArgs>(
      args?: Subset<T, UserProgresCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserProgresCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserProgres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProgresAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserProgresAggregateArgs>(args: Subset<T, UserProgresAggregateArgs>): Prisma.PrismaPromise<GetUserProgresAggregateType<T>>

    /**
     * Group by UserProgres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProgresGroupByArgs} args - Group by arguments.
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
      T extends UserProgresGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserProgresGroupByArgs['orderBy'] }
        : { orderBy?: UserProgresGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserProgresGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserProgresGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserProgres model
   */
  readonly fields: UserProgresFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserProgres.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserProgresClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sub_chapter<T extends SubChapterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubChapterDefaultArgs<ExtArgs>>): Prisma__SubChapterClient<$Result.GetResult<Prisma.$SubChapterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    chapter_taken<T extends ChapterTakenDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChapterTakenDefaultArgs<ExtArgs>>): Prisma__ChapterTakenClient<$Result.GetResult<Prisma.$ChapterTakenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserProgres model
   */
  interface UserProgresFieldRefs {
    readonly id: FieldRef<"UserProgres", 'String'>
    readonly user_id: FieldRef<"UserProgres", 'String'>
    readonly sub_chapter_id: FieldRef<"UserProgres", 'String'>
    readonly chapter_taken_id: FieldRef<"UserProgres", 'String'>
    readonly current_level: FieldRef<"UserProgres", 'CurrentLevel'>
    readonly status: FieldRef<"UserProgres", 'ProgressStatus'>
    readonly created_at: FieldRef<"UserProgres", 'DateTime'>
    readonly updated_at: FieldRef<"UserProgres", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserProgres findUnique
   */
  export type UserProgresFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProgres
     */
    select?: UserProgresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProgres
     */
    omit?: UserProgresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProgresInclude<ExtArgs> | null
    /**
     * Filter, which UserProgres to fetch.
     */
    where: UserProgresWhereUniqueInput
  }

  /**
   * UserProgres findUniqueOrThrow
   */
  export type UserProgresFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProgres
     */
    select?: UserProgresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProgres
     */
    omit?: UserProgresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProgresInclude<ExtArgs> | null
    /**
     * Filter, which UserProgres to fetch.
     */
    where: UserProgresWhereUniqueInput
  }

  /**
   * UserProgres findFirst
   */
  export type UserProgresFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProgres
     */
    select?: UserProgresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProgres
     */
    omit?: UserProgresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProgresInclude<ExtArgs> | null
    /**
     * Filter, which UserProgres to fetch.
     */
    where?: UserProgresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProgres to fetch.
     */
    orderBy?: UserProgresOrderByWithRelationInput | UserProgresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProgres.
     */
    cursor?: UserProgresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProgres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProgres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProgres.
     */
    distinct?: UserProgresScalarFieldEnum | UserProgresScalarFieldEnum[]
  }

  /**
   * UserProgres findFirstOrThrow
   */
  export type UserProgresFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProgres
     */
    select?: UserProgresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProgres
     */
    omit?: UserProgresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProgresInclude<ExtArgs> | null
    /**
     * Filter, which UserProgres to fetch.
     */
    where?: UserProgresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProgres to fetch.
     */
    orderBy?: UserProgresOrderByWithRelationInput | UserProgresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProgres.
     */
    cursor?: UserProgresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProgres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProgres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProgres.
     */
    distinct?: UserProgresScalarFieldEnum | UserProgresScalarFieldEnum[]
  }

  /**
   * UserProgres findMany
   */
  export type UserProgresFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProgres
     */
    select?: UserProgresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProgres
     */
    omit?: UserProgresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProgresInclude<ExtArgs> | null
    /**
     * Filter, which UserProgres to fetch.
     */
    where?: UserProgresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProgres to fetch.
     */
    orderBy?: UserProgresOrderByWithRelationInput | UserProgresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserProgres.
     */
    cursor?: UserProgresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProgres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProgres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProgres.
     */
    distinct?: UserProgresScalarFieldEnum | UserProgresScalarFieldEnum[]
  }

  /**
   * UserProgres create
   */
  export type UserProgresCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProgres
     */
    select?: UserProgresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProgres
     */
    omit?: UserProgresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProgresInclude<ExtArgs> | null
    /**
     * The data needed to create a UserProgres.
     */
    data: XOR<UserProgresCreateInput, UserProgresUncheckedCreateInput>
  }

  /**
   * UserProgres createMany
   */
  export type UserProgresCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserProgres.
     */
    data: UserProgresCreateManyInput | UserProgresCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserProgres update
   */
  export type UserProgresUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProgres
     */
    select?: UserProgresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProgres
     */
    omit?: UserProgresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProgresInclude<ExtArgs> | null
    /**
     * The data needed to update a UserProgres.
     */
    data: XOR<UserProgresUpdateInput, UserProgresUncheckedUpdateInput>
    /**
     * Choose, which UserProgres to update.
     */
    where: UserProgresWhereUniqueInput
  }

  /**
   * UserProgres updateMany
   */
  export type UserProgresUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserProgres.
     */
    data: XOR<UserProgresUpdateManyMutationInput, UserProgresUncheckedUpdateManyInput>
    /**
     * Filter which UserProgres to update
     */
    where?: UserProgresWhereInput
    /**
     * Limit how many UserProgres to update.
     */
    limit?: number
  }

  /**
   * UserProgres upsert
   */
  export type UserProgresUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProgres
     */
    select?: UserProgresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProgres
     */
    omit?: UserProgresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProgresInclude<ExtArgs> | null
    /**
     * The filter to search for the UserProgres to update in case it exists.
     */
    where: UserProgresWhereUniqueInput
    /**
     * In case the UserProgres found by the `where` argument doesn't exist, create a new UserProgres with this data.
     */
    create: XOR<UserProgresCreateInput, UserProgresUncheckedCreateInput>
    /**
     * In case the UserProgres was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserProgresUpdateInput, UserProgresUncheckedUpdateInput>
  }

  /**
   * UserProgres delete
   */
  export type UserProgresDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProgres
     */
    select?: UserProgresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProgres
     */
    omit?: UserProgresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProgresInclude<ExtArgs> | null
    /**
     * Filter which UserProgres to delete.
     */
    where: UserProgresWhereUniqueInput
  }

  /**
   * UserProgres deleteMany
   */
  export type UserProgresDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProgres to delete
     */
    where?: UserProgresWhereInput
    /**
     * Limit how many UserProgres to delete.
     */
    limit?: number
  }

  /**
   * UserProgres without action
   */
  export type UserProgresDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProgres
     */
    select?: UserProgresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProgres
     */
    omit?: UserProgresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProgresInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    role: 'role',
    gmail: 'gmail',
    password: 'password',
    birth_date: 'birth_date',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ChapterScalarFieldEnum: {
    id: 'id',
    name: 'name',
    total_sub_chapter: 'total_sub_chapter',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ChapterScalarFieldEnum = (typeof ChapterScalarFieldEnum)[keyof typeof ChapterScalarFieldEnum]


  export const SubChapterScalarFieldEnum: {
    id: 'id',
    chapter_id: 'chapter_id',
    name: 'name',
    content: 'content',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type SubChapterScalarFieldEnum = (typeof SubChapterScalarFieldEnum)[keyof typeof SubChapterScalarFieldEnum]


  export const ChapterTakenScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    chapter_id: 'chapter_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ChapterTakenScalarFieldEnum = (typeof ChapterTakenScalarFieldEnum)[keyof typeof ChapterTakenScalarFieldEnum]


  export const AssessmentScalarFieldEnum: {
    id: 'id',
    chapter_taken_id: 'chapter_taken_id',
    sub_chapter_id: 'sub_chapter_id',
    title: 'title',
    type: 'type',
    correct_answer: 'correct_answer',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type AssessmentScalarFieldEnum = (typeof AssessmentScalarFieldEnum)[keyof typeof AssessmentScalarFieldEnum]


  export const AiReportScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    chapter_taken_id: 'chapter_taken_id',
    evaluation_text: 'evaluation_text',
    recomendation_list: 'recomendation_list',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type AiReportScalarFieldEnum = (typeof AiReportScalarFieldEnum)[keyof typeof AiReportScalarFieldEnum]


  export const PrerequisiteScalarFieldEnum: {
    id: 'id',
    chapter_id: 'chapter_id',
    prerequisite_chapter_id: 'prerequisite_chapter_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type PrerequisiteScalarFieldEnum = (typeof PrerequisiteScalarFieldEnum)[keyof typeof PrerequisiteScalarFieldEnum]


  export const QuestionScalarFieldEnum: {
    id: 'id',
    assessment_id: 'assessment_id',
    question: 'question',
    topic: 'topic',
    difficulty_level: 'difficulty_level',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type QuestionScalarFieldEnum = (typeof QuestionScalarFieldEnum)[keyof typeof QuestionScalarFieldEnum]


  export const UserAttemptScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    assessement_id: 'assessement_id',
    score: 'score',
    completed_at: 'completed_at',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UserAttemptScalarFieldEnum = (typeof UserAttemptScalarFieldEnum)[keyof typeof UserAttemptScalarFieldEnum]


  export const UserProgresScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    sub_chapter_id: 'sub_chapter_id',
    chapter_taken_id: 'chapter_taken_id',
    current_level: 'current_level',
    status: 'status',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UserProgresScalarFieldEnum = (typeof UserProgresScalarFieldEnum)[keyof typeof UserProgresScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const UserOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    gmail: 'gmail',
    password: 'password'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const ChapterOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type ChapterOrderByRelevanceFieldEnum = (typeof ChapterOrderByRelevanceFieldEnum)[keyof typeof ChapterOrderByRelevanceFieldEnum]


  export const SubChapterOrderByRelevanceFieldEnum: {
    id: 'id',
    chapter_id: 'chapter_id',
    name: 'name',
    content: 'content'
  };

  export type SubChapterOrderByRelevanceFieldEnum = (typeof SubChapterOrderByRelevanceFieldEnum)[keyof typeof SubChapterOrderByRelevanceFieldEnum]


  export const ChapterTakenOrderByRelevanceFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    chapter_id: 'chapter_id'
  };

  export type ChapterTakenOrderByRelevanceFieldEnum = (typeof ChapterTakenOrderByRelevanceFieldEnum)[keyof typeof ChapterTakenOrderByRelevanceFieldEnum]


  export const AssessmentOrderByRelevanceFieldEnum: {
    id: 'id',
    chapter_taken_id: 'chapter_taken_id',
    sub_chapter_id: 'sub_chapter_id',
    title: 'title'
  };

  export type AssessmentOrderByRelevanceFieldEnum = (typeof AssessmentOrderByRelevanceFieldEnum)[keyof typeof AssessmentOrderByRelevanceFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const AiReportOrderByRelevanceFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    chapter_taken_id: 'chapter_taken_id',
    evaluation_text: 'evaluation_text'
  };

  export type AiReportOrderByRelevanceFieldEnum = (typeof AiReportOrderByRelevanceFieldEnum)[keyof typeof AiReportOrderByRelevanceFieldEnum]


  export const PrerequisiteOrderByRelevanceFieldEnum: {
    id: 'id',
    chapter_id: 'chapter_id',
    prerequisite_chapter_id: 'prerequisite_chapter_id'
  };

  export type PrerequisiteOrderByRelevanceFieldEnum = (typeof PrerequisiteOrderByRelevanceFieldEnum)[keyof typeof PrerequisiteOrderByRelevanceFieldEnum]


  export const QuestionOrderByRelevanceFieldEnum: {
    id: 'id',
    assessment_id: 'assessment_id',
    question: 'question',
    topic: 'topic'
  };

  export type QuestionOrderByRelevanceFieldEnum = (typeof QuestionOrderByRelevanceFieldEnum)[keyof typeof QuestionOrderByRelevanceFieldEnum]


  export const UserAttemptOrderByRelevanceFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    assessement_id: 'assessement_id'
  };

  export type UserAttemptOrderByRelevanceFieldEnum = (typeof UserAttemptOrderByRelevanceFieldEnum)[keyof typeof UserAttemptOrderByRelevanceFieldEnum]


  export const UserProgresOrderByRelevanceFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    sub_chapter_id: 'sub_chapter_id',
    chapter_taken_id: 'chapter_taken_id'
  };

  export type UserProgresOrderByRelevanceFieldEnum = (typeof UserProgresOrderByRelevanceFieldEnum)[keyof typeof UserProgresOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'AssessmentType'
   */
  export type EnumAssessmentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AssessmentType'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'DifficultyLevel'
   */
  export type EnumDifficultyLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DifficultyLevel'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'CurrentLevel'
   */
  export type EnumCurrentLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CurrentLevel'>
    


  /**
   * Reference to a field of type 'ProgressStatus'
   */
  export type EnumProgressStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProgressStatus'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    gmail?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    birth_date?: DateTimeFilter<"User"> | Date | string
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    ai_reports?: AiReportListRelationFilter
    chapter_taken?: ChapterTakenListRelationFilter
    user_attempts?: UserAttemptListRelationFilter
    user_progres?: UserProgresListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    role?: SortOrder
    gmail?: SortOrder
    password?: SortOrder
    birth_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    ai_reports?: AiReportOrderByRelationAggregateInput
    chapter_taken?: ChapterTakenOrderByRelationAggregateInput
    user_attempts?: UserAttemptOrderByRelationAggregateInput
    user_progres?: UserProgresOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    gmail?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    birth_date?: DateTimeFilter<"User"> | Date | string
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    ai_reports?: AiReportListRelationFilter
    chapter_taken?: ChapterTakenListRelationFilter
    user_attempts?: UserAttemptListRelationFilter
    user_progres?: UserProgresListRelationFilter
  }, "id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    role?: SortOrder
    gmail?: SortOrder
    password?: SortOrder
    birth_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    gmail?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    birth_date?: DateTimeWithAggregatesFilter<"User"> | Date | string
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ChapterWhereInput = {
    AND?: ChapterWhereInput | ChapterWhereInput[]
    OR?: ChapterWhereInput[]
    NOT?: ChapterWhereInput | ChapterWhereInput[]
    id?: StringFilter<"Chapter"> | string
    name?: StringFilter<"Chapter"> | string
    total_sub_chapter?: IntFilter<"Chapter"> | number
    created_at?: DateTimeFilter<"Chapter"> | Date | string
    updated_at?: DateTimeFilter<"Chapter"> | Date | string
    chapter_taken?: ChapterTakenListRelationFilter
    prerequisites_base?: PrerequisiteListRelationFilter
    prerequisites_requirement?: PrerequisiteListRelationFilter
    sub_chapters?: SubChapterListRelationFilter
  }

  export type ChapterOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    total_sub_chapter?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    chapter_taken?: ChapterTakenOrderByRelationAggregateInput
    prerequisites_base?: PrerequisiteOrderByRelationAggregateInput
    prerequisites_requirement?: PrerequisiteOrderByRelationAggregateInput
    sub_chapters?: SubChapterOrderByRelationAggregateInput
    _relevance?: ChapterOrderByRelevanceInput
  }

  export type ChapterWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChapterWhereInput | ChapterWhereInput[]
    OR?: ChapterWhereInput[]
    NOT?: ChapterWhereInput | ChapterWhereInput[]
    name?: StringFilter<"Chapter"> | string
    total_sub_chapter?: IntFilter<"Chapter"> | number
    created_at?: DateTimeFilter<"Chapter"> | Date | string
    updated_at?: DateTimeFilter<"Chapter"> | Date | string
    chapter_taken?: ChapterTakenListRelationFilter
    prerequisites_base?: PrerequisiteListRelationFilter
    prerequisites_requirement?: PrerequisiteListRelationFilter
    sub_chapters?: SubChapterListRelationFilter
  }, "id">

  export type ChapterOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    total_sub_chapter?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: ChapterCountOrderByAggregateInput
    _avg?: ChapterAvgOrderByAggregateInput
    _max?: ChapterMaxOrderByAggregateInput
    _min?: ChapterMinOrderByAggregateInput
    _sum?: ChapterSumOrderByAggregateInput
  }

  export type ChapterScalarWhereWithAggregatesInput = {
    AND?: ChapterScalarWhereWithAggregatesInput | ChapterScalarWhereWithAggregatesInput[]
    OR?: ChapterScalarWhereWithAggregatesInput[]
    NOT?: ChapterScalarWhereWithAggregatesInput | ChapterScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Chapter"> | string
    name?: StringWithAggregatesFilter<"Chapter"> | string
    total_sub_chapter?: IntWithAggregatesFilter<"Chapter"> | number
    created_at?: DateTimeWithAggregatesFilter<"Chapter"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Chapter"> | Date | string
  }

  export type SubChapterWhereInput = {
    AND?: SubChapterWhereInput | SubChapterWhereInput[]
    OR?: SubChapterWhereInput[]
    NOT?: SubChapterWhereInput | SubChapterWhereInput[]
    id?: StringFilter<"SubChapter"> | string
    chapter_id?: StringFilter<"SubChapter"> | string
    name?: StringFilter<"SubChapter"> | string
    content?: StringFilter<"SubChapter"> | string
    created_at?: DateTimeFilter<"SubChapter"> | Date | string
    updated_at?: DateTimeFilter<"SubChapter"> | Date | string
    chapter?: XOR<ChapterScalarRelationFilter, ChapterWhereInput>
    assessments?: AssessmentListRelationFilter
    user_progres?: UserProgresListRelationFilter
  }

  export type SubChapterOrderByWithRelationInput = {
    id?: SortOrder
    chapter_id?: SortOrder
    name?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    chapter?: ChapterOrderByWithRelationInput
    assessments?: AssessmentOrderByRelationAggregateInput
    user_progres?: UserProgresOrderByRelationAggregateInput
    _relevance?: SubChapterOrderByRelevanceInput
  }

  export type SubChapterWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SubChapterWhereInput | SubChapterWhereInput[]
    OR?: SubChapterWhereInput[]
    NOT?: SubChapterWhereInput | SubChapterWhereInput[]
    chapter_id?: StringFilter<"SubChapter"> | string
    name?: StringFilter<"SubChapter"> | string
    content?: StringFilter<"SubChapter"> | string
    created_at?: DateTimeFilter<"SubChapter"> | Date | string
    updated_at?: DateTimeFilter<"SubChapter"> | Date | string
    chapter?: XOR<ChapterScalarRelationFilter, ChapterWhereInput>
    assessments?: AssessmentListRelationFilter
    user_progres?: UserProgresListRelationFilter
  }, "id">

  export type SubChapterOrderByWithAggregationInput = {
    id?: SortOrder
    chapter_id?: SortOrder
    name?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: SubChapterCountOrderByAggregateInput
    _max?: SubChapterMaxOrderByAggregateInput
    _min?: SubChapterMinOrderByAggregateInput
  }

  export type SubChapterScalarWhereWithAggregatesInput = {
    AND?: SubChapterScalarWhereWithAggregatesInput | SubChapterScalarWhereWithAggregatesInput[]
    OR?: SubChapterScalarWhereWithAggregatesInput[]
    NOT?: SubChapterScalarWhereWithAggregatesInput | SubChapterScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SubChapter"> | string
    chapter_id?: StringWithAggregatesFilter<"SubChapter"> | string
    name?: StringWithAggregatesFilter<"SubChapter"> | string
    content?: StringWithAggregatesFilter<"SubChapter"> | string
    created_at?: DateTimeWithAggregatesFilter<"SubChapter"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"SubChapter"> | Date | string
  }

  export type ChapterTakenWhereInput = {
    AND?: ChapterTakenWhereInput | ChapterTakenWhereInput[]
    OR?: ChapterTakenWhereInput[]
    NOT?: ChapterTakenWhereInput | ChapterTakenWhereInput[]
    id?: StringFilter<"ChapterTaken"> | string
    user_id?: StringFilter<"ChapterTaken"> | string
    chapter_id?: StringFilter<"ChapterTaken"> | string
    created_at?: DateTimeFilter<"ChapterTaken"> | Date | string
    updated_at?: DateTimeFilter<"ChapterTaken"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    chapter?: XOR<ChapterScalarRelationFilter, ChapterWhereInput>
    ai_reports?: AiReportListRelationFilter
    assessments?: AssessmentListRelationFilter
    user_progres?: UserProgresListRelationFilter
  }

  export type ChapterTakenOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    chapter_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user?: UserOrderByWithRelationInput
    chapter?: ChapterOrderByWithRelationInput
    ai_reports?: AiReportOrderByRelationAggregateInput
    assessments?: AssessmentOrderByRelationAggregateInput
    user_progres?: UserProgresOrderByRelationAggregateInput
    _relevance?: ChapterTakenOrderByRelevanceInput
  }

  export type ChapterTakenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChapterTakenWhereInput | ChapterTakenWhereInput[]
    OR?: ChapterTakenWhereInput[]
    NOT?: ChapterTakenWhereInput | ChapterTakenWhereInput[]
    user_id?: StringFilter<"ChapterTaken"> | string
    chapter_id?: StringFilter<"ChapterTaken"> | string
    created_at?: DateTimeFilter<"ChapterTaken"> | Date | string
    updated_at?: DateTimeFilter<"ChapterTaken"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    chapter?: XOR<ChapterScalarRelationFilter, ChapterWhereInput>
    ai_reports?: AiReportListRelationFilter
    assessments?: AssessmentListRelationFilter
    user_progres?: UserProgresListRelationFilter
  }, "id">

  export type ChapterTakenOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    chapter_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: ChapterTakenCountOrderByAggregateInput
    _max?: ChapterTakenMaxOrderByAggregateInput
    _min?: ChapterTakenMinOrderByAggregateInput
  }

  export type ChapterTakenScalarWhereWithAggregatesInput = {
    AND?: ChapterTakenScalarWhereWithAggregatesInput | ChapterTakenScalarWhereWithAggregatesInput[]
    OR?: ChapterTakenScalarWhereWithAggregatesInput[]
    NOT?: ChapterTakenScalarWhereWithAggregatesInput | ChapterTakenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ChapterTaken"> | string
    user_id?: StringWithAggregatesFilter<"ChapterTaken"> | string
    chapter_id?: StringWithAggregatesFilter<"ChapterTaken"> | string
    created_at?: DateTimeWithAggregatesFilter<"ChapterTaken"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"ChapterTaken"> | Date | string
  }

  export type AssessmentWhereInput = {
    AND?: AssessmentWhereInput | AssessmentWhereInput[]
    OR?: AssessmentWhereInput[]
    NOT?: AssessmentWhereInput | AssessmentWhereInput[]
    id?: StringFilter<"Assessment"> | string
    chapter_taken_id?: StringFilter<"Assessment"> | string
    sub_chapter_id?: StringFilter<"Assessment"> | string
    title?: StringFilter<"Assessment"> | string
    type?: EnumAssessmentTypeFilter<"Assessment"> | $Enums.AssessmentType
    correct_answer?: IntFilter<"Assessment"> | number
    created_at?: DateTimeFilter<"Assessment"> | Date | string
    updated_at?: DateTimeFilter<"Assessment"> | Date | string
    chapter_taken?: XOR<ChapterTakenScalarRelationFilter, ChapterTakenWhereInput>
    sub_chapter?: XOR<SubChapterScalarRelationFilter, SubChapterWhereInput>
    questions?: QuestionListRelationFilter
    user_attempts?: UserAttemptListRelationFilter
  }

  export type AssessmentOrderByWithRelationInput = {
    id?: SortOrder
    chapter_taken_id?: SortOrder
    sub_chapter_id?: SortOrder
    title?: SortOrder
    type?: SortOrder
    correct_answer?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    chapter_taken?: ChapterTakenOrderByWithRelationInput
    sub_chapter?: SubChapterOrderByWithRelationInput
    questions?: QuestionOrderByRelationAggregateInput
    user_attempts?: UserAttemptOrderByRelationAggregateInput
    _relevance?: AssessmentOrderByRelevanceInput
  }

  export type AssessmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AssessmentWhereInput | AssessmentWhereInput[]
    OR?: AssessmentWhereInput[]
    NOT?: AssessmentWhereInput | AssessmentWhereInput[]
    chapter_taken_id?: StringFilter<"Assessment"> | string
    sub_chapter_id?: StringFilter<"Assessment"> | string
    title?: StringFilter<"Assessment"> | string
    type?: EnumAssessmentTypeFilter<"Assessment"> | $Enums.AssessmentType
    correct_answer?: IntFilter<"Assessment"> | number
    created_at?: DateTimeFilter<"Assessment"> | Date | string
    updated_at?: DateTimeFilter<"Assessment"> | Date | string
    chapter_taken?: XOR<ChapterTakenScalarRelationFilter, ChapterTakenWhereInput>
    sub_chapter?: XOR<SubChapterScalarRelationFilter, SubChapterWhereInput>
    questions?: QuestionListRelationFilter
    user_attempts?: UserAttemptListRelationFilter
  }, "id">

  export type AssessmentOrderByWithAggregationInput = {
    id?: SortOrder
    chapter_taken_id?: SortOrder
    sub_chapter_id?: SortOrder
    title?: SortOrder
    type?: SortOrder
    correct_answer?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: AssessmentCountOrderByAggregateInput
    _avg?: AssessmentAvgOrderByAggregateInput
    _max?: AssessmentMaxOrderByAggregateInput
    _min?: AssessmentMinOrderByAggregateInput
    _sum?: AssessmentSumOrderByAggregateInput
  }

  export type AssessmentScalarWhereWithAggregatesInput = {
    AND?: AssessmentScalarWhereWithAggregatesInput | AssessmentScalarWhereWithAggregatesInput[]
    OR?: AssessmentScalarWhereWithAggregatesInput[]
    NOT?: AssessmentScalarWhereWithAggregatesInput | AssessmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Assessment"> | string
    chapter_taken_id?: StringWithAggregatesFilter<"Assessment"> | string
    sub_chapter_id?: StringWithAggregatesFilter<"Assessment"> | string
    title?: StringWithAggregatesFilter<"Assessment"> | string
    type?: EnumAssessmentTypeWithAggregatesFilter<"Assessment"> | $Enums.AssessmentType
    correct_answer?: IntWithAggregatesFilter<"Assessment"> | number
    created_at?: DateTimeWithAggregatesFilter<"Assessment"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Assessment"> | Date | string
  }

  export type AiReportWhereInput = {
    AND?: AiReportWhereInput | AiReportWhereInput[]
    OR?: AiReportWhereInput[]
    NOT?: AiReportWhereInput | AiReportWhereInput[]
    id?: StringFilter<"AiReport"> | string
    user_id?: StringFilter<"AiReport"> | string
    chapter_taken_id?: StringFilter<"AiReport"> | string
    evaluation_text?: StringFilter<"AiReport"> | string
    recomendation_list?: JsonFilter<"AiReport">
    created_at?: DateTimeFilter<"AiReport"> | Date | string
    updated_at?: DateTimeFilter<"AiReport"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    chapter_taken?: XOR<ChapterTakenScalarRelationFilter, ChapterTakenWhereInput>
  }

  export type AiReportOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    chapter_taken_id?: SortOrder
    evaluation_text?: SortOrder
    recomendation_list?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user?: UserOrderByWithRelationInput
    chapter_taken?: ChapterTakenOrderByWithRelationInput
    _relevance?: AiReportOrderByRelevanceInput
  }

  export type AiReportWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AiReportWhereInput | AiReportWhereInput[]
    OR?: AiReportWhereInput[]
    NOT?: AiReportWhereInput | AiReportWhereInput[]
    user_id?: StringFilter<"AiReport"> | string
    chapter_taken_id?: StringFilter<"AiReport"> | string
    evaluation_text?: StringFilter<"AiReport"> | string
    recomendation_list?: JsonFilter<"AiReport">
    created_at?: DateTimeFilter<"AiReport"> | Date | string
    updated_at?: DateTimeFilter<"AiReport"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    chapter_taken?: XOR<ChapterTakenScalarRelationFilter, ChapterTakenWhereInput>
  }, "id">

  export type AiReportOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    chapter_taken_id?: SortOrder
    evaluation_text?: SortOrder
    recomendation_list?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: AiReportCountOrderByAggregateInput
    _max?: AiReportMaxOrderByAggregateInput
    _min?: AiReportMinOrderByAggregateInput
  }

  export type AiReportScalarWhereWithAggregatesInput = {
    AND?: AiReportScalarWhereWithAggregatesInput | AiReportScalarWhereWithAggregatesInput[]
    OR?: AiReportScalarWhereWithAggregatesInput[]
    NOT?: AiReportScalarWhereWithAggregatesInput | AiReportScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AiReport"> | string
    user_id?: StringWithAggregatesFilter<"AiReport"> | string
    chapter_taken_id?: StringWithAggregatesFilter<"AiReport"> | string
    evaluation_text?: StringWithAggregatesFilter<"AiReport"> | string
    recomendation_list?: JsonWithAggregatesFilter<"AiReport">
    created_at?: DateTimeWithAggregatesFilter<"AiReport"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"AiReport"> | Date | string
  }

  export type PrerequisiteWhereInput = {
    AND?: PrerequisiteWhereInput | PrerequisiteWhereInput[]
    OR?: PrerequisiteWhereInput[]
    NOT?: PrerequisiteWhereInput | PrerequisiteWhereInput[]
    id?: StringFilter<"Prerequisite"> | string
    chapter_id?: StringFilter<"Prerequisite"> | string
    prerequisite_chapter_id?: StringFilter<"Prerequisite"> | string
    created_at?: DateTimeFilter<"Prerequisite"> | Date | string
    updated_at?: DateTimeFilter<"Prerequisite"> | Date | string
    chapter?: XOR<ChapterScalarRelationFilter, ChapterWhereInput>
    prerequisite_chapter?: XOR<ChapterScalarRelationFilter, ChapterWhereInput>
  }

  export type PrerequisiteOrderByWithRelationInput = {
    id?: SortOrder
    chapter_id?: SortOrder
    prerequisite_chapter_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    chapter?: ChapterOrderByWithRelationInput
    prerequisite_chapter?: ChapterOrderByWithRelationInput
    _relevance?: PrerequisiteOrderByRelevanceInput
  }

  export type PrerequisiteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PrerequisiteWhereInput | PrerequisiteWhereInput[]
    OR?: PrerequisiteWhereInput[]
    NOT?: PrerequisiteWhereInput | PrerequisiteWhereInput[]
    chapter_id?: StringFilter<"Prerequisite"> | string
    prerequisite_chapter_id?: StringFilter<"Prerequisite"> | string
    created_at?: DateTimeFilter<"Prerequisite"> | Date | string
    updated_at?: DateTimeFilter<"Prerequisite"> | Date | string
    chapter?: XOR<ChapterScalarRelationFilter, ChapterWhereInput>
    prerequisite_chapter?: XOR<ChapterScalarRelationFilter, ChapterWhereInput>
  }, "id">

  export type PrerequisiteOrderByWithAggregationInput = {
    id?: SortOrder
    chapter_id?: SortOrder
    prerequisite_chapter_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: PrerequisiteCountOrderByAggregateInput
    _max?: PrerequisiteMaxOrderByAggregateInput
    _min?: PrerequisiteMinOrderByAggregateInput
  }

  export type PrerequisiteScalarWhereWithAggregatesInput = {
    AND?: PrerequisiteScalarWhereWithAggregatesInput | PrerequisiteScalarWhereWithAggregatesInput[]
    OR?: PrerequisiteScalarWhereWithAggregatesInput[]
    NOT?: PrerequisiteScalarWhereWithAggregatesInput | PrerequisiteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Prerequisite"> | string
    chapter_id?: StringWithAggregatesFilter<"Prerequisite"> | string
    prerequisite_chapter_id?: StringWithAggregatesFilter<"Prerequisite"> | string
    created_at?: DateTimeWithAggregatesFilter<"Prerequisite"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Prerequisite"> | Date | string
  }

  export type QuestionWhereInput = {
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    id?: StringFilter<"Question"> | string
    assessment_id?: StringFilter<"Question"> | string
    question?: StringFilter<"Question"> | string
    topic?: StringFilter<"Question"> | string
    difficulty_level?: EnumDifficultyLevelFilter<"Question"> | $Enums.DifficultyLevel
    created_at?: DateTimeFilter<"Question"> | Date | string
    updated_at?: DateTimeFilter<"Question"> | Date | string
    assessment?: XOR<AssessmentScalarRelationFilter, AssessmentWhereInput>
  }

  export type QuestionOrderByWithRelationInput = {
    id?: SortOrder
    assessment_id?: SortOrder
    question?: SortOrder
    topic?: SortOrder
    difficulty_level?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    assessment?: AssessmentOrderByWithRelationInput
    _relevance?: QuestionOrderByRelevanceInput
  }

  export type QuestionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    assessment_id?: StringFilter<"Question"> | string
    question?: StringFilter<"Question"> | string
    topic?: StringFilter<"Question"> | string
    difficulty_level?: EnumDifficultyLevelFilter<"Question"> | $Enums.DifficultyLevel
    created_at?: DateTimeFilter<"Question"> | Date | string
    updated_at?: DateTimeFilter<"Question"> | Date | string
    assessment?: XOR<AssessmentScalarRelationFilter, AssessmentWhereInput>
  }, "id">

  export type QuestionOrderByWithAggregationInput = {
    id?: SortOrder
    assessment_id?: SortOrder
    question?: SortOrder
    topic?: SortOrder
    difficulty_level?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: QuestionCountOrderByAggregateInput
    _max?: QuestionMaxOrderByAggregateInput
    _min?: QuestionMinOrderByAggregateInput
  }

  export type QuestionScalarWhereWithAggregatesInput = {
    AND?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    OR?: QuestionScalarWhereWithAggregatesInput[]
    NOT?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Question"> | string
    assessment_id?: StringWithAggregatesFilter<"Question"> | string
    question?: StringWithAggregatesFilter<"Question"> | string
    topic?: StringWithAggregatesFilter<"Question"> | string
    difficulty_level?: EnumDifficultyLevelWithAggregatesFilter<"Question"> | $Enums.DifficultyLevel
    created_at?: DateTimeWithAggregatesFilter<"Question"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Question"> | Date | string
  }

  export type UserAttemptWhereInput = {
    AND?: UserAttemptWhereInput | UserAttemptWhereInput[]
    OR?: UserAttemptWhereInput[]
    NOT?: UserAttemptWhereInput | UserAttemptWhereInput[]
    id?: StringFilter<"UserAttempt"> | string
    user_id?: StringFilter<"UserAttempt"> | string
    assessement_id?: StringFilter<"UserAttempt"> | string
    score?: FloatFilter<"UserAttempt"> | number
    completed_at?: DateTimeFilter<"UserAttempt"> | Date | string
    created_at?: DateTimeFilter<"UserAttempt"> | Date | string
    updated_at?: DateTimeFilter<"UserAttempt"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    assessment?: XOR<AssessmentScalarRelationFilter, AssessmentWhereInput>
  }

  export type UserAttemptOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    assessement_id?: SortOrder
    score?: SortOrder
    completed_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user?: UserOrderByWithRelationInput
    assessment?: AssessmentOrderByWithRelationInput
    _relevance?: UserAttemptOrderByRelevanceInput
  }

  export type UserAttemptWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserAttemptWhereInput | UserAttemptWhereInput[]
    OR?: UserAttemptWhereInput[]
    NOT?: UserAttemptWhereInput | UserAttemptWhereInput[]
    user_id?: StringFilter<"UserAttempt"> | string
    assessement_id?: StringFilter<"UserAttempt"> | string
    score?: FloatFilter<"UserAttempt"> | number
    completed_at?: DateTimeFilter<"UserAttempt"> | Date | string
    created_at?: DateTimeFilter<"UserAttempt"> | Date | string
    updated_at?: DateTimeFilter<"UserAttempt"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    assessment?: XOR<AssessmentScalarRelationFilter, AssessmentWhereInput>
  }, "id">

  export type UserAttemptOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    assessement_id?: SortOrder
    score?: SortOrder
    completed_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: UserAttemptCountOrderByAggregateInput
    _avg?: UserAttemptAvgOrderByAggregateInput
    _max?: UserAttemptMaxOrderByAggregateInput
    _min?: UserAttemptMinOrderByAggregateInput
    _sum?: UserAttemptSumOrderByAggregateInput
  }

  export type UserAttemptScalarWhereWithAggregatesInput = {
    AND?: UserAttemptScalarWhereWithAggregatesInput | UserAttemptScalarWhereWithAggregatesInput[]
    OR?: UserAttemptScalarWhereWithAggregatesInput[]
    NOT?: UserAttemptScalarWhereWithAggregatesInput | UserAttemptScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserAttempt"> | string
    user_id?: StringWithAggregatesFilter<"UserAttempt"> | string
    assessement_id?: StringWithAggregatesFilter<"UserAttempt"> | string
    score?: FloatWithAggregatesFilter<"UserAttempt"> | number
    completed_at?: DateTimeWithAggregatesFilter<"UserAttempt"> | Date | string
    created_at?: DateTimeWithAggregatesFilter<"UserAttempt"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"UserAttempt"> | Date | string
  }

  export type UserProgresWhereInput = {
    AND?: UserProgresWhereInput | UserProgresWhereInput[]
    OR?: UserProgresWhereInput[]
    NOT?: UserProgresWhereInput | UserProgresWhereInput[]
    id?: StringFilter<"UserProgres"> | string
    user_id?: StringFilter<"UserProgres"> | string
    sub_chapter_id?: StringFilter<"UserProgres"> | string
    chapter_taken_id?: StringFilter<"UserProgres"> | string
    current_level?: EnumCurrentLevelFilter<"UserProgres"> | $Enums.CurrentLevel
    status?: EnumProgressStatusFilter<"UserProgres"> | $Enums.ProgressStatus
    created_at?: DateTimeFilter<"UserProgres"> | Date | string
    updated_at?: DateTimeFilter<"UserProgres"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    sub_chapter?: XOR<SubChapterScalarRelationFilter, SubChapterWhereInput>
    chapter_taken?: XOR<ChapterTakenScalarRelationFilter, ChapterTakenWhereInput>
  }

  export type UserProgresOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    sub_chapter_id?: SortOrder
    chapter_taken_id?: SortOrder
    current_level?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user?: UserOrderByWithRelationInput
    sub_chapter?: SubChapterOrderByWithRelationInput
    chapter_taken?: ChapterTakenOrderByWithRelationInput
    _relevance?: UserProgresOrderByRelevanceInput
  }

  export type UserProgresWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserProgresWhereInput | UserProgresWhereInput[]
    OR?: UserProgresWhereInput[]
    NOT?: UserProgresWhereInput | UserProgresWhereInput[]
    user_id?: StringFilter<"UserProgres"> | string
    sub_chapter_id?: StringFilter<"UserProgres"> | string
    chapter_taken_id?: StringFilter<"UserProgres"> | string
    current_level?: EnumCurrentLevelFilter<"UserProgres"> | $Enums.CurrentLevel
    status?: EnumProgressStatusFilter<"UserProgres"> | $Enums.ProgressStatus
    created_at?: DateTimeFilter<"UserProgres"> | Date | string
    updated_at?: DateTimeFilter<"UserProgres"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    sub_chapter?: XOR<SubChapterScalarRelationFilter, SubChapterWhereInput>
    chapter_taken?: XOR<ChapterTakenScalarRelationFilter, ChapterTakenWhereInput>
  }, "id">

  export type UserProgresOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    sub_chapter_id?: SortOrder
    chapter_taken_id?: SortOrder
    current_level?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: UserProgresCountOrderByAggregateInput
    _max?: UserProgresMaxOrderByAggregateInput
    _min?: UserProgresMinOrderByAggregateInput
  }

  export type UserProgresScalarWhereWithAggregatesInput = {
    AND?: UserProgresScalarWhereWithAggregatesInput | UserProgresScalarWhereWithAggregatesInput[]
    OR?: UserProgresScalarWhereWithAggregatesInput[]
    NOT?: UserProgresScalarWhereWithAggregatesInput | UserProgresScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserProgres"> | string
    user_id?: StringWithAggregatesFilter<"UserProgres"> | string
    sub_chapter_id?: StringWithAggregatesFilter<"UserProgres"> | string
    chapter_taken_id?: StringWithAggregatesFilter<"UserProgres"> | string
    current_level?: EnumCurrentLevelWithAggregatesFilter<"UserProgres"> | $Enums.CurrentLevel
    status?: EnumProgressStatusWithAggregatesFilter<"UserProgres"> | $Enums.ProgressStatus
    created_at?: DateTimeWithAggregatesFilter<"UserProgres"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"UserProgres"> | Date | string
  }

  export type UserCreateInput = {
    id: string
    name: string
    role: $Enums.Role
    gmail: string
    password: string
    birth_date: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    ai_reports?: AiReportCreateNestedManyWithoutUserInput
    chapter_taken?: ChapterTakenCreateNestedManyWithoutUserInput
    user_attempts?: UserAttemptCreateNestedManyWithoutUserInput
    user_progres?: UserProgresCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id: string
    name: string
    role: $Enums.Role
    gmail: string
    password: string
    birth_date: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    ai_reports?: AiReportUncheckedCreateNestedManyWithoutUserInput
    chapter_taken?: ChapterTakenUncheckedCreateNestedManyWithoutUserInput
    user_attempts?: UserAttemptUncheckedCreateNestedManyWithoutUserInput
    user_progres?: UserProgresUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    gmail?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ai_reports?: AiReportUpdateManyWithoutUserNestedInput
    chapter_taken?: ChapterTakenUpdateManyWithoutUserNestedInput
    user_attempts?: UserAttemptUpdateManyWithoutUserNestedInput
    user_progres?: UserProgresUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    gmail?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ai_reports?: AiReportUncheckedUpdateManyWithoutUserNestedInput
    chapter_taken?: ChapterTakenUncheckedUpdateManyWithoutUserNestedInput
    user_attempts?: UserAttemptUncheckedUpdateManyWithoutUserNestedInput
    user_progres?: UserProgresUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id: string
    name: string
    role: $Enums.Role
    gmail: string
    password: string
    birth_date: Date | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    gmail?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    gmail?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChapterCreateInput = {
    id: string
    name: string
    total_sub_chapter: number
    created_at?: Date | string
    updated_at?: Date | string
    chapter_taken?: ChapterTakenCreateNestedManyWithoutChapterInput
    prerequisites_base?: PrerequisiteCreateNestedManyWithoutChapterInput
    prerequisites_requirement?: PrerequisiteCreateNestedManyWithoutPrerequisite_chapterInput
    sub_chapters?: SubChapterCreateNestedManyWithoutChapterInput
  }

  export type ChapterUncheckedCreateInput = {
    id: string
    name: string
    total_sub_chapter: number
    created_at?: Date | string
    updated_at?: Date | string
    chapter_taken?: ChapterTakenUncheckedCreateNestedManyWithoutChapterInput
    prerequisites_base?: PrerequisiteUncheckedCreateNestedManyWithoutChapterInput
    prerequisites_requirement?: PrerequisiteUncheckedCreateNestedManyWithoutPrerequisite_chapterInput
    sub_chapters?: SubChapterUncheckedCreateNestedManyWithoutChapterInput
  }

  export type ChapterUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    total_sub_chapter?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    chapter_taken?: ChapterTakenUpdateManyWithoutChapterNestedInput
    prerequisites_base?: PrerequisiteUpdateManyWithoutChapterNestedInput
    prerequisites_requirement?: PrerequisiteUpdateManyWithoutPrerequisite_chapterNestedInput
    sub_chapters?: SubChapterUpdateManyWithoutChapterNestedInput
  }

  export type ChapterUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    total_sub_chapter?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    chapter_taken?: ChapterTakenUncheckedUpdateManyWithoutChapterNestedInput
    prerequisites_base?: PrerequisiteUncheckedUpdateManyWithoutChapterNestedInput
    prerequisites_requirement?: PrerequisiteUncheckedUpdateManyWithoutPrerequisite_chapterNestedInput
    sub_chapters?: SubChapterUncheckedUpdateManyWithoutChapterNestedInput
  }

  export type ChapterCreateManyInput = {
    id: string
    name: string
    total_sub_chapter: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ChapterUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    total_sub_chapter?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChapterUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    total_sub_chapter?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubChapterCreateInput = {
    id: string
    name: string
    content: string
    created_at?: Date | string
    updated_at?: Date | string
    chapter: ChapterCreateNestedOneWithoutSub_chaptersInput
    assessments?: AssessmentCreateNestedManyWithoutSub_chapterInput
    user_progres?: UserProgresCreateNestedManyWithoutSub_chapterInput
  }

  export type SubChapterUncheckedCreateInput = {
    id: string
    chapter_id: string
    name: string
    content: string
    created_at?: Date | string
    updated_at?: Date | string
    assessments?: AssessmentUncheckedCreateNestedManyWithoutSub_chapterInput
    user_progres?: UserProgresUncheckedCreateNestedManyWithoutSub_chapterInput
  }

  export type SubChapterUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    chapter?: ChapterUpdateOneRequiredWithoutSub_chaptersNestedInput
    assessments?: AssessmentUpdateManyWithoutSub_chapterNestedInput
    user_progres?: UserProgresUpdateManyWithoutSub_chapterNestedInput
  }

  export type SubChapterUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    chapter_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    assessments?: AssessmentUncheckedUpdateManyWithoutSub_chapterNestedInput
    user_progres?: UserProgresUncheckedUpdateManyWithoutSub_chapterNestedInput
  }

  export type SubChapterCreateManyInput = {
    id: string
    chapter_id: string
    name: string
    content: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type SubChapterUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubChapterUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    chapter_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChapterTakenCreateInput = {
    id: string
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutChapter_takenInput
    chapter: ChapterCreateNestedOneWithoutChapter_takenInput
    ai_reports?: AiReportCreateNestedManyWithoutChapter_takenInput
    assessments?: AssessmentCreateNestedManyWithoutChapter_takenInput
    user_progres?: UserProgresCreateNestedManyWithoutChapter_takenInput
  }

  export type ChapterTakenUncheckedCreateInput = {
    id: string
    user_id: string
    chapter_id: string
    created_at?: Date | string
    updated_at?: Date | string
    ai_reports?: AiReportUncheckedCreateNestedManyWithoutChapter_takenInput
    assessments?: AssessmentUncheckedCreateNestedManyWithoutChapter_takenInput
    user_progres?: UserProgresUncheckedCreateNestedManyWithoutChapter_takenInput
  }

  export type ChapterTakenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutChapter_takenNestedInput
    chapter?: ChapterUpdateOneRequiredWithoutChapter_takenNestedInput
    ai_reports?: AiReportUpdateManyWithoutChapter_takenNestedInput
    assessments?: AssessmentUpdateManyWithoutChapter_takenNestedInput
    user_progres?: UserProgresUpdateManyWithoutChapter_takenNestedInput
  }

  export type ChapterTakenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    chapter_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ai_reports?: AiReportUncheckedUpdateManyWithoutChapter_takenNestedInput
    assessments?: AssessmentUncheckedUpdateManyWithoutChapter_takenNestedInput
    user_progres?: UserProgresUncheckedUpdateManyWithoutChapter_takenNestedInput
  }

  export type ChapterTakenCreateManyInput = {
    id: string
    user_id: string
    chapter_id: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ChapterTakenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChapterTakenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    chapter_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssessmentCreateInput = {
    id: string
    title: string
    type: $Enums.AssessmentType
    correct_answer: number
    created_at?: Date | string
    updated_at?: Date | string
    chapter_taken: ChapterTakenCreateNestedOneWithoutAssessmentsInput
    sub_chapter: SubChapterCreateNestedOneWithoutAssessmentsInput
    questions?: QuestionCreateNestedManyWithoutAssessmentInput
    user_attempts?: UserAttemptCreateNestedManyWithoutAssessmentInput
  }

  export type AssessmentUncheckedCreateInput = {
    id: string
    chapter_taken_id: string
    sub_chapter_id: string
    title: string
    type: $Enums.AssessmentType
    correct_answer: number
    created_at?: Date | string
    updated_at?: Date | string
    questions?: QuestionUncheckedCreateNestedManyWithoutAssessmentInput
    user_attempts?: UserAttemptUncheckedCreateNestedManyWithoutAssessmentInput
  }

  export type AssessmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: EnumAssessmentTypeFieldUpdateOperationsInput | $Enums.AssessmentType
    correct_answer?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    chapter_taken?: ChapterTakenUpdateOneRequiredWithoutAssessmentsNestedInput
    sub_chapter?: SubChapterUpdateOneRequiredWithoutAssessmentsNestedInput
    questions?: QuestionUpdateManyWithoutAssessmentNestedInput
    user_attempts?: UserAttemptUpdateManyWithoutAssessmentNestedInput
  }

  export type AssessmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    chapter_taken_id?: StringFieldUpdateOperationsInput | string
    sub_chapter_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: EnumAssessmentTypeFieldUpdateOperationsInput | $Enums.AssessmentType
    correct_answer?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUncheckedUpdateManyWithoutAssessmentNestedInput
    user_attempts?: UserAttemptUncheckedUpdateManyWithoutAssessmentNestedInput
  }

  export type AssessmentCreateManyInput = {
    id: string
    chapter_taken_id: string
    sub_chapter_id: string
    title: string
    type: $Enums.AssessmentType
    correct_answer: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type AssessmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: EnumAssessmentTypeFieldUpdateOperationsInput | $Enums.AssessmentType
    correct_answer?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssessmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    chapter_taken_id?: StringFieldUpdateOperationsInput | string
    sub_chapter_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: EnumAssessmentTypeFieldUpdateOperationsInput | $Enums.AssessmentType
    correct_answer?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiReportCreateInput = {
    id: string
    evaluation_text: string
    recomendation_list: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutAi_reportsInput
    chapter_taken: ChapterTakenCreateNestedOneWithoutAi_reportsInput
  }

  export type AiReportUncheckedCreateInput = {
    id: string
    user_id: string
    chapter_taken_id: string
    evaluation_text: string
    recomendation_list: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type AiReportUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    evaluation_text?: StringFieldUpdateOperationsInput | string
    recomendation_list?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAi_reportsNestedInput
    chapter_taken?: ChapterTakenUpdateOneRequiredWithoutAi_reportsNestedInput
  }

  export type AiReportUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    chapter_taken_id?: StringFieldUpdateOperationsInput | string
    evaluation_text?: StringFieldUpdateOperationsInput | string
    recomendation_list?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiReportCreateManyInput = {
    id: string
    user_id: string
    chapter_taken_id: string
    evaluation_text: string
    recomendation_list: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type AiReportUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    evaluation_text?: StringFieldUpdateOperationsInput | string
    recomendation_list?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiReportUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    chapter_taken_id?: StringFieldUpdateOperationsInput | string
    evaluation_text?: StringFieldUpdateOperationsInput | string
    recomendation_list?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrerequisiteCreateInput = {
    id: string
    created_at?: Date | string
    updated_at?: Date | string
    chapter: ChapterCreateNestedOneWithoutPrerequisites_baseInput
    prerequisite_chapter: ChapterCreateNestedOneWithoutPrerequisites_requirementInput
  }

  export type PrerequisiteUncheckedCreateInput = {
    id: string
    chapter_id: string
    prerequisite_chapter_id: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PrerequisiteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    chapter?: ChapterUpdateOneRequiredWithoutPrerequisites_baseNestedInput
    prerequisite_chapter?: ChapterUpdateOneRequiredWithoutPrerequisites_requirementNestedInput
  }

  export type PrerequisiteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    chapter_id?: StringFieldUpdateOperationsInput | string
    prerequisite_chapter_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrerequisiteCreateManyInput = {
    id: string
    chapter_id: string
    prerequisite_chapter_id: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PrerequisiteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrerequisiteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    chapter_id?: StringFieldUpdateOperationsInput | string
    prerequisite_chapter_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionCreateInput = {
    id: string
    question: string
    topic: string
    difficulty_level: $Enums.DifficultyLevel
    created_at?: Date | string
    updated_at?: Date | string
    assessment: AssessmentCreateNestedOneWithoutQuestionsInput
  }

  export type QuestionUncheckedCreateInput = {
    id: string
    assessment_id: string
    question: string
    topic: string
    difficulty_level: $Enums.DifficultyLevel
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type QuestionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    difficulty_level?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    assessment?: AssessmentUpdateOneRequiredWithoutQuestionsNestedInput
  }

  export type QuestionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    assessment_id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    difficulty_level?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionCreateManyInput = {
    id: string
    assessment_id: string
    question: string
    topic: string
    difficulty_level: $Enums.DifficultyLevel
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type QuestionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    difficulty_level?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    assessment_id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    difficulty_level?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAttemptCreateInput = {
    id: string
    score: number
    completed_at?: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutUser_attemptsInput
    assessment: AssessmentCreateNestedOneWithoutUser_attemptsInput
  }

  export type UserAttemptUncheckedCreateInput = {
    id: string
    user_id: string
    assessement_id: string
    score: number
    completed_at?: Date | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserAttemptUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    completed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUser_attemptsNestedInput
    assessment?: AssessmentUpdateOneRequiredWithoutUser_attemptsNestedInput
  }

  export type UserAttemptUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    assessement_id?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    completed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAttemptCreateManyInput = {
    id: string
    user_id: string
    assessement_id: string
    score: number
    completed_at?: Date | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserAttemptUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    completed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAttemptUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    assessement_id?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    completed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProgresCreateInput = {
    id: string
    current_level: $Enums.CurrentLevel
    status: $Enums.ProgressStatus
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutUser_progresInput
    sub_chapter: SubChapterCreateNestedOneWithoutUser_progresInput
    chapter_taken: ChapterTakenCreateNestedOneWithoutUser_progresInput
  }

  export type UserProgresUncheckedCreateInput = {
    id: string
    user_id: string
    sub_chapter_id: string
    chapter_taken_id: string
    current_level: $Enums.CurrentLevel
    status: $Enums.ProgressStatus
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserProgresUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    current_level?: EnumCurrentLevelFieldUpdateOperationsInput | $Enums.CurrentLevel
    status?: EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUser_progresNestedInput
    sub_chapter?: SubChapterUpdateOneRequiredWithoutUser_progresNestedInput
    chapter_taken?: ChapterTakenUpdateOneRequiredWithoutUser_progresNestedInput
  }

  export type UserProgresUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    sub_chapter_id?: StringFieldUpdateOperationsInput | string
    chapter_taken_id?: StringFieldUpdateOperationsInput | string
    current_level?: EnumCurrentLevelFieldUpdateOperationsInput | $Enums.CurrentLevel
    status?: EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProgresCreateManyInput = {
    id: string
    user_id: string
    sub_chapter_id: string
    chapter_taken_id: string
    current_level: $Enums.CurrentLevel
    status: $Enums.ProgressStatus
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserProgresUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    current_level?: EnumCurrentLevelFieldUpdateOperationsInput | $Enums.CurrentLevel
    status?: EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProgresUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    sub_chapter_id?: StringFieldUpdateOperationsInput | string
    chapter_taken_id?: StringFieldUpdateOperationsInput | string
    current_level?: EnumCurrentLevelFieldUpdateOperationsInput | $Enums.CurrentLevel
    status?: EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type AiReportListRelationFilter = {
    every?: AiReportWhereInput
    some?: AiReportWhereInput
    none?: AiReportWhereInput
  }

  export type ChapterTakenListRelationFilter = {
    every?: ChapterTakenWhereInput
    some?: ChapterTakenWhereInput
    none?: ChapterTakenWhereInput
  }

  export type UserAttemptListRelationFilter = {
    every?: UserAttemptWhereInput
    some?: UserAttemptWhereInput
    none?: UserAttemptWhereInput
  }

  export type UserProgresListRelationFilter = {
    every?: UserProgresWhereInput
    some?: UserProgresWhereInput
    none?: UserProgresWhereInput
  }

  export type AiReportOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChapterTakenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserAttemptOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserProgresOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    role?: SortOrder
    gmail?: SortOrder
    password?: SortOrder
    birth_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    role?: SortOrder
    gmail?: SortOrder
    password?: SortOrder
    birth_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    role?: SortOrder
    gmail?: SortOrder
    password?: SortOrder
    birth_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type PrerequisiteListRelationFilter = {
    every?: PrerequisiteWhereInput
    some?: PrerequisiteWhereInput
    none?: PrerequisiteWhereInput
  }

  export type SubChapterListRelationFilter = {
    every?: SubChapterWhereInput
    some?: SubChapterWhereInput
    none?: SubChapterWhereInput
  }

  export type PrerequisiteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubChapterOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChapterOrderByRelevanceInput = {
    fields: ChapterOrderByRelevanceFieldEnum | ChapterOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ChapterCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    total_sub_chapter?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ChapterAvgOrderByAggregateInput = {
    total_sub_chapter?: SortOrder
  }

  export type ChapterMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    total_sub_chapter?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ChapterMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    total_sub_chapter?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ChapterSumOrderByAggregateInput = {
    total_sub_chapter?: SortOrder
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

  export type ChapterScalarRelationFilter = {
    is?: ChapterWhereInput
    isNot?: ChapterWhereInput
  }

  export type AssessmentListRelationFilter = {
    every?: AssessmentWhereInput
    some?: AssessmentWhereInput
    none?: AssessmentWhereInput
  }

  export type AssessmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubChapterOrderByRelevanceInput = {
    fields: SubChapterOrderByRelevanceFieldEnum | SubChapterOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SubChapterCountOrderByAggregateInput = {
    id?: SortOrder
    chapter_id?: SortOrder
    name?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type SubChapterMaxOrderByAggregateInput = {
    id?: SortOrder
    chapter_id?: SortOrder
    name?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type SubChapterMinOrderByAggregateInput = {
    id?: SortOrder
    chapter_id?: SortOrder
    name?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ChapterTakenOrderByRelevanceInput = {
    fields: ChapterTakenOrderByRelevanceFieldEnum | ChapterTakenOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ChapterTakenCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    chapter_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ChapterTakenMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    chapter_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ChapterTakenMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    chapter_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type EnumAssessmentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AssessmentType | EnumAssessmentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AssessmentType[]
    notIn?: $Enums.AssessmentType[]
    not?: NestedEnumAssessmentTypeFilter<$PrismaModel> | $Enums.AssessmentType
  }

  export type ChapterTakenScalarRelationFilter = {
    is?: ChapterTakenWhereInput
    isNot?: ChapterTakenWhereInput
  }

  export type SubChapterScalarRelationFilter = {
    is?: SubChapterWhereInput
    isNot?: SubChapterWhereInput
  }

  export type QuestionListRelationFilter = {
    every?: QuestionWhereInput
    some?: QuestionWhereInput
    none?: QuestionWhereInput
  }

  export type QuestionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AssessmentOrderByRelevanceInput = {
    fields: AssessmentOrderByRelevanceFieldEnum | AssessmentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AssessmentCountOrderByAggregateInput = {
    id?: SortOrder
    chapter_taken_id?: SortOrder
    sub_chapter_id?: SortOrder
    title?: SortOrder
    type?: SortOrder
    correct_answer?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type AssessmentAvgOrderByAggregateInput = {
    correct_answer?: SortOrder
  }

  export type AssessmentMaxOrderByAggregateInput = {
    id?: SortOrder
    chapter_taken_id?: SortOrder
    sub_chapter_id?: SortOrder
    title?: SortOrder
    type?: SortOrder
    correct_answer?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type AssessmentMinOrderByAggregateInput = {
    id?: SortOrder
    chapter_taken_id?: SortOrder
    sub_chapter_id?: SortOrder
    title?: SortOrder
    type?: SortOrder
    correct_answer?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type AssessmentSumOrderByAggregateInput = {
    correct_answer?: SortOrder
  }

  export type EnumAssessmentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AssessmentType | EnumAssessmentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AssessmentType[]
    notIn?: $Enums.AssessmentType[]
    not?: NestedEnumAssessmentTypeWithAggregatesFilter<$PrismaModel> | $Enums.AssessmentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAssessmentTypeFilter<$PrismaModel>
    _max?: NestedEnumAssessmentTypeFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type AiReportOrderByRelevanceInput = {
    fields: AiReportOrderByRelevanceFieldEnum | AiReportOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AiReportCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    chapter_taken_id?: SortOrder
    evaluation_text?: SortOrder
    recomendation_list?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type AiReportMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    chapter_taken_id?: SortOrder
    evaluation_text?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type AiReportMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    chapter_taken_id?: SortOrder
    evaluation_text?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type PrerequisiteOrderByRelevanceInput = {
    fields: PrerequisiteOrderByRelevanceFieldEnum | PrerequisiteOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PrerequisiteCountOrderByAggregateInput = {
    id?: SortOrder
    chapter_id?: SortOrder
    prerequisite_chapter_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PrerequisiteMaxOrderByAggregateInput = {
    id?: SortOrder
    chapter_id?: SortOrder
    prerequisite_chapter_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PrerequisiteMinOrderByAggregateInput = {
    id?: SortOrder
    chapter_id?: SortOrder
    prerequisite_chapter_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type EnumDifficultyLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.DifficultyLevel | EnumDifficultyLevelFieldRefInput<$PrismaModel>
    in?: $Enums.DifficultyLevel[]
    notIn?: $Enums.DifficultyLevel[]
    not?: NestedEnumDifficultyLevelFilter<$PrismaModel> | $Enums.DifficultyLevel
  }

  export type AssessmentScalarRelationFilter = {
    is?: AssessmentWhereInput
    isNot?: AssessmentWhereInput
  }

  export type QuestionOrderByRelevanceInput = {
    fields: QuestionOrderByRelevanceFieldEnum | QuestionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type QuestionCountOrderByAggregateInput = {
    id?: SortOrder
    assessment_id?: SortOrder
    question?: SortOrder
    topic?: SortOrder
    difficulty_level?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type QuestionMaxOrderByAggregateInput = {
    id?: SortOrder
    assessment_id?: SortOrder
    question?: SortOrder
    topic?: SortOrder
    difficulty_level?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type QuestionMinOrderByAggregateInput = {
    id?: SortOrder
    assessment_id?: SortOrder
    question?: SortOrder
    topic?: SortOrder
    difficulty_level?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type EnumDifficultyLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DifficultyLevel | EnumDifficultyLevelFieldRefInput<$PrismaModel>
    in?: $Enums.DifficultyLevel[]
    notIn?: $Enums.DifficultyLevel[]
    not?: NestedEnumDifficultyLevelWithAggregatesFilter<$PrismaModel> | $Enums.DifficultyLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDifficultyLevelFilter<$PrismaModel>
    _max?: NestedEnumDifficultyLevelFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type UserAttemptOrderByRelevanceInput = {
    fields: UserAttemptOrderByRelevanceFieldEnum | UserAttemptOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserAttemptCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    assessement_id?: SortOrder
    score?: SortOrder
    completed_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserAttemptAvgOrderByAggregateInput = {
    score?: SortOrder
  }

  export type UserAttemptMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    assessement_id?: SortOrder
    score?: SortOrder
    completed_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserAttemptMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    assessement_id?: SortOrder
    score?: SortOrder
    completed_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserAttemptSumOrderByAggregateInput = {
    score?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumCurrentLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.CurrentLevel | EnumCurrentLevelFieldRefInput<$PrismaModel>
    in?: $Enums.CurrentLevel[]
    notIn?: $Enums.CurrentLevel[]
    not?: NestedEnumCurrentLevelFilter<$PrismaModel> | $Enums.CurrentLevel
  }

  export type EnumProgressStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProgressStatus | EnumProgressStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProgressStatus[]
    notIn?: $Enums.ProgressStatus[]
    not?: NestedEnumProgressStatusFilter<$PrismaModel> | $Enums.ProgressStatus
  }

  export type UserProgresOrderByRelevanceInput = {
    fields: UserProgresOrderByRelevanceFieldEnum | UserProgresOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserProgresCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    sub_chapter_id?: SortOrder
    chapter_taken_id?: SortOrder
    current_level?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserProgresMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    sub_chapter_id?: SortOrder
    chapter_taken_id?: SortOrder
    current_level?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserProgresMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    sub_chapter_id?: SortOrder
    chapter_taken_id?: SortOrder
    current_level?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type EnumCurrentLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CurrentLevel | EnumCurrentLevelFieldRefInput<$PrismaModel>
    in?: $Enums.CurrentLevel[]
    notIn?: $Enums.CurrentLevel[]
    not?: NestedEnumCurrentLevelWithAggregatesFilter<$PrismaModel> | $Enums.CurrentLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCurrentLevelFilter<$PrismaModel>
    _max?: NestedEnumCurrentLevelFilter<$PrismaModel>
  }

  export type EnumProgressStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProgressStatus | EnumProgressStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProgressStatus[]
    notIn?: $Enums.ProgressStatus[]
    not?: NestedEnumProgressStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProgressStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProgressStatusFilter<$PrismaModel>
    _max?: NestedEnumProgressStatusFilter<$PrismaModel>
  }

  export type AiReportCreateNestedManyWithoutUserInput = {
    create?: XOR<AiReportCreateWithoutUserInput, AiReportUncheckedCreateWithoutUserInput> | AiReportCreateWithoutUserInput[] | AiReportUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AiReportCreateOrConnectWithoutUserInput | AiReportCreateOrConnectWithoutUserInput[]
    createMany?: AiReportCreateManyUserInputEnvelope
    connect?: AiReportWhereUniqueInput | AiReportWhereUniqueInput[]
  }

  export type ChapterTakenCreateNestedManyWithoutUserInput = {
    create?: XOR<ChapterTakenCreateWithoutUserInput, ChapterTakenUncheckedCreateWithoutUserInput> | ChapterTakenCreateWithoutUserInput[] | ChapterTakenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChapterTakenCreateOrConnectWithoutUserInput | ChapterTakenCreateOrConnectWithoutUserInput[]
    createMany?: ChapterTakenCreateManyUserInputEnvelope
    connect?: ChapterTakenWhereUniqueInput | ChapterTakenWhereUniqueInput[]
  }

  export type UserAttemptCreateNestedManyWithoutUserInput = {
    create?: XOR<UserAttemptCreateWithoutUserInput, UserAttemptUncheckedCreateWithoutUserInput> | UserAttemptCreateWithoutUserInput[] | UserAttemptUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAttemptCreateOrConnectWithoutUserInput | UserAttemptCreateOrConnectWithoutUserInput[]
    createMany?: UserAttemptCreateManyUserInputEnvelope
    connect?: UserAttemptWhereUniqueInput | UserAttemptWhereUniqueInput[]
  }

  export type UserProgresCreateNestedManyWithoutUserInput = {
    create?: XOR<UserProgresCreateWithoutUserInput, UserProgresUncheckedCreateWithoutUserInput> | UserProgresCreateWithoutUserInput[] | UserProgresUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserProgresCreateOrConnectWithoutUserInput | UserProgresCreateOrConnectWithoutUserInput[]
    createMany?: UserProgresCreateManyUserInputEnvelope
    connect?: UserProgresWhereUniqueInput | UserProgresWhereUniqueInput[]
  }

  export type AiReportUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AiReportCreateWithoutUserInput, AiReportUncheckedCreateWithoutUserInput> | AiReportCreateWithoutUserInput[] | AiReportUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AiReportCreateOrConnectWithoutUserInput | AiReportCreateOrConnectWithoutUserInput[]
    createMany?: AiReportCreateManyUserInputEnvelope
    connect?: AiReportWhereUniqueInput | AiReportWhereUniqueInput[]
  }

  export type ChapterTakenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ChapterTakenCreateWithoutUserInput, ChapterTakenUncheckedCreateWithoutUserInput> | ChapterTakenCreateWithoutUserInput[] | ChapterTakenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChapterTakenCreateOrConnectWithoutUserInput | ChapterTakenCreateOrConnectWithoutUserInput[]
    createMany?: ChapterTakenCreateManyUserInputEnvelope
    connect?: ChapterTakenWhereUniqueInput | ChapterTakenWhereUniqueInput[]
  }

  export type UserAttemptUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserAttemptCreateWithoutUserInput, UserAttemptUncheckedCreateWithoutUserInput> | UserAttemptCreateWithoutUserInput[] | UserAttemptUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAttemptCreateOrConnectWithoutUserInput | UserAttemptCreateOrConnectWithoutUserInput[]
    createMany?: UserAttemptCreateManyUserInputEnvelope
    connect?: UserAttemptWhereUniqueInput | UserAttemptWhereUniqueInput[]
  }

  export type UserProgresUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserProgresCreateWithoutUserInput, UserProgresUncheckedCreateWithoutUserInput> | UserProgresCreateWithoutUserInput[] | UserProgresUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserProgresCreateOrConnectWithoutUserInput | UserProgresCreateOrConnectWithoutUserInput[]
    createMany?: UserProgresCreateManyUserInputEnvelope
    connect?: UserProgresWhereUniqueInput | UserProgresWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AiReportUpdateManyWithoutUserNestedInput = {
    create?: XOR<AiReportCreateWithoutUserInput, AiReportUncheckedCreateWithoutUserInput> | AiReportCreateWithoutUserInput[] | AiReportUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AiReportCreateOrConnectWithoutUserInput | AiReportCreateOrConnectWithoutUserInput[]
    upsert?: AiReportUpsertWithWhereUniqueWithoutUserInput | AiReportUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AiReportCreateManyUserInputEnvelope
    set?: AiReportWhereUniqueInput | AiReportWhereUniqueInput[]
    disconnect?: AiReportWhereUniqueInput | AiReportWhereUniqueInput[]
    delete?: AiReportWhereUniqueInput | AiReportWhereUniqueInput[]
    connect?: AiReportWhereUniqueInput | AiReportWhereUniqueInput[]
    update?: AiReportUpdateWithWhereUniqueWithoutUserInput | AiReportUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AiReportUpdateManyWithWhereWithoutUserInput | AiReportUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AiReportScalarWhereInput | AiReportScalarWhereInput[]
  }

  export type ChapterTakenUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChapterTakenCreateWithoutUserInput, ChapterTakenUncheckedCreateWithoutUserInput> | ChapterTakenCreateWithoutUserInput[] | ChapterTakenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChapterTakenCreateOrConnectWithoutUserInput | ChapterTakenCreateOrConnectWithoutUserInput[]
    upsert?: ChapterTakenUpsertWithWhereUniqueWithoutUserInput | ChapterTakenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChapterTakenCreateManyUserInputEnvelope
    set?: ChapterTakenWhereUniqueInput | ChapterTakenWhereUniqueInput[]
    disconnect?: ChapterTakenWhereUniqueInput | ChapterTakenWhereUniqueInput[]
    delete?: ChapterTakenWhereUniqueInput | ChapterTakenWhereUniqueInput[]
    connect?: ChapterTakenWhereUniqueInput | ChapterTakenWhereUniqueInput[]
    update?: ChapterTakenUpdateWithWhereUniqueWithoutUserInput | ChapterTakenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChapterTakenUpdateManyWithWhereWithoutUserInput | ChapterTakenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChapterTakenScalarWhereInput | ChapterTakenScalarWhereInput[]
  }

  export type UserAttemptUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserAttemptCreateWithoutUserInput, UserAttemptUncheckedCreateWithoutUserInput> | UserAttemptCreateWithoutUserInput[] | UserAttemptUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAttemptCreateOrConnectWithoutUserInput | UserAttemptCreateOrConnectWithoutUserInput[]
    upsert?: UserAttemptUpsertWithWhereUniqueWithoutUserInput | UserAttemptUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserAttemptCreateManyUserInputEnvelope
    set?: UserAttemptWhereUniqueInput | UserAttemptWhereUniqueInput[]
    disconnect?: UserAttemptWhereUniqueInput | UserAttemptWhereUniqueInput[]
    delete?: UserAttemptWhereUniqueInput | UserAttemptWhereUniqueInput[]
    connect?: UserAttemptWhereUniqueInput | UserAttemptWhereUniqueInput[]
    update?: UserAttemptUpdateWithWhereUniqueWithoutUserInput | UserAttemptUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserAttemptUpdateManyWithWhereWithoutUserInput | UserAttemptUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserAttemptScalarWhereInput | UserAttemptScalarWhereInput[]
  }

  export type UserProgresUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserProgresCreateWithoutUserInput, UserProgresUncheckedCreateWithoutUserInput> | UserProgresCreateWithoutUserInput[] | UserProgresUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserProgresCreateOrConnectWithoutUserInput | UserProgresCreateOrConnectWithoutUserInput[]
    upsert?: UserProgresUpsertWithWhereUniqueWithoutUserInput | UserProgresUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserProgresCreateManyUserInputEnvelope
    set?: UserProgresWhereUniqueInput | UserProgresWhereUniqueInput[]
    disconnect?: UserProgresWhereUniqueInput | UserProgresWhereUniqueInput[]
    delete?: UserProgresWhereUniqueInput | UserProgresWhereUniqueInput[]
    connect?: UserProgresWhereUniqueInput | UserProgresWhereUniqueInput[]
    update?: UserProgresUpdateWithWhereUniqueWithoutUserInput | UserProgresUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserProgresUpdateManyWithWhereWithoutUserInput | UserProgresUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserProgresScalarWhereInput | UserProgresScalarWhereInput[]
  }

  export type AiReportUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AiReportCreateWithoutUserInput, AiReportUncheckedCreateWithoutUserInput> | AiReportCreateWithoutUserInput[] | AiReportUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AiReportCreateOrConnectWithoutUserInput | AiReportCreateOrConnectWithoutUserInput[]
    upsert?: AiReportUpsertWithWhereUniqueWithoutUserInput | AiReportUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AiReportCreateManyUserInputEnvelope
    set?: AiReportWhereUniqueInput | AiReportWhereUniqueInput[]
    disconnect?: AiReportWhereUniqueInput | AiReportWhereUniqueInput[]
    delete?: AiReportWhereUniqueInput | AiReportWhereUniqueInput[]
    connect?: AiReportWhereUniqueInput | AiReportWhereUniqueInput[]
    update?: AiReportUpdateWithWhereUniqueWithoutUserInput | AiReportUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AiReportUpdateManyWithWhereWithoutUserInput | AiReportUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AiReportScalarWhereInput | AiReportScalarWhereInput[]
  }

  export type ChapterTakenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChapterTakenCreateWithoutUserInput, ChapterTakenUncheckedCreateWithoutUserInput> | ChapterTakenCreateWithoutUserInput[] | ChapterTakenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChapterTakenCreateOrConnectWithoutUserInput | ChapterTakenCreateOrConnectWithoutUserInput[]
    upsert?: ChapterTakenUpsertWithWhereUniqueWithoutUserInput | ChapterTakenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChapterTakenCreateManyUserInputEnvelope
    set?: ChapterTakenWhereUniqueInput | ChapterTakenWhereUniqueInput[]
    disconnect?: ChapterTakenWhereUniqueInput | ChapterTakenWhereUniqueInput[]
    delete?: ChapterTakenWhereUniqueInput | ChapterTakenWhereUniqueInput[]
    connect?: ChapterTakenWhereUniqueInput | ChapterTakenWhereUniqueInput[]
    update?: ChapterTakenUpdateWithWhereUniqueWithoutUserInput | ChapterTakenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChapterTakenUpdateManyWithWhereWithoutUserInput | ChapterTakenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChapterTakenScalarWhereInput | ChapterTakenScalarWhereInput[]
  }

  export type UserAttemptUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserAttemptCreateWithoutUserInput, UserAttemptUncheckedCreateWithoutUserInput> | UserAttemptCreateWithoutUserInput[] | UserAttemptUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAttemptCreateOrConnectWithoutUserInput | UserAttemptCreateOrConnectWithoutUserInput[]
    upsert?: UserAttemptUpsertWithWhereUniqueWithoutUserInput | UserAttemptUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserAttemptCreateManyUserInputEnvelope
    set?: UserAttemptWhereUniqueInput | UserAttemptWhereUniqueInput[]
    disconnect?: UserAttemptWhereUniqueInput | UserAttemptWhereUniqueInput[]
    delete?: UserAttemptWhereUniqueInput | UserAttemptWhereUniqueInput[]
    connect?: UserAttemptWhereUniqueInput | UserAttemptWhereUniqueInput[]
    update?: UserAttemptUpdateWithWhereUniqueWithoutUserInput | UserAttemptUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserAttemptUpdateManyWithWhereWithoutUserInput | UserAttemptUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserAttemptScalarWhereInput | UserAttemptScalarWhereInput[]
  }

  export type UserProgresUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserProgresCreateWithoutUserInput, UserProgresUncheckedCreateWithoutUserInput> | UserProgresCreateWithoutUserInput[] | UserProgresUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserProgresCreateOrConnectWithoutUserInput | UserProgresCreateOrConnectWithoutUserInput[]
    upsert?: UserProgresUpsertWithWhereUniqueWithoutUserInput | UserProgresUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserProgresCreateManyUserInputEnvelope
    set?: UserProgresWhereUniqueInput | UserProgresWhereUniqueInput[]
    disconnect?: UserProgresWhereUniqueInput | UserProgresWhereUniqueInput[]
    delete?: UserProgresWhereUniqueInput | UserProgresWhereUniqueInput[]
    connect?: UserProgresWhereUniqueInput | UserProgresWhereUniqueInput[]
    update?: UserProgresUpdateWithWhereUniqueWithoutUserInput | UserProgresUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserProgresUpdateManyWithWhereWithoutUserInput | UserProgresUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserProgresScalarWhereInput | UserProgresScalarWhereInput[]
  }

  export type ChapterTakenCreateNestedManyWithoutChapterInput = {
    create?: XOR<ChapterTakenCreateWithoutChapterInput, ChapterTakenUncheckedCreateWithoutChapterInput> | ChapterTakenCreateWithoutChapterInput[] | ChapterTakenUncheckedCreateWithoutChapterInput[]
    connectOrCreate?: ChapterTakenCreateOrConnectWithoutChapterInput | ChapterTakenCreateOrConnectWithoutChapterInput[]
    createMany?: ChapterTakenCreateManyChapterInputEnvelope
    connect?: ChapterTakenWhereUniqueInput | ChapterTakenWhereUniqueInput[]
  }

  export type PrerequisiteCreateNestedManyWithoutChapterInput = {
    create?: XOR<PrerequisiteCreateWithoutChapterInput, PrerequisiteUncheckedCreateWithoutChapterInput> | PrerequisiteCreateWithoutChapterInput[] | PrerequisiteUncheckedCreateWithoutChapterInput[]
    connectOrCreate?: PrerequisiteCreateOrConnectWithoutChapterInput | PrerequisiteCreateOrConnectWithoutChapterInput[]
    createMany?: PrerequisiteCreateManyChapterInputEnvelope
    connect?: PrerequisiteWhereUniqueInput | PrerequisiteWhereUniqueInput[]
  }

  export type PrerequisiteCreateNestedManyWithoutPrerequisite_chapterInput = {
    create?: XOR<PrerequisiteCreateWithoutPrerequisite_chapterInput, PrerequisiteUncheckedCreateWithoutPrerequisite_chapterInput> | PrerequisiteCreateWithoutPrerequisite_chapterInput[] | PrerequisiteUncheckedCreateWithoutPrerequisite_chapterInput[]
    connectOrCreate?: PrerequisiteCreateOrConnectWithoutPrerequisite_chapterInput | PrerequisiteCreateOrConnectWithoutPrerequisite_chapterInput[]
    createMany?: PrerequisiteCreateManyPrerequisite_chapterInputEnvelope
    connect?: PrerequisiteWhereUniqueInput | PrerequisiteWhereUniqueInput[]
  }

  export type SubChapterCreateNestedManyWithoutChapterInput = {
    create?: XOR<SubChapterCreateWithoutChapterInput, SubChapterUncheckedCreateWithoutChapterInput> | SubChapterCreateWithoutChapterInput[] | SubChapterUncheckedCreateWithoutChapterInput[]
    connectOrCreate?: SubChapterCreateOrConnectWithoutChapterInput | SubChapterCreateOrConnectWithoutChapterInput[]
    createMany?: SubChapterCreateManyChapterInputEnvelope
    connect?: SubChapterWhereUniqueInput | SubChapterWhereUniqueInput[]
  }

  export type ChapterTakenUncheckedCreateNestedManyWithoutChapterInput = {
    create?: XOR<ChapterTakenCreateWithoutChapterInput, ChapterTakenUncheckedCreateWithoutChapterInput> | ChapterTakenCreateWithoutChapterInput[] | ChapterTakenUncheckedCreateWithoutChapterInput[]
    connectOrCreate?: ChapterTakenCreateOrConnectWithoutChapterInput | ChapterTakenCreateOrConnectWithoutChapterInput[]
    createMany?: ChapterTakenCreateManyChapterInputEnvelope
    connect?: ChapterTakenWhereUniqueInput | ChapterTakenWhereUniqueInput[]
  }

  export type PrerequisiteUncheckedCreateNestedManyWithoutChapterInput = {
    create?: XOR<PrerequisiteCreateWithoutChapterInput, PrerequisiteUncheckedCreateWithoutChapterInput> | PrerequisiteCreateWithoutChapterInput[] | PrerequisiteUncheckedCreateWithoutChapterInput[]
    connectOrCreate?: PrerequisiteCreateOrConnectWithoutChapterInput | PrerequisiteCreateOrConnectWithoutChapterInput[]
    createMany?: PrerequisiteCreateManyChapterInputEnvelope
    connect?: PrerequisiteWhereUniqueInput | PrerequisiteWhereUniqueInput[]
  }

  export type PrerequisiteUncheckedCreateNestedManyWithoutPrerequisite_chapterInput = {
    create?: XOR<PrerequisiteCreateWithoutPrerequisite_chapterInput, PrerequisiteUncheckedCreateWithoutPrerequisite_chapterInput> | PrerequisiteCreateWithoutPrerequisite_chapterInput[] | PrerequisiteUncheckedCreateWithoutPrerequisite_chapterInput[]
    connectOrCreate?: PrerequisiteCreateOrConnectWithoutPrerequisite_chapterInput | PrerequisiteCreateOrConnectWithoutPrerequisite_chapterInput[]
    createMany?: PrerequisiteCreateManyPrerequisite_chapterInputEnvelope
    connect?: PrerequisiteWhereUniqueInput | PrerequisiteWhereUniqueInput[]
  }

  export type SubChapterUncheckedCreateNestedManyWithoutChapterInput = {
    create?: XOR<SubChapterCreateWithoutChapterInput, SubChapterUncheckedCreateWithoutChapterInput> | SubChapterCreateWithoutChapterInput[] | SubChapterUncheckedCreateWithoutChapterInput[]
    connectOrCreate?: SubChapterCreateOrConnectWithoutChapterInput | SubChapterCreateOrConnectWithoutChapterInput[]
    createMany?: SubChapterCreateManyChapterInputEnvelope
    connect?: SubChapterWhereUniqueInput | SubChapterWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ChapterTakenUpdateManyWithoutChapterNestedInput = {
    create?: XOR<ChapterTakenCreateWithoutChapterInput, ChapterTakenUncheckedCreateWithoutChapterInput> | ChapterTakenCreateWithoutChapterInput[] | ChapterTakenUncheckedCreateWithoutChapterInput[]
    connectOrCreate?: ChapterTakenCreateOrConnectWithoutChapterInput | ChapterTakenCreateOrConnectWithoutChapterInput[]
    upsert?: ChapterTakenUpsertWithWhereUniqueWithoutChapterInput | ChapterTakenUpsertWithWhereUniqueWithoutChapterInput[]
    createMany?: ChapterTakenCreateManyChapterInputEnvelope
    set?: ChapterTakenWhereUniqueInput | ChapterTakenWhereUniqueInput[]
    disconnect?: ChapterTakenWhereUniqueInput | ChapterTakenWhereUniqueInput[]
    delete?: ChapterTakenWhereUniqueInput | ChapterTakenWhereUniqueInput[]
    connect?: ChapterTakenWhereUniqueInput | ChapterTakenWhereUniqueInput[]
    update?: ChapterTakenUpdateWithWhereUniqueWithoutChapterInput | ChapterTakenUpdateWithWhereUniqueWithoutChapterInput[]
    updateMany?: ChapterTakenUpdateManyWithWhereWithoutChapterInput | ChapterTakenUpdateManyWithWhereWithoutChapterInput[]
    deleteMany?: ChapterTakenScalarWhereInput | ChapterTakenScalarWhereInput[]
  }

  export type PrerequisiteUpdateManyWithoutChapterNestedInput = {
    create?: XOR<PrerequisiteCreateWithoutChapterInput, PrerequisiteUncheckedCreateWithoutChapterInput> | PrerequisiteCreateWithoutChapterInput[] | PrerequisiteUncheckedCreateWithoutChapterInput[]
    connectOrCreate?: PrerequisiteCreateOrConnectWithoutChapterInput | PrerequisiteCreateOrConnectWithoutChapterInput[]
    upsert?: PrerequisiteUpsertWithWhereUniqueWithoutChapterInput | PrerequisiteUpsertWithWhereUniqueWithoutChapterInput[]
    createMany?: PrerequisiteCreateManyChapterInputEnvelope
    set?: PrerequisiteWhereUniqueInput | PrerequisiteWhereUniqueInput[]
    disconnect?: PrerequisiteWhereUniqueInput | PrerequisiteWhereUniqueInput[]
    delete?: PrerequisiteWhereUniqueInput | PrerequisiteWhereUniqueInput[]
    connect?: PrerequisiteWhereUniqueInput | PrerequisiteWhereUniqueInput[]
    update?: PrerequisiteUpdateWithWhereUniqueWithoutChapterInput | PrerequisiteUpdateWithWhereUniqueWithoutChapterInput[]
    updateMany?: PrerequisiteUpdateManyWithWhereWithoutChapterInput | PrerequisiteUpdateManyWithWhereWithoutChapterInput[]
    deleteMany?: PrerequisiteScalarWhereInput | PrerequisiteScalarWhereInput[]
  }

  export type PrerequisiteUpdateManyWithoutPrerequisite_chapterNestedInput = {
    create?: XOR<PrerequisiteCreateWithoutPrerequisite_chapterInput, PrerequisiteUncheckedCreateWithoutPrerequisite_chapterInput> | PrerequisiteCreateWithoutPrerequisite_chapterInput[] | PrerequisiteUncheckedCreateWithoutPrerequisite_chapterInput[]
    connectOrCreate?: PrerequisiteCreateOrConnectWithoutPrerequisite_chapterInput | PrerequisiteCreateOrConnectWithoutPrerequisite_chapterInput[]
    upsert?: PrerequisiteUpsertWithWhereUniqueWithoutPrerequisite_chapterInput | PrerequisiteUpsertWithWhereUniqueWithoutPrerequisite_chapterInput[]
    createMany?: PrerequisiteCreateManyPrerequisite_chapterInputEnvelope
    set?: PrerequisiteWhereUniqueInput | PrerequisiteWhereUniqueInput[]
    disconnect?: PrerequisiteWhereUniqueInput | PrerequisiteWhereUniqueInput[]
    delete?: PrerequisiteWhereUniqueInput | PrerequisiteWhereUniqueInput[]
    connect?: PrerequisiteWhereUniqueInput | PrerequisiteWhereUniqueInput[]
    update?: PrerequisiteUpdateWithWhereUniqueWithoutPrerequisite_chapterInput | PrerequisiteUpdateWithWhereUniqueWithoutPrerequisite_chapterInput[]
    updateMany?: PrerequisiteUpdateManyWithWhereWithoutPrerequisite_chapterInput | PrerequisiteUpdateManyWithWhereWithoutPrerequisite_chapterInput[]
    deleteMany?: PrerequisiteScalarWhereInput | PrerequisiteScalarWhereInput[]
  }

  export type SubChapterUpdateManyWithoutChapterNestedInput = {
    create?: XOR<SubChapterCreateWithoutChapterInput, SubChapterUncheckedCreateWithoutChapterInput> | SubChapterCreateWithoutChapterInput[] | SubChapterUncheckedCreateWithoutChapterInput[]
    connectOrCreate?: SubChapterCreateOrConnectWithoutChapterInput | SubChapterCreateOrConnectWithoutChapterInput[]
    upsert?: SubChapterUpsertWithWhereUniqueWithoutChapterInput | SubChapterUpsertWithWhereUniqueWithoutChapterInput[]
    createMany?: SubChapterCreateManyChapterInputEnvelope
    set?: SubChapterWhereUniqueInput | SubChapterWhereUniqueInput[]
    disconnect?: SubChapterWhereUniqueInput | SubChapterWhereUniqueInput[]
    delete?: SubChapterWhereUniqueInput | SubChapterWhereUniqueInput[]
    connect?: SubChapterWhereUniqueInput | SubChapterWhereUniqueInput[]
    update?: SubChapterUpdateWithWhereUniqueWithoutChapterInput | SubChapterUpdateWithWhereUniqueWithoutChapterInput[]
    updateMany?: SubChapterUpdateManyWithWhereWithoutChapterInput | SubChapterUpdateManyWithWhereWithoutChapterInput[]
    deleteMany?: SubChapterScalarWhereInput | SubChapterScalarWhereInput[]
  }

  export type ChapterTakenUncheckedUpdateManyWithoutChapterNestedInput = {
    create?: XOR<ChapterTakenCreateWithoutChapterInput, ChapterTakenUncheckedCreateWithoutChapterInput> | ChapterTakenCreateWithoutChapterInput[] | ChapterTakenUncheckedCreateWithoutChapterInput[]
    connectOrCreate?: ChapterTakenCreateOrConnectWithoutChapterInput | ChapterTakenCreateOrConnectWithoutChapterInput[]
    upsert?: ChapterTakenUpsertWithWhereUniqueWithoutChapterInput | ChapterTakenUpsertWithWhereUniqueWithoutChapterInput[]
    createMany?: ChapterTakenCreateManyChapterInputEnvelope
    set?: ChapterTakenWhereUniqueInput | ChapterTakenWhereUniqueInput[]
    disconnect?: ChapterTakenWhereUniqueInput | ChapterTakenWhereUniqueInput[]
    delete?: ChapterTakenWhereUniqueInput | ChapterTakenWhereUniqueInput[]
    connect?: ChapterTakenWhereUniqueInput | ChapterTakenWhereUniqueInput[]
    update?: ChapterTakenUpdateWithWhereUniqueWithoutChapterInput | ChapterTakenUpdateWithWhereUniqueWithoutChapterInput[]
    updateMany?: ChapterTakenUpdateManyWithWhereWithoutChapterInput | ChapterTakenUpdateManyWithWhereWithoutChapterInput[]
    deleteMany?: ChapterTakenScalarWhereInput | ChapterTakenScalarWhereInput[]
  }

  export type PrerequisiteUncheckedUpdateManyWithoutChapterNestedInput = {
    create?: XOR<PrerequisiteCreateWithoutChapterInput, PrerequisiteUncheckedCreateWithoutChapterInput> | PrerequisiteCreateWithoutChapterInput[] | PrerequisiteUncheckedCreateWithoutChapterInput[]
    connectOrCreate?: PrerequisiteCreateOrConnectWithoutChapterInput | PrerequisiteCreateOrConnectWithoutChapterInput[]
    upsert?: PrerequisiteUpsertWithWhereUniqueWithoutChapterInput | PrerequisiteUpsertWithWhereUniqueWithoutChapterInput[]
    createMany?: PrerequisiteCreateManyChapterInputEnvelope
    set?: PrerequisiteWhereUniqueInput | PrerequisiteWhereUniqueInput[]
    disconnect?: PrerequisiteWhereUniqueInput | PrerequisiteWhereUniqueInput[]
    delete?: PrerequisiteWhereUniqueInput | PrerequisiteWhereUniqueInput[]
    connect?: PrerequisiteWhereUniqueInput | PrerequisiteWhereUniqueInput[]
    update?: PrerequisiteUpdateWithWhereUniqueWithoutChapterInput | PrerequisiteUpdateWithWhereUniqueWithoutChapterInput[]
    updateMany?: PrerequisiteUpdateManyWithWhereWithoutChapterInput | PrerequisiteUpdateManyWithWhereWithoutChapterInput[]
    deleteMany?: PrerequisiteScalarWhereInput | PrerequisiteScalarWhereInput[]
  }

  export type PrerequisiteUncheckedUpdateManyWithoutPrerequisite_chapterNestedInput = {
    create?: XOR<PrerequisiteCreateWithoutPrerequisite_chapterInput, PrerequisiteUncheckedCreateWithoutPrerequisite_chapterInput> | PrerequisiteCreateWithoutPrerequisite_chapterInput[] | PrerequisiteUncheckedCreateWithoutPrerequisite_chapterInput[]
    connectOrCreate?: PrerequisiteCreateOrConnectWithoutPrerequisite_chapterInput | PrerequisiteCreateOrConnectWithoutPrerequisite_chapterInput[]
    upsert?: PrerequisiteUpsertWithWhereUniqueWithoutPrerequisite_chapterInput | PrerequisiteUpsertWithWhereUniqueWithoutPrerequisite_chapterInput[]
    createMany?: PrerequisiteCreateManyPrerequisite_chapterInputEnvelope
    set?: PrerequisiteWhereUniqueInput | PrerequisiteWhereUniqueInput[]
    disconnect?: PrerequisiteWhereUniqueInput | PrerequisiteWhereUniqueInput[]
    delete?: PrerequisiteWhereUniqueInput | PrerequisiteWhereUniqueInput[]
    connect?: PrerequisiteWhereUniqueInput | PrerequisiteWhereUniqueInput[]
    update?: PrerequisiteUpdateWithWhereUniqueWithoutPrerequisite_chapterInput | PrerequisiteUpdateWithWhereUniqueWithoutPrerequisite_chapterInput[]
    updateMany?: PrerequisiteUpdateManyWithWhereWithoutPrerequisite_chapterInput | PrerequisiteUpdateManyWithWhereWithoutPrerequisite_chapterInput[]
    deleteMany?: PrerequisiteScalarWhereInput | PrerequisiteScalarWhereInput[]
  }

  export type SubChapterUncheckedUpdateManyWithoutChapterNestedInput = {
    create?: XOR<SubChapterCreateWithoutChapterInput, SubChapterUncheckedCreateWithoutChapterInput> | SubChapterCreateWithoutChapterInput[] | SubChapterUncheckedCreateWithoutChapterInput[]
    connectOrCreate?: SubChapterCreateOrConnectWithoutChapterInput | SubChapterCreateOrConnectWithoutChapterInput[]
    upsert?: SubChapterUpsertWithWhereUniqueWithoutChapterInput | SubChapterUpsertWithWhereUniqueWithoutChapterInput[]
    createMany?: SubChapterCreateManyChapterInputEnvelope
    set?: SubChapterWhereUniqueInput | SubChapterWhereUniqueInput[]
    disconnect?: SubChapterWhereUniqueInput | SubChapterWhereUniqueInput[]
    delete?: SubChapterWhereUniqueInput | SubChapterWhereUniqueInput[]
    connect?: SubChapterWhereUniqueInput | SubChapterWhereUniqueInput[]
    update?: SubChapterUpdateWithWhereUniqueWithoutChapterInput | SubChapterUpdateWithWhereUniqueWithoutChapterInput[]
    updateMany?: SubChapterUpdateManyWithWhereWithoutChapterInput | SubChapterUpdateManyWithWhereWithoutChapterInput[]
    deleteMany?: SubChapterScalarWhereInput | SubChapterScalarWhereInput[]
  }

  export type ChapterCreateNestedOneWithoutSub_chaptersInput = {
    create?: XOR<ChapterCreateWithoutSub_chaptersInput, ChapterUncheckedCreateWithoutSub_chaptersInput>
    connectOrCreate?: ChapterCreateOrConnectWithoutSub_chaptersInput
    connect?: ChapterWhereUniqueInput
  }

  export type AssessmentCreateNestedManyWithoutSub_chapterInput = {
    create?: XOR<AssessmentCreateWithoutSub_chapterInput, AssessmentUncheckedCreateWithoutSub_chapterInput> | AssessmentCreateWithoutSub_chapterInput[] | AssessmentUncheckedCreateWithoutSub_chapterInput[]
    connectOrCreate?: AssessmentCreateOrConnectWithoutSub_chapterInput | AssessmentCreateOrConnectWithoutSub_chapterInput[]
    createMany?: AssessmentCreateManySub_chapterInputEnvelope
    connect?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
  }

  export type UserProgresCreateNestedManyWithoutSub_chapterInput = {
    create?: XOR<UserProgresCreateWithoutSub_chapterInput, UserProgresUncheckedCreateWithoutSub_chapterInput> | UserProgresCreateWithoutSub_chapterInput[] | UserProgresUncheckedCreateWithoutSub_chapterInput[]
    connectOrCreate?: UserProgresCreateOrConnectWithoutSub_chapterInput | UserProgresCreateOrConnectWithoutSub_chapterInput[]
    createMany?: UserProgresCreateManySub_chapterInputEnvelope
    connect?: UserProgresWhereUniqueInput | UserProgresWhereUniqueInput[]
  }

  export type AssessmentUncheckedCreateNestedManyWithoutSub_chapterInput = {
    create?: XOR<AssessmentCreateWithoutSub_chapterInput, AssessmentUncheckedCreateWithoutSub_chapterInput> | AssessmentCreateWithoutSub_chapterInput[] | AssessmentUncheckedCreateWithoutSub_chapterInput[]
    connectOrCreate?: AssessmentCreateOrConnectWithoutSub_chapterInput | AssessmentCreateOrConnectWithoutSub_chapterInput[]
    createMany?: AssessmentCreateManySub_chapterInputEnvelope
    connect?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
  }

  export type UserProgresUncheckedCreateNestedManyWithoutSub_chapterInput = {
    create?: XOR<UserProgresCreateWithoutSub_chapterInput, UserProgresUncheckedCreateWithoutSub_chapterInput> | UserProgresCreateWithoutSub_chapterInput[] | UserProgresUncheckedCreateWithoutSub_chapterInput[]
    connectOrCreate?: UserProgresCreateOrConnectWithoutSub_chapterInput | UserProgresCreateOrConnectWithoutSub_chapterInput[]
    createMany?: UserProgresCreateManySub_chapterInputEnvelope
    connect?: UserProgresWhereUniqueInput | UserProgresWhereUniqueInput[]
  }

  export type ChapterUpdateOneRequiredWithoutSub_chaptersNestedInput = {
    create?: XOR<ChapterCreateWithoutSub_chaptersInput, ChapterUncheckedCreateWithoutSub_chaptersInput>
    connectOrCreate?: ChapterCreateOrConnectWithoutSub_chaptersInput
    upsert?: ChapterUpsertWithoutSub_chaptersInput
    connect?: ChapterWhereUniqueInput
    update?: XOR<XOR<ChapterUpdateToOneWithWhereWithoutSub_chaptersInput, ChapterUpdateWithoutSub_chaptersInput>, ChapterUncheckedUpdateWithoutSub_chaptersInput>
  }

  export type AssessmentUpdateManyWithoutSub_chapterNestedInput = {
    create?: XOR<AssessmentCreateWithoutSub_chapterInput, AssessmentUncheckedCreateWithoutSub_chapterInput> | AssessmentCreateWithoutSub_chapterInput[] | AssessmentUncheckedCreateWithoutSub_chapterInput[]
    connectOrCreate?: AssessmentCreateOrConnectWithoutSub_chapterInput | AssessmentCreateOrConnectWithoutSub_chapterInput[]
    upsert?: AssessmentUpsertWithWhereUniqueWithoutSub_chapterInput | AssessmentUpsertWithWhereUniqueWithoutSub_chapterInput[]
    createMany?: AssessmentCreateManySub_chapterInputEnvelope
    set?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
    disconnect?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
    delete?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
    connect?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
    update?: AssessmentUpdateWithWhereUniqueWithoutSub_chapterInput | AssessmentUpdateWithWhereUniqueWithoutSub_chapterInput[]
    updateMany?: AssessmentUpdateManyWithWhereWithoutSub_chapterInput | AssessmentUpdateManyWithWhereWithoutSub_chapterInput[]
    deleteMany?: AssessmentScalarWhereInput | AssessmentScalarWhereInput[]
  }

  export type UserProgresUpdateManyWithoutSub_chapterNestedInput = {
    create?: XOR<UserProgresCreateWithoutSub_chapterInput, UserProgresUncheckedCreateWithoutSub_chapterInput> | UserProgresCreateWithoutSub_chapterInput[] | UserProgresUncheckedCreateWithoutSub_chapterInput[]
    connectOrCreate?: UserProgresCreateOrConnectWithoutSub_chapterInput | UserProgresCreateOrConnectWithoutSub_chapterInput[]
    upsert?: UserProgresUpsertWithWhereUniqueWithoutSub_chapterInput | UserProgresUpsertWithWhereUniqueWithoutSub_chapterInput[]
    createMany?: UserProgresCreateManySub_chapterInputEnvelope
    set?: UserProgresWhereUniqueInput | UserProgresWhereUniqueInput[]
    disconnect?: UserProgresWhereUniqueInput | UserProgresWhereUniqueInput[]
    delete?: UserProgresWhereUniqueInput | UserProgresWhereUniqueInput[]
    connect?: UserProgresWhereUniqueInput | UserProgresWhereUniqueInput[]
    update?: UserProgresUpdateWithWhereUniqueWithoutSub_chapterInput | UserProgresUpdateWithWhereUniqueWithoutSub_chapterInput[]
    updateMany?: UserProgresUpdateManyWithWhereWithoutSub_chapterInput | UserProgresUpdateManyWithWhereWithoutSub_chapterInput[]
    deleteMany?: UserProgresScalarWhereInput | UserProgresScalarWhereInput[]
  }

  export type AssessmentUncheckedUpdateManyWithoutSub_chapterNestedInput = {
    create?: XOR<AssessmentCreateWithoutSub_chapterInput, AssessmentUncheckedCreateWithoutSub_chapterInput> | AssessmentCreateWithoutSub_chapterInput[] | AssessmentUncheckedCreateWithoutSub_chapterInput[]
    connectOrCreate?: AssessmentCreateOrConnectWithoutSub_chapterInput | AssessmentCreateOrConnectWithoutSub_chapterInput[]
    upsert?: AssessmentUpsertWithWhereUniqueWithoutSub_chapterInput | AssessmentUpsertWithWhereUniqueWithoutSub_chapterInput[]
    createMany?: AssessmentCreateManySub_chapterInputEnvelope
    set?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
    disconnect?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
    delete?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
    connect?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
    update?: AssessmentUpdateWithWhereUniqueWithoutSub_chapterInput | AssessmentUpdateWithWhereUniqueWithoutSub_chapterInput[]
    updateMany?: AssessmentUpdateManyWithWhereWithoutSub_chapterInput | AssessmentUpdateManyWithWhereWithoutSub_chapterInput[]
    deleteMany?: AssessmentScalarWhereInput | AssessmentScalarWhereInput[]
  }

  export type UserProgresUncheckedUpdateManyWithoutSub_chapterNestedInput = {
    create?: XOR<UserProgresCreateWithoutSub_chapterInput, UserProgresUncheckedCreateWithoutSub_chapterInput> | UserProgresCreateWithoutSub_chapterInput[] | UserProgresUncheckedCreateWithoutSub_chapterInput[]
    connectOrCreate?: UserProgresCreateOrConnectWithoutSub_chapterInput | UserProgresCreateOrConnectWithoutSub_chapterInput[]
    upsert?: UserProgresUpsertWithWhereUniqueWithoutSub_chapterInput | UserProgresUpsertWithWhereUniqueWithoutSub_chapterInput[]
    createMany?: UserProgresCreateManySub_chapterInputEnvelope
    set?: UserProgresWhereUniqueInput | UserProgresWhereUniqueInput[]
    disconnect?: UserProgresWhereUniqueInput | UserProgresWhereUniqueInput[]
    delete?: UserProgresWhereUniqueInput | UserProgresWhereUniqueInput[]
    connect?: UserProgresWhereUniqueInput | UserProgresWhereUniqueInput[]
    update?: UserProgresUpdateWithWhereUniqueWithoutSub_chapterInput | UserProgresUpdateWithWhereUniqueWithoutSub_chapterInput[]
    updateMany?: UserProgresUpdateManyWithWhereWithoutSub_chapterInput | UserProgresUpdateManyWithWhereWithoutSub_chapterInput[]
    deleteMany?: UserProgresScalarWhereInput | UserProgresScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutChapter_takenInput = {
    create?: XOR<UserCreateWithoutChapter_takenInput, UserUncheckedCreateWithoutChapter_takenInput>
    connectOrCreate?: UserCreateOrConnectWithoutChapter_takenInput
    connect?: UserWhereUniqueInput
  }

  export type ChapterCreateNestedOneWithoutChapter_takenInput = {
    create?: XOR<ChapterCreateWithoutChapter_takenInput, ChapterUncheckedCreateWithoutChapter_takenInput>
    connectOrCreate?: ChapterCreateOrConnectWithoutChapter_takenInput
    connect?: ChapterWhereUniqueInput
  }

  export type AiReportCreateNestedManyWithoutChapter_takenInput = {
    create?: XOR<AiReportCreateWithoutChapter_takenInput, AiReportUncheckedCreateWithoutChapter_takenInput> | AiReportCreateWithoutChapter_takenInput[] | AiReportUncheckedCreateWithoutChapter_takenInput[]
    connectOrCreate?: AiReportCreateOrConnectWithoutChapter_takenInput | AiReportCreateOrConnectWithoutChapter_takenInput[]
    createMany?: AiReportCreateManyChapter_takenInputEnvelope
    connect?: AiReportWhereUniqueInput | AiReportWhereUniqueInput[]
  }

  export type AssessmentCreateNestedManyWithoutChapter_takenInput = {
    create?: XOR<AssessmentCreateWithoutChapter_takenInput, AssessmentUncheckedCreateWithoutChapter_takenInput> | AssessmentCreateWithoutChapter_takenInput[] | AssessmentUncheckedCreateWithoutChapter_takenInput[]
    connectOrCreate?: AssessmentCreateOrConnectWithoutChapter_takenInput | AssessmentCreateOrConnectWithoutChapter_takenInput[]
    createMany?: AssessmentCreateManyChapter_takenInputEnvelope
    connect?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
  }

  export type UserProgresCreateNestedManyWithoutChapter_takenInput = {
    create?: XOR<UserProgresCreateWithoutChapter_takenInput, UserProgresUncheckedCreateWithoutChapter_takenInput> | UserProgresCreateWithoutChapter_takenInput[] | UserProgresUncheckedCreateWithoutChapter_takenInput[]
    connectOrCreate?: UserProgresCreateOrConnectWithoutChapter_takenInput | UserProgresCreateOrConnectWithoutChapter_takenInput[]
    createMany?: UserProgresCreateManyChapter_takenInputEnvelope
    connect?: UserProgresWhereUniqueInput | UserProgresWhereUniqueInput[]
  }

  export type AiReportUncheckedCreateNestedManyWithoutChapter_takenInput = {
    create?: XOR<AiReportCreateWithoutChapter_takenInput, AiReportUncheckedCreateWithoutChapter_takenInput> | AiReportCreateWithoutChapter_takenInput[] | AiReportUncheckedCreateWithoutChapter_takenInput[]
    connectOrCreate?: AiReportCreateOrConnectWithoutChapter_takenInput | AiReportCreateOrConnectWithoutChapter_takenInput[]
    createMany?: AiReportCreateManyChapter_takenInputEnvelope
    connect?: AiReportWhereUniqueInput | AiReportWhereUniqueInput[]
  }

  export type AssessmentUncheckedCreateNestedManyWithoutChapter_takenInput = {
    create?: XOR<AssessmentCreateWithoutChapter_takenInput, AssessmentUncheckedCreateWithoutChapter_takenInput> | AssessmentCreateWithoutChapter_takenInput[] | AssessmentUncheckedCreateWithoutChapter_takenInput[]
    connectOrCreate?: AssessmentCreateOrConnectWithoutChapter_takenInput | AssessmentCreateOrConnectWithoutChapter_takenInput[]
    createMany?: AssessmentCreateManyChapter_takenInputEnvelope
    connect?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
  }

  export type UserProgresUncheckedCreateNestedManyWithoutChapter_takenInput = {
    create?: XOR<UserProgresCreateWithoutChapter_takenInput, UserProgresUncheckedCreateWithoutChapter_takenInput> | UserProgresCreateWithoutChapter_takenInput[] | UserProgresUncheckedCreateWithoutChapter_takenInput[]
    connectOrCreate?: UserProgresCreateOrConnectWithoutChapter_takenInput | UserProgresCreateOrConnectWithoutChapter_takenInput[]
    createMany?: UserProgresCreateManyChapter_takenInputEnvelope
    connect?: UserProgresWhereUniqueInput | UserProgresWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutChapter_takenNestedInput = {
    create?: XOR<UserCreateWithoutChapter_takenInput, UserUncheckedCreateWithoutChapter_takenInput>
    connectOrCreate?: UserCreateOrConnectWithoutChapter_takenInput
    upsert?: UserUpsertWithoutChapter_takenInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutChapter_takenInput, UserUpdateWithoutChapter_takenInput>, UserUncheckedUpdateWithoutChapter_takenInput>
  }

  export type ChapterUpdateOneRequiredWithoutChapter_takenNestedInput = {
    create?: XOR<ChapterCreateWithoutChapter_takenInput, ChapterUncheckedCreateWithoutChapter_takenInput>
    connectOrCreate?: ChapterCreateOrConnectWithoutChapter_takenInput
    upsert?: ChapterUpsertWithoutChapter_takenInput
    connect?: ChapterWhereUniqueInput
    update?: XOR<XOR<ChapterUpdateToOneWithWhereWithoutChapter_takenInput, ChapterUpdateWithoutChapter_takenInput>, ChapterUncheckedUpdateWithoutChapter_takenInput>
  }

  export type AiReportUpdateManyWithoutChapter_takenNestedInput = {
    create?: XOR<AiReportCreateWithoutChapter_takenInput, AiReportUncheckedCreateWithoutChapter_takenInput> | AiReportCreateWithoutChapter_takenInput[] | AiReportUncheckedCreateWithoutChapter_takenInput[]
    connectOrCreate?: AiReportCreateOrConnectWithoutChapter_takenInput | AiReportCreateOrConnectWithoutChapter_takenInput[]
    upsert?: AiReportUpsertWithWhereUniqueWithoutChapter_takenInput | AiReportUpsertWithWhereUniqueWithoutChapter_takenInput[]
    createMany?: AiReportCreateManyChapter_takenInputEnvelope
    set?: AiReportWhereUniqueInput | AiReportWhereUniqueInput[]
    disconnect?: AiReportWhereUniqueInput | AiReportWhereUniqueInput[]
    delete?: AiReportWhereUniqueInput | AiReportWhereUniqueInput[]
    connect?: AiReportWhereUniqueInput | AiReportWhereUniqueInput[]
    update?: AiReportUpdateWithWhereUniqueWithoutChapter_takenInput | AiReportUpdateWithWhereUniqueWithoutChapter_takenInput[]
    updateMany?: AiReportUpdateManyWithWhereWithoutChapter_takenInput | AiReportUpdateManyWithWhereWithoutChapter_takenInput[]
    deleteMany?: AiReportScalarWhereInput | AiReportScalarWhereInput[]
  }

  export type AssessmentUpdateManyWithoutChapter_takenNestedInput = {
    create?: XOR<AssessmentCreateWithoutChapter_takenInput, AssessmentUncheckedCreateWithoutChapter_takenInput> | AssessmentCreateWithoutChapter_takenInput[] | AssessmentUncheckedCreateWithoutChapter_takenInput[]
    connectOrCreate?: AssessmentCreateOrConnectWithoutChapter_takenInput | AssessmentCreateOrConnectWithoutChapter_takenInput[]
    upsert?: AssessmentUpsertWithWhereUniqueWithoutChapter_takenInput | AssessmentUpsertWithWhereUniqueWithoutChapter_takenInput[]
    createMany?: AssessmentCreateManyChapter_takenInputEnvelope
    set?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
    disconnect?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
    delete?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
    connect?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
    update?: AssessmentUpdateWithWhereUniqueWithoutChapter_takenInput | AssessmentUpdateWithWhereUniqueWithoutChapter_takenInput[]
    updateMany?: AssessmentUpdateManyWithWhereWithoutChapter_takenInput | AssessmentUpdateManyWithWhereWithoutChapter_takenInput[]
    deleteMany?: AssessmentScalarWhereInput | AssessmentScalarWhereInput[]
  }

  export type UserProgresUpdateManyWithoutChapter_takenNestedInput = {
    create?: XOR<UserProgresCreateWithoutChapter_takenInput, UserProgresUncheckedCreateWithoutChapter_takenInput> | UserProgresCreateWithoutChapter_takenInput[] | UserProgresUncheckedCreateWithoutChapter_takenInput[]
    connectOrCreate?: UserProgresCreateOrConnectWithoutChapter_takenInput | UserProgresCreateOrConnectWithoutChapter_takenInput[]
    upsert?: UserProgresUpsertWithWhereUniqueWithoutChapter_takenInput | UserProgresUpsertWithWhereUniqueWithoutChapter_takenInput[]
    createMany?: UserProgresCreateManyChapter_takenInputEnvelope
    set?: UserProgresWhereUniqueInput | UserProgresWhereUniqueInput[]
    disconnect?: UserProgresWhereUniqueInput | UserProgresWhereUniqueInput[]
    delete?: UserProgresWhereUniqueInput | UserProgresWhereUniqueInput[]
    connect?: UserProgresWhereUniqueInput | UserProgresWhereUniqueInput[]
    update?: UserProgresUpdateWithWhereUniqueWithoutChapter_takenInput | UserProgresUpdateWithWhereUniqueWithoutChapter_takenInput[]
    updateMany?: UserProgresUpdateManyWithWhereWithoutChapter_takenInput | UserProgresUpdateManyWithWhereWithoutChapter_takenInput[]
    deleteMany?: UserProgresScalarWhereInput | UserProgresScalarWhereInput[]
  }

  export type AiReportUncheckedUpdateManyWithoutChapter_takenNestedInput = {
    create?: XOR<AiReportCreateWithoutChapter_takenInput, AiReportUncheckedCreateWithoutChapter_takenInput> | AiReportCreateWithoutChapter_takenInput[] | AiReportUncheckedCreateWithoutChapter_takenInput[]
    connectOrCreate?: AiReportCreateOrConnectWithoutChapter_takenInput | AiReportCreateOrConnectWithoutChapter_takenInput[]
    upsert?: AiReportUpsertWithWhereUniqueWithoutChapter_takenInput | AiReportUpsertWithWhereUniqueWithoutChapter_takenInput[]
    createMany?: AiReportCreateManyChapter_takenInputEnvelope
    set?: AiReportWhereUniqueInput | AiReportWhereUniqueInput[]
    disconnect?: AiReportWhereUniqueInput | AiReportWhereUniqueInput[]
    delete?: AiReportWhereUniqueInput | AiReportWhereUniqueInput[]
    connect?: AiReportWhereUniqueInput | AiReportWhereUniqueInput[]
    update?: AiReportUpdateWithWhereUniqueWithoutChapter_takenInput | AiReportUpdateWithWhereUniqueWithoutChapter_takenInput[]
    updateMany?: AiReportUpdateManyWithWhereWithoutChapter_takenInput | AiReportUpdateManyWithWhereWithoutChapter_takenInput[]
    deleteMany?: AiReportScalarWhereInput | AiReportScalarWhereInput[]
  }

  export type AssessmentUncheckedUpdateManyWithoutChapter_takenNestedInput = {
    create?: XOR<AssessmentCreateWithoutChapter_takenInput, AssessmentUncheckedCreateWithoutChapter_takenInput> | AssessmentCreateWithoutChapter_takenInput[] | AssessmentUncheckedCreateWithoutChapter_takenInput[]
    connectOrCreate?: AssessmentCreateOrConnectWithoutChapter_takenInput | AssessmentCreateOrConnectWithoutChapter_takenInput[]
    upsert?: AssessmentUpsertWithWhereUniqueWithoutChapter_takenInput | AssessmentUpsertWithWhereUniqueWithoutChapter_takenInput[]
    createMany?: AssessmentCreateManyChapter_takenInputEnvelope
    set?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
    disconnect?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
    delete?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
    connect?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
    update?: AssessmentUpdateWithWhereUniqueWithoutChapter_takenInput | AssessmentUpdateWithWhereUniqueWithoutChapter_takenInput[]
    updateMany?: AssessmentUpdateManyWithWhereWithoutChapter_takenInput | AssessmentUpdateManyWithWhereWithoutChapter_takenInput[]
    deleteMany?: AssessmentScalarWhereInput | AssessmentScalarWhereInput[]
  }

  export type UserProgresUncheckedUpdateManyWithoutChapter_takenNestedInput = {
    create?: XOR<UserProgresCreateWithoutChapter_takenInput, UserProgresUncheckedCreateWithoutChapter_takenInput> | UserProgresCreateWithoutChapter_takenInput[] | UserProgresUncheckedCreateWithoutChapter_takenInput[]
    connectOrCreate?: UserProgresCreateOrConnectWithoutChapter_takenInput | UserProgresCreateOrConnectWithoutChapter_takenInput[]
    upsert?: UserProgresUpsertWithWhereUniqueWithoutChapter_takenInput | UserProgresUpsertWithWhereUniqueWithoutChapter_takenInput[]
    createMany?: UserProgresCreateManyChapter_takenInputEnvelope
    set?: UserProgresWhereUniqueInput | UserProgresWhereUniqueInput[]
    disconnect?: UserProgresWhereUniqueInput | UserProgresWhereUniqueInput[]
    delete?: UserProgresWhereUniqueInput | UserProgresWhereUniqueInput[]
    connect?: UserProgresWhereUniqueInput | UserProgresWhereUniqueInput[]
    update?: UserProgresUpdateWithWhereUniqueWithoutChapter_takenInput | UserProgresUpdateWithWhereUniqueWithoutChapter_takenInput[]
    updateMany?: UserProgresUpdateManyWithWhereWithoutChapter_takenInput | UserProgresUpdateManyWithWhereWithoutChapter_takenInput[]
    deleteMany?: UserProgresScalarWhereInput | UserProgresScalarWhereInput[]
  }

  export type ChapterTakenCreateNestedOneWithoutAssessmentsInput = {
    create?: XOR<ChapterTakenCreateWithoutAssessmentsInput, ChapterTakenUncheckedCreateWithoutAssessmentsInput>
    connectOrCreate?: ChapterTakenCreateOrConnectWithoutAssessmentsInput
    connect?: ChapterTakenWhereUniqueInput
  }

  export type SubChapterCreateNestedOneWithoutAssessmentsInput = {
    create?: XOR<SubChapterCreateWithoutAssessmentsInput, SubChapterUncheckedCreateWithoutAssessmentsInput>
    connectOrCreate?: SubChapterCreateOrConnectWithoutAssessmentsInput
    connect?: SubChapterWhereUniqueInput
  }

  export type QuestionCreateNestedManyWithoutAssessmentInput = {
    create?: XOR<QuestionCreateWithoutAssessmentInput, QuestionUncheckedCreateWithoutAssessmentInput> | QuestionCreateWithoutAssessmentInput[] | QuestionUncheckedCreateWithoutAssessmentInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutAssessmentInput | QuestionCreateOrConnectWithoutAssessmentInput[]
    createMany?: QuestionCreateManyAssessmentInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type UserAttemptCreateNestedManyWithoutAssessmentInput = {
    create?: XOR<UserAttemptCreateWithoutAssessmentInput, UserAttemptUncheckedCreateWithoutAssessmentInput> | UserAttemptCreateWithoutAssessmentInput[] | UserAttemptUncheckedCreateWithoutAssessmentInput[]
    connectOrCreate?: UserAttemptCreateOrConnectWithoutAssessmentInput | UserAttemptCreateOrConnectWithoutAssessmentInput[]
    createMany?: UserAttemptCreateManyAssessmentInputEnvelope
    connect?: UserAttemptWhereUniqueInput | UserAttemptWhereUniqueInput[]
  }

  export type QuestionUncheckedCreateNestedManyWithoutAssessmentInput = {
    create?: XOR<QuestionCreateWithoutAssessmentInput, QuestionUncheckedCreateWithoutAssessmentInput> | QuestionCreateWithoutAssessmentInput[] | QuestionUncheckedCreateWithoutAssessmentInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutAssessmentInput | QuestionCreateOrConnectWithoutAssessmentInput[]
    createMany?: QuestionCreateManyAssessmentInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type UserAttemptUncheckedCreateNestedManyWithoutAssessmentInput = {
    create?: XOR<UserAttemptCreateWithoutAssessmentInput, UserAttemptUncheckedCreateWithoutAssessmentInput> | UserAttemptCreateWithoutAssessmentInput[] | UserAttemptUncheckedCreateWithoutAssessmentInput[]
    connectOrCreate?: UserAttemptCreateOrConnectWithoutAssessmentInput | UserAttemptCreateOrConnectWithoutAssessmentInput[]
    createMany?: UserAttemptCreateManyAssessmentInputEnvelope
    connect?: UserAttemptWhereUniqueInput | UserAttemptWhereUniqueInput[]
  }

  export type EnumAssessmentTypeFieldUpdateOperationsInput = {
    set?: $Enums.AssessmentType
  }

  export type ChapterTakenUpdateOneRequiredWithoutAssessmentsNestedInput = {
    create?: XOR<ChapterTakenCreateWithoutAssessmentsInput, ChapterTakenUncheckedCreateWithoutAssessmentsInput>
    connectOrCreate?: ChapterTakenCreateOrConnectWithoutAssessmentsInput
    upsert?: ChapterTakenUpsertWithoutAssessmentsInput
    connect?: ChapterTakenWhereUniqueInput
    update?: XOR<XOR<ChapterTakenUpdateToOneWithWhereWithoutAssessmentsInput, ChapterTakenUpdateWithoutAssessmentsInput>, ChapterTakenUncheckedUpdateWithoutAssessmentsInput>
  }

  export type SubChapterUpdateOneRequiredWithoutAssessmentsNestedInput = {
    create?: XOR<SubChapterCreateWithoutAssessmentsInput, SubChapterUncheckedCreateWithoutAssessmentsInput>
    connectOrCreate?: SubChapterCreateOrConnectWithoutAssessmentsInput
    upsert?: SubChapterUpsertWithoutAssessmentsInput
    connect?: SubChapterWhereUniqueInput
    update?: XOR<XOR<SubChapterUpdateToOneWithWhereWithoutAssessmentsInput, SubChapterUpdateWithoutAssessmentsInput>, SubChapterUncheckedUpdateWithoutAssessmentsInput>
  }

  export type QuestionUpdateManyWithoutAssessmentNestedInput = {
    create?: XOR<QuestionCreateWithoutAssessmentInput, QuestionUncheckedCreateWithoutAssessmentInput> | QuestionCreateWithoutAssessmentInput[] | QuestionUncheckedCreateWithoutAssessmentInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutAssessmentInput | QuestionCreateOrConnectWithoutAssessmentInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutAssessmentInput | QuestionUpsertWithWhereUniqueWithoutAssessmentInput[]
    createMany?: QuestionCreateManyAssessmentInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutAssessmentInput | QuestionUpdateWithWhereUniqueWithoutAssessmentInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutAssessmentInput | QuestionUpdateManyWithWhereWithoutAssessmentInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type UserAttemptUpdateManyWithoutAssessmentNestedInput = {
    create?: XOR<UserAttemptCreateWithoutAssessmentInput, UserAttemptUncheckedCreateWithoutAssessmentInput> | UserAttemptCreateWithoutAssessmentInput[] | UserAttemptUncheckedCreateWithoutAssessmentInput[]
    connectOrCreate?: UserAttemptCreateOrConnectWithoutAssessmentInput | UserAttemptCreateOrConnectWithoutAssessmentInput[]
    upsert?: UserAttemptUpsertWithWhereUniqueWithoutAssessmentInput | UserAttemptUpsertWithWhereUniqueWithoutAssessmentInput[]
    createMany?: UserAttemptCreateManyAssessmentInputEnvelope
    set?: UserAttemptWhereUniqueInput | UserAttemptWhereUniqueInput[]
    disconnect?: UserAttemptWhereUniqueInput | UserAttemptWhereUniqueInput[]
    delete?: UserAttemptWhereUniqueInput | UserAttemptWhereUniqueInput[]
    connect?: UserAttemptWhereUniqueInput | UserAttemptWhereUniqueInput[]
    update?: UserAttemptUpdateWithWhereUniqueWithoutAssessmentInput | UserAttemptUpdateWithWhereUniqueWithoutAssessmentInput[]
    updateMany?: UserAttemptUpdateManyWithWhereWithoutAssessmentInput | UserAttemptUpdateManyWithWhereWithoutAssessmentInput[]
    deleteMany?: UserAttemptScalarWhereInput | UserAttemptScalarWhereInput[]
  }

  export type QuestionUncheckedUpdateManyWithoutAssessmentNestedInput = {
    create?: XOR<QuestionCreateWithoutAssessmentInput, QuestionUncheckedCreateWithoutAssessmentInput> | QuestionCreateWithoutAssessmentInput[] | QuestionUncheckedCreateWithoutAssessmentInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutAssessmentInput | QuestionCreateOrConnectWithoutAssessmentInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutAssessmentInput | QuestionUpsertWithWhereUniqueWithoutAssessmentInput[]
    createMany?: QuestionCreateManyAssessmentInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutAssessmentInput | QuestionUpdateWithWhereUniqueWithoutAssessmentInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutAssessmentInput | QuestionUpdateManyWithWhereWithoutAssessmentInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type UserAttemptUncheckedUpdateManyWithoutAssessmentNestedInput = {
    create?: XOR<UserAttemptCreateWithoutAssessmentInput, UserAttemptUncheckedCreateWithoutAssessmentInput> | UserAttemptCreateWithoutAssessmentInput[] | UserAttemptUncheckedCreateWithoutAssessmentInput[]
    connectOrCreate?: UserAttemptCreateOrConnectWithoutAssessmentInput | UserAttemptCreateOrConnectWithoutAssessmentInput[]
    upsert?: UserAttemptUpsertWithWhereUniqueWithoutAssessmentInput | UserAttemptUpsertWithWhereUniqueWithoutAssessmentInput[]
    createMany?: UserAttemptCreateManyAssessmentInputEnvelope
    set?: UserAttemptWhereUniqueInput | UserAttemptWhereUniqueInput[]
    disconnect?: UserAttemptWhereUniqueInput | UserAttemptWhereUniqueInput[]
    delete?: UserAttemptWhereUniqueInput | UserAttemptWhereUniqueInput[]
    connect?: UserAttemptWhereUniqueInput | UserAttemptWhereUniqueInput[]
    update?: UserAttemptUpdateWithWhereUniqueWithoutAssessmentInput | UserAttemptUpdateWithWhereUniqueWithoutAssessmentInput[]
    updateMany?: UserAttemptUpdateManyWithWhereWithoutAssessmentInput | UserAttemptUpdateManyWithWhereWithoutAssessmentInput[]
    deleteMany?: UserAttemptScalarWhereInput | UserAttemptScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAi_reportsInput = {
    create?: XOR<UserCreateWithoutAi_reportsInput, UserUncheckedCreateWithoutAi_reportsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAi_reportsInput
    connect?: UserWhereUniqueInput
  }

  export type ChapterTakenCreateNestedOneWithoutAi_reportsInput = {
    create?: XOR<ChapterTakenCreateWithoutAi_reportsInput, ChapterTakenUncheckedCreateWithoutAi_reportsInput>
    connectOrCreate?: ChapterTakenCreateOrConnectWithoutAi_reportsInput
    connect?: ChapterTakenWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAi_reportsNestedInput = {
    create?: XOR<UserCreateWithoutAi_reportsInput, UserUncheckedCreateWithoutAi_reportsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAi_reportsInput
    upsert?: UserUpsertWithoutAi_reportsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAi_reportsInput, UserUpdateWithoutAi_reportsInput>, UserUncheckedUpdateWithoutAi_reportsInput>
  }

  export type ChapterTakenUpdateOneRequiredWithoutAi_reportsNestedInput = {
    create?: XOR<ChapterTakenCreateWithoutAi_reportsInput, ChapterTakenUncheckedCreateWithoutAi_reportsInput>
    connectOrCreate?: ChapterTakenCreateOrConnectWithoutAi_reportsInput
    upsert?: ChapterTakenUpsertWithoutAi_reportsInput
    connect?: ChapterTakenWhereUniqueInput
    update?: XOR<XOR<ChapterTakenUpdateToOneWithWhereWithoutAi_reportsInput, ChapterTakenUpdateWithoutAi_reportsInput>, ChapterTakenUncheckedUpdateWithoutAi_reportsInput>
  }

  export type ChapterCreateNestedOneWithoutPrerequisites_baseInput = {
    create?: XOR<ChapterCreateWithoutPrerequisites_baseInput, ChapterUncheckedCreateWithoutPrerequisites_baseInput>
    connectOrCreate?: ChapterCreateOrConnectWithoutPrerequisites_baseInput
    connect?: ChapterWhereUniqueInput
  }

  export type ChapterCreateNestedOneWithoutPrerequisites_requirementInput = {
    create?: XOR<ChapterCreateWithoutPrerequisites_requirementInput, ChapterUncheckedCreateWithoutPrerequisites_requirementInput>
    connectOrCreate?: ChapterCreateOrConnectWithoutPrerequisites_requirementInput
    connect?: ChapterWhereUniqueInput
  }

  export type ChapterUpdateOneRequiredWithoutPrerequisites_baseNestedInput = {
    create?: XOR<ChapterCreateWithoutPrerequisites_baseInput, ChapterUncheckedCreateWithoutPrerequisites_baseInput>
    connectOrCreate?: ChapterCreateOrConnectWithoutPrerequisites_baseInput
    upsert?: ChapterUpsertWithoutPrerequisites_baseInput
    connect?: ChapterWhereUniqueInput
    update?: XOR<XOR<ChapterUpdateToOneWithWhereWithoutPrerequisites_baseInput, ChapterUpdateWithoutPrerequisites_baseInput>, ChapterUncheckedUpdateWithoutPrerequisites_baseInput>
  }

  export type ChapterUpdateOneRequiredWithoutPrerequisites_requirementNestedInput = {
    create?: XOR<ChapterCreateWithoutPrerequisites_requirementInput, ChapterUncheckedCreateWithoutPrerequisites_requirementInput>
    connectOrCreate?: ChapterCreateOrConnectWithoutPrerequisites_requirementInput
    upsert?: ChapterUpsertWithoutPrerequisites_requirementInput
    connect?: ChapterWhereUniqueInput
    update?: XOR<XOR<ChapterUpdateToOneWithWhereWithoutPrerequisites_requirementInput, ChapterUpdateWithoutPrerequisites_requirementInput>, ChapterUncheckedUpdateWithoutPrerequisites_requirementInput>
  }

  export type AssessmentCreateNestedOneWithoutQuestionsInput = {
    create?: XOR<AssessmentCreateWithoutQuestionsInput, AssessmentUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: AssessmentCreateOrConnectWithoutQuestionsInput
    connect?: AssessmentWhereUniqueInput
  }

  export type EnumDifficultyLevelFieldUpdateOperationsInput = {
    set?: $Enums.DifficultyLevel
  }

  export type AssessmentUpdateOneRequiredWithoutQuestionsNestedInput = {
    create?: XOR<AssessmentCreateWithoutQuestionsInput, AssessmentUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: AssessmentCreateOrConnectWithoutQuestionsInput
    upsert?: AssessmentUpsertWithoutQuestionsInput
    connect?: AssessmentWhereUniqueInput
    update?: XOR<XOR<AssessmentUpdateToOneWithWhereWithoutQuestionsInput, AssessmentUpdateWithoutQuestionsInput>, AssessmentUncheckedUpdateWithoutQuestionsInput>
  }

  export type UserCreateNestedOneWithoutUser_attemptsInput = {
    create?: XOR<UserCreateWithoutUser_attemptsInput, UserUncheckedCreateWithoutUser_attemptsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUser_attemptsInput
    connect?: UserWhereUniqueInput
  }

  export type AssessmentCreateNestedOneWithoutUser_attemptsInput = {
    create?: XOR<AssessmentCreateWithoutUser_attemptsInput, AssessmentUncheckedCreateWithoutUser_attemptsInput>
    connectOrCreate?: AssessmentCreateOrConnectWithoutUser_attemptsInput
    connect?: AssessmentWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutUser_attemptsNestedInput = {
    create?: XOR<UserCreateWithoutUser_attemptsInput, UserUncheckedCreateWithoutUser_attemptsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUser_attemptsInput
    upsert?: UserUpsertWithoutUser_attemptsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUser_attemptsInput, UserUpdateWithoutUser_attemptsInput>, UserUncheckedUpdateWithoutUser_attemptsInput>
  }

  export type AssessmentUpdateOneRequiredWithoutUser_attemptsNestedInput = {
    create?: XOR<AssessmentCreateWithoutUser_attemptsInput, AssessmentUncheckedCreateWithoutUser_attemptsInput>
    connectOrCreate?: AssessmentCreateOrConnectWithoutUser_attemptsInput
    upsert?: AssessmentUpsertWithoutUser_attemptsInput
    connect?: AssessmentWhereUniqueInput
    update?: XOR<XOR<AssessmentUpdateToOneWithWhereWithoutUser_attemptsInput, AssessmentUpdateWithoutUser_attemptsInput>, AssessmentUncheckedUpdateWithoutUser_attemptsInput>
  }

  export type UserCreateNestedOneWithoutUser_progresInput = {
    create?: XOR<UserCreateWithoutUser_progresInput, UserUncheckedCreateWithoutUser_progresInput>
    connectOrCreate?: UserCreateOrConnectWithoutUser_progresInput
    connect?: UserWhereUniqueInput
  }

  export type SubChapterCreateNestedOneWithoutUser_progresInput = {
    create?: XOR<SubChapterCreateWithoutUser_progresInput, SubChapterUncheckedCreateWithoutUser_progresInput>
    connectOrCreate?: SubChapterCreateOrConnectWithoutUser_progresInput
    connect?: SubChapterWhereUniqueInput
  }

  export type ChapterTakenCreateNestedOneWithoutUser_progresInput = {
    create?: XOR<ChapterTakenCreateWithoutUser_progresInput, ChapterTakenUncheckedCreateWithoutUser_progresInput>
    connectOrCreate?: ChapterTakenCreateOrConnectWithoutUser_progresInput
    connect?: ChapterTakenWhereUniqueInput
  }

  export type EnumCurrentLevelFieldUpdateOperationsInput = {
    set?: $Enums.CurrentLevel
  }

  export type EnumProgressStatusFieldUpdateOperationsInput = {
    set?: $Enums.ProgressStatus
  }

  export type UserUpdateOneRequiredWithoutUser_progresNestedInput = {
    create?: XOR<UserCreateWithoutUser_progresInput, UserUncheckedCreateWithoutUser_progresInput>
    connectOrCreate?: UserCreateOrConnectWithoutUser_progresInput
    upsert?: UserUpsertWithoutUser_progresInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUser_progresInput, UserUpdateWithoutUser_progresInput>, UserUncheckedUpdateWithoutUser_progresInput>
  }

  export type SubChapterUpdateOneRequiredWithoutUser_progresNestedInput = {
    create?: XOR<SubChapterCreateWithoutUser_progresInput, SubChapterUncheckedCreateWithoutUser_progresInput>
    connectOrCreate?: SubChapterCreateOrConnectWithoutUser_progresInput
    upsert?: SubChapterUpsertWithoutUser_progresInput
    connect?: SubChapterWhereUniqueInput
    update?: XOR<XOR<SubChapterUpdateToOneWithWhereWithoutUser_progresInput, SubChapterUpdateWithoutUser_progresInput>, SubChapterUncheckedUpdateWithoutUser_progresInput>
  }

  export type ChapterTakenUpdateOneRequiredWithoutUser_progresNestedInput = {
    create?: XOR<ChapterTakenCreateWithoutUser_progresInput, ChapterTakenUncheckedCreateWithoutUser_progresInput>
    connectOrCreate?: ChapterTakenCreateOrConnectWithoutUser_progresInput
    upsert?: ChapterTakenUpsertWithoutUser_progresInput
    connect?: ChapterTakenWhereUniqueInput
    update?: XOR<XOR<ChapterTakenUpdateToOneWithWhereWithoutUser_progresInput, ChapterTakenUpdateWithoutUser_progresInput>, ChapterTakenUncheckedUpdateWithoutUser_progresInput>
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type NestedEnumAssessmentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AssessmentType | EnumAssessmentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AssessmentType[]
    notIn?: $Enums.AssessmentType[]
    not?: NestedEnumAssessmentTypeFilter<$PrismaModel> | $Enums.AssessmentType
  }

  export type NestedEnumAssessmentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AssessmentType | EnumAssessmentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AssessmentType[]
    notIn?: $Enums.AssessmentType[]
    not?: NestedEnumAssessmentTypeWithAggregatesFilter<$PrismaModel> | $Enums.AssessmentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAssessmentTypeFilter<$PrismaModel>
    _max?: NestedEnumAssessmentTypeFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumDifficultyLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.DifficultyLevel | EnumDifficultyLevelFieldRefInput<$PrismaModel>
    in?: $Enums.DifficultyLevel[]
    notIn?: $Enums.DifficultyLevel[]
    not?: NestedEnumDifficultyLevelFilter<$PrismaModel> | $Enums.DifficultyLevel
  }

  export type NestedEnumDifficultyLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DifficultyLevel | EnumDifficultyLevelFieldRefInput<$PrismaModel>
    in?: $Enums.DifficultyLevel[]
    notIn?: $Enums.DifficultyLevel[]
    not?: NestedEnumDifficultyLevelWithAggregatesFilter<$PrismaModel> | $Enums.DifficultyLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDifficultyLevelFilter<$PrismaModel>
    _max?: NestedEnumDifficultyLevelFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumCurrentLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.CurrentLevel | EnumCurrentLevelFieldRefInput<$PrismaModel>
    in?: $Enums.CurrentLevel[]
    notIn?: $Enums.CurrentLevel[]
    not?: NestedEnumCurrentLevelFilter<$PrismaModel> | $Enums.CurrentLevel
  }

  export type NestedEnumProgressStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProgressStatus | EnumProgressStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProgressStatus[]
    notIn?: $Enums.ProgressStatus[]
    not?: NestedEnumProgressStatusFilter<$PrismaModel> | $Enums.ProgressStatus
  }

  export type NestedEnumCurrentLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CurrentLevel | EnumCurrentLevelFieldRefInput<$PrismaModel>
    in?: $Enums.CurrentLevel[]
    notIn?: $Enums.CurrentLevel[]
    not?: NestedEnumCurrentLevelWithAggregatesFilter<$PrismaModel> | $Enums.CurrentLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCurrentLevelFilter<$PrismaModel>
    _max?: NestedEnumCurrentLevelFilter<$PrismaModel>
  }

  export type NestedEnumProgressStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProgressStatus | EnumProgressStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProgressStatus[]
    notIn?: $Enums.ProgressStatus[]
    not?: NestedEnumProgressStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProgressStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProgressStatusFilter<$PrismaModel>
    _max?: NestedEnumProgressStatusFilter<$PrismaModel>
  }

  export type AiReportCreateWithoutUserInput = {
    id: string
    evaluation_text: string
    recomendation_list: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    chapter_taken: ChapterTakenCreateNestedOneWithoutAi_reportsInput
  }

  export type AiReportUncheckedCreateWithoutUserInput = {
    id: string
    chapter_taken_id: string
    evaluation_text: string
    recomendation_list: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type AiReportCreateOrConnectWithoutUserInput = {
    where: AiReportWhereUniqueInput
    create: XOR<AiReportCreateWithoutUserInput, AiReportUncheckedCreateWithoutUserInput>
  }

  export type AiReportCreateManyUserInputEnvelope = {
    data: AiReportCreateManyUserInput | AiReportCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ChapterTakenCreateWithoutUserInput = {
    id: string
    created_at?: Date | string
    updated_at?: Date | string
    chapter: ChapterCreateNestedOneWithoutChapter_takenInput
    ai_reports?: AiReportCreateNestedManyWithoutChapter_takenInput
    assessments?: AssessmentCreateNestedManyWithoutChapter_takenInput
    user_progres?: UserProgresCreateNestedManyWithoutChapter_takenInput
  }

  export type ChapterTakenUncheckedCreateWithoutUserInput = {
    id: string
    chapter_id: string
    created_at?: Date | string
    updated_at?: Date | string
    ai_reports?: AiReportUncheckedCreateNestedManyWithoutChapter_takenInput
    assessments?: AssessmentUncheckedCreateNestedManyWithoutChapter_takenInput
    user_progres?: UserProgresUncheckedCreateNestedManyWithoutChapter_takenInput
  }

  export type ChapterTakenCreateOrConnectWithoutUserInput = {
    where: ChapterTakenWhereUniqueInput
    create: XOR<ChapterTakenCreateWithoutUserInput, ChapterTakenUncheckedCreateWithoutUserInput>
  }

  export type ChapterTakenCreateManyUserInputEnvelope = {
    data: ChapterTakenCreateManyUserInput | ChapterTakenCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserAttemptCreateWithoutUserInput = {
    id: string
    score: number
    completed_at?: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    assessment: AssessmentCreateNestedOneWithoutUser_attemptsInput
  }

  export type UserAttemptUncheckedCreateWithoutUserInput = {
    id: string
    assessement_id: string
    score: number
    completed_at?: Date | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserAttemptCreateOrConnectWithoutUserInput = {
    where: UserAttemptWhereUniqueInput
    create: XOR<UserAttemptCreateWithoutUserInput, UserAttemptUncheckedCreateWithoutUserInput>
  }

  export type UserAttemptCreateManyUserInputEnvelope = {
    data: UserAttemptCreateManyUserInput | UserAttemptCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserProgresCreateWithoutUserInput = {
    id: string
    current_level: $Enums.CurrentLevel
    status: $Enums.ProgressStatus
    created_at?: Date | string
    updated_at?: Date | string
    sub_chapter: SubChapterCreateNestedOneWithoutUser_progresInput
    chapter_taken: ChapterTakenCreateNestedOneWithoutUser_progresInput
  }

  export type UserProgresUncheckedCreateWithoutUserInput = {
    id: string
    sub_chapter_id: string
    chapter_taken_id: string
    current_level: $Enums.CurrentLevel
    status: $Enums.ProgressStatus
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserProgresCreateOrConnectWithoutUserInput = {
    where: UserProgresWhereUniqueInput
    create: XOR<UserProgresCreateWithoutUserInput, UserProgresUncheckedCreateWithoutUserInput>
  }

  export type UserProgresCreateManyUserInputEnvelope = {
    data: UserProgresCreateManyUserInput | UserProgresCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AiReportUpsertWithWhereUniqueWithoutUserInput = {
    where: AiReportWhereUniqueInput
    update: XOR<AiReportUpdateWithoutUserInput, AiReportUncheckedUpdateWithoutUserInput>
    create: XOR<AiReportCreateWithoutUserInput, AiReportUncheckedCreateWithoutUserInput>
  }

  export type AiReportUpdateWithWhereUniqueWithoutUserInput = {
    where: AiReportWhereUniqueInput
    data: XOR<AiReportUpdateWithoutUserInput, AiReportUncheckedUpdateWithoutUserInput>
  }

  export type AiReportUpdateManyWithWhereWithoutUserInput = {
    where: AiReportScalarWhereInput
    data: XOR<AiReportUpdateManyMutationInput, AiReportUncheckedUpdateManyWithoutUserInput>
  }

  export type AiReportScalarWhereInput = {
    AND?: AiReportScalarWhereInput | AiReportScalarWhereInput[]
    OR?: AiReportScalarWhereInput[]
    NOT?: AiReportScalarWhereInput | AiReportScalarWhereInput[]
    id?: StringFilter<"AiReport"> | string
    user_id?: StringFilter<"AiReport"> | string
    chapter_taken_id?: StringFilter<"AiReport"> | string
    evaluation_text?: StringFilter<"AiReport"> | string
    recomendation_list?: JsonFilter<"AiReport">
    created_at?: DateTimeFilter<"AiReport"> | Date | string
    updated_at?: DateTimeFilter<"AiReport"> | Date | string
  }

  export type ChapterTakenUpsertWithWhereUniqueWithoutUserInput = {
    where: ChapterTakenWhereUniqueInput
    update: XOR<ChapterTakenUpdateWithoutUserInput, ChapterTakenUncheckedUpdateWithoutUserInput>
    create: XOR<ChapterTakenCreateWithoutUserInput, ChapterTakenUncheckedCreateWithoutUserInput>
  }

  export type ChapterTakenUpdateWithWhereUniqueWithoutUserInput = {
    where: ChapterTakenWhereUniqueInput
    data: XOR<ChapterTakenUpdateWithoutUserInput, ChapterTakenUncheckedUpdateWithoutUserInput>
  }

  export type ChapterTakenUpdateManyWithWhereWithoutUserInput = {
    where: ChapterTakenScalarWhereInput
    data: XOR<ChapterTakenUpdateManyMutationInput, ChapterTakenUncheckedUpdateManyWithoutUserInput>
  }

  export type ChapterTakenScalarWhereInput = {
    AND?: ChapterTakenScalarWhereInput | ChapterTakenScalarWhereInput[]
    OR?: ChapterTakenScalarWhereInput[]
    NOT?: ChapterTakenScalarWhereInput | ChapterTakenScalarWhereInput[]
    id?: StringFilter<"ChapterTaken"> | string
    user_id?: StringFilter<"ChapterTaken"> | string
    chapter_id?: StringFilter<"ChapterTaken"> | string
    created_at?: DateTimeFilter<"ChapterTaken"> | Date | string
    updated_at?: DateTimeFilter<"ChapterTaken"> | Date | string
  }

  export type UserAttemptUpsertWithWhereUniqueWithoutUserInput = {
    where: UserAttemptWhereUniqueInput
    update: XOR<UserAttemptUpdateWithoutUserInput, UserAttemptUncheckedUpdateWithoutUserInput>
    create: XOR<UserAttemptCreateWithoutUserInput, UserAttemptUncheckedCreateWithoutUserInput>
  }

  export type UserAttemptUpdateWithWhereUniqueWithoutUserInput = {
    where: UserAttemptWhereUniqueInput
    data: XOR<UserAttemptUpdateWithoutUserInput, UserAttemptUncheckedUpdateWithoutUserInput>
  }

  export type UserAttemptUpdateManyWithWhereWithoutUserInput = {
    where: UserAttemptScalarWhereInput
    data: XOR<UserAttemptUpdateManyMutationInput, UserAttemptUncheckedUpdateManyWithoutUserInput>
  }

  export type UserAttemptScalarWhereInput = {
    AND?: UserAttemptScalarWhereInput | UserAttemptScalarWhereInput[]
    OR?: UserAttemptScalarWhereInput[]
    NOT?: UserAttemptScalarWhereInput | UserAttemptScalarWhereInput[]
    id?: StringFilter<"UserAttempt"> | string
    user_id?: StringFilter<"UserAttempt"> | string
    assessement_id?: StringFilter<"UserAttempt"> | string
    score?: FloatFilter<"UserAttempt"> | number
    completed_at?: DateTimeFilter<"UserAttempt"> | Date | string
    created_at?: DateTimeFilter<"UserAttempt"> | Date | string
    updated_at?: DateTimeFilter<"UserAttempt"> | Date | string
  }

  export type UserProgresUpsertWithWhereUniqueWithoutUserInput = {
    where: UserProgresWhereUniqueInput
    update: XOR<UserProgresUpdateWithoutUserInput, UserProgresUncheckedUpdateWithoutUserInput>
    create: XOR<UserProgresCreateWithoutUserInput, UserProgresUncheckedCreateWithoutUserInput>
  }

  export type UserProgresUpdateWithWhereUniqueWithoutUserInput = {
    where: UserProgresWhereUniqueInput
    data: XOR<UserProgresUpdateWithoutUserInput, UserProgresUncheckedUpdateWithoutUserInput>
  }

  export type UserProgresUpdateManyWithWhereWithoutUserInput = {
    where: UserProgresScalarWhereInput
    data: XOR<UserProgresUpdateManyMutationInput, UserProgresUncheckedUpdateManyWithoutUserInput>
  }

  export type UserProgresScalarWhereInput = {
    AND?: UserProgresScalarWhereInput | UserProgresScalarWhereInput[]
    OR?: UserProgresScalarWhereInput[]
    NOT?: UserProgresScalarWhereInput | UserProgresScalarWhereInput[]
    id?: StringFilter<"UserProgres"> | string
    user_id?: StringFilter<"UserProgres"> | string
    sub_chapter_id?: StringFilter<"UserProgres"> | string
    chapter_taken_id?: StringFilter<"UserProgres"> | string
    current_level?: EnumCurrentLevelFilter<"UserProgres"> | $Enums.CurrentLevel
    status?: EnumProgressStatusFilter<"UserProgres"> | $Enums.ProgressStatus
    created_at?: DateTimeFilter<"UserProgres"> | Date | string
    updated_at?: DateTimeFilter<"UserProgres"> | Date | string
  }

  export type ChapterTakenCreateWithoutChapterInput = {
    id: string
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutChapter_takenInput
    ai_reports?: AiReportCreateNestedManyWithoutChapter_takenInput
    assessments?: AssessmentCreateNestedManyWithoutChapter_takenInput
    user_progres?: UserProgresCreateNestedManyWithoutChapter_takenInput
  }

  export type ChapterTakenUncheckedCreateWithoutChapterInput = {
    id: string
    user_id: string
    created_at?: Date | string
    updated_at?: Date | string
    ai_reports?: AiReportUncheckedCreateNestedManyWithoutChapter_takenInput
    assessments?: AssessmentUncheckedCreateNestedManyWithoutChapter_takenInput
    user_progres?: UserProgresUncheckedCreateNestedManyWithoutChapter_takenInput
  }

  export type ChapterTakenCreateOrConnectWithoutChapterInput = {
    where: ChapterTakenWhereUniqueInput
    create: XOR<ChapterTakenCreateWithoutChapterInput, ChapterTakenUncheckedCreateWithoutChapterInput>
  }

  export type ChapterTakenCreateManyChapterInputEnvelope = {
    data: ChapterTakenCreateManyChapterInput | ChapterTakenCreateManyChapterInput[]
    skipDuplicates?: boolean
  }

  export type PrerequisiteCreateWithoutChapterInput = {
    id: string
    created_at?: Date | string
    updated_at?: Date | string
    prerequisite_chapter: ChapterCreateNestedOneWithoutPrerequisites_requirementInput
  }

  export type PrerequisiteUncheckedCreateWithoutChapterInput = {
    id: string
    prerequisite_chapter_id: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PrerequisiteCreateOrConnectWithoutChapterInput = {
    where: PrerequisiteWhereUniqueInput
    create: XOR<PrerequisiteCreateWithoutChapterInput, PrerequisiteUncheckedCreateWithoutChapterInput>
  }

  export type PrerequisiteCreateManyChapterInputEnvelope = {
    data: PrerequisiteCreateManyChapterInput | PrerequisiteCreateManyChapterInput[]
    skipDuplicates?: boolean
  }

  export type PrerequisiteCreateWithoutPrerequisite_chapterInput = {
    id: string
    created_at?: Date | string
    updated_at?: Date | string
    chapter: ChapterCreateNestedOneWithoutPrerequisites_baseInput
  }

  export type PrerequisiteUncheckedCreateWithoutPrerequisite_chapterInput = {
    id: string
    chapter_id: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PrerequisiteCreateOrConnectWithoutPrerequisite_chapterInput = {
    where: PrerequisiteWhereUniqueInput
    create: XOR<PrerequisiteCreateWithoutPrerequisite_chapterInput, PrerequisiteUncheckedCreateWithoutPrerequisite_chapterInput>
  }

  export type PrerequisiteCreateManyPrerequisite_chapterInputEnvelope = {
    data: PrerequisiteCreateManyPrerequisite_chapterInput | PrerequisiteCreateManyPrerequisite_chapterInput[]
    skipDuplicates?: boolean
  }

  export type SubChapterCreateWithoutChapterInput = {
    id: string
    name: string
    content: string
    created_at?: Date | string
    updated_at?: Date | string
    assessments?: AssessmentCreateNestedManyWithoutSub_chapterInput
    user_progres?: UserProgresCreateNestedManyWithoutSub_chapterInput
  }

  export type SubChapterUncheckedCreateWithoutChapterInput = {
    id: string
    name: string
    content: string
    created_at?: Date | string
    updated_at?: Date | string
    assessments?: AssessmentUncheckedCreateNestedManyWithoutSub_chapterInput
    user_progres?: UserProgresUncheckedCreateNestedManyWithoutSub_chapterInput
  }

  export type SubChapterCreateOrConnectWithoutChapterInput = {
    where: SubChapterWhereUniqueInput
    create: XOR<SubChapterCreateWithoutChapterInput, SubChapterUncheckedCreateWithoutChapterInput>
  }

  export type SubChapterCreateManyChapterInputEnvelope = {
    data: SubChapterCreateManyChapterInput | SubChapterCreateManyChapterInput[]
    skipDuplicates?: boolean
  }

  export type ChapterTakenUpsertWithWhereUniqueWithoutChapterInput = {
    where: ChapterTakenWhereUniqueInput
    update: XOR<ChapterTakenUpdateWithoutChapterInput, ChapterTakenUncheckedUpdateWithoutChapterInput>
    create: XOR<ChapterTakenCreateWithoutChapterInput, ChapterTakenUncheckedCreateWithoutChapterInput>
  }

  export type ChapterTakenUpdateWithWhereUniqueWithoutChapterInput = {
    where: ChapterTakenWhereUniqueInput
    data: XOR<ChapterTakenUpdateWithoutChapterInput, ChapterTakenUncheckedUpdateWithoutChapterInput>
  }

  export type ChapterTakenUpdateManyWithWhereWithoutChapterInput = {
    where: ChapterTakenScalarWhereInput
    data: XOR<ChapterTakenUpdateManyMutationInput, ChapterTakenUncheckedUpdateManyWithoutChapterInput>
  }

  export type PrerequisiteUpsertWithWhereUniqueWithoutChapterInput = {
    where: PrerequisiteWhereUniqueInput
    update: XOR<PrerequisiteUpdateWithoutChapterInput, PrerequisiteUncheckedUpdateWithoutChapterInput>
    create: XOR<PrerequisiteCreateWithoutChapterInput, PrerequisiteUncheckedCreateWithoutChapterInput>
  }

  export type PrerequisiteUpdateWithWhereUniqueWithoutChapterInput = {
    where: PrerequisiteWhereUniqueInput
    data: XOR<PrerequisiteUpdateWithoutChapterInput, PrerequisiteUncheckedUpdateWithoutChapterInput>
  }

  export type PrerequisiteUpdateManyWithWhereWithoutChapterInput = {
    where: PrerequisiteScalarWhereInput
    data: XOR<PrerequisiteUpdateManyMutationInput, PrerequisiteUncheckedUpdateManyWithoutChapterInput>
  }

  export type PrerequisiteScalarWhereInput = {
    AND?: PrerequisiteScalarWhereInput | PrerequisiteScalarWhereInput[]
    OR?: PrerequisiteScalarWhereInput[]
    NOT?: PrerequisiteScalarWhereInput | PrerequisiteScalarWhereInput[]
    id?: StringFilter<"Prerequisite"> | string
    chapter_id?: StringFilter<"Prerequisite"> | string
    prerequisite_chapter_id?: StringFilter<"Prerequisite"> | string
    created_at?: DateTimeFilter<"Prerequisite"> | Date | string
    updated_at?: DateTimeFilter<"Prerequisite"> | Date | string
  }

  export type PrerequisiteUpsertWithWhereUniqueWithoutPrerequisite_chapterInput = {
    where: PrerequisiteWhereUniqueInput
    update: XOR<PrerequisiteUpdateWithoutPrerequisite_chapterInput, PrerequisiteUncheckedUpdateWithoutPrerequisite_chapterInput>
    create: XOR<PrerequisiteCreateWithoutPrerequisite_chapterInput, PrerequisiteUncheckedCreateWithoutPrerequisite_chapterInput>
  }

  export type PrerequisiteUpdateWithWhereUniqueWithoutPrerequisite_chapterInput = {
    where: PrerequisiteWhereUniqueInput
    data: XOR<PrerequisiteUpdateWithoutPrerequisite_chapterInput, PrerequisiteUncheckedUpdateWithoutPrerequisite_chapterInput>
  }

  export type PrerequisiteUpdateManyWithWhereWithoutPrerequisite_chapterInput = {
    where: PrerequisiteScalarWhereInput
    data: XOR<PrerequisiteUpdateManyMutationInput, PrerequisiteUncheckedUpdateManyWithoutPrerequisite_chapterInput>
  }

  export type SubChapterUpsertWithWhereUniqueWithoutChapterInput = {
    where: SubChapterWhereUniqueInput
    update: XOR<SubChapterUpdateWithoutChapterInput, SubChapterUncheckedUpdateWithoutChapterInput>
    create: XOR<SubChapterCreateWithoutChapterInput, SubChapterUncheckedCreateWithoutChapterInput>
  }

  export type SubChapterUpdateWithWhereUniqueWithoutChapterInput = {
    where: SubChapterWhereUniqueInput
    data: XOR<SubChapterUpdateWithoutChapterInput, SubChapterUncheckedUpdateWithoutChapterInput>
  }

  export type SubChapterUpdateManyWithWhereWithoutChapterInput = {
    where: SubChapterScalarWhereInput
    data: XOR<SubChapterUpdateManyMutationInput, SubChapterUncheckedUpdateManyWithoutChapterInput>
  }

  export type SubChapterScalarWhereInput = {
    AND?: SubChapterScalarWhereInput | SubChapterScalarWhereInput[]
    OR?: SubChapterScalarWhereInput[]
    NOT?: SubChapterScalarWhereInput | SubChapterScalarWhereInput[]
    id?: StringFilter<"SubChapter"> | string
    chapter_id?: StringFilter<"SubChapter"> | string
    name?: StringFilter<"SubChapter"> | string
    content?: StringFilter<"SubChapter"> | string
    created_at?: DateTimeFilter<"SubChapter"> | Date | string
    updated_at?: DateTimeFilter<"SubChapter"> | Date | string
  }

  export type ChapterCreateWithoutSub_chaptersInput = {
    id: string
    name: string
    total_sub_chapter: number
    created_at?: Date | string
    updated_at?: Date | string
    chapter_taken?: ChapterTakenCreateNestedManyWithoutChapterInput
    prerequisites_base?: PrerequisiteCreateNestedManyWithoutChapterInput
    prerequisites_requirement?: PrerequisiteCreateNestedManyWithoutPrerequisite_chapterInput
  }

  export type ChapterUncheckedCreateWithoutSub_chaptersInput = {
    id: string
    name: string
    total_sub_chapter: number
    created_at?: Date | string
    updated_at?: Date | string
    chapter_taken?: ChapterTakenUncheckedCreateNestedManyWithoutChapterInput
    prerequisites_base?: PrerequisiteUncheckedCreateNestedManyWithoutChapterInput
    prerequisites_requirement?: PrerequisiteUncheckedCreateNestedManyWithoutPrerequisite_chapterInput
  }

  export type ChapterCreateOrConnectWithoutSub_chaptersInput = {
    where: ChapterWhereUniqueInput
    create: XOR<ChapterCreateWithoutSub_chaptersInput, ChapterUncheckedCreateWithoutSub_chaptersInput>
  }

  export type AssessmentCreateWithoutSub_chapterInput = {
    id: string
    title: string
    type: $Enums.AssessmentType
    correct_answer: number
    created_at?: Date | string
    updated_at?: Date | string
    chapter_taken: ChapterTakenCreateNestedOneWithoutAssessmentsInput
    questions?: QuestionCreateNestedManyWithoutAssessmentInput
    user_attempts?: UserAttemptCreateNestedManyWithoutAssessmentInput
  }

  export type AssessmentUncheckedCreateWithoutSub_chapterInput = {
    id: string
    chapter_taken_id: string
    title: string
    type: $Enums.AssessmentType
    correct_answer: number
    created_at?: Date | string
    updated_at?: Date | string
    questions?: QuestionUncheckedCreateNestedManyWithoutAssessmentInput
    user_attempts?: UserAttemptUncheckedCreateNestedManyWithoutAssessmentInput
  }

  export type AssessmentCreateOrConnectWithoutSub_chapterInput = {
    where: AssessmentWhereUniqueInput
    create: XOR<AssessmentCreateWithoutSub_chapterInput, AssessmentUncheckedCreateWithoutSub_chapterInput>
  }

  export type AssessmentCreateManySub_chapterInputEnvelope = {
    data: AssessmentCreateManySub_chapterInput | AssessmentCreateManySub_chapterInput[]
    skipDuplicates?: boolean
  }

  export type UserProgresCreateWithoutSub_chapterInput = {
    id: string
    current_level: $Enums.CurrentLevel
    status: $Enums.ProgressStatus
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutUser_progresInput
    chapter_taken: ChapterTakenCreateNestedOneWithoutUser_progresInput
  }

  export type UserProgresUncheckedCreateWithoutSub_chapterInput = {
    id: string
    user_id: string
    chapter_taken_id: string
    current_level: $Enums.CurrentLevel
    status: $Enums.ProgressStatus
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserProgresCreateOrConnectWithoutSub_chapterInput = {
    where: UserProgresWhereUniqueInput
    create: XOR<UserProgresCreateWithoutSub_chapterInput, UserProgresUncheckedCreateWithoutSub_chapterInput>
  }

  export type UserProgresCreateManySub_chapterInputEnvelope = {
    data: UserProgresCreateManySub_chapterInput | UserProgresCreateManySub_chapterInput[]
    skipDuplicates?: boolean
  }

  export type ChapterUpsertWithoutSub_chaptersInput = {
    update: XOR<ChapterUpdateWithoutSub_chaptersInput, ChapterUncheckedUpdateWithoutSub_chaptersInput>
    create: XOR<ChapterCreateWithoutSub_chaptersInput, ChapterUncheckedCreateWithoutSub_chaptersInput>
    where?: ChapterWhereInput
  }

  export type ChapterUpdateToOneWithWhereWithoutSub_chaptersInput = {
    where?: ChapterWhereInput
    data: XOR<ChapterUpdateWithoutSub_chaptersInput, ChapterUncheckedUpdateWithoutSub_chaptersInput>
  }

  export type ChapterUpdateWithoutSub_chaptersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    total_sub_chapter?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    chapter_taken?: ChapterTakenUpdateManyWithoutChapterNestedInput
    prerequisites_base?: PrerequisiteUpdateManyWithoutChapterNestedInput
    prerequisites_requirement?: PrerequisiteUpdateManyWithoutPrerequisite_chapterNestedInput
  }

  export type ChapterUncheckedUpdateWithoutSub_chaptersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    total_sub_chapter?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    chapter_taken?: ChapterTakenUncheckedUpdateManyWithoutChapterNestedInput
    prerequisites_base?: PrerequisiteUncheckedUpdateManyWithoutChapterNestedInput
    prerequisites_requirement?: PrerequisiteUncheckedUpdateManyWithoutPrerequisite_chapterNestedInput
  }

  export type AssessmentUpsertWithWhereUniqueWithoutSub_chapterInput = {
    where: AssessmentWhereUniqueInput
    update: XOR<AssessmentUpdateWithoutSub_chapterInput, AssessmentUncheckedUpdateWithoutSub_chapterInput>
    create: XOR<AssessmentCreateWithoutSub_chapterInput, AssessmentUncheckedCreateWithoutSub_chapterInput>
  }

  export type AssessmentUpdateWithWhereUniqueWithoutSub_chapterInput = {
    where: AssessmentWhereUniqueInput
    data: XOR<AssessmentUpdateWithoutSub_chapterInput, AssessmentUncheckedUpdateWithoutSub_chapterInput>
  }

  export type AssessmentUpdateManyWithWhereWithoutSub_chapterInput = {
    where: AssessmentScalarWhereInput
    data: XOR<AssessmentUpdateManyMutationInput, AssessmentUncheckedUpdateManyWithoutSub_chapterInput>
  }

  export type AssessmentScalarWhereInput = {
    AND?: AssessmentScalarWhereInput | AssessmentScalarWhereInput[]
    OR?: AssessmentScalarWhereInput[]
    NOT?: AssessmentScalarWhereInput | AssessmentScalarWhereInput[]
    id?: StringFilter<"Assessment"> | string
    chapter_taken_id?: StringFilter<"Assessment"> | string
    sub_chapter_id?: StringFilter<"Assessment"> | string
    title?: StringFilter<"Assessment"> | string
    type?: EnumAssessmentTypeFilter<"Assessment"> | $Enums.AssessmentType
    correct_answer?: IntFilter<"Assessment"> | number
    created_at?: DateTimeFilter<"Assessment"> | Date | string
    updated_at?: DateTimeFilter<"Assessment"> | Date | string
  }

  export type UserProgresUpsertWithWhereUniqueWithoutSub_chapterInput = {
    where: UserProgresWhereUniqueInput
    update: XOR<UserProgresUpdateWithoutSub_chapterInput, UserProgresUncheckedUpdateWithoutSub_chapterInput>
    create: XOR<UserProgresCreateWithoutSub_chapterInput, UserProgresUncheckedCreateWithoutSub_chapterInput>
  }

  export type UserProgresUpdateWithWhereUniqueWithoutSub_chapterInput = {
    where: UserProgresWhereUniqueInput
    data: XOR<UserProgresUpdateWithoutSub_chapterInput, UserProgresUncheckedUpdateWithoutSub_chapterInput>
  }

  export type UserProgresUpdateManyWithWhereWithoutSub_chapterInput = {
    where: UserProgresScalarWhereInput
    data: XOR<UserProgresUpdateManyMutationInput, UserProgresUncheckedUpdateManyWithoutSub_chapterInput>
  }

  export type UserCreateWithoutChapter_takenInput = {
    id: string
    name: string
    role: $Enums.Role
    gmail: string
    password: string
    birth_date: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    ai_reports?: AiReportCreateNestedManyWithoutUserInput
    user_attempts?: UserAttemptCreateNestedManyWithoutUserInput
    user_progres?: UserProgresCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutChapter_takenInput = {
    id: string
    name: string
    role: $Enums.Role
    gmail: string
    password: string
    birth_date: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    ai_reports?: AiReportUncheckedCreateNestedManyWithoutUserInput
    user_attempts?: UserAttemptUncheckedCreateNestedManyWithoutUserInput
    user_progres?: UserProgresUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutChapter_takenInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChapter_takenInput, UserUncheckedCreateWithoutChapter_takenInput>
  }

  export type ChapterCreateWithoutChapter_takenInput = {
    id: string
    name: string
    total_sub_chapter: number
    created_at?: Date | string
    updated_at?: Date | string
    prerequisites_base?: PrerequisiteCreateNestedManyWithoutChapterInput
    prerequisites_requirement?: PrerequisiteCreateNestedManyWithoutPrerequisite_chapterInput
    sub_chapters?: SubChapterCreateNestedManyWithoutChapterInput
  }

  export type ChapterUncheckedCreateWithoutChapter_takenInput = {
    id: string
    name: string
    total_sub_chapter: number
    created_at?: Date | string
    updated_at?: Date | string
    prerequisites_base?: PrerequisiteUncheckedCreateNestedManyWithoutChapterInput
    prerequisites_requirement?: PrerequisiteUncheckedCreateNestedManyWithoutPrerequisite_chapterInput
    sub_chapters?: SubChapterUncheckedCreateNestedManyWithoutChapterInput
  }

  export type ChapterCreateOrConnectWithoutChapter_takenInput = {
    where: ChapterWhereUniqueInput
    create: XOR<ChapterCreateWithoutChapter_takenInput, ChapterUncheckedCreateWithoutChapter_takenInput>
  }

  export type AiReportCreateWithoutChapter_takenInput = {
    id: string
    evaluation_text: string
    recomendation_list: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutAi_reportsInput
  }

  export type AiReportUncheckedCreateWithoutChapter_takenInput = {
    id: string
    user_id: string
    evaluation_text: string
    recomendation_list: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type AiReportCreateOrConnectWithoutChapter_takenInput = {
    where: AiReportWhereUniqueInput
    create: XOR<AiReportCreateWithoutChapter_takenInput, AiReportUncheckedCreateWithoutChapter_takenInput>
  }

  export type AiReportCreateManyChapter_takenInputEnvelope = {
    data: AiReportCreateManyChapter_takenInput | AiReportCreateManyChapter_takenInput[]
    skipDuplicates?: boolean
  }

  export type AssessmentCreateWithoutChapter_takenInput = {
    id: string
    title: string
    type: $Enums.AssessmentType
    correct_answer: number
    created_at?: Date | string
    updated_at?: Date | string
    sub_chapter: SubChapterCreateNestedOneWithoutAssessmentsInput
    questions?: QuestionCreateNestedManyWithoutAssessmentInput
    user_attempts?: UserAttemptCreateNestedManyWithoutAssessmentInput
  }

  export type AssessmentUncheckedCreateWithoutChapter_takenInput = {
    id: string
    sub_chapter_id: string
    title: string
    type: $Enums.AssessmentType
    correct_answer: number
    created_at?: Date | string
    updated_at?: Date | string
    questions?: QuestionUncheckedCreateNestedManyWithoutAssessmentInput
    user_attempts?: UserAttemptUncheckedCreateNestedManyWithoutAssessmentInput
  }

  export type AssessmentCreateOrConnectWithoutChapter_takenInput = {
    where: AssessmentWhereUniqueInput
    create: XOR<AssessmentCreateWithoutChapter_takenInput, AssessmentUncheckedCreateWithoutChapter_takenInput>
  }

  export type AssessmentCreateManyChapter_takenInputEnvelope = {
    data: AssessmentCreateManyChapter_takenInput | AssessmentCreateManyChapter_takenInput[]
    skipDuplicates?: boolean
  }

  export type UserProgresCreateWithoutChapter_takenInput = {
    id: string
    current_level: $Enums.CurrentLevel
    status: $Enums.ProgressStatus
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutUser_progresInput
    sub_chapter: SubChapterCreateNestedOneWithoutUser_progresInput
  }

  export type UserProgresUncheckedCreateWithoutChapter_takenInput = {
    id: string
    user_id: string
    sub_chapter_id: string
    current_level: $Enums.CurrentLevel
    status: $Enums.ProgressStatus
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserProgresCreateOrConnectWithoutChapter_takenInput = {
    where: UserProgresWhereUniqueInput
    create: XOR<UserProgresCreateWithoutChapter_takenInput, UserProgresUncheckedCreateWithoutChapter_takenInput>
  }

  export type UserProgresCreateManyChapter_takenInputEnvelope = {
    data: UserProgresCreateManyChapter_takenInput | UserProgresCreateManyChapter_takenInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutChapter_takenInput = {
    update: XOR<UserUpdateWithoutChapter_takenInput, UserUncheckedUpdateWithoutChapter_takenInput>
    create: XOR<UserCreateWithoutChapter_takenInput, UserUncheckedCreateWithoutChapter_takenInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutChapter_takenInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutChapter_takenInput, UserUncheckedUpdateWithoutChapter_takenInput>
  }

  export type UserUpdateWithoutChapter_takenInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    gmail?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ai_reports?: AiReportUpdateManyWithoutUserNestedInput
    user_attempts?: UserAttemptUpdateManyWithoutUserNestedInput
    user_progres?: UserProgresUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutChapter_takenInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    gmail?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ai_reports?: AiReportUncheckedUpdateManyWithoutUserNestedInput
    user_attempts?: UserAttemptUncheckedUpdateManyWithoutUserNestedInput
    user_progres?: UserProgresUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ChapterUpsertWithoutChapter_takenInput = {
    update: XOR<ChapterUpdateWithoutChapter_takenInput, ChapterUncheckedUpdateWithoutChapter_takenInput>
    create: XOR<ChapterCreateWithoutChapter_takenInput, ChapterUncheckedCreateWithoutChapter_takenInput>
    where?: ChapterWhereInput
  }

  export type ChapterUpdateToOneWithWhereWithoutChapter_takenInput = {
    where?: ChapterWhereInput
    data: XOR<ChapterUpdateWithoutChapter_takenInput, ChapterUncheckedUpdateWithoutChapter_takenInput>
  }

  export type ChapterUpdateWithoutChapter_takenInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    total_sub_chapter?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    prerequisites_base?: PrerequisiteUpdateManyWithoutChapterNestedInput
    prerequisites_requirement?: PrerequisiteUpdateManyWithoutPrerequisite_chapterNestedInput
    sub_chapters?: SubChapterUpdateManyWithoutChapterNestedInput
  }

  export type ChapterUncheckedUpdateWithoutChapter_takenInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    total_sub_chapter?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    prerequisites_base?: PrerequisiteUncheckedUpdateManyWithoutChapterNestedInput
    prerequisites_requirement?: PrerequisiteUncheckedUpdateManyWithoutPrerequisite_chapterNestedInput
    sub_chapters?: SubChapterUncheckedUpdateManyWithoutChapterNestedInput
  }

  export type AiReportUpsertWithWhereUniqueWithoutChapter_takenInput = {
    where: AiReportWhereUniqueInput
    update: XOR<AiReportUpdateWithoutChapter_takenInput, AiReportUncheckedUpdateWithoutChapter_takenInput>
    create: XOR<AiReportCreateWithoutChapter_takenInput, AiReportUncheckedCreateWithoutChapter_takenInput>
  }

  export type AiReportUpdateWithWhereUniqueWithoutChapter_takenInput = {
    where: AiReportWhereUniqueInput
    data: XOR<AiReportUpdateWithoutChapter_takenInput, AiReportUncheckedUpdateWithoutChapter_takenInput>
  }

  export type AiReportUpdateManyWithWhereWithoutChapter_takenInput = {
    where: AiReportScalarWhereInput
    data: XOR<AiReportUpdateManyMutationInput, AiReportUncheckedUpdateManyWithoutChapter_takenInput>
  }

  export type AssessmentUpsertWithWhereUniqueWithoutChapter_takenInput = {
    where: AssessmentWhereUniqueInput
    update: XOR<AssessmentUpdateWithoutChapter_takenInput, AssessmentUncheckedUpdateWithoutChapter_takenInput>
    create: XOR<AssessmentCreateWithoutChapter_takenInput, AssessmentUncheckedCreateWithoutChapter_takenInput>
  }

  export type AssessmentUpdateWithWhereUniqueWithoutChapter_takenInput = {
    where: AssessmentWhereUniqueInput
    data: XOR<AssessmentUpdateWithoutChapter_takenInput, AssessmentUncheckedUpdateWithoutChapter_takenInput>
  }

  export type AssessmentUpdateManyWithWhereWithoutChapter_takenInput = {
    where: AssessmentScalarWhereInput
    data: XOR<AssessmentUpdateManyMutationInput, AssessmentUncheckedUpdateManyWithoutChapter_takenInput>
  }

  export type UserProgresUpsertWithWhereUniqueWithoutChapter_takenInput = {
    where: UserProgresWhereUniqueInput
    update: XOR<UserProgresUpdateWithoutChapter_takenInput, UserProgresUncheckedUpdateWithoutChapter_takenInput>
    create: XOR<UserProgresCreateWithoutChapter_takenInput, UserProgresUncheckedCreateWithoutChapter_takenInput>
  }

  export type UserProgresUpdateWithWhereUniqueWithoutChapter_takenInput = {
    where: UserProgresWhereUniqueInput
    data: XOR<UserProgresUpdateWithoutChapter_takenInput, UserProgresUncheckedUpdateWithoutChapter_takenInput>
  }

  export type UserProgresUpdateManyWithWhereWithoutChapter_takenInput = {
    where: UserProgresScalarWhereInput
    data: XOR<UserProgresUpdateManyMutationInput, UserProgresUncheckedUpdateManyWithoutChapter_takenInput>
  }

  export type ChapterTakenCreateWithoutAssessmentsInput = {
    id: string
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutChapter_takenInput
    chapter: ChapterCreateNestedOneWithoutChapter_takenInput
    ai_reports?: AiReportCreateNestedManyWithoutChapter_takenInput
    user_progres?: UserProgresCreateNestedManyWithoutChapter_takenInput
  }

  export type ChapterTakenUncheckedCreateWithoutAssessmentsInput = {
    id: string
    user_id: string
    chapter_id: string
    created_at?: Date | string
    updated_at?: Date | string
    ai_reports?: AiReportUncheckedCreateNestedManyWithoutChapter_takenInput
    user_progres?: UserProgresUncheckedCreateNestedManyWithoutChapter_takenInput
  }

  export type ChapterTakenCreateOrConnectWithoutAssessmentsInput = {
    where: ChapterTakenWhereUniqueInput
    create: XOR<ChapterTakenCreateWithoutAssessmentsInput, ChapterTakenUncheckedCreateWithoutAssessmentsInput>
  }

  export type SubChapterCreateWithoutAssessmentsInput = {
    id: string
    name: string
    content: string
    created_at?: Date | string
    updated_at?: Date | string
    chapter: ChapterCreateNestedOneWithoutSub_chaptersInput
    user_progres?: UserProgresCreateNestedManyWithoutSub_chapterInput
  }

  export type SubChapterUncheckedCreateWithoutAssessmentsInput = {
    id: string
    chapter_id: string
    name: string
    content: string
    created_at?: Date | string
    updated_at?: Date | string
    user_progres?: UserProgresUncheckedCreateNestedManyWithoutSub_chapterInput
  }

  export type SubChapterCreateOrConnectWithoutAssessmentsInput = {
    where: SubChapterWhereUniqueInput
    create: XOR<SubChapterCreateWithoutAssessmentsInput, SubChapterUncheckedCreateWithoutAssessmentsInput>
  }

  export type QuestionCreateWithoutAssessmentInput = {
    id: string
    question: string
    topic: string
    difficulty_level: $Enums.DifficultyLevel
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type QuestionUncheckedCreateWithoutAssessmentInput = {
    id: string
    question: string
    topic: string
    difficulty_level: $Enums.DifficultyLevel
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type QuestionCreateOrConnectWithoutAssessmentInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutAssessmentInput, QuestionUncheckedCreateWithoutAssessmentInput>
  }

  export type QuestionCreateManyAssessmentInputEnvelope = {
    data: QuestionCreateManyAssessmentInput | QuestionCreateManyAssessmentInput[]
    skipDuplicates?: boolean
  }

  export type UserAttemptCreateWithoutAssessmentInput = {
    id: string
    score: number
    completed_at?: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutUser_attemptsInput
  }

  export type UserAttemptUncheckedCreateWithoutAssessmentInput = {
    id: string
    user_id: string
    score: number
    completed_at?: Date | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserAttemptCreateOrConnectWithoutAssessmentInput = {
    where: UserAttemptWhereUniqueInput
    create: XOR<UserAttemptCreateWithoutAssessmentInput, UserAttemptUncheckedCreateWithoutAssessmentInput>
  }

  export type UserAttemptCreateManyAssessmentInputEnvelope = {
    data: UserAttemptCreateManyAssessmentInput | UserAttemptCreateManyAssessmentInput[]
    skipDuplicates?: boolean
  }

  export type ChapterTakenUpsertWithoutAssessmentsInput = {
    update: XOR<ChapterTakenUpdateWithoutAssessmentsInput, ChapterTakenUncheckedUpdateWithoutAssessmentsInput>
    create: XOR<ChapterTakenCreateWithoutAssessmentsInput, ChapterTakenUncheckedCreateWithoutAssessmentsInput>
    where?: ChapterTakenWhereInput
  }

  export type ChapterTakenUpdateToOneWithWhereWithoutAssessmentsInput = {
    where?: ChapterTakenWhereInput
    data: XOR<ChapterTakenUpdateWithoutAssessmentsInput, ChapterTakenUncheckedUpdateWithoutAssessmentsInput>
  }

  export type ChapterTakenUpdateWithoutAssessmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutChapter_takenNestedInput
    chapter?: ChapterUpdateOneRequiredWithoutChapter_takenNestedInput
    ai_reports?: AiReportUpdateManyWithoutChapter_takenNestedInput
    user_progres?: UserProgresUpdateManyWithoutChapter_takenNestedInput
  }

  export type ChapterTakenUncheckedUpdateWithoutAssessmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    chapter_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ai_reports?: AiReportUncheckedUpdateManyWithoutChapter_takenNestedInput
    user_progres?: UserProgresUncheckedUpdateManyWithoutChapter_takenNestedInput
  }

  export type SubChapterUpsertWithoutAssessmentsInput = {
    update: XOR<SubChapterUpdateWithoutAssessmentsInput, SubChapterUncheckedUpdateWithoutAssessmentsInput>
    create: XOR<SubChapterCreateWithoutAssessmentsInput, SubChapterUncheckedCreateWithoutAssessmentsInput>
    where?: SubChapterWhereInput
  }

  export type SubChapterUpdateToOneWithWhereWithoutAssessmentsInput = {
    where?: SubChapterWhereInput
    data: XOR<SubChapterUpdateWithoutAssessmentsInput, SubChapterUncheckedUpdateWithoutAssessmentsInput>
  }

  export type SubChapterUpdateWithoutAssessmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    chapter?: ChapterUpdateOneRequiredWithoutSub_chaptersNestedInput
    user_progres?: UserProgresUpdateManyWithoutSub_chapterNestedInput
  }

  export type SubChapterUncheckedUpdateWithoutAssessmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    chapter_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_progres?: UserProgresUncheckedUpdateManyWithoutSub_chapterNestedInput
  }

  export type QuestionUpsertWithWhereUniqueWithoutAssessmentInput = {
    where: QuestionWhereUniqueInput
    update: XOR<QuestionUpdateWithoutAssessmentInput, QuestionUncheckedUpdateWithoutAssessmentInput>
    create: XOR<QuestionCreateWithoutAssessmentInput, QuestionUncheckedCreateWithoutAssessmentInput>
  }

  export type QuestionUpdateWithWhereUniqueWithoutAssessmentInput = {
    where: QuestionWhereUniqueInput
    data: XOR<QuestionUpdateWithoutAssessmentInput, QuestionUncheckedUpdateWithoutAssessmentInput>
  }

  export type QuestionUpdateManyWithWhereWithoutAssessmentInput = {
    where: QuestionScalarWhereInput
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyWithoutAssessmentInput>
  }

  export type QuestionScalarWhereInput = {
    AND?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
    OR?: QuestionScalarWhereInput[]
    NOT?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
    id?: StringFilter<"Question"> | string
    assessment_id?: StringFilter<"Question"> | string
    question?: StringFilter<"Question"> | string
    topic?: StringFilter<"Question"> | string
    difficulty_level?: EnumDifficultyLevelFilter<"Question"> | $Enums.DifficultyLevel
    created_at?: DateTimeFilter<"Question"> | Date | string
    updated_at?: DateTimeFilter<"Question"> | Date | string
  }

  export type UserAttemptUpsertWithWhereUniqueWithoutAssessmentInput = {
    where: UserAttemptWhereUniqueInput
    update: XOR<UserAttemptUpdateWithoutAssessmentInput, UserAttemptUncheckedUpdateWithoutAssessmentInput>
    create: XOR<UserAttemptCreateWithoutAssessmentInput, UserAttemptUncheckedCreateWithoutAssessmentInput>
  }

  export type UserAttemptUpdateWithWhereUniqueWithoutAssessmentInput = {
    where: UserAttemptWhereUniqueInput
    data: XOR<UserAttemptUpdateWithoutAssessmentInput, UserAttemptUncheckedUpdateWithoutAssessmentInput>
  }

  export type UserAttemptUpdateManyWithWhereWithoutAssessmentInput = {
    where: UserAttemptScalarWhereInput
    data: XOR<UserAttemptUpdateManyMutationInput, UserAttemptUncheckedUpdateManyWithoutAssessmentInput>
  }

  export type UserCreateWithoutAi_reportsInput = {
    id: string
    name: string
    role: $Enums.Role
    gmail: string
    password: string
    birth_date: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    chapter_taken?: ChapterTakenCreateNestedManyWithoutUserInput
    user_attempts?: UserAttemptCreateNestedManyWithoutUserInput
    user_progres?: UserProgresCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAi_reportsInput = {
    id: string
    name: string
    role: $Enums.Role
    gmail: string
    password: string
    birth_date: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    chapter_taken?: ChapterTakenUncheckedCreateNestedManyWithoutUserInput
    user_attempts?: UserAttemptUncheckedCreateNestedManyWithoutUserInput
    user_progres?: UserProgresUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAi_reportsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAi_reportsInput, UserUncheckedCreateWithoutAi_reportsInput>
  }

  export type ChapterTakenCreateWithoutAi_reportsInput = {
    id: string
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutChapter_takenInput
    chapter: ChapterCreateNestedOneWithoutChapter_takenInput
    assessments?: AssessmentCreateNestedManyWithoutChapter_takenInput
    user_progres?: UserProgresCreateNestedManyWithoutChapter_takenInput
  }

  export type ChapterTakenUncheckedCreateWithoutAi_reportsInput = {
    id: string
    user_id: string
    chapter_id: string
    created_at?: Date | string
    updated_at?: Date | string
    assessments?: AssessmentUncheckedCreateNestedManyWithoutChapter_takenInput
    user_progres?: UserProgresUncheckedCreateNestedManyWithoutChapter_takenInput
  }

  export type ChapterTakenCreateOrConnectWithoutAi_reportsInput = {
    where: ChapterTakenWhereUniqueInput
    create: XOR<ChapterTakenCreateWithoutAi_reportsInput, ChapterTakenUncheckedCreateWithoutAi_reportsInput>
  }

  export type UserUpsertWithoutAi_reportsInput = {
    update: XOR<UserUpdateWithoutAi_reportsInput, UserUncheckedUpdateWithoutAi_reportsInput>
    create: XOR<UserCreateWithoutAi_reportsInput, UserUncheckedCreateWithoutAi_reportsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAi_reportsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAi_reportsInput, UserUncheckedUpdateWithoutAi_reportsInput>
  }

  export type UserUpdateWithoutAi_reportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    gmail?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    chapter_taken?: ChapterTakenUpdateManyWithoutUserNestedInput
    user_attempts?: UserAttemptUpdateManyWithoutUserNestedInput
    user_progres?: UserProgresUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAi_reportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    gmail?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    chapter_taken?: ChapterTakenUncheckedUpdateManyWithoutUserNestedInput
    user_attempts?: UserAttemptUncheckedUpdateManyWithoutUserNestedInput
    user_progres?: UserProgresUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ChapterTakenUpsertWithoutAi_reportsInput = {
    update: XOR<ChapterTakenUpdateWithoutAi_reportsInput, ChapterTakenUncheckedUpdateWithoutAi_reportsInput>
    create: XOR<ChapterTakenCreateWithoutAi_reportsInput, ChapterTakenUncheckedCreateWithoutAi_reportsInput>
    where?: ChapterTakenWhereInput
  }

  export type ChapterTakenUpdateToOneWithWhereWithoutAi_reportsInput = {
    where?: ChapterTakenWhereInput
    data: XOR<ChapterTakenUpdateWithoutAi_reportsInput, ChapterTakenUncheckedUpdateWithoutAi_reportsInput>
  }

  export type ChapterTakenUpdateWithoutAi_reportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutChapter_takenNestedInput
    chapter?: ChapterUpdateOneRequiredWithoutChapter_takenNestedInput
    assessments?: AssessmentUpdateManyWithoutChapter_takenNestedInput
    user_progres?: UserProgresUpdateManyWithoutChapter_takenNestedInput
  }

  export type ChapterTakenUncheckedUpdateWithoutAi_reportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    chapter_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    assessments?: AssessmentUncheckedUpdateManyWithoutChapter_takenNestedInput
    user_progres?: UserProgresUncheckedUpdateManyWithoutChapter_takenNestedInput
  }

  export type ChapterCreateWithoutPrerequisites_baseInput = {
    id: string
    name: string
    total_sub_chapter: number
    created_at?: Date | string
    updated_at?: Date | string
    chapter_taken?: ChapterTakenCreateNestedManyWithoutChapterInput
    prerequisites_requirement?: PrerequisiteCreateNestedManyWithoutPrerequisite_chapterInput
    sub_chapters?: SubChapterCreateNestedManyWithoutChapterInput
  }

  export type ChapterUncheckedCreateWithoutPrerequisites_baseInput = {
    id: string
    name: string
    total_sub_chapter: number
    created_at?: Date | string
    updated_at?: Date | string
    chapter_taken?: ChapterTakenUncheckedCreateNestedManyWithoutChapterInput
    prerequisites_requirement?: PrerequisiteUncheckedCreateNestedManyWithoutPrerequisite_chapterInput
    sub_chapters?: SubChapterUncheckedCreateNestedManyWithoutChapterInput
  }

  export type ChapterCreateOrConnectWithoutPrerequisites_baseInput = {
    where: ChapterWhereUniqueInput
    create: XOR<ChapterCreateWithoutPrerequisites_baseInput, ChapterUncheckedCreateWithoutPrerequisites_baseInput>
  }

  export type ChapterCreateWithoutPrerequisites_requirementInput = {
    id: string
    name: string
    total_sub_chapter: number
    created_at?: Date | string
    updated_at?: Date | string
    chapter_taken?: ChapterTakenCreateNestedManyWithoutChapterInput
    prerequisites_base?: PrerequisiteCreateNestedManyWithoutChapterInput
    sub_chapters?: SubChapterCreateNestedManyWithoutChapterInput
  }

  export type ChapterUncheckedCreateWithoutPrerequisites_requirementInput = {
    id: string
    name: string
    total_sub_chapter: number
    created_at?: Date | string
    updated_at?: Date | string
    chapter_taken?: ChapterTakenUncheckedCreateNestedManyWithoutChapterInput
    prerequisites_base?: PrerequisiteUncheckedCreateNestedManyWithoutChapterInput
    sub_chapters?: SubChapterUncheckedCreateNestedManyWithoutChapterInput
  }

  export type ChapterCreateOrConnectWithoutPrerequisites_requirementInput = {
    where: ChapterWhereUniqueInput
    create: XOR<ChapterCreateWithoutPrerequisites_requirementInput, ChapterUncheckedCreateWithoutPrerequisites_requirementInput>
  }

  export type ChapterUpsertWithoutPrerequisites_baseInput = {
    update: XOR<ChapterUpdateWithoutPrerequisites_baseInput, ChapterUncheckedUpdateWithoutPrerequisites_baseInput>
    create: XOR<ChapterCreateWithoutPrerequisites_baseInput, ChapterUncheckedCreateWithoutPrerequisites_baseInput>
    where?: ChapterWhereInput
  }

  export type ChapterUpdateToOneWithWhereWithoutPrerequisites_baseInput = {
    where?: ChapterWhereInput
    data: XOR<ChapterUpdateWithoutPrerequisites_baseInput, ChapterUncheckedUpdateWithoutPrerequisites_baseInput>
  }

  export type ChapterUpdateWithoutPrerequisites_baseInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    total_sub_chapter?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    chapter_taken?: ChapterTakenUpdateManyWithoutChapterNestedInput
    prerequisites_requirement?: PrerequisiteUpdateManyWithoutPrerequisite_chapterNestedInput
    sub_chapters?: SubChapterUpdateManyWithoutChapterNestedInput
  }

  export type ChapterUncheckedUpdateWithoutPrerequisites_baseInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    total_sub_chapter?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    chapter_taken?: ChapterTakenUncheckedUpdateManyWithoutChapterNestedInput
    prerequisites_requirement?: PrerequisiteUncheckedUpdateManyWithoutPrerequisite_chapterNestedInput
    sub_chapters?: SubChapterUncheckedUpdateManyWithoutChapterNestedInput
  }

  export type ChapterUpsertWithoutPrerequisites_requirementInput = {
    update: XOR<ChapterUpdateWithoutPrerequisites_requirementInput, ChapterUncheckedUpdateWithoutPrerequisites_requirementInput>
    create: XOR<ChapterCreateWithoutPrerequisites_requirementInput, ChapterUncheckedCreateWithoutPrerequisites_requirementInput>
    where?: ChapterWhereInput
  }

  export type ChapterUpdateToOneWithWhereWithoutPrerequisites_requirementInput = {
    where?: ChapterWhereInput
    data: XOR<ChapterUpdateWithoutPrerequisites_requirementInput, ChapterUncheckedUpdateWithoutPrerequisites_requirementInput>
  }

  export type ChapterUpdateWithoutPrerequisites_requirementInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    total_sub_chapter?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    chapter_taken?: ChapterTakenUpdateManyWithoutChapterNestedInput
    prerequisites_base?: PrerequisiteUpdateManyWithoutChapterNestedInput
    sub_chapters?: SubChapterUpdateManyWithoutChapterNestedInput
  }

  export type ChapterUncheckedUpdateWithoutPrerequisites_requirementInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    total_sub_chapter?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    chapter_taken?: ChapterTakenUncheckedUpdateManyWithoutChapterNestedInput
    prerequisites_base?: PrerequisiteUncheckedUpdateManyWithoutChapterNestedInput
    sub_chapters?: SubChapterUncheckedUpdateManyWithoutChapterNestedInput
  }

  export type AssessmentCreateWithoutQuestionsInput = {
    id: string
    title: string
    type: $Enums.AssessmentType
    correct_answer: number
    created_at?: Date | string
    updated_at?: Date | string
    chapter_taken: ChapterTakenCreateNestedOneWithoutAssessmentsInput
    sub_chapter: SubChapterCreateNestedOneWithoutAssessmentsInput
    user_attempts?: UserAttemptCreateNestedManyWithoutAssessmentInput
  }

  export type AssessmentUncheckedCreateWithoutQuestionsInput = {
    id: string
    chapter_taken_id: string
    sub_chapter_id: string
    title: string
    type: $Enums.AssessmentType
    correct_answer: number
    created_at?: Date | string
    updated_at?: Date | string
    user_attempts?: UserAttemptUncheckedCreateNestedManyWithoutAssessmentInput
  }

  export type AssessmentCreateOrConnectWithoutQuestionsInput = {
    where: AssessmentWhereUniqueInput
    create: XOR<AssessmentCreateWithoutQuestionsInput, AssessmentUncheckedCreateWithoutQuestionsInput>
  }

  export type AssessmentUpsertWithoutQuestionsInput = {
    update: XOR<AssessmentUpdateWithoutQuestionsInput, AssessmentUncheckedUpdateWithoutQuestionsInput>
    create: XOR<AssessmentCreateWithoutQuestionsInput, AssessmentUncheckedCreateWithoutQuestionsInput>
    where?: AssessmentWhereInput
  }

  export type AssessmentUpdateToOneWithWhereWithoutQuestionsInput = {
    where?: AssessmentWhereInput
    data: XOR<AssessmentUpdateWithoutQuestionsInput, AssessmentUncheckedUpdateWithoutQuestionsInput>
  }

  export type AssessmentUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: EnumAssessmentTypeFieldUpdateOperationsInput | $Enums.AssessmentType
    correct_answer?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    chapter_taken?: ChapterTakenUpdateOneRequiredWithoutAssessmentsNestedInput
    sub_chapter?: SubChapterUpdateOneRequiredWithoutAssessmentsNestedInput
    user_attempts?: UserAttemptUpdateManyWithoutAssessmentNestedInput
  }

  export type AssessmentUncheckedUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    chapter_taken_id?: StringFieldUpdateOperationsInput | string
    sub_chapter_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: EnumAssessmentTypeFieldUpdateOperationsInput | $Enums.AssessmentType
    correct_answer?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_attempts?: UserAttemptUncheckedUpdateManyWithoutAssessmentNestedInput
  }

  export type UserCreateWithoutUser_attemptsInput = {
    id: string
    name: string
    role: $Enums.Role
    gmail: string
    password: string
    birth_date: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    ai_reports?: AiReportCreateNestedManyWithoutUserInput
    chapter_taken?: ChapterTakenCreateNestedManyWithoutUserInput
    user_progres?: UserProgresCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUser_attemptsInput = {
    id: string
    name: string
    role: $Enums.Role
    gmail: string
    password: string
    birth_date: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    ai_reports?: AiReportUncheckedCreateNestedManyWithoutUserInput
    chapter_taken?: ChapterTakenUncheckedCreateNestedManyWithoutUserInput
    user_progres?: UserProgresUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUser_attemptsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUser_attemptsInput, UserUncheckedCreateWithoutUser_attemptsInput>
  }

  export type AssessmentCreateWithoutUser_attemptsInput = {
    id: string
    title: string
    type: $Enums.AssessmentType
    correct_answer: number
    created_at?: Date | string
    updated_at?: Date | string
    chapter_taken: ChapterTakenCreateNestedOneWithoutAssessmentsInput
    sub_chapter: SubChapterCreateNestedOneWithoutAssessmentsInput
    questions?: QuestionCreateNestedManyWithoutAssessmentInput
  }

  export type AssessmentUncheckedCreateWithoutUser_attemptsInput = {
    id: string
    chapter_taken_id: string
    sub_chapter_id: string
    title: string
    type: $Enums.AssessmentType
    correct_answer: number
    created_at?: Date | string
    updated_at?: Date | string
    questions?: QuestionUncheckedCreateNestedManyWithoutAssessmentInput
  }

  export type AssessmentCreateOrConnectWithoutUser_attemptsInput = {
    where: AssessmentWhereUniqueInput
    create: XOR<AssessmentCreateWithoutUser_attemptsInput, AssessmentUncheckedCreateWithoutUser_attemptsInput>
  }

  export type UserUpsertWithoutUser_attemptsInput = {
    update: XOR<UserUpdateWithoutUser_attemptsInput, UserUncheckedUpdateWithoutUser_attemptsInput>
    create: XOR<UserCreateWithoutUser_attemptsInput, UserUncheckedCreateWithoutUser_attemptsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUser_attemptsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUser_attemptsInput, UserUncheckedUpdateWithoutUser_attemptsInput>
  }

  export type UserUpdateWithoutUser_attemptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    gmail?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ai_reports?: AiReportUpdateManyWithoutUserNestedInput
    chapter_taken?: ChapterTakenUpdateManyWithoutUserNestedInput
    user_progres?: UserProgresUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUser_attemptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    gmail?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ai_reports?: AiReportUncheckedUpdateManyWithoutUserNestedInput
    chapter_taken?: ChapterTakenUncheckedUpdateManyWithoutUserNestedInput
    user_progres?: UserProgresUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AssessmentUpsertWithoutUser_attemptsInput = {
    update: XOR<AssessmentUpdateWithoutUser_attemptsInput, AssessmentUncheckedUpdateWithoutUser_attemptsInput>
    create: XOR<AssessmentCreateWithoutUser_attemptsInput, AssessmentUncheckedCreateWithoutUser_attemptsInput>
    where?: AssessmentWhereInput
  }

  export type AssessmentUpdateToOneWithWhereWithoutUser_attemptsInput = {
    where?: AssessmentWhereInput
    data: XOR<AssessmentUpdateWithoutUser_attemptsInput, AssessmentUncheckedUpdateWithoutUser_attemptsInput>
  }

  export type AssessmentUpdateWithoutUser_attemptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: EnumAssessmentTypeFieldUpdateOperationsInput | $Enums.AssessmentType
    correct_answer?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    chapter_taken?: ChapterTakenUpdateOneRequiredWithoutAssessmentsNestedInput
    sub_chapter?: SubChapterUpdateOneRequiredWithoutAssessmentsNestedInput
    questions?: QuestionUpdateManyWithoutAssessmentNestedInput
  }

  export type AssessmentUncheckedUpdateWithoutUser_attemptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    chapter_taken_id?: StringFieldUpdateOperationsInput | string
    sub_chapter_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: EnumAssessmentTypeFieldUpdateOperationsInput | $Enums.AssessmentType
    correct_answer?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUncheckedUpdateManyWithoutAssessmentNestedInput
  }

  export type UserCreateWithoutUser_progresInput = {
    id: string
    name: string
    role: $Enums.Role
    gmail: string
    password: string
    birth_date: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    ai_reports?: AiReportCreateNestedManyWithoutUserInput
    chapter_taken?: ChapterTakenCreateNestedManyWithoutUserInput
    user_attempts?: UserAttemptCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUser_progresInput = {
    id: string
    name: string
    role: $Enums.Role
    gmail: string
    password: string
    birth_date: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    ai_reports?: AiReportUncheckedCreateNestedManyWithoutUserInput
    chapter_taken?: ChapterTakenUncheckedCreateNestedManyWithoutUserInput
    user_attempts?: UserAttemptUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUser_progresInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUser_progresInput, UserUncheckedCreateWithoutUser_progresInput>
  }

  export type SubChapterCreateWithoutUser_progresInput = {
    id: string
    name: string
    content: string
    created_at?: Date | string
    updated_at?: Date | string
    chapter: ChapterCreateNestedOneWithoutSub_chaptersInput
    assessments?: AssessmentCreateNestedManyWithoutSub_chapterInput
  }

  export type SubChapterUncheckedCreateWithoutUser_progresInput = {
    id: string
    chapter_id: string
    name: string
    content: string
    created_at?: Date | string
    updated_at?: Date | string
    assessments?: AssessmentUncheckedCreateNestedManyWithoutSub_chapterInput
  }

  export type SubChapterCreateOrConnectWithoutUser_progresInput = {
    where: SubChapterWhereUniqueInput
    create: XOR<SubChapterCreateWithoutUser_progresInput, SubChapterUncheckedCreateWithoutUser_progresInput>
  }

  export type ChapterTakenCreateWithoutUser_progresInput = {
    id: string
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutChapter_takenInput
    chapter: ChapterCreateNestedOneWithoutChapter_takenInput
    ai_reports?: AiReportCreateNestedManyWithoutChapter_takenInput
    assessments?: AssessmentCreateNestedManyWithoutChapter_takenInput
  }

  export type ChapterTakenUncheckedCreateWithoutUser_progresInput = {
    id: string
    user_id: string
    chapter_id: string
    created_at?: Date | string
    updated_at?: Date | string
    ai_reports?: AiReportUncheckedCreateNestedManyWithoutChapter_takenInput
    assessments?: AssessmentUncheckedCreateNestedManyWithoutChapter_takenInput
  }

  export type ChapterTakenCreateOrConnectWithoutUser_progresInput = {
    where: ChapterTakenWhereUniqueInput
    create: XOR<ChapterTakenCreateWithoutUser_progresInput, ChapterTakenUncheckedCreateWithoutUser_progresInput>
  }

  export type UserUpsertWithoutUser_progresInput = {
    update: XOR<UserUpdateWithoutUser_progresInput, UserUncheckedUpdateWithoutUser_progresInput>
    create: XOR<UserCreateWithoutUser_progresInput, UserUncheckedCreateWithoutUser_progresInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUser_progresInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUser_progresInput, UserUncheckedUpdateWithoutUser_progresInput>
  }

  export type UserUpdateWithoutUser_progresInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    gmail?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ai_reports?: AiReportUpdateManyWithoutUserNestedInput
    chapter_taken?: ChapterTakenUpdateManyWithoutUserNestedInput
    user_attempts?: UserAttemptUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUser_progresInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    gmail?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ai_reports?: AiReportUncheckedUpdateManyWithoutUserNestedInput
    chapter_taken?: ChapterTakenUncheckedUpdateManyWithoutUserNestedInput
    user_attempts?: UserAttemptUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SubChapterUpsertWithoutUser_progresInput = {
    update: XOR<SubChapterUpdateWithoutUser_progresInput, SubChapterUncheckedUpdateWithoutUser_progresInput>
    create: XOR<SubChapterCreateWithoutUser_progresInput, SubChapterUncheckedCreateWithoutUser_progresInput>
    where?: SubChapterWhereInput
  }

  export type SubChapterUpdateToOneWithWhereWithoutUser_progresInput = {
    where?: SubChapterWhereInput
    data: XOR<SubChapterUpdateWithoutUser_progresInput, SubChapterUncheckedUpdateWithoutUser_progresInput>
  }

  export type SubChapterUpdateWithoutUser_progresInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    chapter?: ChapterUpdateOneRequiredWithoutSub_chaptersNestedInput
    assessments?: AssessmentUpdateManyWithoutSub_chapterNestedInput
  }

  export type SubChapterUncheckedUpdateWithoutUser_progresInput = {
    id?: StringFieldUpdateOperationsInput | string
    chapter_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    assessments?: AssessmentUncheckedUpdateManyWithoutSub_chapterNestedInput
  }

  export type ChapterTakenUpsertWithoutUser_progresInput = {
    update: XOR<ChapterTakenUpdateWithoutUser_progresInput, ChapterTakenUncheckedUpdateWithoutUser_progresInput>
    create: XOR<ChapterTakenCreateWithoutUser_progresInput, ChapterTakenUncheckedCreateWithoutUser_progresInput>
    where?: ChapterTakenWhereInput
  }

  export type ChapterTakenUpdateToOneWithWhereWithoutUser_progresInput = {
    where?: ChapterTakenWhereInput
    data: XOR<ChapterTakenUpdateWithoutUser_progresInput, ChapterTakenUncheckedUpdateWithoutUser_progresInput>
  }

  export type ChapterTakenUpdateWithoutUser_progresInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutChapter_takenNestedInput
    chapter?: ChapterUpdateOneRequiredWithoutChapter_takenNestedInput
    ai_reports?: AiReportUpdateManyWithoutChapter_takenNestedInput
    assessments?: AssessmentUpdateManyWithoutChapter_takenNestedInput
  }

  export type ChapterTakenUncheckedUpdateWithoutUser_progresInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    chapter_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ai_reports?: AiReportUncheckedUpdateManyWithoutChapter_takenNestedInput
    assessments?: AssessmentUncheckedUpdateManyWithoutChapter_takenNestedInput
  }

  export type AiReportCreateManyUserInput = {
    id: string
    chapter_taken_id: string
    evaluation_text: string
    recomendation_list: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ChapterTakenCreateManyUserInput = {
    id: string
    chapter_id: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserAttemptCreateManyUserInput = {
    id: string
    assessement_id: string
    score: number
    completed_at?: Date | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserProgresCreateManyUserInput = {
    id: string
    sub_chapter_id: string
    chapter_taken_id: string
    current_level: $Enums.CurrentLevel
    status: $Enums.ProgressStatus
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type AiReportUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    evaluation_text?: StringFieldUpdateOperationsInput | string
    recomendation_list?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    chapter_taken?: ChapterTakenUpdateOneRequiredWithoutAi_reportsNestedInput
  }

  export type AiReportUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    chapter_taken_id?: StringFieldUpdateOperationsInput | string
    evaluation_text?: StringFieldUpdateOperationsInput | string
    recomendation_list?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiReportUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    chapter_taken_id?: StringFieldUpdateOperationsInput | string
    evaluation_text?: StringFieldUpdateOperationsInput | string
    recomendation_list?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChapterTakenUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    chapter?: ChapterUpdateOneRequiredWithoutChapter_takenNestedInput
    ai_reports?: AiReportUpdateManyWithoutChapter_takenNestedInput
    assessments?: AssessmentUpdateManyWithoutChapter_takenNestedInput
    user_progres?: UserProgresUpdateManyWithoutChapter_takenNestedInput
  }

  export type ChapterTakenUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    chapter_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ai_reports?: AiReportUncheckedUpdateManyWithoutChapter_takenNestedInput
    assessments?: AssessmentUncheckedUpdateManyWithoutChapter_takenNestedInput
    user_progres?: UserProgresUncheckedUpdateManyWithoutChapter_takenNestedInput
  }

  export type ChapterTakenUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    chapter_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAttemptUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    completed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    assessment?: AssessmentUpdateOneRequiredWithoutUser_attemptsNestedInput
  }

  export type UserAttemptUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    assessement_id?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    completed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAttemptUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    assessement_id?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    completed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProgresUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    current_level?: EnumCurrentLevelFieldUpdateOperationsInput | $Enums.CurrentLevel
    status?: EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    sub_chapter?: SubChapterUpdateOneRequiredWithoutUser_progresNestedInput
    chapter_taken?: ChapterTakenUpdateOneRequiredWithoutUser_progresNestedInput
  }

  export type UserProgresUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sub_chapter_id?: StringFieldUpdateOperationsInput | string
    chapter_taken_id?: StringFieldUpdateOperationsInput | string
    current_level?: EnumCurrentLevelFieldUpdateOperationsInput | $Enums.CurrentLevel
    status?: EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProgresUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sub_chapter_id?: StringFieldUpdateOperationsInput | string
    chapter_taken_id?: StringFieldUpdateOperationsInput | string
    current_level?: EnumCurrentLevelFieldUpdateOperationsInput | $Enums.CurrentLevel
    status?: EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChapterTakenCreateManyChapterInput = {
    id: string
    user_id: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PrerequisiteCreateManyChapterInput = {
    id: string
    prerequisite_chapter_id: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PrerequisiteCreateManyPrerequisite_chapterInput = {
    id: string
    chapter_id: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type SubChapterCreateManyChapterInput = {
    id: string
    name: string
    content: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ChapterTakenUpdateWithoutChapterInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutChapter_takenNestedInput
    ai_reports?: AiReportUpdateManyWithoutChapter_takenNestedInput
    assessments?: AssessmentUpdateManyWithoutChapter_takenNestedInput
    user_progres?: UserProgresUpdateManyWithoutChapter_takenNestedInput
  }

  export type ChapterTakenUncheckedUpdateWithoutChapterInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ai_reports?: AiReportUncheckedUpdateManyWithoutChapter_takenNestedInput
    assessments?: AssessmentUncheckedUpdateManyWithoutChapter_takenNestedInput
    user_progres?: UserProgresUncheckedUpdateManyWithoutChapter_takenNestedInput
  }

  export type ChapterTakenUncheckedUpdateManyWithoutChapterInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrerequisiteUpdateWithoutChapterInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    prerequisite_chapter?: ChapterUpdateOneRequiredWithoutPrerequisites_requirementNestedInput
  }

  export type PrerequisiteUncheckedUpdateWithoutChapterInput = {
    id?: StringFieldUpdateOperationsInput | string
    prerequisite_chapter_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrerequisiteUncheckedUpdateManyWithoutChapterInput = {
    id?: StringFieldUpdateOperationsInput | string
    prerequisite_chapter_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrerequisiteUpdateWithoutPrerequisite_chapterInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    chapter?: ChapterUpdateOneRequiredWithoutPrerequisites_baseNestedInput
  }

  export type PrerequisiteUncheckedUpdateWithoutPrerequisite_chapterInput = {
    id?: StringFieldUpdateOperationsInput | string
    chapter_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrerequisiteUncheckedUpdateManyWithoutPrerequisite_chapterInput = {
    id?: StringFieldUpdateOperationsInput | string
    chapter_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubChapterUpdateWithoutChapterInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    assessments?: AssessmentUpdateManyWithoutSub_chapterNestedInput
    user_progres?: UserProgresUpdateManyWithoutSub_chapterNestedInput
  }

  export type SubChapterUncheckedUpdateWithoutChapterInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    assessments?: AssessmentUncheckedUpdateManyWithoutSub_chapterNestedInput
    user_progres?: UserProgresUncheckedUpdateManyWithoutSub_chapterNestedInput
  }

  export type SubChapterUncheckedUpdateManyWithoutChapterInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssessmentCreateManySub_chapterInput = {
    id: string
    chapter_taken_id: string
    title: string
    type: $Enums.AssessmentType
    correct_answer: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserProgresCreateManySub_chapterInput = {
    id: string
    user_id: string
    chapter_taken_id: string
    current_level: $Enums.CurrentLevel
    status: $Enums.ProgressStatus
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type AssessmentUpdateWithoutSub_chapterInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: EnumAssessmentTypeFieldUpdateOperationsInput | $Enums.AssessmentType
    correct_answer?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    chapter_taken?: ChapterTakenUpdateOneRequiredWithoutAssessmentsNestedInput
    questions?: QuestionUpdateManyWithoutAssessmentNestedInput
    user_attempts?: UserAttemptUpdateManyWithoutAssessmentNestedInput
  }

  export type AssessmentUncheckedUpdateWithoutSub_chapterInput = {
    id?: StringFieldUpdateOperationsInput | string
    chapter_taken_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: EnumAssessmentTypeFieldUpdateOperationsInput | $Enums.AssessmentType
    correct_answer?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUncheckedUpdateManyWithoutAssessmentNestedInput
    user_attempts?: UserAttemptUncheckedUpdateManyWithoutAssessmentNestedInput
  }

  export type AssessmentUncheckedUpdateManyWithoutSub_chapterInput = {
    id?: StringFieldUpdateOperationsInput | string
    chapter_taken_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: EnumAssessmentTypeFieldUpdateOperationsInput | $Enums.AssessmentType
    correct_answer?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProgresUpdateWithoutSub_chapterInput = {
    id?: StringFieldUpdateOperationsInput | string
    current_level?: EnumCurrentLevelFieldUpdateOperationsInput | $Enums.CurrentLevel
    status?: EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUser_progresNestedInput
    chapter_taken?: ChapterTakenUpdateOneRequiredWithoutUser_progresNestedInput
  }

  export type UserProgresUncheckedUpdateWithoutSub_chapterInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    chapter_taken_id?: StringFieldUpdateOperationsInput | string
    current_level?: EnumCurrentLevelFieldUpdateOperationsInput | $Enums.CurrentLevel
    status?: EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProgresUncheckedUpdateManyWithoutSub_chapterInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    chapter_taken_id?: StringFieldUpdateOperationsInput | string
    current_level?: EnumCurrentLevelFieldUpdateOperationsInput | $Enums.CurrentLevel
    status?: EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiReportCreateManyChapter_takenInput = {
    id: string
    user_id: string
    evaluation_text: string
    recomendation_list: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type AssessmentCreateManyChapter_takenInput = {
    id: string
    sub_chapter_id: string
    title: string
    type: $Enums.AssessmentType
    correct_answer: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserProgresCreateManyChapter_takenInput = {
    id: string
    user_id: string
    sub_chapter_id: string
    current_level: $Enums.CurrentLevel
    status: $Enums.ProgressStatus
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type AiReportUpdateWithoutChapter_takenInput = {
    id?: StringFieldUpdateOperationsInput | string
    evaluation_text?: StringFieldUpdateOperationsInput | string
    recomendation_list?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAi_reportsNestedInput
  }

  export type AiReportUncheckedUpdateWithoutChapter_takenInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    evaluation_text?: StringFieldUpdateOperationsInput | string
    recomendation_list?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiReportUncheckedUpdateManyWithoutChapter_takenInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    evaluation_text?: StringFieldUpdateOperationsInput | string
    recomendation_list?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssessmentUpdateWithoutChapter_takenInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: EnumAssessmentTypeFieldUpdateOperationsInput | $Enums.AssessmentType
    correct_answer?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    sub_chapter?: SubChapterUpdateOneRequiredWithoutAssessmentsNestedInput
    questions?: QuestionUpdateManyWithoutAssessmentNestedInput
    user_attempts?: UserAttemptUpdateManyWithoutAssessmentNestedInput
  }

  export type AssessmentUncheckedUpdateWithoutChapter_takenInput = {
    id?: StringFieldUpdateOperationsInput | string
    sub_chapter_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: EnumAssessmentTypeFieldUpdateOperationsInput | $Enums.AssessmentType
    correct_answer?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUncheckedUpdateManyWithoutAssessmentNestedInput
    user_attempts?: UserAttemptUncheckedUpdateManyWithoutAssessmentNestedInput
  }

  export type AssessmentUncheckedUpdateManyWithoutChapter_takenInput = {
    id?: StringFieldUpdateOperationsInput | string
    sub_chapter_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: EnumAssessmentTypeFieldUpdateOperationsInput | $Enums.AssessmentType
    correct_answer?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProgresUpdateWithoutChapter_takenInput = {
    id?: StringFieldUpdateOperationsInput | string
    current_level?: EnumCurrentLevelFieldUpdateOperationsInput | $Enums.CurrentLevel
    status?: EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUser_progresNestedInput
    sub_chapter?: SubChapterUpdateOneRequiredWithoutUser_progresNestedInput
  }

  export type UserProgresUncheckedUpdateWithoutChapter_takenInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    sub_chapter_id?: StringFieldUpdateOperationsInput | string
    current_level?: EnumCurrentLevelFieldUpdateOperationsInput | $Enums.CurrentLevel
    status?: EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProgresUncheckedUpdateManyWithoutChapter_takenInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    sub_chapter_id?: StringFieldUpdateOperationsInput | string
    current_level?: EnumCurrentLevelFieldUpdateOperationsInput | $Enums.CurrentLevel
    status?: EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionCreateManyAssessmentInput = {
    id: string
    question: string
    topic: string
    difficulty_level: $Enums.DifficultyLevel
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserAttemptCreateManyAssessmentInput = {
    id: string
    user_id: string
    score: number
    completed_at?: Date | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type QuestionUpdateWithoutAssessmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    difficulty_level?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionUncheckedUpdateWithoutAssessmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    difficulty_level?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionUncheckedUpdateManyWithoutAssessmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    difficulty_level?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAttemptUpdateWithoutAssessmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    completed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUser_attemptsNestedInput
  }

  export type UserAttemptUncheckedUpdateWithoutAssessmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    completed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAttemptUncheckedUpdateManyWithoutAssessmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    completed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
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