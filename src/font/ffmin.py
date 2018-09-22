import fontforge
import os

#
# Command:
# > fontforge -script D:\yanzyang\demo\yarn\src\font\ffmin.py
#
# Refer:
# - http://fontforge.github.io/en-US/documentation/scripting/
#

fontdir=os.path.abspath(os.path.dirname(__file__))
print "---"
print "Curr font dir: " + fontdir
print "---"

tpl="ffmin.svg"
src="meta/fa.ttf"
tarname="out/ff"

ft=fontforge.open(fontdir+"/"+tpl)
fs=fontforge.open(fontdir+"/"+src)
print ft.fontname
print ft.familyname
print ft.em
print ft.encoding

icon="user"
fs.selection.select(icon)
fs.copy()
ft.selection.select(icon)
ft.paste()
print "from: fs-"+fs[icon].glyphname+", to: ft-"+ft[icon].glyphname

ft.generate(fontdir+"/"+tarname+".svg")
ft.generate(fontdir+"/"+tarname+".eot")
ft.generate(fontdir+"/"+tarname+".ttf")
ft.generate(fontdir+"/"+tarname+".woff")
print "generated files: "+fontdir+"/"+tarname+".svg|.eot|.ttf|.woff"
