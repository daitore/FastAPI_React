import React ,{useState} from "react";
import {useNavigate} from "react-router-dom";

// フォームの入力値を管理するためのコンポーネント,データ保管場所（state）
const Form  = () => {
    const [form,setForm] = useState({
        name:"",
        age:"",
        gender:"",
        comment:"",
    });
    // フォームの入力値が変更されたときにデータ更新する関数
    const handleInputChange = (e) => {
        const {name, value} = e.target;
        console.log(name,value);
        console.log({...form});
        setForm({...form,[name]:value});
    };

    const navigate = useNavigate();

    const goToResult = () => {
        navigate("/Results");
    }
    const handleSubmit = (e) => {
        goToResult()
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">
                    名前
                 <input
                id="name"
                type="text"
                name="name"
                value={form.name}
                onChange={handleInputChange}
                />
                </label>
                <br />
                <label htmlFor="age">
                    年齢
                    <select
                        id="age"
                        name="age"
                        value={form.age}
                        onChange={handleInputChange}>
                        <option value="">選択してください</option>
                        <option value={10}>10代</option>
                        <option value={20}>20代</option>
                        <option value={30}>30代</option>
                    </select>
                </label>
                <br/>
                <label>
                    性別
                    <input id="male"
                            name="gender"
                            type="radio"
                            value="male"
                            checked={form.gender === "male"}
                            onChange={handleInputChange}
                    />
                    男性
                    <input id="female"
                            name="gender"
                            type="radio"
                            value="female"
                            checked={form.gender === "female"}
                            onChange={handleInputChange}
                    />
                    女性
                    <input id="other"
                            name="gender"
                            type="radio"
                            value="other"
                            checked={form.gender === "other"}
                            onChange={handleInputChange}
                    />
                    その他
                </label>
                <br/>
                <label htmlFor="comment">コメント</label>
                 <br/>
                    <div>
                        <textarea
                            id="comment"
                            name="comment"
                            value={form.comment}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div>
                         <button type="submit">送信</button>
                    </div>
            </form>
        </>
    );
};
export default Form