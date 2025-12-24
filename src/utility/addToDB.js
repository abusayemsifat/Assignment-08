const getInstalledApps = () =>{
    const installedAppStr = localStorage.getItem("installedApps");

    if(installedAppStr){
        const installedAppsData = JSON.parse(installedAppStr);
        return installedAppsData;
    }
    else{
        return [];
    }
}

const addToInstalledDB = (id) =>{
    const installedAppsData = getInstalledApps();

    if(installedAppsData.includes(id)){
        alert("Already installed")
    }
    else{
        installedAppsData.push(id);
        const data = JSON.stringify(installedAppsData);
        localStorage.setItem("installedApps", data)
    }
}

export {addToInstalledDB}