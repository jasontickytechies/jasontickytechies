const popup = document.querySelector(".popup");

let Online = true;

const checkConnection = async () => {
    try {
        //Fetching rancom data from the API (try)
        // 200 and 300 in the inspect element network connection is Online
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        Online = response.status >= 200 && response.status < 300;
    } catch (error) {
        Online = false; //An error would make the connection considered "offline"
    }
    handlePopup(Online);
}

const handlePopup = (status) => {
    if(status) {
        return popup.classList.remove("show");
    } 
    popup.classList.add("show");
}

setInterval(checkConnection, 3000);

//11,29