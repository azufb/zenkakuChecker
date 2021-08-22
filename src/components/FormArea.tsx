import { action } from "commander";
import React, { useState } from "react"

const Form:React.VoidFunctionComponent = () => {
  const [targetText, setTargetText] = useState<string>("");
  const [checkedText, setCheckedText] = useState<string>("");

  const handleSubmit = () => {
    // 正規表現を利用して、全角文字を検索。
  }

  return(
    <div>
      <div>
        <label>チェックしたいテキスト：</label>
        <textarea typeof="text" value={targetText} onChange={(e) => setTargetText(e.target.value)} />
      </div>
      <button>チェック！</button>
    </div>
    
  )
}

export default Form;