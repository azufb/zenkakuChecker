import React, { useState } from "react";
import "../index.css";

const Form:React.VoidFunctionComponent = () => {
  const [targetText, setTargetText] = useState<string>("");
  const [checkedText, setCheckedText] = useState<null | RegExpMatchArray | Array<string>>([]);

  const handleSubmit = () => {
    // 正規表現を利用して、全角文字を検索。
    const zenkaku = new RegExp('.*[０-９Ａ-Ｚａ-ｚ].*', 'gim');
    const result = targetText.match(zenkaku);
    const zenkakualp = new RegExp('([０-９Ａ-Ｚａ-ｚ])', 'gim');

    if (result !== null) {
      setCheckedText(result.map((rsl) => rsl.replace(zenkakualp, '<span id="highlight">$1</span>')));
    } else {
      setCheckedText(['全角数字・アルファベットは見つかりませんでした。']);
    }
    
    setTargetText("");
  }

  const handleClear = () => {
    setTargetText("");
    setCheckedText([]);
  }

  return(
    <div>
      <div>
        <label className="font-mono" htmlFor="beforeText">チェックしたいテキスト：</label>
        <textarea id="beforeText" value={targetText} onChange={(e) => setTargetText(e.target.value)} className="block rounded w-full h-32" />
      </div>
      <div className="my-5 flex">
        <button onClick={handleSubmit} className="flex bg-gray-300 rounded py-2 px-4 shadow-lg border-r-2 border-b-2 border-gray-700 font-semibold font-mono">
          Check！
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
        <button onClick={handleClear} className="flex bg-gray-300 rounded py-2 px-4 ml-4 shadow-lg border-r-2 border-b-2 border-gray-700 font-semibold font-mono">
          Clear
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <ul>
        {checkedText.map((txt, index) => <li dangerouslySetInnerHTML={{__html: txt}} key={index}/>)}
      </ul>
    </div>
    
  )
}

export default Form;