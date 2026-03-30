#!/bin/bash
# Script de build para Vercel

# Crear directorio público
mkdir -p public

# Copiar todos los archivos web al directorio público
cp -r "Semana 3/web/"* public/

echo "Build completado: archivos copiados a public/"
