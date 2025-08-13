export type MovieDto = {
    title: string
    plot: string
    genres: MovieGenres[]
    runtime?: number
    cast?: string[]
    fullplot?: string
    languages: Languages[]
    directors?: string[]
    released?: Date
    rated?: string
    poster?: string
}

export type Movie = {
    id: string
    plot: string
    genres: MovieGenres[]
    runtime?: number
    cast?: string[]
    poster: string
    title: string
    fullplot?: string
    languages: Languages[]
    released?: Date
    directors?: string[]
    rated?: string
    awards?: {
        wins?: number
        nominations?: number
        text?: string
    }
    lastupdated?: string
    year?: number
    imdb?: {
        rating?: number
        votes?: number
        id?: number
    }
    countries?: Countries[]
    type?: string
    tomatoes?: {
        viewer?: {
            rating?: number
            numReviews?: number
            meter?: number
        }
        critic?: {
            rating?: number
            numReviews?: number
            meter?: number
        }
        fresh?: number
        rotten?: number
        lastUpdated?: Date
    }
    num_mflix_comments?: number
}

export enum MovieGenres {
    ACTION = "Action",
    ADVENTURE = "Adventure",
    ANIMATION = "Animation",
    BIOGRAPHY = "Biography",
    COMEDY = "Comedy",
    CRIME = "Crime",
    DOCUMENTARY = "Documentary",
    DRAMA = "Drama",
    FAMILY = "Family",
    FANTASY = "Fantasy",
    FILM_NOIR = "Film-Noir",
    HISTORY = "History",
    HORROR = "Horror",
    MUSIC = "Music",
    MUSICAL = "Musical",
    MYSTERY = "Mystery",
    ROMANCE = "Romance",
    SCI_FI = "Sci-Fi",
    SHORT = "Short",
    SPORT = "Sport",
    THRILLER = "Thriller",
    WAR = "War",
    WESTERN = "Western"
}

export enum Languages {
    ENGLISH = "English",
    FRENCH = "French",
    GERMAN = "German",
    SPANISH = "Spanish",
    ITALIAN = "Italian",
    JAPANESE = "Japanese",
    CHINESE = "Chinese",
    HINDI = "Hindi",
    RUSSIAN = "Russian",
    PORTUGUESE = "Portuguese",
    KOREAN = "Korean",
    HEBREW = "Hebrew",
    OTHER = "Other"
}

export enum Countries {
    USA = "USA",
    UK = "UK",
    FRANCE = "France",
    GERMANY = "Germany",
    CANADA = "Canada",
    ITALY = "Italy",
    JAPAN = "Japan",
    INDIA = "India",
    AUSTRALIA = "Australia",
    CHINA = "China",
    RUSSIA = "Russia",
    MEXICO = "Mexico",
    SOUTH_KOREA = "South Korea",
    BRAZIL = "Brazil",
    SWEDEN = "Sweden",
    SPAIN = "Spain",
    DENMARK = "Denmark",
    HONG_KONG = "Hong Kong",
    IRELAND = "Ireland",
    BELGIUM = "Belgium",
    NETHERLANDS = "Netherlands",
    ARGENTINA = "Argentina",
    POLAND = "Poland",
    SWITZERLAND = "Switzerland",
    ISRAEL = "Israel",
    FINLAND = "Finland",
    CZECH_REPUBLIC = "Czech Republic",
    NORWAY = "Norway",
    NEW_ZEALAND = "New Zealand",
    AUSTRIA = "Austria",
    HUNGARY = "Hungary"
}
