# STRINGS ==============================
"This is a string"

'This is also a string'

"""This
is a
multiline string...

Like backticks in JS innit bruv"""

# This is a comment

# NUMBERS =============================

type(15) # int
type(1.5) # float

0b1010 # (binary) 10
0o20 # (octal) 16
0xf0 # (hex) 240

# BOOLEANS =========================

True
False

## Falsey values

None # same as null
False
0
0.0
''
[] # called a LIST
{} # called a DICT
() # called a TUPLE (immutable list)
set() # called a SET (a list without duplicates)
range(0) # called a RANGE

# LISTS ======================================

my_list = [10, 'Python', True, 'hamster']
my_list[1] # 'Python'
type(my_list) # <type 'list'>

my_list[1:3] # ['Python', True]
my_list.append() # push
my_list.remove('Python') # splice, but better...
my_list.pop() # pop
my_list.pop(0) # oooh cool

# TUPLE ========================================

my_tuple = (10, 'Python', True, 'hamster')

my_tuple[1] # Python
type(my_tuple) # <type 'tuple'>

my_tuple[1:3] # ('Python', True)
my_tuple + ('OMG', 'amazing') # (10, 'Python', True, 'hamster', 'OMG', 'amazing')

# DICTIONARIES ===============================

my_dict = { 'name': 'Julien', 'role': 'Regional director' }

# CONTROL FLOW ===============================

a = 5

if a < 5:
  print('Too small')
elif a > 5:
  print('Too big')
else:
  print('Just right!')

a = 10
while a > 0:
  print("a is now %s" % a)
  a-=1

# iterating over an array
names = ['Agnetha', 'Benny', 'Björn', 'Anni-Frid']
for name in names:
  print(name)

# iterating over a dictionary
car = { 'make': 'Fiat', 'model': 'Uno', 'color': 'red' }
for attribute in car:
  print(car[attribute])

# looping a set number of times (will print 0 - 9)
for i in range(10):
  print(i)

for i in range(10):
  if i == 2:
    continue
  elif i == 5:
    break

  print("i is %s" % i)

True or False # True
False or True # True
False or False # False

0 or "Steve Jobs" # Steve Jobs
100 or "Bill Gates" # 100
'' or None # ""

True and False # False
False and True # False
True and True # True

0 and "Steve Jobs" # 0
100 and "Bill Gates" # "Bill Gates"
'' and None # ""

a = 10

b = 15 if a > 10 else 20

b == 20 # True
