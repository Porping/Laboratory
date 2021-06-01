let covidapi = "https://covid19.th-stat.com/api/open/timeline";
fetch(covidapi)
    .then(response => response.json())
    .then(json => {
        for(var i = 0; i < json.Data.length; i++)
        {
            var NewCovid = json.Data[i].NewConfirmed;
            var CovidDate = json.Data[i].Date;
            var li = document.createElement("li");
            li.textContent = `Date : ${CovidDate} New : ${NewCovid}`;
            if(NewCovid > 0)
                document.body.appendChild(li);
        }
    })
    .catch(err => console.log(err))