const LiveRadio = () => {
        const [repos, setRepos] = useState([])
        
        const fetchData = async () => {
        
        let res = await fetch('https://radioguntur.com/nowPlaying/live')
        let data = await res.json()
        setRepos(data)
        
        };
        
        
        useEffect(() => {
            // fetch call used to be here
            fetchData()
        }, [])
    
    
        return (
            <div>
            {
                repos.map(items => console.log(items))
            }
            </div>
        )
    }

export default LiveRadio;