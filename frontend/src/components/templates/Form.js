import React ,{useState} from "react";

// フォームの入力値を管理するためのコンポーネント,データ保管場所（state）
const Form  = () => {
    const [form,setForm] = useState({
        name:"",
        age:"",
    });
    // フォームの入力値が変更されたときにデータ更新する関数
    const handleInputChange = (e) => {
        const {name, value} = e.target;
        console.log(name,value);
        console.log({...form});
        setForm({...form,[name]:value});

    };
    return (
        <>
            <form>
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
                        <option value={10}>10代</option>
                        <option value={20}>20代</option>
                        <option value={30}>30代</option>
                    </select>
                </label>
            </form>
            <p>確認用</p>
            <p>{form.name}</p>
            <p>{form.age}</p>
        </>
    );
};
export default Form