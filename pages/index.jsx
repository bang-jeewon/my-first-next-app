import Link from 'next/link';

const App = () => {
    return (
        <div>
            <h2>Link to &apos;tomato&apos; Page</h2>
            <Link href="/tomato">
                <a>Move to &apos;tomato&apos;</a>
            </Link>
        </div>
    );
};

export default App;
