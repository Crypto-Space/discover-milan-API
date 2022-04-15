import { ILocation } from "../model";

export const locationData: ILocation[] = [
    {
        id: 1,
        name: 'Duomo',
        cityName: "Milan",
        description: "The Milan Cathedral, or Metropolitan Cathedral-Basilica of the Nativity of Saint Mary (Italian: Basilica cattedrale metropolitana di Santa Maria Nascente), is the cathedral church of Milan, Lombardy, Italy. Dedicated to the Nativity of St Mary (Santa Maria Nascente), it is the seat of the Archbishop of Milan, currently Archbishop Mario Delpini.",
        coordinates : {
            latitude: 45.4641903715022,
            longitude: 9.19183909893036
        },
        imageNames: [
            "duomo-milan-1",
            "duomo-milan-2"
        ],
        link: "https://en.wikipedia.org/wiki/Milan_Cathedral"
    },
    {
        id: 2,
        name: "Teatro alla Scala",
        cityName: "Milan",
        description: "La Scala is an opera house in Milan, Italy. The theatre was inaugurated on 3 August 1778 and was originally known as the Nuovo Regio Ducale Teatro alla Scala (New Royal-Ducal Theatre alla Scala). The premiere performance was Antonio Salieri's Europa riconosciuta. Most of Italy's greatest operatic artists, and many of the finest singers from around the world, have appeared at La Scala. The theatre is regarded as one of the leading opera and ballet theatres globally. It is home to the La Scala Theatre Chorus, La Scala Theatre Ballet, La Scala Theatre Orchestra, and the Filarmonica della Scala orchestra. The theatre also has an associate school, known as the La Scala Theatre Academy (Italian: Accademia Teatro alla Scala), which offers professional training in music, dance, stagecraft, and stage management.",
        coordinates: {
            latitude: 45.46769030074282, 
            longitude:  9.189608785240182
        },
        imageNames: [
            "scala-1",
            "scala-2",
            "scala-3"
        ],
        link: "https://en.wikipedia.org/wiki/La_Scala"
    },
];