import math

print('Welcome to a Python Calculator')

continue_calculation = 'y'

while(continue_calculation == 'y'):

    operation_type = input ('(c)lassic or (s)ienctific or (a)dvanced?')

    if operation_type == 'c':

        operation = input('What Math do you need ? (a)ddition (s)ubstraction (m)ultiplication')

        number1 = input('Give me one number wesh !!!')
        number2 = input('Give it to me again')

        if operation == 'a':
            print(float(number1) + float(number2))
        elif operation == 's':
            print(float(number1) - float(number2))
        elif operation == 'm':
            print(float(number1) * float(number2))
        else:
            print('wrong input')

    elif operation_type == 's':

        operation = input('What Math do you need ? (p)ower or (sq)uare root?')
        number1 = input('Give me one number wesh !!!')

        if operation == 'p':
            print(float(number1) * float(number1))
        elif operation == 'sq':
            print(math.sqrt(float(number1)))

    elif operation_type == 'a':

        operation = input('What operation do you want to execute "(l)oan", "(b)mi or (t)rip calculator?')

        if operation == 'l':
          p = float(input('Total amount of money borrowed?')) #monthly mortgage payment
          n = float(input('Number of years for the repayment ?')) * 12 #number of payments months
          i = float(input('Interest Rate per year?')) / 100 / 12 #monthly interest rate
          print(math.floor(p * i * (math.pow(1 + i, n)) / (math.pow(1 + i, n) - 1)))

        elif operation == 'b':

            unit = input('Do you want to use (m)etric or (i)mperial?')
            if unit == 'm':
                print('s')
                #bodyMassIndex('kg', 'cm', 1)
            elif unit == 'i':
                print('s')
                #bodyMassIndex('lb', 'in', 703)

        elif operation == 't':

            distance = float(input('What is the distance?'))
            milePerGallon = float(input('What is the fuel efficiency?'))
            costPerGallon = float(input('What is the cost per gallon?'))
            speed = float(input('What is the distance the speed'))
            duration = distance / speed

            adjustedMilePerGallon = milePerGallon = milePerGallon - 2 if speed > 60 else milePerGallon

            cost = math.floor((distance/ adjustedMilePerGallon) * costPerGallon)
            print('Your trip will take %s hours and cost £ %s' %(duration, cost))


    continue_calculation = input('Do you want to continu (y)es (n)o')
