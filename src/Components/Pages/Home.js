import {useSelector} from 'react-redux';

const Home = () => {

    const siteInfo = useSelector(store => {
        return store.global
    });
    
    return ( 
        <div className="page-home">
            <h3 className="text-center">Home Page</h3>
            <div className="w-50 mx-auto my-5 p-3">
                {siteInfo &&
                    <div className="site-info">
                        <h5 className="text-center">{ siteInfo.domain }</h5>
                        <h5 className="text-center">{ siteInfo.title }</h5>
                    </div>
                }
            </div>
        </div>
     );
}

export default Home;