import Link from "next/link";

const Tomato = () => {
    return (
        <div>
            <h2>Link to &apos;main&apos; Page</h2>
            <Link href="/">
                <a>Move to &apos;/&apos;</a>
            </Link>
        </div>
    );
};

export default Tomato;