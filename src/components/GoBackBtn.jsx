import { Link } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';

export default function GoBackBtn() {
    return (
        <>
            <button
                aria-label='go to previous page'
                className='text-blue-400 px-4 py-1 mt-2 text-xl lg:text-2xl border border-black rounded-md focus:ring-4 shadow-lg transform active:scale-75 transition-transform'
            >
                <Link
                    to={-1}
                    onClick={() => {
                        window.scroll(0, 0);
                    }}
                >
                    Go Back
                </Link>
            </button>
            <ScrollToTop />
        </>
    );
}
