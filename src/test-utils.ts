/**
 * Vaut true si X === Y, false sinon
 * prettier-ignore
 */
// prettier-ignore
export type Equals<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends 
  (<T>() => T extends Y ? 1 : 2)
    ? true
    : false;

/**
 * Type générique qui attend un type étant le littéral true
 * (= fonction qui attend un argument étant true)
 * Throw une erreur sinon
 *
 * const expectFunction = (arg: true) => typeof arg;
 */
export type Expect<T extends true> = T;
