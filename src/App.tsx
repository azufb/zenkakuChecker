import React from "react";
import Form from "./components/FormArea";

const App:React.VoidFunctionComponent  = () => {
  return (
    <div className="bg-blue-300 h-screen bg-opacity-50">
      <div className="p-6">
        <p className="text-3xl font-semibold font-mono">全角チェッカー</p>
          <p className="my-5 font-mono">
            急いでテキストを入力しているとき、誤って数字やアルファベットを全角で入力してしまうことってありませんか？<br />
            そんなときは、この「全角チェッカー」を使って、全角になってしまっている数字やアルファベットを見つけて修正しましょう！
          </p>
          <Form />
          <p className="absolute bottom-0 font-mono">
            &copy;2021 azunas.
          </p>
      </div>
    </div>
  );
}

export default App;
