export async function fetchPosts(url) {
    const response = await fetch(url)
    if(response.ok){
        return response.json()
    }
    throw new Error ('fetch error')
}