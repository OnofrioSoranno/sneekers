
import Navigation from '@/Components/UI/Navigation/Navigation';
import { Link } from '@inertiajs/react';

export default function Welcome({ auth, brands, articleSuccess }) {




    
    return (
        <>
         <Navigation></Navigation>
         <Link className='mt-20' href={route('article.create')}>CREA ARTICOLO</Link>
        {articleSuccess && (
            <p>{articleSuccess}</p>
        )}
        </>
        
    );
}
