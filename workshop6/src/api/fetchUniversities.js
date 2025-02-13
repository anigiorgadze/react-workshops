export async function fetchUniversities(country) {
    const response = await fetch(`http://universities.hipolabs.com/search?country=${country}`)
    if(response.ok){
        return response.json()
    }
    throw new Error ('fetch error')
}