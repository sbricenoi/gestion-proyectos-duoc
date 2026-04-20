#!/bin/bash
# Script de build para Vercel

# Crear directorios
mkdir -p public/semana3
mkdir -p public/semana6

# Copiar página principal
cp index.html public/

# Copiar Semana 3
cp -r "Semana 3/web/"* public/semana3/

# Copiar Semana 6
cp -r "Semana 6/web/"* public/semana6/

echo "Build completado:"
echo "  - Página principal copiada a public/"
echo "  - Semana 3 copiada a public/semana3/"
echo "  - Semana 6 copiada a public/semana6/"
