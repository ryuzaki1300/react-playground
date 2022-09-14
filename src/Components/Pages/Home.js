import useAxios from '../../useAxios';

const Home = () => {

    const config = {
        url: "https://lavazemjanebi.com/api/system/info",
        method: 'get'
    }

    const { data: siteInfo, pending, error} = useAxios(config);

    return ( 
        <div className="page-home">
            <h3 className="text-center">Home Page</h3>
            <div className="w-50 mx-auto my-5 p-3">
                {pending && <div className="loading-log text-center">Loading...</div>}
                {error && <div className="error-log text-center">{ error }</div>}
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