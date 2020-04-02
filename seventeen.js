regex 
regular Expression

^([a-z])$


var a = "hi"
a.match("^([a-z])$")

var a = "hi"
a.match("^([a-z])$")
null
var a = "h"
a.match("^([a-z])$")
(2) ["h", "h", index: 0, input: "h", groups: undefined]
var a = "hi"
a.match("^([a-z]+)$")
(2) ["hi", "hi", index: 0, input: "hi", groups: undefined]
var a = "hijhgjh"
a.match("^([a-z]+)$")
(2) ["hijhgjh", "hijhgjh", index: 0, input: "hijhgjh", groups: undefined]
var a = "867"
a.match("^([a-z]+)$")
null
var a = "HI"
a.match("^([a-z]+)$")
null

var a = "HI"
a.match("^([a-zA-Z]+)$")

var a = "83583"
a.match("^([0-9]{10})$")

var a = "83583"
a.match("^([a-zA-Z0-9]{10-12})$")

var email = "a@a.com"
email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-z]{2,5})$")

^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-z]{2,5})$

var email = "a@a.com"
email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-z]{2,5})$")
(4) ["a@a.com", "a", "a", "com", index: 0, input: "a@a.com", groups: undefined]
var email = "a@.com"
email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-z]{2,5})$")
null
var email = "aefe.com"
email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-z]{2,5})$")

