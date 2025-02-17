// Dati completi per tutte le leghe europee principali
const leagues = {
    serieA: {
        name: "Serie A",
        teams: [
            { name: "Juventus", logo: "https://logodetimes.com/wp-content/uploads/juventus-football-club-250x170.png", stadium: "Allianz Stadium", titles: 36, founded: 1897, manager: "Thiago Motta", topScorer: "Alessandro Del Piero (290 gol)", lastTitleYear: 2024, record: "Maggior numero di titoli in Italia", history: "La Juventus Football Club, fondata nel 1897, è uno dei club più prestigiosi al mondo." },
            { name: "AC Milan", logo: "https://logodetimes.com/wp-content/uploads/associazione-calcio-milan-250x170.png", stadium: "San Siro", titles: 19, founded: 1899, manager: "Sérgio Conceição", topScorer: "Gunnar Nordahl (214 gol)", lastTitleYear: 2025, record: "Vincitore di 7 Champions League", history: "Il Milan, fondato nel 1899, è uno dei club più riconosciuti a livello internazionale." },
            { name: "Inter", logo: "https://logodetimes.com/wp-content/uploads/football-club-internazionale-milano-250x170.png", stadium: "San Siro", titles: 19, founded: 1908, manager: "Simone Inzaghi", topScorer: "Giuseppe Meazza (284 gol)", lastTitleYear: 2024, record: "Vincitore di 3 Champions League", history: "Internazionale, fondata nel 1908, ha una lunga tradizione di successo." },
            { name: "Napoli", logo: "https://logodetimes.com/wp-content/uploads/societa-sportiva-calcio-napoli-250x170.png", stadium: "Diego Armando Maradona", titles: 3, founded: 1926, manager: "Antonio Conte", topScorer: "Dries Mertens (148 gol)", lastTitleYear: 2023, record: "Primo titolo dopo 33 anni", history: "Il Napoli, simbolo della città partenopea, ha vinto il suo primo scudetto moderno nel 2023." },
            { name: "Atalanta", logo: "https://logodetimes.com/wp-content/uploads/atalanta-bergamasca-calcio-250x170.png", stadium: "Gewiss Stadium", titles: 0, founded: 1907, manager: "Giampiero Gasperini", topScorer: "Cristiano Doni (112 gol)", lastTitleYear: "2024", record: "Vincitore dell'Europa League 23/24", history: "Atalanta è diventata una forza emergente in Europa negli ultimi anni." },
            { name: "Lazio", logo: "https://logodetimes.com/wp-content/uploads/societa-sportiva-lazio-250x170.png", stadium: "Stadio Olimpico", titles: 3, founded: 1900, manager: "Igor Tudor", topScorer: "Ciro Immobile (207 gol)", lastTitleYear: 2020, record: "Vincitore di 2 Coppa UEFA", history: "Lazio, fondato nel 1900, ha una forte base di tifosi a Roma." },
            { name: "Roma", logo: "https://logodetimes.com/wp-content/uploads/associazione-sportiva-roma-250x170.png", stadium: "Stadio Olimpico", titles: 3, founded: 1927, manager: "Claudio Ranieri", topScorer: "Francesco Totti (250 gol)", lastTitleYear: 2022, record: "Vincitore di 1 Europa Conference League", history: "Roma, guidata da José Mourinho, ha vinto la sua prima competizione europea nel 2022." },
            { name: "Fiorentina", logo: "https://logodetimes.com/wp-content/uploads/acf-fiorentina-250x170.png", stadium: "Stadio Artemio Franchi", titles: 2, founded: 1926, manager: "Raffaele Palladino", topScorer: "Gabriel Batistuta (203 gol)", lastTitleYear: 2001, record: "Vincitore di 6 Coppe Italia", history: "Fiorentina, simbolo di Firenze, ha una lunga storia di successo." },
            // Aggiungi altre squadre...
        ]
    },
    premierLeague: {
        name: "Premier League",
        teams: [
            { name: "Manchester United", logo: "https://logodetimes.com/wp-content/uploads/manchester-united-football-club-250x170.png", stadium: "Old Trafford", titles: 20, founded: 1878, manager: "Ruben Amorim", topScorer: "Wayne Rooney (253 gol)", lastTitleYear: 2024, record: "Maggior numero di titoli inglesi", history: "Manchester United, fondato nel 1878, è uno dei club più famosi al mondo." },
            { name: "Liverpool", logo: "https://logodetimes.com/wp-content/uploads/liverpool-football-club-250x170.png", stadium: "Anfield", titles: 19, founded: 1892, manager: "Arne Slot", topScorer: "Ian Rush (339 gol)", lastTitleYear: 2020, record: "Vincitore di 6 Champions League", history: "Liverpool, fondato nel 1892, ha una lunga tradizione di successo in Europa." },
            { name: "Manchester City", logo: "https://logodetimes.com/wp-content/uploads/manchester-city-football-club-250x170.png", stadium: "Etihad Stadium", titles: 10, founded: 1880, manager: "Pep Guardiola", topScorer: "Sergio Agüero (260 gol)", lastTitleYear: 2024, record: "Vincitore di 4 consecutive Premier League", history: "Manchester City, sotto la guida di Pep Guardiola, ha dominato il calcio inglese negli ultimi anni." },
            { name: "Chelsea", logo: "https://logodetimes.com/wp-content/uploads/chelsea-football-club-250x170.png", stadium: "Stamford Bridge", titles: 6, founded: 1905, manager: "Enzo Maresca", topScorer: "Frank Lampard (211 gol)", lastTitleYear: 2021, record: "Vincitore di 2 Champions League", history: "Chelsea, grazie all'investimento di Roman Abramovich, è diventato un gigante europeo." },
            { name: "Arsenal", logo: "https://logodetimes.com/wp-content/uploads/arsenal-football-club-250x170.png", stadium: "Emirates Stadium", titles: 13, founded: 1886, manager: "Mikel Arteta", topScorer: "Thierry Henry (228 gol)", lastTitleYear: 2023, record: "Record di partite invincibili in Premier League", history: "Arsenal, guidato da Arsène Wenger, ha stabilito numerosi record nel calcio inglese." },
            { name: "Tottenham", logo: "https://logodetimes.com/wp-content/uploads/tottenham-hotspur-football-club-250x170.png", stadium: "Tottenham Hotspur Stadium", titles: 2, founded: 1882, manager: "Ange Postecoglou", topScorer: "Harry Kane (280 gol)", lastTitleYear: 1991, record: "Finalista Champions League 2019", history: "Tottenham, noto come Spurs, ha una grande rivalità con Arsenal." },
            { name: "Newcastle United", logo: "https://logodetimes.com/wp-content/uploads/newcastle-united-football-club-250x170.png", stadium: "St James' Park", titles: 4, founded: 1892, manager: "Eddie Howe", topScorer: "Alan Shearer (206 gol)", lastTitleYear: 1993, record: "Ritorno in Champions League dopo 21 anni", history: "Newcastle, grazie all'acquisto da parte del fondo sovrano saudita, sta vivendo un periodo di rinascita." },
            { name: "Brighton", logo: "https://logodetimes.com/wp-content/uploads/brighton-hove-albion-football-club.png", stadium: "American Express Community Stadium", titles: 0, founded: 1901, manager: "Fabian Hurzeler", topScorer: "Glenn Murray (111 gol)", lastTitleYear: "2011", record: "Per la prima volta in Europa League 23/24", history: "Brighton è diventato una squadra competitiva negli ultimi anni." },
            // Aggiungi altre squadre...
        ]
    },
    laliga: {
        name: "LaLiga",
        teams: [
            { name: "Real Madrid", logo: "https://logodetimes.com/wp-content/uploads/real-madrid-325x170.png", stadium: "Santiago Bernabéu", titles: 36, founded: 1902, manager: "Carlo Ancelotti", topScorer: "Raul Gonzalez (323 gol)", lastTitleYear: 2024, record: "Vincitore di 15 Champions League", history: "Real Madrid, fondato nel 1902, è uno dei club più importanti al mondo." },
            { name: "FC Barcelona", logo: "https://logodetimes.com/wp-content/uploads/barcelona-325x170.png", stadium: "Camp Nou", titles: 26, founded: 1899, manager: "Hasni Flick", topScorer: "Lionel Messi (672 gol)", lastTitleYear: 2025, record: "Vincitore di 5 Champions League", history: "Barcelona, simbolo della Catalogna, ha una vasta base di tifosi globali." },
            { name: "Atletico Madrid", logo: "https://logodetimes.com/wp-content/uploads/atletico-madrid-325x170.png", stadium: "Wanda Metropolitano", titles: 11, founded: 1903, manager: "Diego Simeone", topScorer: "Diego Forlán (128 gol)", lastTitleYear: 2021, record: "Vincitore di 2 UEFA Europa League", history: "Atletico Madrid, guidato da Diego Simeone, ha conquistato numerosi trofei negli ultimi anni." },
            { name: "Sevilla FC", logo: "https://logodetimes.com/wp-content/uploads/sevilla-325x170.png", stadium: "Ramón Sánchez Pizjuán", titles: 1, founded: 1905, manager: "Julen Lopetegui", topScorer: "Fernando Morientes (117 gol)", lastTitleYear: 2014, record: "Vincitore di 6 UEFA Europa League", history: "Sevilla FC è noto per il suo successo nella competizione europea secondaria." },
            { name: "Valencia CF", logo: "https://logodetimes.com/wp-content/uploads/valencia-325x170.png", stadium: "Mestalla", titles: 6, founded: 1919, manager: "José Bordalás", topScorer: "Guillermo Amor (137 gol)", lastTitleYear: 2004, record: "Finalista Champions League 2000 e 2001", history: "Valencia, simbolo della città, ha una lunga storia di successo." },
            { name: "Athletic Bilbao", logo: "https://logodetimes.com/wp-content/uploads/athletic-bilbao-325x170.png", stadium: "San Mamés", titles: 8, founded: 1898, manager: "Marcelino García Toral", topScorer: "Telmo Zarra (251 gol)", lastTitleYear: 1984, record: "Solo giocatori baschi", history: "Athletic Bilbao si distingue per utilizzare solo giocatori baschi o formati localmente." },
            { name: "Villarreal", logo: "https://logodetimes.com/wp-content/uploads/villarreal-325x170.png", stadium: "Cerámica", titles: 0, founded: 1923, manager: "Unai Emery", topScorer: "Juan Carlos (102 gol)", lastTitleYear: 2021, record: "Vincitore di 1 UEFA Europa League", history: "Villarreal, noto come 'I Giallosub', ha raggiunto la finale della Champions League nel 2021." },
            { name: "Osasuna", logo: "https://logodetimes.com/wp-content/uploads/osasuna-325x170.png", stadium: "El Sadar", titles: 0, founded: 1920, manager: "Jagoba Arrasate", topScorer: "Antonio Rueda (133 gol)", lastTitleYear: "-", record: "Club storico della Navarra", history: "Osasuna è un club storico che rappresenta la regione della Navarra." },
            // Aggiungi altre squadre...
        ]
    },
    bundesliga: {
        name: "Bundesliga",
        teams: [
            { name: "Bayern Munich", logo: "https://logodetimes.com/wp-content/uploads/bayern-munchen-325x170.png", stadium: "Allianz Arena", titles: 33, founded: 1900, manager: "Thomas Tuchel", topScorer: "Gerd Müller (365 gol)", lastTitleYear: 2023, record: "Vincitore di 6 Champions League", history: "Bayern Munich, fondato nel 1900, è il dominatore storico del calcio tedesco." },
            { name: "Borussia Dortmund", logo: "https://logodetimes.com/wp-content/uploads/borussia-dortmund-325x170.png", stadium: "Signal Iduna Park", titles: 9, founded: 1909, manager: "Edin Terzić", topScorer: "Raphael Wicky (125 gol)", lastTitleYear: 2023, record: "Vincitore di 2 Champions League", history: "Borussia Dortmund è noto per il suo stadio imponente e il forte supporto dei tifosi." },
            { name: "RB Leipzig", logo: "https://logodetimes.com/wp-content/uploads/rb-leipzig-325x170.png", stadium: "Red Bull Arena", titles: 0, founded: 2009, manager: "Domenico Tedesco", topScorer: "Timothy Adams (100 gol)", lastTitleYear: "-", record: "Nuovo arrivato tra i protagonisti", history: "RB Leipzig, fondato nel 2009, si è rapidamente affermato come una potenza emergente." },
            { name: "Borussia Mönchengladbach", logo: "https://logodetimes.com/wp-content/uploads/borussia-monchengladbach-325x170.png", stadium: "Borussia-Park", titles: 5, founded: 1899, manager: "André Schubert", topScorer: "Jupp Heynckes (195 gol)", lastTitleYear: 1977, record: "Primatista degli anni '70", history: "Gladbach ha avuto periodi di grande successo negli anni '70." },
            { name: "Levski Berlin", logo: "https://logodetimes.com/wp-content/uploads/football-club-union-berlin-325x170.png", stadium: "An der Alten Försterei", titles: 0, founded: 1966, manager: "Urs Fischer", topScorer: "Sebastian Polter (72 gol)", lastTitleYear: "-", record: "Emergenza recente", history: "Union Berlin è diventato un'amata squadra tra i tifosi berlinesi." },
            { name: "Freiburg", logo: "https://logodetimes.com/wp-content/uploads/sport-club-freiburg-325x170.png", stadium: "Europa-Park Stadion", titles: 0, founded: 1904, manager: "Christian Streich", topScorer: "Mike Hanke (63 gol)", lastTitleYear: "-", record: "Finalista Coppa Germania 2023", history: "Freiburg ha mostrato una grande resilienza negli ultimi anni." },
            { name: "Wolfsburg", logo: "https://logodetimes.com/wp-content/uploads/vfl-wolfsburg-325x170.png", stadium: "Volkswagen Arena", titles: 1, founded: 1945, manager: "Marco Rose", topScorer: "Edin Džeko (87 gol)", lastTitleYear: 2009, record: "Vincitore di 1 Champions League", history: "Wolfsburg, sponsorizzato dalla Volkswagen, ha vinto il campionato nel 2009." },
            { name: "Hoffenheim", logo: "https://logodetimes.com/wp-content/uploads/tsg-1899-hoffenheim-325x170.png", stadium: "PreZero Arena", titles: 0, founded: 1899, manager: "Brendan Rodgers", topScorer: "Andrej Kramaric (108 gol)", lastTitleYear: "-", record: "Emergenza recente", history: "Hoffenheim è diventato una squadra competitiva grazie al sostegno di Dietmar Hopp." },
            // Aggiungi altre squadre...
        ]
    },
    ligue1: {
        name: "Ligue 1",
        teams: [
            { name: "Paris Saint-Germain", logo: "https://logodetimes.com/wp-content/uploads/paris-saint-germain-325x170.png", stadium: "Parc des Princes", titles: 10, founded: 1970, manager: "Christophe Galtier", topScorer: "Zlatan Ibrahimović (156 gol)", lastTitleYear: 2023, record: "Dominatore recente del calcio francese", history: "PSG, grazie all'investimento qatarieno, è diventato un gigante europeo." },
            { name: "Olympique Lyonnais", logo: "https://logodetimes.com/wp-content/uploads/olympique-lyonnais-325x170.png", stadium: "Groupama Stadium", titles: 7, founded: 1950, manager: "Peter Bosz", topScorer: "Jean-Michel Laslandes (130 gol)", lastTitleYear: 2008, record: "Sette titoli consecutivi", history: "Lyon ha dominato il calcio francese alla fine degli anni '90 e inizi '00." },
            { name: "AS Monaco", logo: "https://logodetimes.com/wp-content/uploads/as-monaco-325x170.png", stadium: "Stade Louis II", titles: 8, founded: 1924, manager: "Philippe Clement", topScorer: "Just Fontaine (113 gol)", lastTitleYear: 2017, record: "Vincitore di 1 UEFA Cup Winners' Cup", history: "Monaco, simbolo del Principato, ha una lunga storia di successo." },
            { name: "Marseille", logo: "https://logodetimes.com/wp-content/uploads/olympique-de-marseille-325x170.png", stadium: "Orange Vélodrome", titles: 10, founded: 1899, manager: "Roberto De Zerbi", topScorer: "Josip Skoblar (110 gol)", lastTitleYear: 2010, record: "Vincitore di 1 UEFA Champions League", history: "Marseille, fondato nel 1899, ha una forte identità locale e internazionale." },
            { name: "Lille", logo: "https://logodetimes.com/wp-content/uploads/lille-olympique-sporting-club-325x170.png", stadium: "Stade Pierre-Mauroy", titles: 4, founded: 1944, manager: "Joël Muller", topScorer: "Michel Bastos (57 gol)", lastTitleYear: 2021, record: "Sorpresa del campionato 2021", history: "Lille ha vinto il campionato nel 2021 battendo PSG." },
            { name: "Rennes", logo: "https://logodetimes.com/wp-content/uploads/stade-rennais-fc-250x170.png", stadium: "Roazhon Park", titles: 1, founded: 1901, manager: "Julien Stéphan", topScorer: "Yannick Ferreira-Carrasco (52 gol)", lastTitleYear: 2019, record: "Vincitore di 1 Coppa Francia", history: "Rennes è diventato una squadra emergente in Francia." },
            { name: "Lens", logo: "https://logodetimes.com/wp-content/uploads/racing-club-de-lens-325x170.png", stadium: "Stade Bollaert-Delelis", titles: 1, founded: 1906, manager: "Franck Haise", topScorer: "Pierre Lechantre (104 gol)", lastTitleYear: 1998, record: "Ritorno trionfale in Ligue 1", history: "Lens, conosciuto per il suo stadio storico, ha una lunga tradizione." },
            { name: "Nice", logo: "https://logodetimes.com/wp-content/uploads/ogc-nice-250x170.png", stadium: "Allianz Riviera", titles: 4, founded: 1904, manager: "Luigi Collovatic", topScorer: "Jean-Pierre Papin (88 gol)", lastTitleYear: 1959, record: "Uno dei club più antichi in Francia", history: "Nice ha una lunga storia nel calcio francese." },
            // Aggiungi altre squadre...
        ]
    }
};

// Funzione per mostrare/nascondere la sezione delle Ligas
document.getElementById("toggle-leagues-btn").addEventListener("click", function () {
    const leaguesSection = document.getElementById("leagues");
    const teamsSection = document.getElementById("teams"); // Riferimento alla sezione delle squadre

    if (leaguesSection.style.display === "none") {
        // Apri la sezione Ligas
        leaguesSection.style.display = "block";
        this.textContent = "Ocultar Ligas"; // Cambia il testo del pulsante
    } else {
        // Chiudi la sezione Ligas
        leaguesSection.style.display = "none";
        this.textContent = "Explora Ligas"; // Ripristina il testo del pulsante

        // Nascondi anche la sezione delle squadre
        teamsSection.style.display = "none";
        teamsSection.innerHTML = ""; // Pulisci il contenuto delle squadre
        document.getElementById("league-title").textContent = ""; // Resetta il titolo della liga
    }
});

// Funzione per mostrare i dettagli delle squadre
function showLeague(leagueKey) {
    const league = leagues[leagueKey];
    document.getElementById("league-title").textContent = league.name;
    const teamsList = document.getElementById("teams-list");
    teamsList.innerHTML = "";

    league.teams.forEach(team => {
        const teamCard = document.createElement("div");
        teamCard.classList.add("team");

        teamCard.innerHTML = `
            <img src="${team.logo}" alt="${team.name}">
            <div class="team-info">
                <h3>${team.name}</h3>
                <p><strong>Estadio:</strong> ${team.stadium}</p>
                <p><strong>Títulos:</strong> ${team.titles}</p>
                <p><strong>Fondazione:</strong> ${team.founded}</p>
                <p><strong>Allenatore:</strong> ${team.manager}</p>
                <p><strong>Capocannoniere:</strong> ${team.topScorer}</p>
                <p><strong>Ultimo titolo:</strong> ${team.lastTitleYear}</p>
                <p><strong>Record:</strong> ${team.record}</p>
                <p><strong>Storia:</strong> ${team.history}</p>
            </div>
        `;

        teamsList.appendChild(teamCard);
    });

    document.getElementById("teams").style.display = "block";
}