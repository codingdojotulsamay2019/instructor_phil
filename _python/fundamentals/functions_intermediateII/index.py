# Update Values in Dictionaries and Lists
# ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
x = [ [5,2,3], [10,8,9] ] 
students = [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'}
]
sports_directory = {
    'basketball' : ['Kobe', 'Jordan', 'James', 'Curry'],
    'soccer' : ['Messi', 'Ronaldo', 'Rooney']
}
z = [ {'x': 10, 'y': 20} ]



# Change the value 10 in x to 15. Once you're done, x should now be [ [5,2,3], [15,8,9] ].
# print(x)
# print(type(x))
# print(len(x))
# print(x[1])
# print(x[1][0])
# x[1][0] = 15
# print(x)

# Change the last_name of the first student from 'Jordan' to 'Bryant'
# print(students)
# print(type(students))
# print(students[0])
# print(type(students[0]))
# print(students[0]['last_name'])
# students[0]['last_name'] = 'Bryant'
# print(students)

# In the sports_directory, change 'Messi' to 'Andres'
# sports_directory['soccer'][0] = "Andres"
# print(sports_directory)

# Change the value 20 in z to 30
# print(z)
# z[0]['y'] = 30
# print(z)
# ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


# Iterate Through a List of Dictionaries
# ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
# Create a function iterateDictionary(some_list) that, given a list of dictionaries, the function loops through each dictionary in the list and prints each key and the associated value. For example, given the following list:

students = [
         {'first_name':  'Michael', 'last_name' : 'Jordan'},
         {'first_name' : 'John', 'last_name' : 'Rosales'},
         {'first_name' : 'Mark', 'last_name' : 'Guillen'},
         {'first_name' : 'KB', 'last_name' : 'Tonel'}
    ]



def iterateDictionary(students):
    for student in students:
        # print(student)
        result = ""
        # if we don't know what the keys are
        for name in student:
            result += name + ' - ' + student[name] + ', '
            # print(name + ' - ' + student[name])
        # or
        # for key, value in student.items():
        #     result += key + ' - ' + value + ', '
        # below removes the last 2 index positions of the result string(', ')
        result = result[0:-2]
        print(result)
        # already knowing what the keys are
        print('first_name: ', student['first_name'], ', ', 'last_name: ', student['last_name'])

iterateDictionary(students)
# should output: (it's okay if each key-value pair ends up on 2 separate lines;
# bonus to get them to appear exactly as below!)
# first_name - Michael, last_name - Jordan
# first_name - John, last_name - Rosales
# first_name - Mark, last_name - Guillen
# first_name - KB, last_name - Tonel

# ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



# Get Values From a List of Dictionaries
# ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
# Create a function iterateDictionary2(key_name, some_list) that, given a list of dictionaries and a key name, the function prints the value stored in that key for each dictionary.

def iterateDictionary2(key, some_list):
    # print(key)
    # print(some_list)
    for value in some_list:
        print(value[key])

# iterateDictionary2('first_name', students)

# Michael
# John
# Mark
# KB

# print('*'*90)
# iterateDictionary2('last_name', students)

# Jordan
# Rosales
# Guillen
# Tonel

# Iterate Through a Dictionary with List Values
# ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
# Create a function printInfo(some_dict) that given a dictionary whose values are all lists, prints the name of each key along with the size of its list, and then prints the associated values within each key's list. For example:

dojo = {
   'locations': ['San Jose', 'Seattle', 'Dallas', 'Chicago', 'Tulsa', 'DC', 'Burbank'],
   'instructors': ['Michael', 'Amy', 'Eduardo', 'Josh', 'Graham', 'Patrick', 'Minh', 'Devon']
}

def printInfo(some_dict):
    for key in some_dict:
        print(str(len(some_dict[key])) + ' ' + key.upper())
        for location in some_dict[key]:
            print(location)

# printInfo(dojo)

# tuple unpacking of __dic__.items()
def tuple_unpacking(some_dict):
    for key, value in some_dict.items():
        print(key)
        print(value)
    for key in some_dict.items():
        print(key)
        print(type(key))

# tuple_unpacking(dojo)
# output:
# 7 LOCATIONS
# San Jose
# Seattle
# Dallas
# Chicago
# Tulsa
# DC
# Burbank
    
# 8 INSTRUCTORS
# Michael
# Amy
# Eduardo
# Josh
# Graham
# Patrick
# Minh
# Devon