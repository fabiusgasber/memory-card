async function fetchData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export function useFetch() {
  const [data, setData] = useState(null);
  const [reload, setReload] = useState(false);

  const ENDPOINT =
    "https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams";
  
  useEffect(() => {
    async function fetchTeams() {
      let isMounted = true;
      const result = await fetchData(ENDPOINT);
      const teams = result?.sports[0]?.leagues[0]?.teams;
      if(teams && isMounted) setData(randomizeArray(teams)); 
      return () => {
        isMounted = false;
      }
    }
    fetchTeams();
  }, [reload]);

  return { data, setData, reload, setReload };
}

export const randomizeArray = (arr, count = 9) => {
   return [...arr.sort(() => Math.random() - Math.random()).slice(0, count)];
}