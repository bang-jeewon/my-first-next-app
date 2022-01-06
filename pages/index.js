import fetch from "isomorphic-unfetch"

//props로 user정보 가져옴
const index = ({user}) => {
  //user가 true라면???? user.name을 username이라는 변수에 저장? 그런가봄..
  const username = user && user.name;
  console.log(user);
  console.log(user.html_url);
  // console.log(user.name)
  return (
    <div>
      {username}
    </div>
  );
};

//넥스트는 getServerSideProps라는 페이지의 데이터를 서버로부터 제공받는 기본 API를 가지고있다.
//getServerSideProps는 이름 그대로 서버 측에서 props를 받아오는 기능을 하게 된다.
//페이지를 요청 시마다 실행이 되며 getServerSideProps에서 페이지로 전달해준 데이터를 서버에서 렌더링 하게 된다.
export const getServerSideProps = async () => {
  try{
    const res = await fetch("https://api.github.com/users/jeewon-bang");
    if(res.status === 200){
      const user = await res.json();
      //user정보를 불러오는데 성공했다면 페이지에 props로 전달해주기
      return {props: {user}};
    }
    return {props: {}}
  }catch (e) {
    console.log(e);
    return {props: {}}
  }
}

export default index;