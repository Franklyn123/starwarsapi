module.exports = (obj) => {
    return {
        "titulo":               obj.title,
        "id_episodio":          obj.episode_id,
        "texto_apertura":             obj.opening_crawl,
        "director":             obj.director,
        "productor":            obj.producer,
        "fecha_lanzamiento":    obj.release_date,
        "personajes":           obj.characters,
        "planetas":             obj.planets,
        "naves_estelares":      obj.starships,
        "vehiculos":            obj.vehicles,
        "especies":             obj.species,
        "fecha_creacion":       obj.created,
        "fecha_edicion":        obj.edited,
        "url":                  obj.url
    }
}