const jobs = [
    { title: "Marketing Intern", location: "US, NY, New York" },
    {
      title: "Customer Service - Cloud Video Production",
      location: "NZ, Auckland",
    },
    {
      title: "Commissioning Machinery Assistant (CMA)",
      location: "US, IA, Wever",
    },
    {
      title: "Account Executive - Washington DC",
      location: "US, DC, Washington",
    },
    { title: "Bill Review Manager", location: "US, FL, Fort Worth" },
    { title: "Accounting Clerk", location: "US, MD," },
    { title: "Head of Content (m/f)", location: "DE, BE, Berlin" },
    {
      title: "Lead Guest Service Specialist",
      location: "US, CA, San Francisco",
    },
    { title: "HP BSM SME", location: "US, FL, Pensacola" },
    {
      title: "Customer Service Associate - Part Time",
      location: "US, AZ, Phoenix",
    },
    {
      title: "ASP.net Developer Job opportunity at United States,New Jersey",
      location: "US, NJ, Jersey City",
    },
    {
      title: "Talent Sourcer (6 months fixed-term contract)",
      location: "GB, LND, London",
    },
    {
      title: "Applications Developer, Digital",
      location: "US, CT, Stamford",
    },
    { title: "Installers", location: "US, FL, Orlando" },
    { title: "Account Executive - Sydney", location: "AU, NSW, Sydney" },
    {
      title: "VP of Sales - Vault Dragon",
      location: "SG, 01, Singapore",
    },
    { title: "Hands-On QA Leader", location: "IL, Tel Aviv, Israel" },
    {
      title: "Southend-on-Sea Traineeships Under NAS 16-18 Year Olds Only",
      location: "GB, SOS, Southend-on-Sea",
    },
    { title: "Visual Designer", location: "US, NY, New York" },
    {
      title: "Process Controls Engineer - DCS PLC MS Office - PA",
      location: "US, PA, USA Northeast",
    },
    { title: "Marketing Assistant", location: "US, TX, Austin" },
    { title: "Front End Developer", location: "NZ, N, Auckland" },
    { title: "Engagement Manager", location: "AE," },
    {
      title: "Vice President, Sales and Sponsorship (Businessfriend.com)",
      location: "US, CA, Carlsbad",
    },
    { title: "Customer Service", location: "GB, LND, London" },
    { title: "H1B SPONSOR FOR L1/L2/OPT", location: "US, NY, New York" },
    { title: "Marketing Exec", location: "SG," },
    {
      title: "HAAD/DHA Licensed Doctors Opening in UAE",
      location: "AE, AZ, Abudhabi",
    },
    {
      title: "Talent Management Process Manager",
      location: "US, MO, St. Louis",
    },
    { title: "Customer Service Associate", location: "CA, ON, Toronto" },
    {
      title: "Customer Service Technical Specialist",
      location: "US, MA, Waltham",
    },
    { title: "Software Applications Specialist", location: "US, KS," },
    { title: "Craftsman Associate", location: "US, WA, Everett" },
    { title: "Completion Engineer", location: "US, CA, San Ramon" },
    { title: "I Want To Work At Karmarama", location: "GB, LND," },
    {
      title: "English Teacher Abroad",
      location: "US, NY, Saint Bonaventure",
    },
  ]

        function searchJobs(jobTitle, jobLocation) { //Funzione che cerca i lavori in base ai criteri che vengono forniti dall'utente
            const lowerCaseTitle = jobTitle.toLowerCase(); //Converto la posizione lavorativa(titolo d'ora in poi) in case-insensitive
            const lowerCaseLocation = jobLocation.toLowerCase(); // Converto la località in case-insensitive
            const showR = document.getElementById("showResults"); //Collego la costante al elemento HTML con ID showResults per mostrare i risultati
            let result = []; //Inizializzo un array vuoto che conterrà i risultati della ricerca
            
            if(lowerCaseTitle !== "" || lowerCaseLocation !== ""){ //Filtro dei lavori
              result = jobs.filter(function(job) { //Se i due input non sono vuoti, cerca i risultati in base ai dati forniti
                return job.title.toLowerCase().includes(lowerCaseTitle) &&
                job.location.toLowerCase().includes(lowerCaseLocation);
              });
              showR.innerHTML = result.length == 0? "":"Results:"; //Assegno alla variabile direttamente il risultato del controllo del operatore ternario (Per evitare di ripetere un altro ciclo if)
            } else {                                               //E aggiorno l'elemento con id showResult con i dati forniti dalla variabile result
              showR.innerHTML = "";                                //Se non ci sono risultati, viene lasciato vuoto
            }
            return {
              result: result,       //Restituisce un oggetto con i risultati della ricerca
              count: result.length  //Restituisce il numero di risultati trovati
          };
            
        }

        function updateResultsList(results) { //Questa funzione aggiorna la lista dei risultati mostrata all'utente iniettando nell'HTML i risultati
            const resultsList = document.getElementById("resultsList");
            resultsList.innerHTML = "";  //Prima parte di codice, per pulire l'elemento resultList 

            if (results.count == 0) { //Funzione di controllo per verificare la presenza di risultati
                resultsList.innerHTML = "No results found"; //Se non ci sono risultati, mostra il messaggio di risultati non trovati
            } else {
                for (let i = 0; i < results.result.length; i++) { //Ciclo for per verificare se ci sono risultati e crea un elemento li
                    const job = results.result[i];                //per ogni elemento trovato aggiungendolo alla lista dei risultati trovati
                    const listItem = document.createElement("li");
                    listItem.textContent = job.title + " - " + job.location;
                    resultsList.appendChild(listItem);
                }
              }
              
              document.getElementById("title").value = "";    //Pulisce il campo di input title
              document.getElementById("location").value = ""; //Pulisce il campo di input location
        }
        
        function searchButtonClick() { //Funzione di ricerca lavoro eseguita solo al click del search button
            const titleInput = document.getElementById("title").value;        //Ottiene i valori inseriti nell'input title
            const locationInput = document.getElementById("location").value;  //Ottiene i valori inseriti nell'input location
            const searchResult = searchJobs(titleInput, locationInput);       //Esecuzione della ricerca con i valori ottenuti dalle due variabili
            
            console.log("Risultato della ricerca:", searchResult);  //Stampa dei risultati nella console
            
            updateResultsList(searchResult); //Aggiornamento della lista dei risultati
        }
        
        document.getElementById("searchButton").addEventListener("click", searchButtonClick); //Assegnazione dell'event listener al click del pulsante di ricerca che avvia la funzione searchButtonClick