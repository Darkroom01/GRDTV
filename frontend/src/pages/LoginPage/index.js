import {Wrapper, SubTitle, Bar, Title, Check, FindId, FindPw, ConsentWrapper, InputIdWrapper, InputPw, InputWrapper, InputPwWrapper, SignIn, LoginButton, InputId} from '../../styles/LoginPageStyle'
import {useState} from "react";
import axios from "axios";
import Cookies from "js-cookie"
export default function LoginPage(){

    const [id, setId]= useState("");
    const [pw, setPw] = useState("");

    const [idError, setIdError] = useState("");
    const [pwError, setPwError] = useState("");

    const onChangeId=(event)=>{
        setId(event.target.value)
        if(event.target.value !== ""){
            setIdError("")
        }
    }
    const onChangePw=(event) =>{
        setPw(event.target.value)
        if(event.target.value !== ""){
            setPwError("")
        }
    }
    const onClickLogin = () => {
        if (!id) {
            setIdError("아이디를 입력해주세요.");
        }
        if (!pw) {
            setPwError("비밀번호를 입력해주세요");
        }
        if (id && pw) {
            axios
                .post("http://localhost:8080/api/users/login", { email:id ,password: pw })
                .then((response) => {
                    if (response.status === 200) {
                        // 로그인 성공 시 쿠키에 토큰 저장
                        Cookies.set("access_token", response.data.access_token, { expires: 7 });
                        Cookies.set("refresh_token", response.data.refresh_token, { expires: 7 });// 7일간 유지
                        alert("로그인 성공!");
                        // window.location.href = "http://localhost:3000/mainPage";
                    } else {
                        alert("로그인 실패: " + response.data.error);
                    }
                })
                .catch((error) => {
                    console.error("API 호출 중 오류 발생:", error);
                });
        }
    }

    const onClickSignIn = () => {
        window.location.href = "https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=%ED%9A%8C%EC%9B%90%EA%B0%80%EC%9E%85";
    }

    const onClickHome = () => {
        window.location.href = "https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&ssc=tab.nx.all&query=%ED%99%88%ED%8E%98%EC%9D%B4%EC%A7%80&oquery=%ED%9A%8C%EC%9B%90%EA%B0%80%EC%9E%85&tqi=ilvNYlqVOsCssCrFfjVssssssVh-197062";
    }

    const onClickFindPw = () => {
        window.location.href="https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&ssc=tab.nx.all&query=%EB%B9%84%EB%B0%80%EB%B2%88%ED%98%B8%EC%B0%BE%EA%B8%B0&oquery=%ED%99%88%ED%8E%98%EC%9D%B4%EC%A7%80&tqi=ilvN0lqVOZCssaggDrwssssstbG-301446";
    }

    const onClickFindId=()=>{
        window.location.href="https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&ssc=tab.nx.all&query=%EC%95%84%EC%9D%B4%EB%94%94%EC%B0%BE%EA%B8%B0&oquery=%EB%B9%84%EB%B0%80%EB%B2%88%ED%98%B8%EC%B0%BE%EA%B8%B0&tqi=ilvN3sqVOswss52kK3Nsssssskh-290383";
    }

    const enterKeyPress = (event) => {
        if (event.key === 'Enter') {
            onClickLogin();
        }
    }

    return(
        <>
            {/*<p>id</p>*/}
            {/*<input onChange={onChangeId}/>*/}
            {/*<p>pw</p>*/}
            {/*<input onChange={onChangePw}/>*/}
            {/*<button onClick={onClickLogin}>로그인</button>*/}
            <Wrapper>
                <ConsentWrapper>
                    <Title onClick={onClickHome}>
                        MOFY
                    </Title>

                    <SubTitle>
                        My outfit of Yours
                    </SubTitle>
                    <InputWrapper>
                        <InputIdWrapper>
                            <InputId type="text " maxlength="11" size="44" placeholder="아이디" onChange={onChangeId} onKeyPress={enterKeyPress}/>
                            <Check>{idError}</Check>
                        </InputIdWrapper>
                        <InputPwWrapper>
                            <InputPw type="password" maxlength="11" size="44" placeholder="비밀번호" onChange={onChangePw} onKeyDown={enterKeyPress}/>
                            <Check>{pwError}</Check>
                        </InputPwWrapper>
                    </InputWrapper>
                    <LoginButton type="button" onClick={onClickLogin}>
                        로그인
                    </LoginButton>
                </ConsentWrapper>
            </Wrapper>
            <FindId type="button" onClick={onClickFindId}>아이디 찾기</FindId>
            <Bar>｜</Bar>
            <FindPw type="button" onClick={onClickFindPw}>비밀번호 찾기</FindPw>
            <Bar>｜</Bar>
            <SignIn type="button" onClick={onClickSignIn}>회원가입</SignIn>
        </>
    )
}