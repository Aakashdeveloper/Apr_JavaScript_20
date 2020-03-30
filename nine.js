localStorage.setItem('token','jdbfy78u78gdbjf')
undefined
localStorage.getItem('token')
"jdbfy78u78gdbjf"
localStorage.removeItem('token')
undefined
localStorage.getItem('token')
null
localStorage.setItem('token',['dsgds','fdsgd','sdgsdg'])
undefined
var token = localStorage.getItem('token')
"dsgds,fdsgd,sdgsdg"

token
"dsgds,fdsgd,sdgsdg"
token.split(',')
(3) ["dsgds", "fdsgd", "sdgsdg"]
var data = token.split(',')
undefined
data
(3) ["dsgds", "fdsgd", "sdgsdg"]
data[0]
"dsgds"
data[1]
"fdsgd"
data[2]
"sdgsdg"