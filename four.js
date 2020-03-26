var city = "london"
undefined
city.toUpperCase()
"LONDON"
var city = "London"
undefined
city.toLowerCase()
"london"
 
var city = "lONdoN"   => "London"

var city = "Amsterdam"
undefined
city.length
9
var city = "   Amsterdam "
undefined
city.length
13
city.trim()
"Amsterdam"
var city = "   Amsterdam . "
undefined
city.trim()
"Amsterdam ."
var city = "   Amsterdam "
undefined
var b = city.trim()
undefined
b.length
9
city.trim().length
9

var city = "Amsterdam"
undefined
city[0]
"A"
city[1]
"m"
city[city.length-1]
"m"
city.charAt(0)
"A"
city.slice(1)
"msterdam"
city.slice(222)
""
city.slice(2)
"sterdam"
city.slice(2,5)
"ste"

var city = "lONdoN"
undefined
city.charAt(0).toUpperCase()
"L"
city.slice(1).toLowerCase()
"ondon"
city.charAt(0).toUpperCase()+city.slice(1).toLowerCase()
"London"

var a= "I Love JavaScript"
a.replace("JavaScript",'React')

var a= "JavaScript I Love JavaScript"
a.replace("JavaScript",'React')

var a= "JavaScript I Love JavaScript"
a.replace("JavaScript",'React')
"React I Love JavaScript"
a.replace(/JavaScript/g,'React')
"React I Love React"
var a= "JavaScript I Love JavaScript"
a.replace(/ /g,'_')
"JavaScript_I_Love_JavaScript"

slice(start,end)
> if first value id -ve then output is null
> if second value is -ve than it will remove fron both direction
substring(start,end)
> -ve value is ignored
substr(start,length)
> if only one value and that is -ve it will start from backward


var a = "javascript"
undefined
a.slice(1)
"avascript"
a.slice(1,3)
"av"
a.substring(1)
"avascript"
a.substring(1,3)
"av"
a.substr(1)
"avascript"
a.substr(1,3)
"ava"
var a = "javascript"
undefined
a.slice(2,-2)
"vascri"
a.slice(-2,-2)
""
a.slice(-2,2)
""
a.slice(2,-2)
"vascri"

var a = "javascript"
undefined
a.substr(1,-3)
""
a.substr(-1,-3)
""
a.substr(-1,3)
"t"
a.substr(-2)
"pt"
a.substr(-4))
VM1781:1 Uncaught SyntaxError: Unexpected token ')'
a.substr(-4)
"ript"

var language = "hindi"
language.indexOf("h")
0
language.indexOf("d")
3
language.indexOf("i")
1
language.indexOf("a")
-1
language.indexOf("j")
-1