import React ,{useState} from "react";
import {useNavigate} from "react-router-dom";
import {
    Container,
    Box,
    Typography,
    TextField,
    InputLabel,
    Select,
    MenuItem,
    FormLabel,
    RadioGroup,
    FormControlLabel,
    Radio,
    Button,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

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
    // ページ遷移のための関数
    const navigate = useNavigate();
    // 結果ページへ遷移する関数
    const goToResult = (form) => {
        navigate("/Results",{state:form});
    };
    // フォームが送信されたときの処理を行う関数
    const handleSubmit = (e) => {
        goToResult(form)
    };

    return (
        <Container maxWidth="sm" >
            <Box
                sx={{
                    marginTop: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <form onSubmit={handleSubmit}>
                    <Typography variant="h5" >アンケート提出</Typography>

                    <TextField
                        id="outlined-basic"
                        label="名前"
                        variant="outlined"
                        value={form.name}
                        onChange={handleInputChange}
                        fullWidth
                        name="name"
                    />

                    <Box sx={{width:"100%",mt:3}}>
                        <InputLabel id="demo-simple-select-label">年齢</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={form.age}
                            name="Age"
                            onChange={handleInputChange}
                            fullWidth
                        >
                            <MenuItem value={10}>10代</MenuItem>
                            <MenuItem value={20}>20代</MenuItem>
                            <MenuItem value={30}>30代</MenuItem>
                        </Select>
                    </Box>

                    <Box sx={{ mt: 3 }}>
                        <FormLabel id="demo-radio-buttons-group-label">性別</FormLabel>
                        <Box sx={{border: 1,borderRadius:1,borderColor:"gray.500",}}>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="女性"
                                name="gender"
                                onChange={handleInputChange}

                            >
                                <FormControlLabel value="female" control={<Radio />} label="女性" />
                                <FormControlLabel value="male" control={<Radio />} label="男性" />
                                <FormControlLabel value="other" control={<Radio />} label="その他" />
                            </RadioGroup>
                        </Box>
                    </Box>
                    <TextField
                        id="outlined-basic"
                        label="コメント"
                        variant="outlined"
                        onChange={handleInputChange}
                        value={form.comment}
                        fullWidth
                        sx={{mt:3}}
                        name={"comment"}
                    />
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <Button
                            variant="contained"
                            onClick={handleSubmit}
                            sx={{ mt: 3 }}
                            endIcon={<SendIcon />}
                            fullWidth
                        >
                            送信
                        </Button>
                    </Box>
                </form>
            </Box>
        </Container>
    );
};
export default Form