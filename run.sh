cd client
npm run build
cd dist 
rm -rf ../../serveur/src/views/*
cp -r . ../../serveur/src/views