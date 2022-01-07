//getStaticProps는 getServerSideProps와 다르게 빌드 시에 데이터를 불러와 결과를 json으로 저장하여 사용
//따라서 일관된 데이터를 보여줌(??????)
const staticPage = ({time}) => {
    return <div>{time}</div>
}

export const getStaticProps = async () => {
    return {props: {time: new Date().toISOString()}};
};

export default staticPage;