import sqlite3

NOMBRE_BASE_DE_DATOS = "base_datos.db"

def crear_tabla ():
    with sqlite3.connect (NOMBRE_BASE_DE_DATOS) as conn: 

        cur = conn.cursor()
        cur.execute ("""
    CREATE TABLE IF NOT EXISTS  ()
    """)
    print("Base de datos creada exitosamente")

def conectar (): 
   return sqlite3.connect (NOMBRE_BASE_DE_DATOS)