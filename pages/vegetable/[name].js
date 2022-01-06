// 파일 이름을 대괄호로 감싸서 만들면, 이 페이지가 동적 페이지임을 의미하게됨
import Link from "next/link";
import { useRouter } from "next/router";

const name = () => {
    const router = useRouter();
    console.log(router);
    return (
        <div>
            <h2>Hello!!</h2>
            <Link href="/">Move to &apos;/&apos;</Link>
        </div>
    );
};

export default name;