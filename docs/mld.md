user (id INTEGER, firstname TEXT, lastname TEXT, email TEXT, password TEXT, role TEXT)

bd (id INTEGER, title TEXT, original_title TEXT, format TEXT , status TEXT , author TEXT, image TEXT)

category (id INTEGER, name TEXT, color TEXT)

bd_has_category (#bd(id), #category(id))

