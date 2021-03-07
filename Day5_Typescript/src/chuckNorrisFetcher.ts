function chuckNorrisFetcher(){
    return fetch("https://api.chucknorris.io/jokes/random")
      .then(res => res.json())
      .then(data => data )
  }
  
  async function chuckNorrisTester() {
    let joke = await chuckNorrisFetcher()
    console.log(joke.value)
  }
  