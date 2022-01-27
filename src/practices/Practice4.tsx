export const Practice4 = () => {
  // tsconfig.jsonで設定が"strict": trueになっていると明示的に
  // 型指定しないとエラーが発生する（以下の場合だと引数 numに型がないとエラー）
  // "noImplicitAny": falseを設定すると型指定のルールが外れる
  // 詳細なルールはtsconfigのリファレンスを参照
  const calcTotalFee = (num) => {
    const total = num * 1.1;
    console.log(total);
  };
  const onClickPractice = () => calcTotalFee(1000);
  return (
    <div>
      <p>練習問題：設定ファイルを触ってみる</p>
      <button onClick={onClickPractice}>練習問題４を実行</button>
    </div>
  );
};
