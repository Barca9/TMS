/*

------NaN--------------------------
когда какая-нибудь дичь
    "hello" - 2  : NaN ( тип данных 'number')
    undefined / 2  : NaN
    undefined - null   : NaN
    все операции в которых используется NaN возвращают NaN
    NaN == NaN  : false        запомнить
    NaN === NaN  :  false      запомнить
    Для проверки:
    NaN !== NaN   :  true
    isNaN()
    !!isNaN(undefined)   true

--------Преобразование в строку-------
String()
Всё преобразовывается в строку если сложить со строкой  +
2 + "hi"   : "2hi"
undefined + ''   :  'undefined'

----------Преобразование в число--------

--------------Явное------------
Number(null)            :  0
!!Number(undefined)     : NaN
Number('hello')     : NaN
Number('5')         : 5
Number('2 3')       : NaN
Number(' 42 ')      : 42
Number('')      : 0
Number(' ')     : 0
-------------Не явное--------------
Использование любого арифмитического оператора кроме +(если есть строка)
2 - '3'     : -1
true + false       :1
NaN /2      :0
!!Undefined всегда преобразовывается в NaN
undefined - 2       : NaN

Унарные + -  преобразую в число, но
!! + не меняет само число, а минус меняет
+null       :0

---------Преобразование в Boolean---------------------
Boolean(Null)       false
Boolean(0)      false
Boolean(undefined)      false
Boolean('')         false
Boolean(' ')        true
Boolean(balabla)        true
!true               false
!null               true
!!null              false
!!2                 true

    */