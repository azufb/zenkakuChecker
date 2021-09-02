import React, { useState } from "react";

const Form:React.VoidFunctionComponent = () => {
  const [targetText, setTargetText] = useState<string>("");
  const [checkedText, setCheckedText] = useState<string | null | RegExpMatchArray>("");

  const handleSubmit = () => {
    // 正規表現を利用して、全角文字を検索。
    const zenkaku = new RegExp('[０-９Ａ-Ｚａ-ｚ]', 'gim');
    const result = targetText.match(zenkaku);

    const ary: any = targetText.split(/\r\n|\n|\r/);
    console.log(ary);

    // forで回す必要ありそう。
    if (result !== null) {
      setCheckedText(result);
      console.log(ary.indexOf(result[0]));
    } else {
      setCheckedText('全角数字・アルファベットは見つかりませんでした。');
    }
  }

  return(
    <div>
      <div>
        <label>チェックしたいテキスト：</label>
        <textarea typeof="text" value={targetText} onChange={(e) => setTargetText(e.target.value)} className="block rounded" />
      </div>
      <button onClick={handleSubmit} className="bg-gray-300 rounded py-2 px-4 my-5 shadow-lg">チェック！</button>
      <div>
        {checkedText}
      </div>
    </div>
    
  )
}

export default Form;