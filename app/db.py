import sqlite3


with sqlite3.connect ("base_datos.db") as conn: 

    cur = conn.cursor()
    cur.execute ("""
CREATE TABLE IF NOT EXISTS  ()
""")