rm -r BestAutoRepo
rm -r css
rm -r img
rm -r js
rm -r mail
rm -r source
rm -r stats
rm -r vendor
shopt -s extglob
rm !("updater.sh")
shopt -u extglob
git clone --depth 1 https://aghil4u:Dadsmagaav4u@github.com/aghil4u/BestAutoRepo source
cp -r source/* .
