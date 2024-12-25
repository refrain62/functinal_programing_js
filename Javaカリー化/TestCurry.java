// https://ts0818.hatenablog.com/entry/2019/06/29/180034
package mian;

import java.util.Optional;
import java.util.function.BiFunction;;
import java.util.function.Function;

public class TestCurry {
  public static void main(String[] args) {
    // カリー化のメソッドを実装
    Function<Integer, Function<Integer, Integer>> sum = curried(TestCurry::sum);

    // Optionalな値を用意
    Optional<Integer> a = Optional.ofNullable(80);
    Optional<Integer> b = Optional.ofNullable(20);
    Optional<Integer> c = Optional.empty();

    // Optionalな値で関数を実行するメソッドの結果を出力
    System.out.println(apply(apply(Optional.of(sum), a), b));
    System.out.println(apply(apply(Optional.of(sum), a), c));
    System.out.println(apply(apply(Optional.empty(), a), b));

    // Optionalな値で関数を実行するメソッドの結果を値にして出力
    System.out.println(apply(apply(Optional.of(sum), a), b).orElse(0));
    System.out.println(apply(apply(Optional.of(sum), a), c).orElse(0));
    System.out.println(apply(apply(Optional.empty(), a), b).orElse(0));

    // カリー化のメソッドのみ使用した結果を出力
    System.out.println(sum.apply(a.orElse(0)).apply(b.orElse(0)));
    System.out.println(sum.apply(a.orElse(0)).apply(c.orElse(0)));
  }

  // 2引数関数のカリー化
  static <T, U, R> Function<T, Function<U, R>> curried(BiFunction<T, U, R> biFunction) {
    return (t) -> (u) -> biFunction.apply(t, u);
  }

  // 合計するメソッド（カリー化対象のメソッド）
  static int sum(int a, int b) {
    return a + b;
  }

  // 渡された関数を、渡された引数(Optionalな値)で実行するメソッド
  static <A, B> Optional<B> apply(Optional<Function<A, B>> func, Optional<A> param) {
    return param.flatMap((p) -> func.map((f) -> f.apply(p)));
  }
}


// 結果
// Optional[100]
// Optional.empty
// Optional.empty
// 100
// 0
// 0
// 100
// 80