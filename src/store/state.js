let defaultcity='北京'
try {
    if(localStorage.city){
        defaultcity=localStorage.city
    }
} catch (error) {}

export default{
    city:defaultcity
}

