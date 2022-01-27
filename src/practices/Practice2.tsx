export const Practice2 = () => {
  // ↓返却値の型は指定しなくても勝手に推測してくれるので
  // 記述しなくてもよいが、複雑な処理や複数名で開発する際は
  // 明示的に書いておくと良い
  const getTotalFee = (num: number): number => {
    const total = num * 1.1;
    return total;
  };
  const onClickPractice = () => {
    console.log(getTotalFee(1000));
  };
  return (
    <div>
      <p>練習問題：返却値の型指定</p>
      <button onClick={onClickPractice}>練習問題２を実行</button>
    </div>
  );
};
